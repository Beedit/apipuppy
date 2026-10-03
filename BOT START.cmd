@echo off
echo apipuppy waking up....
echo -----------------------------------
cd /d "%~dp0"
echo apipuppy eating all the dependencies :3
deno install
echo -----------------------------------
deno task start
echo -----------------------------------
echo bot died lol.
pause
