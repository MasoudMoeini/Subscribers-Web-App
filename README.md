# Subscribers Web Application
[Reference:NuxtJs get start](https://nuxtjs.org/docs/get-started/installation)<br>
```
yarn create nuxt-app subscribers-app
cd subscribers-app
npm run build
npm run start
```
Manual installation
```
mkdir subscribers-app
```
```
cd subscribers-app
```
Create the package.json file
```
touch package.json
```
Copy this configuration into package.json
```
{
  "name": "subscribers-app",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "start": "nuxt start"
  }
}
```
Install Nuxt 
```
npm install nuxt
```
``` 
mkdir pages
touch pages/index.vue
```
To run Application
```
npm run dev
```
You should see somthing similar on browser(http://localhost:3500)<br>
<img width="761" alt="Screenshot 2022-08-17 at 16 01 35" src="https://user-images.githubusercontent.com/43514418/185154173-c21703d7-212d-44f0-ae9f-04e9334b6f64.png"> <br>
Containerize Application
``` 
CTRL+C 
```
```
docker build -t masodatc/my-front-end-app:01 .
```
```
docker run -it --rm -p 3500:3500 --name frontend masodatc/my-front-end-app:01 
```
Running Application with Docker Compose
```
docker-compose up --detach  
```
Clean up resources
```
docker compose down 
```
