# get the base node image
FROM node:alpine as builder

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY ./package.json /frontend

# install npm dependencies
RUN yarn install

# copy other project files
COPY . .

# build the folder
CMD [ "npm", "run", "start" ]


# Handle Nginx
FROM nginx:1.17.1-alpine
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
