// 将用户传进来的data对象转换为查询字符串的形式
function resolveData(data){
    let arr = []
    for(let k in data){
        arr.push(k + '=' + data[k])
    }
    return arr.join('&')
}

function simpleAjax(options){
    // 创建XMLHttpRequest对象
    let xhr = new XMLHttpRequest()
    // 生成完整的查询字符串
    let qs = resolveData(options.data)
    // 查询事件类型，注意URL地址的不同
    // GET事件
    if(options.method.toUpperCase() === 'GET'){
        xhr.open('GET', options.url + '?' + qs)
        xhr.send()
    }
    // POST事件
    else if(options.method.toUpperCase() === 'POST'){
        xhr.open('POST', options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }

    // 监听onreadystatechange事件
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            let result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}