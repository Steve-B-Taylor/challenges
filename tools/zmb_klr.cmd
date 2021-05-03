@echo off
setlocal
set _workDir=d:\la\challenges\tools
pushd %_workDir%
if exist netstat.tmp del /f /q netstat.tmp

call netstat -aon | findstr 8080>netstat.tmp
for /f "tokens=1-9 delims= " %%a in (netstat.tmp) do taskkill /pid %%e /f
if exist netstat.tmp del /f /q netstat.tmp

:EndProg
popd
endlocal