let text = document.getElementById('test').value

 let fun = () => {
    console.log(text)
}
let id = document.getElementById('test')

let url = '/data'

// let getData = async (url) => {
//     let res = await fetch(url)
//     let result = await res.json()
//     console.log(result)
// }

function getData(){
    return fetch(url, {
        method: 'GET',
        contentType: 'application/json',
        mode: 'cors'
    })
}

id.onclick = getData

console.log('sdgsg')