# build_deploy_zip.ps1
# Script to prepare a deployable ZIP where prerendered html files from .next/server/app
# are placed as index.html in the root and in route folders like servicios/<slug>/index.html

$root = (Get-Location).Path
$deploy = Join-Path $root 'deploy_root_fixed'
if (Test-Path $deploy) { Remove-Item -Recurse -Force $deploy }
New-Item -ItemType Directory -Path $deploy | Out-Null

# Copy public (if exists)
$public = Join-Path $root 'public'
if (Test-Path $public) {
    Write-Output "Copying public -> $deploy"
    Copy-Item -Recurse -Force -Path $public -Destination $deploy
}

# Copy .next/static (if exists)
$nextStatic = Join-Path $root '.next\static'
if (Test-Path $nextStatic) {
    Write-Output "Copying .next/static -> $deploy\static"
    Copy-Item -Recurse -Force -Path $nextStatic -Destination (Join-Path $deploy 'static')
}

# Copy HTML files from .next/server/app preserving relative structure
$serverApp = Join-Path $root '.next\server\app'
if (Test-Path $serverApp) {
    Write-Output "Copying HTMLs from $serverApp"
    Get-ChildItem -Recurse -File -Path $serverApp -Filter '*.html' | ForEach-Object {
        $rel = $_.FullName.Substring($serverApp.Length + 1)
        # normalize separators
        $rel = $rel -replace '\\','/'
        $target = Join-Path $deploy $rel
        $tDir = Split-Path $target -Parent
        if (-not (Test-Path $tDir)) { New-Item -ItemType Directory -Path $tDir -Force | Out-Null }
        Copy-Item -Force -Path $_.FullName -Destination $target
    }
}

# Rename page.html -> index.html inside deploy
Get-ChildItem -Recurse -File -Path $deploy | Where-Object { $_.Name -ieq 'page.html' } | ForEach-Object {
    $new = Join-Path ($_.DirectoryName) 'index.html'
    Copy-Item -Force -Path $_.FullName -Destination $new
}

# If out/index.html exists, copy it to deploy root index.html (preferred)
$outIndex = Join-Path $root 'out\index.html'
if (Test-Path $outIndex) {
    Write-Output "Copying out/index.html -> deploy_root_fixed/index.html"
    Copy-Item -Force -Path $outIndex -Destination (Join-Path $deploy 'index.html')
}

# If there's no root index.html, copy the first found index.html into root
if (-not (Test-Path (Join-Path $deploy 'index.html'))) {
    $found = Get-ChildItem -Recurse -File -Path $deploy | Where-Object { $_.Name -ieq 'index.html' } | Select-Object -First 1
    if ($found -ne $null) {
        Write-Output "No root index.html found, copying $($found.FullName) -> deploy_root_fixed/index.html"
        Copy-Item -Force -Path $found.FullName -Destination (Join-Path $deploy 'index.html')
    }
}

# Create zip
$zipPath = Join-Path $root 'corretec-deploy-ready.zip'
if (Test-Path $zipPath) { Remove-Item -Force $zipPath }
Write-Output "Creating zip $zipPath from $deploy"
Compress-Archive -Force -Path (Join-Path $deploy '*') -DestinationPath $zipPath

# Output results: list top-level entries inside the zip (using tar -tf fallback)
Write-Output "ZIP created:"
Get-Item $zipPath | Select-Object FullName,Length | Format-List

# Show first 80 entries of the zip to inspect structure
Write-Output "Listing first 80 entries inside the zip (for verification):"
# Use tar to list contents (tar supports zip listing in PowerShell 7/windows tar)
try {
    tar -tf $zipPath | Select-Object -First 80
} catch {
    Write-Output "tar not available; listing deploy_root_fixed top-level files instead"
    Get-ChildItem -Recurse -Depth 2 -Path $deploy | Select-Object FullName | ForEach-Object { $_.FullName }
}

Write-Output "Done."
