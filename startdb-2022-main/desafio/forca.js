const _palavraSec = 'abacaxi';
__palavraSec = _palavraSec.toUpperCase()

const letrasChutadas = []; // armazena todas as letraas chutadas independente de ela ser correta ou não
const letrasCorretas = []; // armazena as letras corretas chutadas pelo jogador. Ex: se a palavra secreta é 'ABACAXI' e o jogador chuta 'A' é armazenado apenas 1 caractere apesar de que na palavra se tem 3 letras 'A'.
const letrasUsadas = [] // armazena as letras usadas pelo jogador 
const contagemdeVidas = []; // são adicionadas as letras usadas em todas as ocasiões onde o jogador perde vida, para que sse tenha a quantidade de erros.
const limite = 1; // serve para configurar limite de caracteres aceitos na hora do chute. 
const vida0 = 6; // quantidade de vida inicial do jogador



class Forca {

  

  chutar(letra) { 
    
    if(limite >= letra.length){

      if(letrasChutadas.includes(letra)) {
      
        console.log('\n\nVocê já digitou essa letra \n\n');
        
        
      
      }
      else{
      if(__palavraSec.includes(letra)){
          letrasCorretas.push(letra);
          letrasChutadas.push(letra)
        }
        else{
          letrasChutadas.push(letra);
          contagemdeVidas.push(letra)
          ;

        }
      }
    }
    
}
  vida(erros){
    erros = contagemdeVidas.length;
    const vidas = 6 - contagemdeVidas.length
    
    console.log('Restam ' + vidas + ' vidas')
  }


  LetrasChutadas(){
    const letrasUsadas = [];
    letrasUsadas == [''];
    letrasChutadas.forEach(letra =>{
      letrasUsadas.push(letra);
    })
    console.log( 'Letras chutadas:  ' +  letrasUsadas)
  }

  mostrarLetras(){
    const letrasCertas = [];
    letrasCertas == ['']
    __palavraSec.split("").forEach(letra => {
      if(letrasCorretas.includes(letra)) {
        letrasCertas.push(letra);
      
      }
      else{
        letrasCertas.push('_');
      }
      
      
    })
    console.log('PALAVRA: ' + letrasCertas)
  }

  buscarDadosDoJogo(){
    this.mostrarLetras();  // mostra as letras já acertadas e as que ainda não foram acertadas
    console.log("=".repeat(30)) // cria uma divisória entre a palavra e os dados do jogo ussaando '='
    this.LetrasChutadas(); // mostra todas as letras chutadas durante o jogo 
    console.log("=".repeat(30)) // cria uma divisória entre a palavra e os dados do jogo ussaando '='
    this.vida() // mostra a quantidade de vidas do jogador
    console.log("=".repeat(30)) // cria uma divisória entre a palavra e os dados do jogo ussaando '='
    
  }
  buscarEstado() {

    if(contagemdeVidas.length == 6){ 
      return 'perdeu'} // quando o jogador obter 6 erros ele perde e o jogo acaba

    if(letrasCorretas.length == 6){
      return 'ganhou' // quando o jogador acertar a palavra completa ele ganha e o jogo acaba.
    }
  }
}

module.exports = Forca;