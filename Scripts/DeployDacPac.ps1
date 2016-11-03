param (

	[Parameter(Mandatory=$true)]
    [string] $dbName,
	[Parameter(Mandatory=$true)]
    [string] $user,
	[Parameter(Mandatory=$true)]
    [string] $pwd,
	[Parameter(Mandatory=$true)]
    [string] $server,
	[Parameter(Mandatory=$true)]
    [string] $dacpacFilePath,
	[Parameter(Mandatory=$true)]
    [string] $postDeploymentScriptFilePath
)
Write-Host DbName: $dbName
Write-Host User: $user
Write-Host Server: $server
 
& 'C:\Program Files (x86)\Microsoft SQL Server\120\DAC\bin\SqlPackage.exe' /Action:Publish /SourceFile:$dacpacFilePath /TargetServerName:$server /TargetDatabaseName:$dbName /p:IncludeCompositeObjects=true /TargetUser:$user /TargetPassword:$pwd
sqlcmd -i "$postDeploymentScriptFilePath" -d "$dbName" -S "$server" -U "$user"  -P "$pwd"