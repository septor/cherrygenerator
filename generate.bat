@echo off
setlocal enabledelayedexpansion

set /p digits=013469

set /p length=8

echo %digits% > digits.txt
echo %length% > length.txt

if exist combinations.txt del combinations.txt

node generator.js

if exist combinations.txt call combinations.txt

pause
