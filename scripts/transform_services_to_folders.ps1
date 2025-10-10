# transform_services_to_folders.ps1
# Extracts corretec-deploy-ready.zip into deploy_transform, converts any servicios/<slug>.html
# into servicios/<slug>/index.html, then recompresses the zip.

$root = (Get-Location).Path
$zipPath = Join-Path $root 'corretec-deploy-ready.zip'
$tmpDir = Join-Path $root 'deploy_transform'

if (-not (Test-Path $zipPath)) {
  Write-Error "ZIP not found at $zipPath"
  exit 1
}

if (Test-Path $tmpDir) { Remove-Item -Recurse -Force $tmpDir }
New-Item -ItemType Directory -Path $tmpDir | Out-Null

Write-Output "Extracting $zipPath -> $tmpDir"
Expand-Archive -LiteralPath $zipPath -DestinationPath $tmpDir -Force

Write-Output "Searching for servicios/*.html files..."
$allHtml = Get-ChildItem -Recurse -File -Path $tmpDir -Filter '*.html'
$servFiles = @()
foreach ($f in $allHtml) {
  if ($f.FullName -match '[\\/]+servicios[\\/]+([^\\/]+)\.html$') {
    $servFiles += $f
  }
}

if ($servFiles.Count -eq 0) {
  Write-Output "No servicios/*.html files found. Nothing to transform."
} else {
  Write-Output ("Found {0} servicios html files" -f $servFiles.Count)
  foreach ($f in $servFiles) {
    $m = [regex]::Match($f.FullName, '[\\/]+servicios[\\/]+([^\\/]+)\.html$')
    $slug = $m.Groups[1].Value
    # target folder relative to the same parent 'servicios'
    $serviciosPath = [regex]::Match($f.FullName, '^(.*?[\\/]+servicios)[\\/].*$').Groups[1].Value
    $newFolder = Join-Path $serviciosPath $slug
    if (-not (Test-Path $newFolder)) { New-Item -ItemType Directory -Path $newFolder -Force | Out-Null }
    $dest = Join-Path $newFolder 'index.html'
    Write-Output ("Moving: {0} -> {1}" -f $f.FullName, $dest)
    Move-Item -Force -Path $f.FullName -Destination $dest
  }
}

# Recreate the ZIP (overwrite)
if (Test-Path $zipPath) { Remove-Item -Force $zipPath }
Write-Output "Recreating ZIP $zipPath from $tmpDir"
Compress-Archive -Path (Join-Path $tmpDir '*') -DestinationPath $zipPath -Force

# List servicios/*/index.html entries from the tmpDir for confirmation
Write-Output "Transformed servicios entries (relative):"
Get-ChildItem -Recurse -File -Path $tmpDir | Where-Object { $_.Name -ieq 'index.html' -and $_.FullName -match '[\\/]+servicios[\\/]' } | ForEach-Object { $_.FullName.Substring($tmpDir.Length+1).TrimStart('\','/') } | Sort-Object | ForEach-Object { Write-Output $_ }

# cleanup tmp
Remove-Item -Recurse -Force $tmpDir
Write-Output "Done"
