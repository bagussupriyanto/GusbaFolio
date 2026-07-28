Add-Type -AssemblyName System.Drawing
$src = "C:\Users\badus\.gemini\antigravity\brain\c68c021f-b8dc-4490-9a1c-b4ea4562b0be\.user_uploaded\media__1785226700097.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)
Write-Host "Width:" $bmp.Width "Height:" $bmp.Height
$bmp.Dispose()
