<template>
  <!-- Usando a síntaxe de "template string"(entre contra aspas simples),
     para poder concatenar. Usando a diretiva v-bind (enxuta)
     Usando agora a "propriedade computada" "estiloo" -->
  <div :class="estiloo">
    <p>{{ tituloo }}</p>
    <h2>{{ indicadorr }}</h2>
  </div>
</template>

/* Propriedade "props" faz a comunicação entre o componente
   pai e o componente filho. Fica no componente filho, aguardando
   parâmetros que serão encaminhados pelo componente pai,
   para que este se torne dinâmico */
<script>
/* Objeto literal de configuração da instância desse componente */
/* Aqui é a "instância" do vueJS */

/* Exportando o seletor deste componente */
export default {
  name: "Indicadorrr",

  /* Um array das propriedades que podem se recebidas
     por este componente filho */
  props: ["tituloo", "indicadorr", "bgg", "colorr"],

  /* Proprieades computadas */
  computed: {
    estiloo() {
      return `h-100 p-5 rounded-3 border ${this.bgg} ${this.colorr}`
    }
  },
};
</script>
