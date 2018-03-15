FROM nginx:alpine


RUN apk update \
    && apk upgrade \
    && apk add --no-cache bash
#    && adduser -D -H -u 1000 -s /bin/bash www-data

ADD nginx.conf /etc/nginx/

# Set upstream conf and remove the default conf
RUN echo "upstream webapp-upstream { server webapp:9000; }" > /etc/nginx/conf.d/upstream.conf \
	&& rm /etc/nginx/conf.d/default.conf
# Unix Domain Socket
#RUN echo "upstream goserver-upstream { server unix:/var/run/goserver/go.sock; }" > /etc/nginx/conf.d/upstream.conf \
#	&& rm /etc/nginx/conf.d/default.conf

CMD ["nginx"]

EXPOSE 80 443
