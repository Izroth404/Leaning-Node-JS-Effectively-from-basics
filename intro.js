const amount = 12

if (amount>13){
    console.log('Big')
}
else{
    console.log('Smol')
}

console.log('bless u')


console.log(__dirname);
setInterval(() => {
    console.log('helo  world!');
}, 1000);


//modules
const a='rana'
const b='pagla'
const sayHi= (name) =>{
    console.log(`helo there ${name}`);
}

sayHi('bidikhor')
sayHi(a)
sayHi(b)


//local
const a='rana'
//shared from
const b='bidi'
const c = 'pagla'

console.log(module);

module.exports ={b,c}


// os module
const os= require('os')
// current user info
const user = os.userInfo()
// system uptime
console.log(`system.uptime is ${os.uptime}`)
const currentos = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freememem: os.freemem(),
}
console.log(currentos);


//os module
const path = require("path");
console.log(path.sep);
const filepath = path.join('./contents/','subfolder','file.txt')
console.log(filepath)
const base = path.basename(filepath)
console.log(base);
const absolte = path.resolve(__dirname,'contents','subfolder','file.txt')
console.log(absolte);



// synchornous
const  {readFileSync, writeFileSync}  = require('fs')
const first = readFileSync('./contents/first.txt','utf-8')
const second = readFileSync('./contents/subfolder/file.txt','utf-8')

console.log(`${first}\n${second}`);

writeFileSync(
    `./contents/result-sync.txt`,
    `here is the result:${first} , ${second}`,
    {flag :'a'}
)


// async appraoch
const { readFile, writeFile } = require('fs')
readFile('./contents/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    // console.log(result)
    const first = result;
    readFile('./contents/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        const second = result
        writeFile('./contents/result-sync.txt',
            `here is the result of result file sync: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(result);
            });
    })
})


// package and module dependencies check
const _= require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems =_.flattenDeep(items)
console.log(newItems);
