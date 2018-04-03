//node.js命令行的参数配置  定制化参数
import yargs from 'yargs';
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
    default:3000,
    describe:'server port'
})
.argv

export default args;