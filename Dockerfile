# FROM node:10 AS builder

# WORKDIR /app

# COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]



FROM node:10 AS builder

WORKDIR /app

COPY . .

RUN yarn build



FROM nginx:alpine

WORKDIR /usr/share/ngix/html

COPY --from=builder /app/build . 

CMD ["nginx", "-g", "daemon off;"]