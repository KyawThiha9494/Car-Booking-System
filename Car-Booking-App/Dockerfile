# Stage 1: Build the Angular app
FROM node:20.11.0 as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with nginx
FROM nginx:alpine

COPY --from=build /app/dist/Car-Booking-App /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
