onload = () => {
    (document.getElementById('btnLogin') as HTMLInputElement).addEventListener('click', evento => {
        evento.preventDefault();
        const username: string = (document.getElementById('username') as HTMLInputElement).value;
        const password: string = (document.getElementById('password') as HTMLInputElement).value;
        const msg = (document.getElementById('msg') as HTMLDivElement);

        fetch(backendAddress + 'accounts/token-auth/', {
            method: 'POST',
            body: JSON.stringify({
                'username': username,
                'password': password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response: Response) => {
            if (response.ok) {
                return response.json();
            } else {
                if (response.status == 401) {
                    msg.innerHTML = 'Usuário ou senha inválidos.';
                }
                throw new Error('Falha na autenticação');
            }
        })
        .then((data: { token: string }) => {
            const token: string = data.token;
            localStorage.setItem('token', token);
            console.log(token)
            window.location.replace('index.html');
        })
        .catch(erro => { console.log(erro) });
    });
};
