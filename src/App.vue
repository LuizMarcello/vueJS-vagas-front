/* Parte visual do componente. Elementos html */
<template>
  <div>
    <h1>Componente App</h1>
    <button @click="desmontarComponente()">
      Desmontar o componente Conteudo
    </button>
    <!-- Seletor de componentes do template -->
    <!-- Aqui, o nome do seletor do componente
         pode ser em "kebab case", padrão igual
         das tags html -->
    <topo-padrao />
    <conteudo v-if="visibilidade"></conteudo>
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
import Conteudo from "@/components/layouts/Conteudo.vue";
import TopoPadrao from "@/components/layouts/TopoPadrao.vue";

/* Definindo estes componentes no objeto de configuração
   da instância do vueJS, na propriedade "componentes" */
export default {
  name: "App",

  /* Propriedades reativas */
  data: () => ({
    visibilidade: true,
  }),

  components: {
    /* Seletor e componente */
    /* Aqui, o nome do seletor pode ser definido
       em "PascalCase" */
    Conteudo,
    TopoPadrao,
  },

  methods: {
    desmontarComponente() {
      this.visibilidade = false;
    },
  },
};
</script>

/* Define o estilo */
/* Na hierarquia, o estilo visual definido no componente de nível
   mais alto, é propagado para os componentes inferiores */
<style scoped>
</style>
