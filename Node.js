 

//create server using http

const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/plain'});
    res.end('hello,this is a http server')
});

const PORT =3000;
server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});

//create server using express

const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('hello from express')
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})

//middleware

//Middleware for Route Protection

const authMiddleware = (req,res,next)=>{
    const isLoggedIn = false;
    if(isLoggedIn){
        next();
    }else{
        res.status(401).send('unauthorized')
    }
};

app.get('/home',authMiddleware,(req,res)=>{
    res.send('home-only for loggedin users')
});

//middleware to check the sum of two numbers and if the number is odd show error and if the number is even pass it to the server

const express = require('express')
const app = express()
const PORT=3000;

app.use('/check',(req,res,next)=>{
    const {num1,num2}=req.query;

    let a =parseInt(num1)
    let b= parseInt(num2)

    const sum = a+b;
    if(sum%2!==0){
        return res.status(400).send("sum is odd")
    }
    res.send(`sum is even ${sum}`)
})

app.listen(PORT,()=>{
    console.log(`server running on : http://localhost:${PORT}`)
})


//route params 

const express = require('express')
const app = express()

app.get('/product/:id',(req,res)=>{
    const productId = req.params.id;
    res.send(`product id is : ${productId}`)
})

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`)
})


//query params

const express = require('express')
const app = express()

app.get('/product',(req,res)=>{
    const keyword = req.query.q;
    res.send(`the keyword is :${keyword}`)
})

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`)
})

//buffer

const buff = Buffer.from('hello')
console.log(buff)
console.log(buff.toString())

//streams

//readStream

const fs = require('fs')

const readStream = fs.createReadStream('sample.txt','utf-8');

readStream.on('data',(chunk)=>{
    console.log('recieved chunk:');
    console.log(chunk)
})

//writeStream

const fs = require('fs')
const writeStream = fs.createWriteStream('output.txt')

writeStream.write('hello\n')
writeStream.write('this is written using stream \n');
writeStream.end('end of writing')

//Pipe readStream to writeStream (copy file)

const fs = require('fs')

const readStream = fs.createReadStream('sample.txt')
const writeStream = fs.createWriteStream('copy.txt')

readStream.pipe(writeStream)

//readFile 

const fs = require('fs')

fs.readFile('sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log('error reading file',err)
    }else{
        console.log('file read:',data)
    }
})

//write file

const fs = require('fs')

const content = 'hello this is written via write file'

fs.writeFile('sample.txt',content,'utf-8',(err)=>{
    if(err){
        console.log('err writing file',err)
    }else{
        console.log('file written done:')
    }
})

//appendFile - existing content preserve cheythu, new content add cheyyum.

const fs = require('fs')

const newContent ='\n this is the new csontent'
fs.appendFile('sample.txt',newContent,'utf-8',(err)=>{
    if(err){
        console.log('err occured',err)
    }else{
        console.log('file written successfully!!')
    }
})

//create file


const fs = require('fs')


fs.writeFileSync('test.txt', 'Sample content');
console.log('Created test.txt');

//delete file

const fs = require('fs');

fs.unlink('sample.txt',(err)=>{
    if(err) throw err;
    console.log('file deleted successfully')
})

//check if file exixt before deleting

const fs = require('fs');

if (fs.existsSync('example.txt')) {
  fs.unlinkSync('example.txt');
  console.log('File deleted.');
} else {
  console.log('File does not exist.');
}

//create folder

const fs = require('fs');

fs.mkdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder created!');
});

//rename folder

fs.rename('oldName.txt', 'newName.txt', (err) => {
    if (err) throw err;
    console.log('File renamed!');
  });

  //delete folder

  fs.rmdirSync('myFolder');
console.log('Folder deleted.');

//to check if a router is present or not ,if not show error

app.use((req, res, next) => {
    res.status(404).send("404 - Page Not Found");
  });

//to console the defined http method used there

const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  next(); 
});

app.get('/', (req, res) => {
  res.send('This is a GET request');
});

app.post('/submit', (req, res) => {
  res.send('This is a POST request');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

//router chaining

app.route('/user')
  .get((req, res) => {
    res.send('GET user');
  })
  .post((req, res) => {
    res.send('POST user');
  })
  .put((req, res) => {
    res.send('PUT user');
  });
//-------------------------------------------------------------


  //check if two object matches if matching write the result to a file
  const fs = require("fs");
  
  
  const obj1 = { name: "John", age: 25, location: "India" };
  const obj2 = { age: 25, location: "India", name: "John" };
  
  function isEqual(obj1,obj2){
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
  
    if(keys1.length !== keys2.length) return false;
  
    for(let key of keys1){
      if(obj1[key] !== obj2[key]) return false;
    }
    return true;
  }
  
  setTimeout(()=>{
    const result = isEqual(obj1,obj2) ? "Objects Matches" : "Objects donot Match";
     
    fs.writeFile('output.txt',result,(err)=>{
      if(err) console.log("error occured",err);
      else console.log("file written succesfully : ",result)
    })
  },3000)


  // Filter odd numbers from an array using a callback, and write them to a file.
  
  const fs = require("fs")
  
  function OddNumbers(arr){
    return new Promise((resolve,reject)=>{
        const odds = arr.filter(n=>n%2!==0);
        
        if(odds.length===0){
            reject("no odd numbers found")
        }else{
            setTimeout(()=>{
                resolve(odds)
            },3000)
        }
    })
  }
  
  const arr=[12,14,89,16,9,18]
  
  OddNumbers(arr).then(oddnum=>{
    fs.writeFile('output.txt',JSON.stringify(oddnum),err=>{
        if(err) console.error("error occured",err)
        else console.log("file written successfully",oddnum)
    })
  })
  .catch(err=>{
    console.error("promise rejected :",err)
  })

  //Filter odd numbers from an array using a callback, and write them to a file.
  
  const fs = require("fs");
  
  function filterOddNumber(arr,callback){
    const odds = arr.filter(n=>n%2!==0);
  
    if(odds.length===0){
      callback("no odd numbers found" , null)
    }else{
      setTimeout(()=>{
        fs.writeFile('output.txt',JSON.stringify(odds),(err)=>{
          if(err) callback("error occured",null)
            else callback(null,"file written successfully")
        })
      },3000)
    }
  
  }
  
  const testArr = [2,4,9,11,6];
  
  filterOddNumber(testArr,(err,message)=>{
    if(err){console.error(" callback error :",err) }
    else { console.log(" callback success : " ,message)}
  })

  //middleware to block post method

app.use((req,res,next)=>{
  if(req.method==='POST'){
      return res.status(403).json({message:"post request are not allowed"})
  }
  
  next();
});

//allow only get and put globally

app.use((req,res,next)=>{
  const allowed =["GET","PUT"];
  if(!allowed.includes(req.method)){
      return res.status(403).json({message:`${req.method} not allowed`})
  }
  next()
})

//code to fetch datas from an api
const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log("📦 Data:", data);
  })
  .catch(err => {
    console.error("❌ Error:", err);
  });

  //example for axios 

  import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);  // data received
  })
  .catch(error => {
    console.error(error);        // handle error
  });

  //write the current date to a new file

  const fs = require('fs');
  const currentDate = new Date().toString()
  
  fs.writeFile('output.txt',currentDate,'utf-8',(err)=>{
      if(err){
          console.log(err)
      }else{
          console.log('file written the new date')
      }
  })

  //event module
  const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', name => console.log(`Hello ${name}`));
emitter.emit('greet', 'Shifana');


//worker thread
//sample.js
const {Worker} = require('worker_threads');

const worker = new Worker('./worker.js')

worker.postMessage(5);
worker.on("message",(result)=>{
    console.log("result from worker :",result)
});

worker.on("error",(err)=>{
    console.error("worker error :",err)
})

//worker.js
const {parentPort} = require("worker_threads");

parentPort.on("message",(num)=>{
    const result = num*num;
    parentPort.postMessage(result)
})

//error handling middleware
app.use((err,req,res,next)=>{
console.error(err.stack)
return res.status(500).send('something broke')
})

//path module

//joining paths safely
const path = require('path');
const filepath = path.join(__dirname,'uploads','images','photo.png');
console.log(filepath)

//resolving absolute paths
const path = require('path');

const absolutepath= path.resolve('uploads','images','photo.jpg')
console.log(absolutepath)

//extracting file paths
const path = require('path');

const one =path.basename('/uploads/images/photo.png')
console.log(one)  //photo.png

const two = path.dirname('/project/uploads/photo.png')
console.log(two)  // '/project/uploads'

const three = path.extname('/uploads/photo.jpeg')
console.log(three)    // .jpeg

//----------------------------------------------------------------------
//write a file using fs/promises

const fs = require('fs/promises');

(async()=>{
    try{
     await fs.writeFile('sample.txt','hello world is the content');
     console.log('file written successfully');
    }catch(err){
        console.error('error writing file',err)
    }
})()

//read a file using fs/promises

const fs = require('fs/promises');

(async()=>{
    try {
        const data = await fs.readFile('sample.txt','utf=8')
        console.log('file content:',data)
    } catch (error) {
        console.error('error reading file',error)
        
    }
})()

//------------------------------------------------------------------------------
//writing JSON to a file

const fs = require('fs/promises');

(async()=>{
    try {
        
        const user = {
            name: "Aisha",
            age: 22,
            department: "Science",
            marks: 89
          };

          const jsonData = JSON.stringify(user,null,2);

          await fs.writeFile('user.json',jsonData,'utf-8');
          console.log('JSON data written successfully');
    } catch (error) {
        console.error('error writing json file',error)
    }
})()

//-----------------------------------------------------------------------------------
//reading JSON from a file

const fs = require('fs/promises');

(async()=>{
    try {
        const data = await fs.readFile('user.json','utf-8')

        const user = JSON.parse(data);
        console.log(data)
    } catch (error) {
        console.error('error occured',error)
        
    }
})()


//----------------------------------------------------------------------------------------
//EVENTS: once() vs one()

emitter.on('message',(msg)=>{
  console.log('new message',msg)
})

emitter.once('payement-success',()=>{
  console.log('thankyou ! your payement was successful')
})

//------------------------------------------------------------------------------------
//router 
const router = require('express').Router();

router.get('/',(req,res)=>{
  res.send('all users')
})

module.exports =router;

//----------------------------------------------------------------------
//handle divide by zero in route params

const express = require('express');
const app = express()

app.get('/divide/:a/:b',(req,res)=>{
    const {a,b} = req.params;
    const num1 = Number(a);
    const num2 = Number(b);

    if(num2===0){
        return res.status(400).send('error: division by zero not allowed')
    }
    const result = num1/num2;
    res.send(`${result}`)
})

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`)
})

//---------------------------------------------------------------------------
//middleware that logs URL + method + timestamp

const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next()
})

app.get('/',(req,res)=>{
    res.send('this is home page')
})

app.listen(3000,()=>{
    console.log(`server running at http://localhost:3000`)
})

//-----------------------------------------------------------------------------
// Write a file only if it doesn’t already exist

const express = require('express');
const app = express();
const fs = require('fs/promises');

app.get('/create-file', async (req,res)=>{
    try {
        await fs.access('simple.txt')
        res.send('file already exists')
    } catch{
        await fs.writeFile('simple.txt','hello world');
        res.send('file created successfully')
    }
})

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`)
})

//--------------------------------------------------------------------
//Read a file, reverse its content, and save it

const express = require('express');
const app = express()
const fs = require('fs/promises');

app.get('/reverse-file', async(req,res)=>{
    try {
        let data = await fs.readFile('sample.txt','utf-8');
        let reversed = data.split("").reverse().join("");
        await fs.writeFile('reversed.txt',reversed);
        res.send('file reversed successfully')
    } catch (error) {
        res.status(500).send('error handling file:'+ error.message)
    }
})

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`)
})

//---------------------------------------------------------------------------------------------
const express = require('express');
const app = express();

app.get('/sum/:a/:b',(req,res)=>{
    const {a,b} = req.params;
    res.send({sum: Number(a) + Number(b)})
})

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`)
})

//-------------------------------------------------------------------------
//Append the current timestamp each time API is called

const express = require('express');
const app = express();
const fs = require('fs/promises');

app.get('/log-time', async(req,res)=>{
    const timestamp = new Date().toISOString() + "\n";
    await fs.appendFile('timestamp.txt',timestamp);
    res.send('timestamp logged!')
})

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`)
})

//-------------------------------------------------------------------------
//block all request except /health route

const express = require('express');
const app = express();

app.use((req,res,next)=>{
    if(req.url==='/health'){
        return next();
    }

    res.status(403).send('access denied')
})

app.get('/health',(req,res)=>{
    res.send('server is healthy')
})

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`)
})

//-----------------------------------------------------------------------------
//CORS - applications

const express = require('express')
const app = express();

app.use(cors({
  origin: 'http://myfrontend.com',
  methods: ['GET','POST'],
  allowedHeaders:['Content-Type','Authorization']
}));

app.get('/',(req,res)=>{
  res.json({message:"hello from backend"})
})

app.listen(3000,()=>{
  console.log(`server running on http://localhost:3000`)
})

//-----------------------------------------------------------------------------
//only route for '/home' should be accessible rest all show page not found
const express = require('express');
const app = express();

app.get('/home',(req,res)=>{
    res.send('home page')
})

app.use((req,res)=>{
    res.status(404).send('page not found')
})



app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`)
})

//-----------------------------------------------------------
//check if session is present or not
const express = require('express')
const app = express();
const session = require('express-session');

app.use(session({
    secret:'mySecretKey',
    resave:false,
    saveUninitialized:true
}));

app.get('/login',(req,res)=>{
    req.session.user ='Shifana';
    res.send('session created for user')
});

app.get('/check',(req,res)=>{
    if(req.session.user){
        res.send('session exists ')
    }else{
        res.send('no session found')
    }
})

app.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        if(err){
            return res.send('error while logging out')
        }
        res.send('session destroyed')
    })
})

app.listen(3000,()=>{
    console.log(`server running on port http://localhost:3000`)
})


//------------------------------------------------------------------------------------------
//read a file and write the content in the browser
const express=require('express')
const app = express();
const fs = require('fs')

app.get('/',(req,res)=>{
    fs.readFile('sample.txt','utf-8',(err,data)=>{
        if(err){
            res.status(500).send("error reading file")
        }else{
            res.send(data)
        }
    })
})

app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`)
})

//--------------------------------------------------
//example for child process

const {exec} = require('child_process');

console.log('main process started');

exec('dir',(error,stdout,stderr)=>{
    if(error){
        console.error(`Error :${error.message}`)
        return;
    }
    if(stderr){
        console.error(`error: ${stderr}`);
        return;
    }
    console.log(`files in drectory: \n`,stdout)
})
console.log('main process is still running')

//cluster module
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {

    http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`Hello from worker ${process.pid}\n`);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}
