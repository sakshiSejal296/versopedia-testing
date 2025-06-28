# Base image with Node and Curl
FROM node:18

WORKDIR /app

# Install your app dependencies
COPY . .

RUN npm install

# Install Keploy
RUN curl -sL https://github.com/keploy/keploy/releases/download/v2.6.14/keploy-linux-amd64 -o keploy && \
    chmod +x keploy && \
    mv keploy /usr/local/bin

# Start with keploy in record mode
CMD ["keploy", "record", "--command", "npm start"]
