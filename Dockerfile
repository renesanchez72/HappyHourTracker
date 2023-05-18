FROM ubuntu 
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
    apache2 \
    apache2-utils \
    git \
    php \
    php-mysql &&\
    rm -rf /var/lib/apt/lists/*
WORKDIR /var/www/html
RUN git config --global http.sslverify false
RUN git clone https://github.com/renesanchez72/HappyHourTracker.git
RUN apt clean
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf 
EXPOSE 80
EXPOSE 443
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]