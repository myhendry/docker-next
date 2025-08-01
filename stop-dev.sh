#!/bin/bash

echo "Stopping development environment..."

# Stop and remove the development containers
docker-compose -f docker-compose.dev.yml down 