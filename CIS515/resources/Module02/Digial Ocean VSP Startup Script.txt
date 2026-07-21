#!/bin/bash

# Prevent the OS installer from pausing or waiting for human interaction
export DEBIAN_FRONTEND=noninteractive

####-- Create a swap file so server can handle node & mongodb --####
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab

####-- Configure Prerequisites --####
apt-get update
apt-get install -y gnupg curl apt-transport-https ca-certificates software-properties-common

####-- Install MongoDB --####
# Download the official security key
sudo apt install curl -y # curl may already be installed
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor
# Add the MongoDB Repository Link
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list

# Refresh Your Package List
sudo apt update

# Install the Package
sudo apt install -y mongodb-org

# Clear daemon cache links to ensure systemd discovers the newly installed file
systemctl daemon-reload

# Start the database engine and command it to boot automatically on reboot
systemctl enable --now mongod


####-- Install node version manager (nvm) and node --####
mkdir /root/.nvm
export NVM_DIR="/root/.nvm"
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# Load it into the current shell
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Add to rc file so it’s always available
cat >> ~/.bashrc <<'EOF'

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
EOF

# Install the latest its version of node
nvm install --lts

# Install nginx
apt install -y nginx
systemctl enable --now nginx

# Install build essentials to support node packages
apt install -y build-essential