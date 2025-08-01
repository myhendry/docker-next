This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Docker Deployment

This project is configured for Docker deployment and can be deployed on Render.

### Development with Hot Reload

For development with hot reload and file watching:

```bash
# Option 1: Use the development script
./dev.sh

# Option 2: Use Docker Compose directly
docker-compose -f docker-compose.dev.yml up --build

# Option 3: Use Docker Compose with watch (requires Docker Compose v2.22+)
docker-compose -f docker-compose.dev.yml up --build --watch
```

### Production Docker Testing

1. Build the Docker image:

```bash
docker build -t docker-next .
```

2. Run the container:

```bash
docker run -p 3000:3000 docker-next
```

3. Or use the provided script:

```bash
./docker-build.sh
```

4. Or use Docker Compose:

```bash
docker-compose up --build
```

### Deploy on Render

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Render
3. Create a new Web Service
4. Select "Docker" as the environment
5. Render will automatically detect the Dockerfile and deploy your application

The `.render.yaml` file is included for automatic deployment configuration.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
