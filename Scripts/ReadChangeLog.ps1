param (
)
$content = [IO.File]::ReadAllText("ChangeLog.txt")
Write-Host "Change Log Content : $content"
Set-OctopusVariable -name "BuildChangeLog" -value "$content"