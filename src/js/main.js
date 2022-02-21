
const fetchPost = (dataPost, path) =>{
    /*fetch('http://localhost:8000/user'+path,{
        method : 'POST',
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        referrerPolicy: 'same-origin',
        body : JSON.stringify(dataPost),
        headers : {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => alert(data.msg));*/


    axios.post('http://localhost:8000/user'+path, dataPost)
    .then(data => alert(data.data.message));
}


