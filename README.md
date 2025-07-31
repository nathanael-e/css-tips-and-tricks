# css-tips-and-tricks
A collection of css tutorials, tips and tricks.

Run a project:

``` PROJECT=subfolder docker compose up --build ```

Create a new project:

``` 
docker run --rm -it \
  -u $(id -u):$(id -g) \
  -v "$PWD":/app \
  -w /app \
  node:22-alpine \
  sh -c "npm create vite@latest ."
 ```

<<<<<<< Updated upstream
=======
``` 
docker run --rm -it \
  -u $(id -u):$(id -g) \
  -v "$PWD":/app \
  -w /app \
  -p 5173:5173 \
  -w /app \
  node:22-alpine \
  sh -c "npm install && npm run dev -- --host"
 ```

>>>>>>> Stashed changes
