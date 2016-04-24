// hack 环境变量
var env = {
    NODE_CONFIG_DIR: [__dirname, 'config'].join('/'),
    DEBUG:"*"
};
console.log('本来的环境变量：');
printConfigEnv();
replaceEnv();
console.log('改写以后的环境变量：');
printConfigEnv();

function printConfigEnv(){
    for(var i in env){
        console.log(i + ':' + process.env[i]);
    }
}

function replaceEnv(){
    for(var i in env){
        process.env[i] = env[i];
    }
}
