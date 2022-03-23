/* Parte visual do componente. Elementos html */
<template>
  <div>
    <!-- <h1>{{ tituuulo }}</h1> -->
    <!-- <button @click="atualizarComponente()">Atualizar</button> -->
    <!-- Para renderizar de modo dinâmico os componentes "home" e "publicar-vaga" -->
    <!-- Um de cada vêz -->
    <!-- Os atributos da instância estão recebendo os seletores de cada componente,
         alternadamente -->
    <!--  <button @click="conteuuudo = 'home'">Home</button> -->
    <!--  <button @click="conteuuudo = 'publicar-vaga'">Publicar vaga</button> -->
    <!-- Usando a síntaxe "kebab case" -->
    <!-- Utilizando os componentes "home" e "publicar vaga" aqui no template,
         de acôrdo com seus seletores -->
    <!-- <home></home> -->
    <!--  <publicar-vaga></publicar-vaga> -->
    <!-- Usando a tag especial do vueJS <component>, fazendo um "bind" com
         o atribuito do vueJS "is", definindo qual dos dois componentes vão
         ser renderizados, conforme o valor do atributo "conteuuudo" -->
    <!-- Tag que apenas ativa/desativa o componente. Não monta/desmonta.
         Preserva a sua instância em "cache". Mantém eles "vivos"  -->
    <!-- {{ conteeeudo }} -->
    <keep-alive>
      <component :is="conteeeudo" />
    </keep-alive>
  </div>
</template>


/* Para codificar e exportar o objeto de configuração do vueJS,
   para o componente */
<script>
/* Importando estes componentes para este componente */
/* O alias "@" indica sempre o "src" do projeto, para importar */
import Home from "@/components/views/Home.vue";
import PublicarVaga from "@/components/views/PublicarVaga.vue";

export default {
  name: "Conteudo",
  props: {
    conteeeudo: {
      type: String,
      required: true,
    },
  },

  /* Indicando, por meio da propriedade "componentes",
     quais serão os "seletores" dos componentes */
  components: {
    Home,
    PublicarVaga,
  },

  /* Propriedades reativas */
  /* data: () => ({ */
    /* Atributos da instância */
  /*   tessste: "Neste ponto o componente já foi criado",
    tituuulo: "Componente conteúdooo",
    conteeeudo: "home",
  }),
 */
  /* methods: {
    atualizarComponente() {
      this.titulo += "*";
    },
  }, */

  /* Métodos (hooks/ganchos) do ciclo de vida do componente */
  /* beforeCreate() {
    console.log("beforeCreate(): Antes de criar o componente", this.tessste);
  },

  created() {
    console.log("created(): Criado o componente", this.tessste);
  },

  beforeMount() {
    console.log(
      "beforeMount(): Antes de montar o template(html) do componente"
    );
  },

  mounted() {
    console.log("mounted(): Aqui já foi montado/alocado o template(html)");
  },

  beforeUpdate() {
    console.log("Antes de atualizar");
  },

  updated() {
    console.log("Atualizado");
  },
  */

  /* Relacioandos a montagem/desmontagem dos componentes */
  /*  beforeUnmount() {
    console.log("Antes de desmontar/destruir o componente Conteudo");
  },
  unmounted() {
    console.log("Desmontado/destruído o componente Conteudo");
  }, 
  */

  /*
  errorCaptured() {
    console.log('Erro capturado')
  },
  renderTracked() {
    console.log('Re-renderização rastreada')
  },
  renderTriggered() {
    console.log('Re-renderização acionada')
  },
  */

  /* Relacioandos a ativação/desativação dos componentes */
  /*
   activated() {
    console.log("Componente é ativado");
  },
  deactivated() {
    console.log("Componente é desativado");
  }, 
  */
};
</script>


<!-- Define o estilo específico, somente para este componente-->
<!-- Add "scoped" attribute to limit CSS to this component only-->
<style module>
.teste {
  background-color: red;
}
#teste-2 {
  background-color: yellow;
}
</style>