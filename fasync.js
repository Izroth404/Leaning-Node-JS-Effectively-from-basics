// async appraoch
const { readFile, writeFile } = require('fs')
console.log('start');
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
           { flag: 'a'},
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log('done with the task');
                console.log(result);
            });
    })
})
console.log('starting with the next one ');