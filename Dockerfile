# get the base node image
FROM node:alpine

# set the working dir for container
WORKDIR /frontend

ENV PATH="./node_modules/.bin:$PATH"


# copy other project files
COPY . .
COPY ./package.json /package.json
COPY ./public /public

# install npm dependencies
RUN yarn install


# build the folder
CMD [ "yarn", "start" ]
