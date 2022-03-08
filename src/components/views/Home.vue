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
              vêz, usando a diretiva v-bind  -->
        <vagaa v-bind="vagga" />
      </div>
    </div>

    <!-- Usando 3 instâncias separadas do mesmo componente -->
    <!-- Definindo as propriedades nas 3 instâncias do mesmo componente filho -->
    <!-- Propriedades(props) serão enviadas deste componente "pai" ao componente 
         "filho". Se manterão reativas. -->
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
<<<<<<< HEAD
    vagasss: [
      /* Array com 5 objetos literais */
      {
        titulo: "Analista Programador PHP Pleno",
        descricao:
          "Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.",
        salario: 6000,
        modalidade: "Home Office",
        tipo: "PJ",
        publicacao: "2021-10-10",
      },
      {
        titulo: "Programador JavaScript Angular",
        descricao:
          "Profissional com conhecimentos avançados em JavaScript e Angular.",
        salario: 5000,
        modalidade: "Presencial",
        tipo: "CLT",
        publicacao: "2021-10-07",
      },
      {
        titulo: "Programador JavaScript Vue",
        descricao:
          "Profissional com conhecimentos avançados em JavaScript e Vue.",
        salario: 5000,
        modalidade: "Home Office",
        tipo: "CLT",
        publicacao: "2021-10-06",
      },
      {
        titulo: "Analista de Banco de Dados Sênior",
        descricao:
          "Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL",
        salario: 9000,
        modalidade: "Presencial",
        tipo: "PJ",
        publicacao: "2021-10-06",
      },
      {
        titulo: "Programador Web Júnior",
        descricao:
          "Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL",
        salario: 3000,
        modalidade: "Presencial",
        tipo: "CLT",
        publicacao: "2021-10-05",
      },
    ],
=======
    vagasss: [],
>>>>>>> 888e74136e87ded9f33f980efc43aa9c51551853
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
<<<<<<< HEAD
=======

  /* mounted() { */ //Gancho(hook) executado quando o componente for "montado".
  activated() {
    //Gancho(hook) executado quando o componente for "ativado/reativado".
    //Recuperando os registros do localStorage do navegador e usando
    //o JSON.parse() para converter a string em objeto, compativel com
    //o javaScript
    this.vagasss = JSON.parse(localStorage.getItem("vaggas"));
  },
>>>>>>> 888e74136e87ded9f33f980efc43aa9c51551853
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