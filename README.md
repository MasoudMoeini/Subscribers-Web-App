# Subscribers Web Application
[Reference:NuxtJs get start](https://nuxtjs.org/docs/get-started/installation)<br>
Before developing front-end make sure [backend-rest-api](https://github.com/MasoudMoeini/Terraform-GKE-Rest-API-NodeJs-Mongodb) is running.

Steps of Manual installation and development of frontend with Nuxt JS <br>
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

```
npm install 
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
<img width="1063" alt="Screenshot 2022-08-26 at 11 44 33" src="https://user-images.githubusercontent.com/43514418/186877343-05021dfe-94ba-4268-86ab-c26dedb193a9.png"><br>
Containerize Application
``` 
CTRL+C 
```
```
docker build -t masodatc/my-front-end-app:01 .
```
```
docker push masodatc/my-front-end-app:01
```
To test image locally
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
## Kubernetes Deployment
```
kubectl apply -k ./kubernetes/
```
```
kubectl get svc 
```
```
kubectl get pvc 
```
```
kubectl get sc
```
## Clean up Resources
```
kubectl delete -k ./kubernetes/
```
