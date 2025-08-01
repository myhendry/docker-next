# Deployment Guide for Render

This guide will help you deploy your Docker Next.js application to Render.

## Prerequisites

1. A Git repository (GitHub, GitLab, etc.) with your code
2. A Render account (free tier available)

## Deployment Steps

### 1. Push Your Code to Git

Make sure your code is pushed to a Git repository:

```bash
git add .
git commit -m "Add Docker configuration"
git push origin main
```

### 2. Connect to Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" and select "Web Service"
3. Connect your Git repository
4. Select the repository containing your code

### 3. Configure the Service

- **Name**: `docker-next` (or your preferred name)
- **Environment**: `Docker`
- **Region**: Choose the closest to your users
- **Branch**: `main` (or your default branch)
- **Root Directory**: Leave empty (if your Dockerfile is in the root)

### 4. Environment Variables

Render will automatically detect the following from your `.render.yaml`:

- `NODE_ENV=production`
- `PORT=3000`

### 5. Deploy

Click "Create Web Service" and Render will:

1. Build your Docker image
2. Deploy it to their infrastructure
3. Provide you with a URL

## Automatic Deployments

Render will automatically redeploy your application when you push changes to your Git repository.

## Custom Domain (Optional)

1. Go to your service settings in Render
2. Click "Custom Domains"
3. Add your domain and follow the DNS configuration instructions

## Monitoring

- View logs in the Render dashboard
- Monitor performance and uptime
- Set up alerts if needed

## Troubleshooting

### Build Failures

- Check the build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify the Dockerfile is in the root directory

### Runtime Issues

- Check the service logs
- Verify environment variables are set correctly
- Ensure the application listens on the correct port

## Local Testing

Before deploying, test locally:

```bash
# Build the image
docker build -t docker-next .

# Run the container
docker run -p 3000:3000 docker-next

# Test the application
curl http://localhost:3000
```

## Performance Tips

1. **Image Optimization**: The multi-stage Dockerfile reduces final image size
2. **Caching**: Render caches Docker layers for faster builds
3. **Environment Variables**: Use Render's environment variable system for configuration
4. **Health Checks**: The application includes proper health check endpoints
