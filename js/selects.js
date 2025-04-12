let livros = document.getElementById('livro')
let capi = document.getElementById('cap')

const livrosLista = [
    {book: "Gênesis", caps: 50},
    {book: "Êxodo", caps: 40},
    {book: "Levítico", caps: 27},
    {book: "Números", caps: 36},
    {book: "Deuteronômio", caps: 34},
    {book: "josue", caps: 24},
    {book: "juizes", caps: 21},
    {book: "rute", caps: 4},
    {book: "1 samuel", caps: 31},
    {book: "2 samuel", caps: 24},
    {book: "1 reis", caps: 22},
    {book: "2 reis", caps: 25},
    {book: "1 cronicas", caps: 29},
    {book: "2 cronicas", caps: 36},
    {book: "esdras", caps: 10},
    {book: "neemias", caps: 13},
    {book: "ester", caps: 10},
    {book: "jo", caps: 42},
    {book: "salmos", caps: 150},
    {book: "proverbios", caps: 31},
    {book: "eclesiastes", caps: 12},
    {book: "cantares", caps: 8},
    {book: "isaias", caps: 66},
    {book: "jeremias", caps: 52},
    {book: "lamentacoes", caps: 5},
    {book: "ezequiel", caps: 48},
    {book: "daniel", caps: 12},
    {book: "oseias", caps: 14},
    {book: "joel", caps: 3},
    {book: "amos", caps: 9},
    {book: "obadias", caps: 1},
    {book: "jonas", caps: 4},
    {book: "miqueias", caps: 7},
    {book: "naum", caps: 3},
    {book: "habacuque", caps: 3},
    {book: "sofonias", caps: 3},
    {book: "ageu", caps: 2},
    {book: "zacarias", caps: 14},
    {book: "malaquias", caps: 4},
    {book: "mateus", caps: 28},
    {book: "marcos", caps: 16},
    {book: "lucas", caps: 24},
    {book: "joao", caps: 21},
    {book: "atos", caps: 28},
    {book: "romanos", caps: 16},
    {book: "1 corintios", caps: 16},
    {book: "2 corintios", caps: 13},
    {book: "galatas", caps: 6},
    {book: "efesios", caps: 6},
    {book: "filipenses", caps: 4},
    {book: "colossenses", caps: 4},
    {book: "1 tessalonicenses", caps: 5},
    {book: "2 tessalonicenses", caps: 3},
    {book: "1 timoteo", caps: 6},
    {book: "2 timoteo", caps: 4},
    {book: "tito", caps: 3},
    {book: "filemom", caps: 1},
    {book: "hebreus", caps: 13},
    {book: "tiago", caps: 5},
    {book: "1 pedro", caps: 5},
    {book: "2 pedro", caps: 3},
    {book: "1 joao", caps: 5},
    {book: "2 joao", caps: 1},
    {book: "3 joao", caps: 1},
    {book: "judas", caps: 1},
    {book: "apocalipse", caps: 22}
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