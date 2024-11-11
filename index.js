class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    let ataque =
 switch (tipo) {
    case mago:
        ataque = Magia
         break;
    case guerreiro:
        ataque = Espada
         break;
    case monge:
        ataque = Artes Marciais
       break;
    case ninja:
        ataque = Shuriken
        break;

 
 }

    atacar(){
        console.log('O ${tipo} atacou usando ${ataque}')
    }
}

let personagem = new heroi(Hercules, 18, Mago)
atacar