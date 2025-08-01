#!/bin/bash

echo "Starting development environment with hot reload..."

# Build and run the development container
docker-compose -f docker-compose.dev.yml up --build 