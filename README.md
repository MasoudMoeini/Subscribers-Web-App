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

