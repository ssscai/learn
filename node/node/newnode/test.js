var str="multipart/form-data; boundary=----WebKitFormBoundarynO2W7sv7GXYC4mOP";
var arr=str.split('; ')
console.log(arr)
var arr1=arr[1].split('=');
console.log(arr1)
var arr2=arr1[1];
console.log(arr2)