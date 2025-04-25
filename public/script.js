const loginBtn = document.getElementById('login-btn')
const email = document.getElementById('login-email')
const password = document.getElementById('login-password')

loginBtn.addEventListener('click', () => {
    try {
        const data = {
            email: email.value,
            password: password.value
        }
        fetch('/login-info', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => alert(res.message))
            .catch(res => alert(res.message))
    } catch (e) {
        alert(e.message)
    }
})

function activeBtn() {
    if (email.value && password.value) {
        loginBtn.classList.add('btn-active')
    } else {
        loginBtn.classList.remove('btn-active')
    }
}

email.addEventListener('input', () => {
    activeBtn()
})
password.addEventListener('input', () => {
    activeBtn()
})