$ErrorActionPreference = "Stop"
$Root = Split-Path $PSScriptRoot -Parent

Set-Location $Root

$git = Get-Command git -ErrorAction SilentlyContinue
if (-not $git) {
    $candidates = @(
        "C:\Program Files\Git\cmd\git.exe",
        "C:\Program Files\Git\bin\git.exe"
    )
    foreach ($path in $candidates) {
        if (Test-Path $path) {
            $git = $path
            break
        }
    }
}
if (-not $git) {
    Write-Host "Git is not installed. Install Git for Windows from https://git-scm.com/download/win then run this script again."
    exit 1
}
if ($git -is [string]) { $git = (Get-Item $git).FullName }

function Invoke-Git {
    param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
    & $git @GitArgs
    if ($LASTEXITCODE -ne 0) { throw "git $($GitArgs -join ' ') failed with $LASTEXITCODE" }
}

if (-not (Test-Path "$Root\.git")) {
    Invoke-Git init -b main
}

$remote = "https://github.com/ASADMAHFUZ/car-app.git"
$remotes = & $git remote 2>$null
if ($remotes -contains "origin") {
    Invoke-Git remote set-url origin $remote
} else {
    Invoke-Git remote add origin $remote
}

Invoke-Git add -A
$status = & $git status --porcelain
if ($status) {
    Invoke-Git commit -m @"
Add AutoPlaza car-app (React + Vite).

Includes home screen, Search hub navigation, and Figma-aligned mobile UI.
"@
}

Invoke-Git push -u origin main
Write-Host "Pushed to $remote"
