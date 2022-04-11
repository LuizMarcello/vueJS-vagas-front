<template>
  <!-- Cada um destes slots abaixo possuem "escopo definido", em cada um dos templates
     da instância deste componente filho, no componente pai -->

  <!--
   <slot name="titulo" :dadosTitulo="{ titulo: 'Titulo Lista', nroVagas: 15 }"
    ><p>Titulo da lista de vagas</p></slot>
  -->

  <!-- slot padrão -->
  <!-- Este(s) atributo(s) serão encaminhados deste slot para o"slotProps" 
       no template do componente pai, na instância deste componente filho -->
  <slot :vagahs="vagasss">
    <div class="row mt-5" v-for="(vagga, index) in vagasss" :key="index">
      <div class="col">
        <!-- Serão encaminhados via "props", ao componente filho -->
        <!-- Os nomes ds props aqui são enviadas em "kebab-case(descricao-vaga-teste)" -->
        <!-- kebab-case na parte de templates e camelCase na parte de scripts -->
        <!-- Ao invés de passarmos via props, cada atributo e seus valores separadamente
             (Ex: :titulo-vaga-teste="vagga.titulo"), passamos "todo o objeto" de uma só
             vêz, usando a diretiva v-bind-->
        <vaga v-bind="vagga" />
      </div>
    </div>
  </slot>

  <!--
   <slot
    name="rodape"
    :dadosRodape="{
      titulo: 'Rodapé lista',
      paginacao: { nroPaginas: 10, paginaAtual: 5 },
    }"
    ><p>O rodapé da lista de vagas</p></slot>
  -->
</template>

<script>
import Vaga from "@/components/comuns/Vaga.vue";

export default {
  name: "ListaVagas",

  data: () => ({
    vagasss: [],
  }),

  components: {
    Vaga,
  },

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
    this.emitter.on("filtrarVagas", (vagaa) => {
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
      this.vagasss = vaggas.filter((reg) =>
        reg.titulo.toLowerCase().includes(vagaa.titulo.toLowerCase())
      );
    });
  },
};
</script>
