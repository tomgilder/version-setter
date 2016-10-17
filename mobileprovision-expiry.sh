#!/bin/bash 
 
 /usr/libexec/PlistBuddy -c 'Print DeveloperCertificates:0' /dev/stdin <<< $(security cms -D -i $1) | openssl x509 -inform DER -noout -enddate