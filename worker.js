const {parentPort} = require('worker_threads')

function fib(n){
    if(n<=1)return n;
    return fib(n-1)+fib(n-2)
}

parentPort.on('message',(num)=>{
    const result = fib(num);
    parentPort.postMessage(result)
})