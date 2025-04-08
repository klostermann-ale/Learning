//Função para exibir a tabuada de um número
function exibirTabuada(numero) {
    console.log("Tabuada do " + numero + ":");
    for ( j= 1; j<= 10; j++) {
      console.log(numero + "x" + j+ "=" + (numero * j));
   }
 }
 
 //Exemplo de uso da função
 let numeroEscolhido =13;
 exibirTabuada(numeroEscolhido);