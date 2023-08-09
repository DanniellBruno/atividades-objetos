const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    }
]

const jovens = [0]
const adultos = [0]

usuarios.forEach(usuario => {
    if (usuario.idade < 18) {
        jovens.push(usuario)
    } else {
        adultos.push(usuario)
    }
});

console.log("Jovens:", jovens)
console.log("Adultos:", adultos)