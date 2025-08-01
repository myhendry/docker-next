# Debugging Guide

## Common Issues and Solutions

### 1. 404 Errors with API Routes

**Problem:** `Failed to load resource: the server responded with a status of 404 (Not Found)`

**Solution:**

- Check if the API route file exists in the correct location
- Ensure the file is named `route.ts` (not `route.js`)
- Verify the API route path matches your fetch URL

**Example:**

```typescript
// This fetch call:
fetch("/api/collection");

// Requires this file structure:
app / api / collection / route.ts;
```

### 2. JSON Parsing Errors

**Problem:** `SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`

**Solution:**

- This usually happens when trying to parse HTML (404 page) as JSON
- Add proper error handling to your fetch calls
- Check if the API endpoint exists and returns JSON

**Example:**

```typescript
const response = await fetch("/api/collection");
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
const data = await response.json();
```

### 3. Hot Reload Not Working

**Problem:** Changes not reflecting in the browser

**Solution:**

- Ensure you're using the development setup: `./dev.sh`
- Check if the container is running: `docker ps`
- Verify volume mounting is working correctly

### 4. Docker Build Failures

**Problem:** Docker build fails during npm install or build

**Solution:**

- Check network connectivity
- Ensure all dependencies are in `package.json`
- Try clearing Docker cache: `docker system prune`

### 5. API Testing

**Test your API endpoints:**

```bash
# Test GET endpoint
curl http://localhost:3000/api/collection

# Test POST endpoint
curl -X POST http://localhost:3000/api/collection \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Item","description":"Test Description"}'
```

### 6. Browser Developer Tools

**Check for errors:**

1. Open browser developer tools (F12)
2. Go to Console tab
3. Look for red error messages
4. Check Network tab for failed requests

### 7. Docker Logs

**Check container logs:**

```bash
# View logs for development container
docker logs docker-next-app-1

# View logs for production container
docker logs <container-name>
```

### 8. Common Fixes

**For API routes:**

- Ensure file is in correct location: `app/api/[route]/route.ts`
- Export GET/POST functions properly
- Return proper NextResponse objects

**For components:**

- Add proper error handling
- Use loading states
- Check TypeScript types

**For Docker:**

- Use development setup for hot reload
- Use production setup for deployment
- Check volume mounting in docker-compose.dev.yml
