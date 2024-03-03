#!/bin/sh
set -e

SCRIPT_DIR=$(cd $(dirname $0); pwd)
cd $SCRIPT_DIR

openssl req -config localhost.openssl.cnf -x509 -newkey rsa:4096 -nodes -keyout privkey.pem -out cert.pem
