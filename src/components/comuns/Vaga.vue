<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <div>
            {{ titulo }}
          </div>
          <div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="favoritada"
              />
              <label class="form-check-label"
                >Favoritar</label
              >
              <!--  <button class="btn btn-danger" @click="dispararEventoComMitt()">
                Teste
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"
        >Salário: {{ salario }} | Modalidadeeeee: {{ getModalidade }} | Tipo:
        {{ getTipo }} | Publicação: {{ getPublicacao }}</small
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
  data: () => ({
    favoritada: false,
  }),
  /* "Assistindo" a alterações feitas no atributo "favoritada" acima. */
  watch: {
    favoritada(valorNovo) {
      if (valorNovo) {
        /* Mitt: Configurado globalmente em main.js*/
        this.emitter.emit("favoritarVaga", this.titulo);
      } else {
        /* Mitt: Configurado globalmente em main.js*/
        this.emitter.emit("desfavoritarVaga", this.titulo);
      }
    },
  },
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
        return "*".repeat(30);
      },
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
      let dataPublicacao = new Date(this.publicacao);
      //return dataPublicacao.toLocaleString('pt-BR')
      return dataPublicacao.toLocaleDateString("pt-BR");
    },
  },
  methods: {
    /*  dispararEventoComMitt() { */
    //Acessando a propriedade global definida em main.js,
    //que contém a instância da dependência mitt
    //Emitindo então um evento por meio do "emitter"
    //Barramento de evento global, que pode ser capturado
    //em qualquer componente
    /*  this.emitter.emit("eventoGlobal1", "Teste Captura Evento Parâmetro");
    }, */
  },

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
