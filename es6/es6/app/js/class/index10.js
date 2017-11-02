import 'babel-polyfill';
//promise;
{
    let ajax = function (callback) {
        // console.log('执行')
        setTimeout(function () {
            callback && callback();
        }, 3000);
    };
    ajax(function () {
        //console.log('timeout')
    })
}

{
    //promise
    let ajax = function () {
        console.log('执行2');
        //返回promise实例
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000)
        })
    }
    ajax().then(function () {
        console.log('成功')
    }, function () {
        console.log('失败')
    })
}

{
    let ajax = function () {
        console.log('执行3');
        //返回promise实例
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000)
        })
    }
    ajax().then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 3000)
        })
    }, function () {
        console.log('失败')
    }).then(function () {
        console.log('执行4');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 3000)
        })
    }).then(function () {
        console.log('执行5')
    })

}


{
    let ajax = function (num) {
        console.log('执行10');
        //返回promise实例
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve();
            } else {
                throw new Error('错误')
            }
        })
    }
    ajax(3).then(function () {
        console.log('error')
    }).catch(function (err) {
        console.log(err, 'err')
    })
}

{
    //promise.all() 三个图片都加载出来则显示在页面上
    function loadImg(src) {
        return new Promise(function (resolve, reject) {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function () {
                reject(img)
            }
        })
    }

    function showImages(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img);
        })

    }
    //Promise.all把多个promise实例当作一个promise实例
    Promise.all([
        loadImg('http://sr3.pplive.com/cms/27/16/2e5c6dca3f2089cae1375b437af075cb.jpg.webp'),
        loadImg('http://sr2.pplive.cn/cms/39/00/de4c0bd87b2c8212abd894fd7bed14f3.jpg'),
        loadImg('http://sr1.pplive.cn/cms/28/33/91b4d71f73ffb541762865cd35012bb4.jpg')
    ]).then();
} 
{
    // promise.race();有一个图片加载完成则显示在页面上
    function loadImg(src) {
        return new Promise(function (resolve, reject) {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function () {
                reject(img)
            }
        })
    }

    function showImage(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p)
    }
    // Promise.race 多个实例中有个状态率先改变 则改变  别的则不再响应
    Promise.race([
        loadImg('http://sr3.pplive.com/cms/27/16/2e5c6dca3f2089cae1375b437af075cb.jpg.webp'),
        loadImg('http://sr2.pplive.cn/cms/39/00/de4c0bd87b2c8212abd894fd7bed14f3.jpg'),
        loadImg('http://sr1.pplive.cn/cms/28/33/91b4d71f73ffb541762865cd35012bb4.jpg')
    ]).then(showImage);
}