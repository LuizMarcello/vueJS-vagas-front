/* Parte visual do componente. Elementos html */
<template>
  <div>
    <p>Conteudo</p>
     <!-- Usando a síntaxe "kebab case" -->
     <!-- Utilizando os componentes aqui no template -->
     <home></home>
     <publicar-vaga></publicar-vaga>
  </div>
</template>


/* Para codificar e exportar o objeto de configuração do vueJS,
   para o componente */
<script>
/* Importando estes componentes para este componente */
import Home from "../views/Home.vue";
import PublicarVaga from "../views/PublicarVaga.vue";
export default {
  name: "Conteudo",
  /* Indicando, por meio da propriedade "componentes",
     quais serão os "seletores" dos componentes */
  components: {
    Home,
    PublicarVaga,
  },
};
</script>


/* Define o estilo específico, somente para este componente */
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>