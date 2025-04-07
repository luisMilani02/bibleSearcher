const URL = 'https://bible-api.com/'

const textos = document.getElementById('textos')


async function ver(livro, capitulo, vesr) {
    const resp = await fetch(URL + livro + '+' + capitulo + ':' + vesr + '?translation=almeida')
    const respJson = await resp.json()

    textos.innerHTML = ''
    
    const ref = document.createElement('h2')
    ref.textContent = respJson.reference + ' - Versão ' + respJson.translation_name
    textos.appendChild(ref)

    console.log(respJson.reference + ' - Versão ' + respJson.translation_name)
    for (let verse of respJson.verses) {
        const text = document.createElement('p')
        text.textContent = verse.verse + ' - ' + verse.text
        textos.appendChild(text)
        console.log(verse.verse + ' - ' + verse.text)
    }
}

async function cap(livro, capitulo) {
    const resp = await fetch(URL + livro +'+' + capitulo + '?translation=almeida')
    const respJson = await resp.json()    

    textos.innerHTML = ''

    const ref = document.createElement('h2')
    ref.textContent = respJson.reference + ' - Versão ' + respJson.translation_name
    textos.appendChild(ref)

    console.log(respJson.reference + ' - Versão ' + respJson.translation_name)
    for (let verse of respJson.verses) {
        const text = document.createElement('p')
        text.textContent = verse.verse + ' - ' + verse.text
        textos.appendChild(text)
        console.log(verse.verse + ' - ' + verse.text)
    }
}

function pesquisa() {
    const livroInput = document.getElementById('livro')
    const capInput = document.getElementById('cap')
    const verInput = document.getElementById('ver')

    const livro = livroInput.value
    const capitulo = capInput.value
    const versiculo = verInput.value

    if (versiculo == null || versiculo == '' || versiculo == 0) {
        cap(livro, capitulo)
    } else {
        ver(livro, capitulo, versiculo)
    }
}

pesquisa()