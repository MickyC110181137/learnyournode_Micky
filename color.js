let count = 0;
for (let i = 2; i <=process.argv.length - 1; i++){
     count += process.argv[i]
};
console.log(count);