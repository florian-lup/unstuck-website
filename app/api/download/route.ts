import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch the latest release from GitHub
    const response = await fetch(
      "https://api.github.com/repos/florian-lup/unstuck-releases/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "Unstuck-Website",
        },
        // No caching - always fetch latest
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch release data");
    }

    const data = await response.json();

    // Find the Windows installer (matches pattern: Unstuck-Windows-*-Setup.exe)
    const windowsInstaller = data.assets.find(
      (asset: { name: string; browser_download_url: string }) =>
        asset.name.match(/^Unstuck-Windows-.*-Setup\.exe$/),
    );

    if (!windowsInstaller) {
      throw new Error("Windows installer not found in latest release");
    }

    // Redirect to the actual download URL
    return NextResponse.redirect(windowsInstaller.browser_download_url, 302);
  } catch (error) {
    console.error("Download error:", error);

    // Fallback: redirect to releases page
    return NextResponse.redirect(
      "https://github.com/florian-lup/unstuck-releases/releases/latest",
      302,
    );
  }
}
