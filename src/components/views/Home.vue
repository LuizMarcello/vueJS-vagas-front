/* Parte visual do componente. Elementos html */
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

    <div class="row mt-5" v-for="(vagga, index) in vagasss" :key="index">
      <div class="col">
        <!--  {{ vagga }} -->
        <!-- Serão encaminhados via "props", ao componente filho -->
        <!-- Os nomes ds props aqui são enviadas em "kebab-case(descricao-vaga-teste)" -->
        <!-- kebab-case na parte de templates e camelCase na parte de scripts -->
        <!-- Ao invés de passarmos via props, cada atributo e seus valores separadamente
             (Ex: :titulo-vaga-teste="vagga.titulo"), passamos "todo o objeto" de uma só
        vêz, usando a diretiva v-bind-->
        <vagaa v-bind="vagga" />
      </div>
    </div>

    <!-- Usando 3 instâncias separadas do mesmo componente -->
    <!-- Definindo as propriedades nas 3 instâncias do mesmo componente filho -->
    <!-- Propriedades(props) serão enviadas deste componente "pai" ao componente 
    "filho". Se manterão reativas.-->
    <div class="row mt-5">
      <div class="col-4">
        <indicadorr tituloo="Vagas abertas" indicadorr="100" bgg="bg-dark" colorr="text-white"></indicadorr>
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


/* Para codificar e exportar o objeto de configuração do vueJS,
   para o componente. Atributos da instância do vueJS */
<script>
/* Importando o componente para este componente "Home.vue" */
import Indicadorr from "@/components/comuns/Indicador.vue";
import PesquisarVaga from "@/components/comuns/PesquisarVaga.vue";
import Vagaa from "@/components/comuns/Vaga.vue";

/* Exportando o Seletor deste componente */
export default {
  name: "Home",

  /* Declarando os componentes importados acima, através da
     propriedade/objeto literal "components", que configura
     este componente "Home" */
  components: { PesquisarVaga, Indicadorr, Vagaa },

  data: () => ({
    usuariosOnLineee: 0,
    vagasss: [],
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
  activated() {
    /* Recuperando os registros do localStorage do navegador e usando
    o JSON.parse() para converter a string em objeto, compativel com
    o javaScript */
    this.vagasss = JSON.parse(localStorage.getItem("vaggas"));
  },

  /* mounted() Gancho(hook) executado quando o componente for "montado". */
  mounted() {
    /* Escutando o evento personalizado "filtrarVagas"
       do componente PesquisarVaga.vue */
    /* Função de callback */
    this.emitter.on('filtrarVagas', vagaa => {
      /* Recuperando os registros do localStorage do navegador e usando
    o JSON.parse() para converter a string em objeto, compativel com
    o javaScript */
      const vaggas = JSON.parse(localStorage.getItem("vaggas"));

      /* Método filter() nativo do javascript
      que trabalha sobre arrays.
      true ou false: este método cria um novo array com todos
      os elementos que passaram no teste implementado na função */
      /* O método includes() determina se um array/objeto contém
      um determinado elemento ou não, retornando true ou false,
      respectivamente */
      this.vagasss = vaggas.filter(reg => reg.titulo.toLowerCase().includes(vagaa.titulo.toLowerCase()))
    })
  }

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


/* Define o estilo específico, somente para este componente */
<!-- Add "scoped" attribute to limit CSS to this component only-->
<style scoped>
</style>