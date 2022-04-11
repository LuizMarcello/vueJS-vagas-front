<!-- Parte visual do componente. Elementos html  -->
<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <!-- Adicionando aqui, os componentes importados -->
        <!-- Usando o seletor em "kebab case" -->
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <!-- kebab-case:(descricao-vaga-teste) -->
    <!-- camelCase:(descricaoVagaTeste) -->
    <!-- PascalCase(DescricaoVagaTeste) -->

    <!-- Os nomes ds props aqui são enviadas em "kebab-case(descricao-vaga-teste)" -->
    <!-- kebab-case na parte de templates e camelCase na parte de scripts -->

    <!-- Instanciando o componente filho ListaVagas.vue -->
    <!-- <h2>Template customizado (slots com escopo definido)</h2>
    <lista-vagas v-slot:default="slotProps">
      <div v-for="(vvaga, index) in slotProps.vagahs" :key="index">
        <h5>{{ vvaga.titulo }}</h5>
        <p>{{ vvaga.descricao }}</p>
        <hr />
      </div>
    </lista-vagas> -->

    <!--   <br />
    <br />
    <h2>Template padrão</h2> -->

    <lista-vagas>
      <!--
      <template v-slot:titulo="slotProps">{{ slotProps.dadosTitulo.titulo }} <hr> </template>

      <template v-slot:default="slotProps">{{ slotProps.vagahs }} <hr> </template>

      <template v-slot:rodape="slotProps">{{ slotProps.dadosRodape.titulo }} </template>
      -->
    </lista-vagas>

    <!-- Usando 3 instâncias separadas do mesmo componente -->
    <!-- Definindo as propriedades nas 3 instâncias do mesmo componente filho -->
    <!-- Propriedades(props) serão enviadas deste componente "pai" ao componente 
    "filho". Se manterão reativas.-->
    <div class="row mt-5">
      <div class="col-4">
        <indicadorr
          tituloo="Vagas abertas"
          indicadorr="100"
          bgg="bg-dark"
          colorr="text-white"
        ></indicadorr>
      </div>

      <div class="col-4">
        <indicadorr
          tituloo="Profissionais cadastrados"
          indicadorr="225"
          bgg="bg-dark"
          colorr="text-white"
        ></indicadorr>
      </div>

      <div class="col-4">
        <indicadorr
          tituloo="Visitantes online"
          :indicadorr="usuariosOnLineee"
          bgg="bg-light"
          colorr="text-dark"
        ></indicadorr>
        <!-- {{ usuariosOnLineee }} -->
      </div>
    </div>
  </div>
</template>

<script>
/* Para codificar e exportar o objeto de configuração do vueJS, para o componente.
   Atributos da instância do vueJS */
/* Importando o componente para este componente "Home.vue" */
import Indicadorr from "@/components/comuns/Indicador.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import ListaVagas from "@/components/comuns/ListaVagas.vue";

/* Exportando o Seletor deste componente */
export default {
  name: "Home",

  /* Declarando os componentes importados acima, através da
     propriedade/objeto literal "components", que configura
     este componente "Home" */
  components: { PesquisarVaga, Indicadorr, ListaVagas },

  data: () => ({
    usuariosOnLineee: 0,
  }),

  methods: {
    getUsuariosOnLine() {
      /* Propriedade acima Recebendo um número aleatório */
      this.usuariosOnLineee = Math.floor(Math.random() * 101);
    },
  },

  /* Métodos (hooks/ganchos) do ciclo de vida do componente */
  /* hook(gancho) quando o componente for criado */
  created() {
    /* Método nativo do javaScript, vai acionar o método
     "getUsuariosOnLine()" a cada 2 segundos */
    setInterval(this.getUsuariosOnLine, 2000); //a cada 2 segundos
  },

  /* activated() Gancho(hook) executado quando o componente for "ativado/reativado". */

  /* Relacioandos a ativação/desativação dos componentes */
  /* Com a tag <keep-alive></keep-alive> */
  /*  
  activated() {
    console.log("Componente é ativado");
  },
  deactivated() {
    console.log("Componente é desativado");
  }, 
  */

  /* Relacioandos a montagem/desmontagem dos componentes */
  /* 
  beforeUnmount() {
    console.log("Antes de desmontar/destruir o componente home");
  },
  unmounted() {
    console.log("Desmontado/destruído o componente home");
  }, 
  */
};
</script>

<!-- Define o estilo específico, somente para este componente -->
<!-- Add "scoped" attribute to limit CSS to this component only-->
<style scoped></style>
