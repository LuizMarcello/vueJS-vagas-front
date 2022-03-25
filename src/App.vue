/* Parte visual do componente. Elementos html */
<template>
  <div>
    <!-- <h1>Componente App</h1> -->

    <!-- <button @click="desmontarComponente()">
      Desmontar o componente Conteudo
    </button>-->
    <!-- Seletor de componentes do template -->
    <!-- Aqui, o nome do seletor do componente
         pode ser em "kebab case", padrão igual
    das tags html-->
    <!-- Instância do componente filho "TopoPadrao.vue" -->
    <!-- Evento capturado do componente filho, usando a diretiva "v-on"(@) -->
    <!-- recebido como objeto: -->
    <!-- <topo-padrao @eventoQueSeraCapturadoNoComponenetePai="acao($event)" /> -->
    <!-- Recebido como função de callback: -->
    <!-- <topo-padrao @eventoQueSeraCapturadoNoComponenetePai="$event('Texto 14', 129)" /> -->
    <!-- Instanciando os componentes -->
    <!-- exibirAlerta começa em "false", então componente Alerta.vue
    não será exibido inicialmente-->
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="componente = $event" />
    <alerta v-if="exibirAlerta" />
    <conteudo v-if="visibilidade" :conteeeudo="componente"></conteudo>
  </div>
</template>

/* Existem o "nome do script do componente", o "nome do
   componente" e o "nome do seletor do componente" */

/* Para codificar e exportar o objeto de configuração do vueJS,
   para o componente */
<script>
/* Importando os componentes */
/* Também em "Pascal case" */
/* O alias "@" indica sempre o "src" do projeto, para importar */
import Alerta from "@/components/comuns/Alerta.vue"
import Conteudo from "@/components/layouts/Conteudo.vue"
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue"
import TopoPadrao from "@/components/layouts/TopoPadrao.vue"

/* Definindo estes componentes no objeto de configuração
   da instância do vueJS, na propriedade "componentes" */
export default {
  name: "App",

  /* Propriedades reativas */
  data: () => ({
    visibilidade: true,
    componente: "Home",
    exibirAlerta: false
  }),

  components: {
    /* Seletor e componente */
    /* Aqui, o nome do seletor pode ser definido
       em "PascalCase" */
    Alerta,
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
  },
  /* Ciclo de vida, quando o componente for montado */
  mounted() {
    /* Ficará na escuta, na espera deste alerta, de algum componente,
       no caso, do componente "Alerta.vue", daí executará essa
       função de callBack */
    this.emitter.on('alerta', () => {
      this.exibirAlerta = true
      /* A mensagem de alerta aparecerá somente por 4 segundos */
      setTimeout(() => this.exibirAlerta = false, 4000)
      console.log('Apresentar a mensagem de alerta customizada')
    })
  }

  /*  methods: {
    desmontarComponente() {
      this.visibilidade = false;
    },
    acao(p1, p2) {
      console.log(
        "Função de callback definida no componente Pai e chamada no componente Filho"
      );
      console.log("p1: ", p1);
      console.log("p2: ", p2); */
  /* ou */
  //console.log(event);
  /*  }, */
  /*  }, */
};
</script>


<style scoped>
/* Define o estilo */
/* Na hierarquia, o estilo visual definido no componente de nível
   mais alto, é propagado para os componentes inferiores */
</style>
