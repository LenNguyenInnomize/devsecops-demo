# Stage 1: Build ứng dụng
FROM node:18 AS builder

WORKDIR /app

# Copy file package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build ứng dụng
RUN npx nx build backend

# Stage 2: Runtime - Chạy ứng dụng
FROM node:18 AS runner

WORKDIR /app

# Copy dependencies từ builder stage
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist/apps/backend /app

EXPOSE 3000

CMD ["node", "main.js"]
