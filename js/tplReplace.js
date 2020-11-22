/**
 * 字符串模版替换
 * 
 * 可以升级添加with引用
 * 
 * <#with reference>today is {{date}}, weather is {{weather}}.</with>
 * 
 */

 function convertToStr(tpl, data) {
    var reg = /{{(\w+)}}/g;

    return tpl.replace(reg, (matchStr, catpure ,pos, originText) => {
        console.log('matchStr: ', matchStr);
        console.log('catpure: ', catpure);
        return data[catpure];
    })
    
 }

 var str = 'today is {{date}}, weather is {{weather}}.';

 var data = {
    date: '2020-11-22',
    weather: 'raining'
};

console.log(convertToStr(str, data));


