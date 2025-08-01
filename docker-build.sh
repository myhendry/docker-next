#!/bin/bash

# Build the Docker image
echo "Building Docker image..."
docker build -t docker-next .

# Run the container
echo "Running container..."
docker run -p 3000:3000 --name docker-next-app docker-next 