/**
 * JSONP实现
 * 
 */

 function jsonp({url, params, callbackName}) {
    const generateUrl = () => {
        let dataSrc = '';

        dataSrc = Object.keys(params).reduce((src, key) => {
            return src += `${key}=${params[key]}&`;
        }, '');

        return `${url}?${dataSrc}callback=${callbackName}`;
    }

    return new Promsie((resolve, reject) => {
        // 这里主要是包装成Promise对象
        const scriptElem = document.createElement('script');
        scriptElem.src = generateUrl();
        scriptElem.onerror = function(event) {
            reject();
            if (window[callbackName]) {
                window[callbackName] = null;
            }
        }
        document.body.appendChild(scriptElem);
        
        window[callbackName] = function(data) {
            resolve(data);
            scriptElem.onerror = null;
            document.body.removeChild(scriptElem);
            window[callbackName] = null;
        }
    });
 }