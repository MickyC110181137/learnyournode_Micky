const fs = require('fs');
const s = require('path')
const path = process.argv[2];
const extName = process.argv[3]

fs.readdir(path, function callback(err, data){
    if(err) {console.err(err)}
    else{
        for(let i = 0;i <= data.length - 1; i++){
            if(s.extname(data[i]) ===  '.' + extName){
                console.log(data[i])
            }
        }
    }
});