@echo off
setlocal enabledelayedexpansion

set /p digits="Enter the digits (e.g., 02567): "
set /p length="Enter the code length: "

echo %digits% > digits.txt
echo %length% > length.txt

if exist combinations.txt del combinations.txt

node generator.js

if exist combinations.txt call combinations.txt

pause