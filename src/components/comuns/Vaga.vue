<template>
  <div class="card">
    <div class="card-header bg-dark text-white">{{ titulo }}</div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"
<<<<<<< HEAD
        >Salário: {{ salario }} | Modalidade: {{ modalidade }} | Tipo:
        {{ tipo }} | Publicação: {{ publicacao }}</small
=======
        >Salário: {{ salario }} | Modalidadeeeee: {{ getModalidade }} | Tipo:
        {{ getTipo }} | Publicação: {{ getPublicacao }}</small
>>>>>>> 888e74136e87ded9f33f980efc43aa9c51551853
      >
    </div>
  </div>
</template>

<!-- kebab-case:(descricao-vaga-teste) -->
<!-- camelCase:(descricaoVagaTeste) -->
<!-- PascalCase(DescricaoVagaTeste) -->

<script>
/* Exportando o seletor */
export default {
  name: "Vagaaa",
  /* Aqui os nomes das props aqui são recebidas em "camelCase(descricaoVaga)" */
  /* kebab-case na parte de templates e camelCase na parte de scripts */
  /* Aqui associando um "array" ao props: */
  /*
   props: [
    "tituloVagaTeste",
    "descricaoVaga",
    "salario",
    "modalidade",
    "tipo",
    "publicacao",
  ],
   */
  /* Aqui associando um "objeto literal"(pares chave e valor) ao props:
     chave=nome da props e valor=tipo da props. A tipagem começa
     sempre com caracter maiúsculo */
  props: {
    titulo: {
      type: String,
      required: true,
      validator(conteudoPropsComoParametro) {
        /* console.log(
          "Prop: ",
          conteudoPropsComoParametro,
          conteudoPropsComoParametro.length
        ); */
        if (conteudoPropsComoParametro.length < 6) return false; //se estiver inválido
        return true; //se estiver válido
      },
    },
    descricao: {
      type: String,
      /* required: true, */
      //default: 'O contratante não adicionou uma descrição para esta vaga.'
      default() {
<<<<<<< HEAD
        return '*'.repeat(30)
      }
=======
        return "*".repeat(30);
      },
>>>>>>> 888e74136e87ded9f33f980efc43aa9c51551853
    },
    salario: {
      type: [Number, String] /* Aqui aceita os dois tipos */,
      required: true,
    },
    modalidade: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    publicacao: {
      type: String,
      required: true,
    },
  },
<<<<<<< HEAD
=======
  computed: {
    getModalidade() {
      switch (this.modalidade) {
        case "1":
          return "Home Office";
        case "2":
          return "Presencial";
      }
      return "";
    },
    getTipo() {
      switch (this.tipo) {
        case "1":
          return "CLT";
        case "2":
          return "PJ";
      }
      return "";
    },
    getPublicacao() {
      let dataPublicacao = new Date(this.publicacao)
      //return dataPublicacao.toLocaleString('pt-BR')
      return dataPublicacao.toLocaleDateString('pt-BR')
    },
  },
>>>>>>> 888e74136e87ded9f33f980efc43aa9c51551853

  /* Usando o ciclo de vida "created()" */
  /*
   created() {
    console.log("tituloVagaTeste: Tipo", typeof this.tituloVagaTeste);
    console.log("descricaoVaga: Tipo", typeof this.descricaoVaga);
    console.log("salario: Tipo", typeof this.salario);
    console.log("modalidade: Tipo", typeof this.modalidade);
    console.log("tipo: Tipo", typeof this.tipo);
    console.log("publicacao: Tipo", typeof this.publicacao);
  }, 
  */
};
</script>
