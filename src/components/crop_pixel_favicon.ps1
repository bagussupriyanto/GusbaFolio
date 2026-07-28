Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\badus\.gemini\antigravity\brain\c68c021f-b8dc-4490-9a1c-b4ea4562b0be\.user_uploaded\media__1785226976675.jpg"
$srcBmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# Left emblem crop coordinates on 1024x1024 image
$cropX = 55
$cropY = 45
$cropSize = 475

$cropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropSize, $cropSize)
$cropped = New-Object System.Drawing.Bitmap($cropSize, $cropSize)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
$g.DrawImage($srcBmp, (New-Object System.Drawing.Rectangle(0, 0, $cropSize, $cropSize)), $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$srcBmp.Dispose()

# Make background dark navy/black (R<35, G<45, B<60) transparent
for ($x = 0; $x -lt $cropSize; $x++) {
    for ($y = 0; $y -lt $cropSize; $y++) {
        $pixel = $cropped.GetPixel($x, $y)
        if ($pixel.R -lt 35 -and $pixel.G -lt 45 -and $pixel.B -lt 60) {
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

# Resize to standard high-res 128x128 pixel icon
$iconBmp = New-Object System.Drawing.Bitmap(128, 128)
$g2 = [System.Drawing.Graphics]::FromImage($iconBmp)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
$g2.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::Half
$g2.DrawImage($cropped, 0, 0, 128, 128)
$g2.Dispose()

# Save PNGs
$iconBmp.Save("c:\xampp\htdocs\portfolio-bagus\public\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$iconBmp.Save("c:\xampp\htdocs\portfolio-bagus\public\apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$iconBmp.Save("c:\xampp\htdocs\portfolio-bagus\src\app\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$iconBmp.Save("c:\xampp\htdocs\portfolio-bagus\public\favicon.ico", [System.Drawing.Imaging.ImageFormat]::Png)

$cropped.Dispose()
$iconBmp.Dispose()

Write-Host "Pixel Favicon generated cleanly!"
