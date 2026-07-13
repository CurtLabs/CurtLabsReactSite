Start-Process -FilePath 'powershell' -ArgumentList '-NoExit','-Command',"Set-Location 'C:\Users\Curt\Documents\CurtLabsReactSite'; npm run dev; Read-Host 'Press Enter to close dev window'"

Start-Process -FilePath 'powershell' -ArgumentList '-NoExit','-Command',"Set-Location 'C:\Cloudflared\bin'; .\cloudflared.exe tunnel run curtlabs; Read-Host 'Press Enter to close cloudflared window'"