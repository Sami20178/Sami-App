#!/data/data/com.termux/files/usr/bin/bash

# Sami Termux Tools
# Setup für Sami App Entwicklung

echo "Willkommen bei Sami Termux"

pkg update -y
pkg install -y git nodejs python nano curl wget

mkdir -p ~/Sami
cd ~/Sami

echo "Sami Umgebung bereit!"
echo "Node Version:"
node -v

echo "Python Version:"
python --version
