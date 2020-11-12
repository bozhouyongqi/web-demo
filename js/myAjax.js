/**
 * 封装Ajax请求
 * 
 * 简单封装
 */

 function request(method, url, body = null) {

    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true); // xhrReq.open(method, url, async, user, password);后面三个参数可以省略
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onreadystatechange(function() {
        if (xhr.readyState !== 4) {
            return;
        }
        if (xhr.status === 200 | xhr.status === 304) {
            return resolve(xhr.responseText);
        }
        return reject(new Error(xhr.responseText));
    });

    xhr.send(body);
 }