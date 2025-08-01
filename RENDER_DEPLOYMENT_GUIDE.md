# Complete Guide: Deploy Docker Next.js App to Render

## Step 1: Push to Git Repository

### Option A: GitHub (Recommended)

1. **Create a new repository on GitHub:**

   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it `docker-next` (or your preferred name)
   - Make it public or private
   - Don't initialize with README (you already have one)

2. **Add the remote and push:**
   ```bash
   # Replace YOUR_USERNAME with your GitHub username
   git remote add origin https://github.com/YOUR_USERNAME/docker-next.git
   git branch -M main
   git push -u origin main
   ```

### Option B: GitLab

1. **Create a new repository on GitLab:**

   - Go to [GitLab](https://gitlab.com)
   - Click "New project"
   - Choose "Create blank project"
   - Name it `docker-next`

2. **Add the remote and push:**
   ```bash
   git remote add origin https://gitlab.com/YOUR_USERNAME/docker-next.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy on Render

### Method 1: Using Render Dashboard (Easiest)

1. **Go to Render Dashboard:**

   - Visit [Render Dashboard](https://dashboard.render.com/)
   - Sign up or log in

2. **Create New Web Service:**

   - Click "New +" button
   - Select "Web Service"

3. **Connect Your Repository:**

   - Choose your Git provider (GitHub/GitLab)
   - Select your `docker-next` repository
   - Click "Connect"

4. **Configure the Service:**

   - **Name:** `docker-next` (or your preferred name)
   - **Environment:** `Docker`
   - **Region:** Choose closest to your users
   - **Branch:** `main`
   - **Root Directory:** Leave empty (Dockerfile is in root)

5. **Environment Variables (Optional):**

   - `NODE_ENV=production`
   - `PORT=3000`
   - These are already set in your `.render.yaml`

6. **Deploy:**
   - Click "Create Web Service"
   - Render will automatically build and deploy your app

### Method 2: Using .render.yaml (Automatic)

Your `.render.yaml` file will automatically configure the deployment:

```yaml
services:
  - type: web
    name: docker-next
    env: docker
    plan: starter
    region: oregon
    buildCommand: docker build -t docker-next .
    startCommand: docker run -p $PORT:3000 docker-next
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 3000
```

## Step 3: Verify Deployment

1. **Check Build Logs:**

   - Go to your service in Render dashboard
   - Click on "Logs" tab
   - Verify the build completed successfully

2. **Test Your Application:**
   - Click on the provided URL (e.g., `https://your-app.onrender.com`)
   - Your app should be live!

## Step 4: Custom Domain (Optional)

1. **Add Custom Domain:**
   - Go to your service settings
   - Click "Custom Domains"
   - Add your domain name
   - Follow DNS configuration instructions

## Troubleshooting

### Common Issues:

1. **Build Fails:**

   - Check build logs in Render dashboard
   - Ensure all files are committed to Git
   - Verify Dockerfile is in root directory

2. **App Not Starting:**

   - Check service logs
   - Verify environment variables
   - Ensure app listens on correct port

3. **Hot Reload Not Working:**
   - Hot reload is for development only
   - Production uses the main Dockerfile
   - Development setup is for local use only

### Useful Commands:

```bash
# Check your current Git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to remote
git push origin main

# Check remote repository
git remote -v
```

## Next Steps

After deployment:

1. **Monitor Performance:**

   - Use Render's built-in monitoring
   - Set up alerts if needed

2. **Continuous Deployment:**

   - Render automatically redeploys on Git pushes
   - No manual intervention needed

3. **Scale if Needed:**
   - Upgrade plan for more resources
   - Add more instances for high traffic

## Local Testing Before Deploy

Always test locally before deploying:

```bash
# Test production build
docker build -t docker-next .
docker run -p 3000:3000 docker-next

# Test development (hot reload)
./dev.sh
```

Your Docker Next.js application is now ready for deployment on Render! 🚀
