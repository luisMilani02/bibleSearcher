const URL = 'https://bible-api.com/'

const textos = document.getElementById('textos')
const regexVer = /^[0-9-]+$/
const regexCap = /^[1-9]/

async function ver(livro, capitulo, vesr) {
    const resp = await fetch(URL + livro + '+' + capitulo + ':' + vesr + '?translation=almeida')
    const respJson = await resp.json()

    console.log('oi '+resp.status)
    if (respJson == 200) {
        let versao = respJson.translation_name

        if (versao == "João Ferreira de Almeida") {
            versao = "JFA"
        }

        textos.innerHTML = ''
        
        const ref = document.createElement('h2')
        ref.textContent = respJson.reference + ' - ' + versao
        textos.appendChild(ref)

        console.log(respJson.reference + ' - ' + versao)
        for (let verse of respJson.verses) {
            const text = document.createElement('p')
            text.textContent = verse.verse + ' - ' + verse.text
            textos.appendChild(text)
        }
        
        console.log(resp.status)
    } else {
        erroServer(resp.status)
    }    
}

async function cap(livro, capitulo) {
    const resp = await fetch(URL + livro +'+' + capitulo + '?translation=almeida')
    const respJson = await resp.json() 
    
    if (resp.status == 200) {
        let versao = respJson.translation_name

        if (versao == "João Ferreira de Almeida") {
            versao = "JFA"
        }

        textos.innerHTML = ''

        const ref = document.createElement('h2')
        ref.textContent = respJson.reference + ' - ' + versao
        textos.appendChild(ref)

        console.log(respJson.reference + ' - ' + versao)
        for (let verse of respJson.verses) {
            const text = document.createElement('p')
            text.textContent = verse.verse + ' - ' + verse.text
            textos.appendChild(text)
        }

        console.log(resp.status)
    } else {
        erroServer(resp.status)
    }    
}

function pesquisa() {
    const livroInput = document.getElementById('livro')
    const capInput = document.getElementById('cap')
    const verInput = document.getElementById('ver')

    const livro = livroInput.value 
    const capitulo = capInput.value
    const versiculo = verInput.value 

    if (livro == null || livro == '') {
        erro('livro')
    } else {
        if (versiculo == null || versiculo == '' || versiculo == 0) {
            if (regexCap.test(capitulo)) {
                cap(livro, capitulo)
            } else {
                erro('capitulo')
            }
        } else {
            if (regexVer.test(versiculo)) {
                ver(livro, capitulo, versiculo)
            } else {
                erro('versiculo')
            }
        }
    }    
}

function erro(tipo) {
    if (tipo == 'livro') {
        return alert(`Insira um valor valido`)
    } else {
        return alert(`Insira um valor valido no ${tipo}`)
    }
}

function erroServer(erro) {
    console.log(`Erro: ${erro}`)
    return alert(`Ocorreu um erro com o servidor, código: ${erro}`)
}