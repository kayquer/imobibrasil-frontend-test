@echo off
echo Starting ImobiBrasil V2 Static Website Server...
echo.
echo The website will be available at: http://localhost:8001
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8001
pause
