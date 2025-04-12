let livros = document.getElementById('livro')
let capi = document.getElementById('cap')

const livrosLista = [
    {book: "Gênesis", caps: 50},
    {book: "Êxodo", caps: 40},
    {book: "Levítico", caps: 27},
    {book: "Números", caps: 36},
    {book: "Deuteronômio", caps: 34},
    {book: "Josué", caps: 24},
    {book: "Juízes", caps: 21},
    {book: "Rute", caps: 4},
    {book: "1 Samuel", caps: 31},
    {book: "2 Samuel", caps: 24},
    {book: "1 Reis", caps: 22},
    {book: "2 Reis", caps: 25},
    {book: "1 Crônicas", caps: 29},
    {book: "2 Crônicas", caps: 36},
    {book: "Esdras", caps: 10},
    {book: "Neemias", caps: 13},
    {book: "Ester", caps: 10},
    {book: "Jó", caps: 42},
    {book: "Salmos", caps: 150},
    {book: "Provérbios", caps: 31},
    {book: "Eclesiastes", caps: 12},
    {book: "Cantares", caps: 8},
    {book: "Isaías", caps: 66},
    {book: "Jeremias", caps: 52},
    {book: "Lamentações", caps: 5},
    {book: "Ezequiel", caps: 48},
    {book: "Daniel", caps: 12},
    {book: "Oseias", caps: 14},
    {book: "Joel", caps: 3},
    {book: "Amós", caps: 9},
    {book: "Obadias", caps: 1},
    {book: "Jonas", caps: 4},
    {book: "Miqueias", caps: 7},
    {book: "Naum", caps: 3},
    {book: "Habacuque", caps: 3},
    {book: "Sofonias", caps: 3},
    {book: "Ageu", caps: 2},
    {book: "Zacarias", caps: 14},
    {book: "Malaquias", caps: 4},
    {book: "Mateus", caps: 28},
    {book: "Marcos", caps: 16},
    {book: "Lucas", caps: 24},
    {book: "João", caps: 21},
    {book: "Atos", caps: 28},
    {book: "Romanos", caps: 16},
    {book: "1 Coríntios", caps: 16},
    {book: "2 Coríntios", caps: 13},
    {book: "Gálatas", caps: 6},
    {book: "Efésios", caps: 6},
    {book: "Filipenses", caps: 4},
    {book: "Colossenses", caps: 4},
    {book: "1 Tessalonicenses", caps: 5},
    {book: "2 Tessalonicenses", caps: 3},
    {book: "1 Timóteo", caps: 6},
    {book: "2 Timóteo", caps: 4},
    {book: "Tito", caps: 3},
    {book: "Filêmom", caps: 1},
    {book: "Hebreus", caps: 13},
    {book: "Tiago", caps: 5},
    {book: "1 Pedro", caps: 5},
    {book: "2 Pedro", caps: 3},
    {book: "1 João", caps: 5},
    {book: "2 João", caps: 1},
    {book: "3 João", caps: 1},
    {book: "Judas", caps: 1},
    {book: "Apocalipse", caps: 22}
]

livros.addEventListener('change', capits)

livrosLista.forEach(book => {
    const livro = document.createElement('option')
    livro.textContent = book.book
    livros.appendChild(livro)
});

function capits() {
    const encontra = livrosLista.find(book => book.book === livros.value)
    
    if (encontra) {
        capi.innerHTML = ""
        console.log("found")
        for (let i = 1; i <= encontra.caps; i++) {
            const capis = document.createElement('option')
            capis.textContent = i
            capi.appendChild(capis)
            console.log(capis.textContent)
        }
    } else {
        console.log("didn't found")
    }
}