## add conf for virtualHost
cp ./happyhourtracker.conf /etc/apache2/sites-available/
service apache2 restart
## create ssl certificate
certbot --apache \ 
--non-interactive --agree-tos --domains happyhourtracker.link \
 --register-unsafely-without-email
