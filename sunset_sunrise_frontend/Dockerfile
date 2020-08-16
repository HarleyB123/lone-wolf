FROM node:8 as react-build
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:alpine
COPY --from=react-build /app/build/ /usr/share/nginx/html
