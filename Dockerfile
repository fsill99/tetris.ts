FROM node:12.18.0 AS build

WORKDIR /src
COPY . .
RUN npm i --no-optional 2>&1
RUN npm run build

FROM nginx:1.19.0 AS publish
EXPOSE 80

WORKDIR /usr/share/nginx/html
COPY --from=build /src/dist/* ./
