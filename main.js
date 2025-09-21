const {Worker, workerData} = require("worker_threads");

function readFileUsingWorker(filename){
    return new Promise((resolve,reject)=>{
        const worker = new Worker('./worker.js',{
        workerData:{filename}
    });


    worker.on('message',data=>resolve(data));
    worker.on('error',reject)

})
}

async function main(){
    const [file1,file2] = await Promise.all([
        readFileUsingWorker('file1.txt'),
        readFileUsingWorker('file2.txt')
    ]);

    console.log('file1 :',file1);
    console.log('file 2 :',file2)
}

main()
