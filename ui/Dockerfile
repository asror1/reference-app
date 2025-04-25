# Stage 1: Build the Angular app
FROM node:23-slim AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build 

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the built Angular app to Nginx's HTML directory
COPY --from=build /app/dist/ui/browser /usr/share/nginx/html

# Copy custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80