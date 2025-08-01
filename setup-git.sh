#!/bin/bash

echo "🚀 Setting up Git repository for Render deployment..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Please initialize git first:"
    echo "   git init"
    exit 1
fi

# Check if we have uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes. Please commit them first:"
    echo "   git add ."
    echo "   git commit -m 'Your commit message'"
    exit 1
fi

echo "✅ Git repository is ready!"
echo ""
echo "📋 Next steps:"
echo "1. Create a repository on GitHub/GitLab"
echo "2. Add the remote:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/docker-next.git"
echo "3. Push to remote:"
echo "   git push -u origin main"
echo "4. Deploy on Render using the guide in RENDER_DEPLOYMENT_GUIDE.md"
echo ""
echo "📖 See RENDER_DEPLOYMENT_GUIDE.md for detailed instructions" 