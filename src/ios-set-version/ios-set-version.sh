#!/bin/bash

plist=$1
CFBundleShortVersionString=$2
CFBundleVersion=$3

echo "Updating $plist..."
echo "    CFBundleShortVersionString = $CFBundleShortVersionString"
/usr/libexec/PlistBuddy $plist -c "set :CFBundleShortVersionString $CFBundleShortVersionString"

echo "    CFBundleVersion = $CFBundleVersion"
/usr/libexec/PlistBuddy $plist -c "set :CFBundleVersion $CFBundleVersion"

echo "Info.plist updated"