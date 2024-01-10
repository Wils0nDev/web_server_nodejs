////////////
Temas puntuales de la sección

Esta sección tiene por objetivo aprender un poco sobre HTTP, Http2, Https y montar un WebServer con una aplicación corriendo en la web.

Puntualmente veremos:
- Crear un WebServer
- Manual
- Con express
- Variables de entorno
- Single Page Application + Router de Frontend
- Servir diferentes archivos
- Desplegar servidor en la nube
- GitHub
- Railway
- Mucho más

Es una sección que continuaremos después, para trabajar el RestServer.

//////////////////////

////INSTALACIONES 

1. Instalar TypeScript y demás dependencias

npm i -D typescript @types/node ts-node-dev rimraf

2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)

npx tsc --init --outDir dist/ --rootDir src

3. En package.json : Crear scripts para dev, build y start 
Más sobre TS-Node-dev aquí : https://www.npmjs.com/package/ts-node-dev

  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
