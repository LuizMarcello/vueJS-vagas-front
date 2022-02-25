/* Parte visual do componente. Elementos html */
<template>
  <div>
    <!-- Seletor de componentes do template -->
    <!-- Aqui, o nome do seletor do componente
         pode ser em "kebab case", padrão igual
         das tags html -->
    <topooo-padrao />
    <conteudoo></conteudoo>
  </div>
</template>

/* Existem o "nome do script do componente", o "nome do
   componente" e o "nome do seletor do componente" */

/* Para codificar e exportar o objeto de configuração do vueJS,
   para o componente */
<script>
/* Importando os componentes */
/* Também em "Pascal case" */
import Conteudoo from "./components/layouts/Conteudo.vue";
import TopoooPadrao from "./components/layouts/TopoPadrao.vue";

/* Definindo estes componentes no objeto de configuração
   da instância do vueJS, na propriedade "componentes" */
export default {
  name: "App",
  components: {
    /* Seletor e componente */
    /* Aqui, o nome do seletor pode ser definido
       em "Pascal Case" */
    Conteudoo,
    TopoooPadrao,
  },
};
</script>

/* Define o estilo específico, somente para este componente */
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
