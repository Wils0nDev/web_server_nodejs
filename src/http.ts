//Web Server : sistema en el lado del servidor que tiene como objetivo devolver informacion
import  fs  from 'fs'
import http from 'http'

const server = http.createServer((req,res)=>{
    console.log(req.url)
    //SSR : Service-Side Rendering ----------------
    //La representación del lado del servidor (SSR) es la capacidad de una aplicación 
    //para convertir archivos HTML en el servidor en una página HTML completamente 
    //representada para el cliente

    //1era forma de responder
    //  res.writeHead(200,{
    //     'Content-Type': 'text/html',        
    // })
    // res.write(`<h1>Hola Mundo </h1>`)
    // res.write(`<h1>URL ${req.url} </h1>`)
    //res.end()

    //2da forma de responder
    // const data = {name : 'John Doe', age:30, city: 'New York'}
    // res.writeHead(200,{'Content-type':'application/json'});
    // res.end(JSON.stringify(data))

    //Si res.url es localhost:8081/
    if(req.url === '/'){
        //leeme el archivo en esa ruta
        const htmlFile = fs.readFileSync('./public/index.html','utf-8');
        //enviamos las cabeceras
        res.writeHead(200,{'Content-Type':'text/html'});
        
        res.end(htmlFile)
        return;
    }
    if(req.url?.endsWith('.js')){
        res.writeHead(200,{'Content-Type':'application/javascript'});
    }else if(req.url?.endsWith('.css')){
        res.writeHead(200,{'Content-Type':'text/css'});
    }
    const responseContent = fs.readFileSync(`./public${ req.url }`,'utf-8');
    res.end(responseContent)
    // else{
    //     //Si res.url es localhost:8081/otra-cosa
    //     res.writeHead(404,{'Content-Type':'text/html'});
    //     res.end();
    // }
})


server.listen(8081,()=>{
console.log('Server runing port 8081')
})