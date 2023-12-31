onload = () => {
    // Carrega os dados do banco de dados
    // e preenche o formulário
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const idPlace = document.getElementById('id') as HTMLSpanElement
    if(id) {
        console.log('id = ', id);
        idPlace.innerHTML = id;
        fetch(backendAddress + 'forum/pub/public/' + id + '/')
        .then(response => response.json())
        .then(pub => {
            let campos = ['titulo', 'texto']
            for(let i=0; i<campos.length; i++) {
                (document.getElementById(campos[i]) as HTMLInputElement).value = pub[campos[i]];
            }
        })
        .catch(erro => {
            console.log('Deu erro: ' + erro);
        });
    } else {
         idPlace.innerHTML = 'URL mal formada: ' + window.location;
    }
    
    (document.getElementById('atualiza') as HTMLButtonElement)
        .addEventListener('click', (evento) => {
    evento.preventDefault();
    const form = document.getElementById('meuFormulario') as HTMLFormElement;
    const elements = form.elements;
    let data: Record<string, string> = {};
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLInputElement;
        data[element.name] = element.value;
    }
    const token = localStorage.getItem('token'); // Recupera o token de autenticação
    fetch(backendAddress + "forum/pub/" + id + '/', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Authorization': 'Token ' + token,
            'Content-Type': 'application/json'
            }
    })
    .then(response => {
        if(response.ok) {
            (document.getElementById('mensagem') as HTMLDivElement).innerHTML = 'Sucesso'
        } else {
        (document.getElementById('mensagem') as HTMLDivElement).innerHTML = 'Erro: '
                        + response.status + " " + response.statusText
        }
    })
    .catch(erro => { console.log('Deu erro: ' + erro)

})})}