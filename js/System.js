class System {
  constructor() {}

  authenticate(actualCode, enteredCode) {
   
      //O texto daí deve ficar fora do if
      textSize(50);
      fill("black");
      text(code, 300, 300);

      //O if retorna verdadeiro se a condição acontece, caso contrário retorna falso (literalmente com o comando return hehe)
      if(actualCode === enteredCode.toUpperCase()){
        return true
      } else {
        return false
    };
    // Adicionar código para "return true" se a resposta correta for inserida senão "return false".
  }
}
