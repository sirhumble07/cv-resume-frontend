FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Remove default Nginx page
RUN rm -rf ./*

# Copy your frontend build (HTML, CSS, JS)
COPY . .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
