Digital Ocean for Web Dev classes

#!/bin/bash

# =========================================================================
# DIGITALOCEAN USER DATA STARTUP SCRIPT
# OS: Ubuntu LTS (22.04 / 24.04)
# Stack: LAMP (Apache, MariaDB, PHP) + phpMyAdmin
# =========================================================================

# 1. Prevent interactive prompts during installation
export DEBIAN_FRONTEND=noninteractive

####-- Create a swap file so server can handle node & mongodb --####
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab

# 2. Update package repositories
apt-get update
apt-get upgrade -y

# 3. Install Apache and configure Firewall
apt-get install -y apache2
ufw allow 'Apache Full'

# 4. Install MariaDB
apt-get install -y mariadb-server

# 5. Secure MariaDB and set up root password
# Generates a highly secure random password for the root user
DB_ROOT_PASSWORD=$(openssl rand -base64 14)
mariadb -e "ALTER USER 'root'@'localhost' IDENTIFIED BY '${DB_ROOT_PASSWORD}';"
#mariadb -e "DELETE FROM mysql.user WHERE User='';"
#mariadb -e "DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');"
#mariadb -e "DROP DATABASE IF EXISTS test;"
#mariadb -e "DELETE FROM mysql.db WHERE Db='test' OR Db='test\\_%';"
mariadb -e "FLUSH PRIVILEGES;"

# Save generated MariaDB root credentials securely on the server for your reference
echo "MariaDB root password: ${DB_ROOT_PASSWORD}" > /root/.db_credentials_root
chmod 600 /root/.db_credentials

# 6. Install PHP and common extensions
apt-get install -y php libapache2-mod-php php-mysql php-cli php-curl php-gd php-mbstring php-xml php-zip

# 7. Pre-seed configuration choices for phpMyAdmin to prevent prompts
debconf-set-selections <<< "phpmyadmin phpmyadmin/dbconfig-install boolean true"
debconf-set-selections <<< "phpmyadmin phpmyadmin/app-password-confirm password ${DB_ROOT_PASSWORD}"
debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/admin-pass password ${DB_ROOT_PASSWORD}"
debconf-set-selections <<< "phpmyadmin phpmyadmin/mysql/app-pass password ${DB_ROOT_PASSWORD}"
debconf-set-selections <<< "phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2"

# Install phpMyAdmin
apt-get install -y phpmyadmin

# 8. Create a separate database administration user
# MariaDB prevents root logins via phpMyAdmin by default. We create an administrative user 'admin'
DB_ADMIN_PASSWORD=$(openssl rand -base64 14)
mariadb -e "CREATE USER 'admin'@'localhost' IDENTIFIED BY '${DB_ADMIN_PASSWORD}';"
mariadb -e "GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;"
mariadb -e "FLUSH PRIVILEGES;"

# Save admin credentials for your reference
echo "phpMyAdmin Username: admin" >> /root/.db_credentials
echo "phpMyAdmin Password: ${DB_ADMIN_PASSWORD}" >> /root/.db_credentials

# 9. Prioritize index.php over index.html
cat <<EOF > /etc/apache2/mods-enabled/dir.conf
<IfModule mod_dir.c>
    DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
</IfModule>
EOF

# 10. Create a custom landing page
cat <<EOF > /var/www/html/index.php
<!DOCTYPE html>
<html>
<head>
    <title>Server Ready</title>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; background: #f4f6f9; }
        .card { background: white; padding: 30px; border-radius: 8px; display: inline-block; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 500px; }
        h1 { color: #2a7ae2; }
        .btn { display: inline-block; background: #2a7ae2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 15px; }
    </style>
</head>
<body>
    <div class="card">
        <h1>LAMP + phpMyAdmin Stack Ready!</h1>
        <p>Apache, MariaDB, and PHP are running via DigitalOcean User Data.</p>
        <p>PHP Version: <?php echo phpversion(); ?></p>
        <a href="/phpmyadmin" class="btn" target="_blank">Go to phpMyAdmin</a>
    </div>
</body>
</html>
EOF

# Delete default index.html
rm -f /var/www/html/index.html

# 11. Restart Apache to apply all changes
systemctl restart apache2
