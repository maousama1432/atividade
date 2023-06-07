/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma mensagem de erro quando houve atributos vazios.
*/

class Animal {
  constructor(nome, idade, especie) {
    if (!nome && !idade  && !especie) {
      throw new Error("Todos os atributos nome, idade e especie são necessários.");
    }

    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos() {
    return this.atributos();
  }

  atributos() {
    return {
      nome: this.nome,
      idade: this.idade,
      especie: this.especie
    };
  }
}

try {
  const meuAnimal = new Animal("Fido", 3, "cachorro");
  const atributos = meuAnimal.mostrarAtributos();

  // Imprimindo os atributos
  console.log(atributos.nome);
  console.log(atributos.idade);
  console.log(atributos.especie);
} catch (error) {
  console.error("Erro:", error.message);
}
