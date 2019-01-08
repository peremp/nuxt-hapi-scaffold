#------------------------------------
# Base image
#------------------------------------

FROM node:10.15.0-alpine AS base

WORKDIR /usr/src/app

#------------------------------------
# Build image
#------------------------------------

FROM base AS build

COPY . .
RUN yarn install

EXPOSE $PORT
