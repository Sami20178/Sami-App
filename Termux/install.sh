#!/data/data/com.termux/files/usr/bin/bash

# Sami App - Termux Setup Script
# Install basic development tools in Termux

echo "Sami Termux Setup startet..."

pkg update -y
pkg upgrade -y
pkg install -y git nodejs python clang nano wget curl

mkdir -p ~/Sami
cd ~/Sami

echo "Termux Umgebung für Sami wurde eingerichtet!"
echo "Node: $(node -v)"
echo "Python: $(python --version)"
