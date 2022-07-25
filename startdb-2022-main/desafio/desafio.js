const { questionNewPassword } = require('readline-sync');
const readline = require('readline-sync');
/* var nome = readline.question("Qual seu nome?"); */
const Forca = require('./forca');
const palavras = ['abacaxi', 'carro', 'jogo']
const palavraSecreta = palavras[Math.floor(Math.random()) * palavras.length]
const jogo = new Forca(palavraSecreta);




if (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
    console.log('\nA palavra tem ' + palavraSecreta.length + ' letras!\n')
}
console.log("=".repeat(30)) // cria uma divisória entre a palavra e os dados do jogo ussaando '='

const inicio_jogo = readline.question("\n\nAperte enter ou espaco e confirme para comecar " ); // é necessário apertar enter ou espaço para q o jogo não contabilize o enter ou espaço como strings dentro da lista de letras corretas.

if (inicio_jogo == ''){



    jogo.chutar(inicio_jogo);

    while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {

    
    

        const chute = readline.question("\n\nAguardando chute: " );
        console.log("=".repeat(30)) // cria uma divisória entre a palavra e os dados do jogo ussaando '='

        jogo.chutar(chute.toUpperCase());
        


        jogo.buscarDadosDoJogo()
    }

    jogo.buscarEstado()

    console.log("\nvocê " + jogo.buscarEstado() + '\n');
}
else{
    const inicio_jogo = readline.question("\n\nAperte enter ou espaco e confirme para comecar " );
    if (inicio_jogo == ''){
        console.log('Reinnicie o  jogo e tente novamente!')
    }
}
