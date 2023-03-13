sudo apt purge -y

sudo apt-get install curl -y

cd /var/www/html/

#installing npm

npm install
pm2 stop all

#starting pm2 

#pm2 start index.js
