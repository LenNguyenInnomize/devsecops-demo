# Sử dụng Node.js image
FROM node:18 AS builder

# Đặt thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json
COPY package.json package-lock.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build frontend với Nx
RUN npx nx build frontend

# Sử dụng Nginx làm server
FROM nginx:alpine
COPY --from=builder /app/dist/apps/frontend /usr/share/nginx/html
COPY apps/frontend/nginx.conf /etc/nginx/nginx.conf

# Mở cổng 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
