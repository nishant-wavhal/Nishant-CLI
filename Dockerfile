FROM salesforce/cli:latest-full


ENV SHELL /bin/bash
ENV DEBIAN_FRONTEND=noninteractive
ENV SFDX_CONTAINER_MODE true
ENV NODE_ENV production

ARG PRETTIER_VERSION 3.3.3

# Basic
RUN apt update
RUN echo y | apt install software-properties-common

# Install prettier
RUN set -x && \
  (curl -sL https://deb.nodesource.com/setup_20.x | bash) && \
  apt-get install --no-install-recommends nodejs && \
  rm -rf /var/lib/apt/lists/* && \
  npm install -g prettier@${PRETTIER_VERSION} && \
  npm cache clean --force

  WORKDIR /usr/src/app
  COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
  RUN npm install --production --silent && mv node_modules ../
  COPY . .
  EXPOSE 3000
  COPY --chown==node:node . .
  CMD ["npm", "start"]