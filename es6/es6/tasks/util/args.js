import yargs from 'yargs';//处理命令行工具的包
const args=yargs
.option('production',{
    boolean:true,
    default:false,
    describe:'min all script'
})
.option('watch',{
    boolean:true,
    default:false,
    describe:'watch all file'
})
.option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
})
.option('sourcemaps',{
    describe:'force the creation of sourcemapss'
})
// 设置服务器的端口
.option('port',{
    string:true,
    default:8080,
    describe:'server port'
})
.argv