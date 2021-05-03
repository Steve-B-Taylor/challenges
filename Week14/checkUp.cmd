@echo off
setlocal
set _workDir = %1
if not exist %_workDir% goto ErrorEnd

pushd _workDir

if not exist src\main\resources\META-INF mkdir src\main\resources\META-INF


:ErrorEnd
@echo Something failed and now you're here

:EndProg
endlocal