const show = document.getElementById('show')

const input = prompt('Enter password')

const data = {
    password: input
}

fetch('/show', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    },
}).then(res => res.json())
    .then(res => {
        if(!res.data) return alert(res.message)
        show.innerText = JSON.stringify(res.data)
    }
)
    .catch(res => alert(res.message))