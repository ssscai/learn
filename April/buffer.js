const fs=require('fs');
fs.readFile('a.jpg',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
        // var str=data.toString();
        // fs.writeFile('b.jpg',str,err=>{
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log('完事')
        //     }
        // })


         
        fs.writeFile('b.jpg',data,err=>{
            if(err){
                console.log(err)
            }else{
                console.log('完事')
            }
        })
    }
})