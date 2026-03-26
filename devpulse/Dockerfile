# ================================
# STAGE 1 → BUILD REACT APP
# ================================

# Use Node 20 (required for Vite latest)
FROM node:20-alpine AS build

# Set working directory inside container
WORKDIR /app

# Copy package files first (for caching dependencies)
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy full project into container
COPY . .

# Build the React app → creates /dist folder
RUN npm run build


# ================================
# STAGE 2 → SERVE WITH NGINX
# ================================

# Use lightweight Nginx image
FROM nginx:alpine

# Copy built React files from build stage → Nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

# 🔥 IMPORTANT: Replace default Nginx config with our custom one
# This fixes React routing (no 404 on refresh)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 inside container
EXPOSE 80

# Start Nginx in foreground (required for Docker)
CMD ["nginx", "-g", "daemon off;"]