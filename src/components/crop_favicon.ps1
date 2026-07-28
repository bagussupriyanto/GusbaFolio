Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\badus\.gemini\antigravity\brain\c68c021f-b8dc-4490-9a1c-b4ea4562b0be\.user_uploaded\media__1785226700097.png"
$srcBmp = [System.Drawing.Bitmap]::FromFile($srcPath)

# Emblem #4 bounding box on 1024x682 image
$cropX = 580
$cropY = 340
$cropSize = 320

$cropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropSize, $cropSize)
$cropped = New-Object System.Drawing.Bitmap($cropSize, $cropSize)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$g.DrawImage($srcBmp, (New-Object System.Drawing.Rectangle(0, 0, $cropSize, $cropSize)), $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$srcBmp.Dispose()

# Make white / light background transparent
for ($x = 0; $x -lt $cropSize; $x++) {
    for ($y = 0; $y -lt $cropSize; $y++) {
        $pixel = $cropped.GetPixel($x, $y)
        # If pixel is white/near-white (R>240, G>240, B>240) or dark cloud smudge at edges
        if ($pixel.R -gt 235 -and $pixel.G -gt 235 -and $pixel.B -gt 235) {
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        }
    }
}

# Resize to standard high-res 128x128 icon
$iconBmp = New-Object System.Drawing.Bitmap(128, 128)
$g2 = [System.Drawing.Graphics]::FromImage($iconBmp)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.DrawImage($cropped, 0, 0, 128, 128)
$g2.Dispose()

# Save to public and src/app
$iconBmp.Save("c:\xampp\htdocs\portfolio-bagus\public\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$iconBmp.Save("c:\xampp\htdocs\portfolio-bagus\public\apple-touch-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$iconBmp.Save("c:\xampp\htdocs\portfolio-bagus\src\app\icon.png", [System.Drawing.Imaging.ImageFormat]::Png)

$cropped.Dispose()
$iconBmp.Dispose()

Write-Host "Favicon created successfully!"
