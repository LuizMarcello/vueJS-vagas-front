
/* Parte visual do componente. Elementos html */
<template>
  <!-- LocalStorage: Recurso de armazenamento disponível nos browsers modernos
  que permite persistir os dados da aplicação front-end no próprio navegador.-->
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente sua vaga para milhares de profissionais, e de graça.</h4>
      </div>
    </div>
    <!-- Diretiva "v-model": realizando atualizações de mão dupla (Two-Way-Data
         Bindig) entre os atributos da instância do vue(script), e os campos de
    formulários nos templates.-->
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Título da Vaga</label>
        <input type="text" class="form-control" v-model="titulo" />
        <div class="form-text">Por exemplo: Programador JavaScript e VueJS</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Descrição</label>
        <textarea type="text" class="form-control" v-model="descricao"></textarea>
        <div class="form-text">Informe os detalhes da vaga</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Salário</label>
        <input type="number" class="form-control" v-model="salario" />
        <div class="form-text">Informe o salário</div>
      </div>

      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-select" v-model="modalidade">
          <option value disabled>--Selecione</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe onde as atividades serão realizadas</div>
      </div>

      <div class="col">
        <label class="form-label">Tipo</label>
        <select class="form-select" v-model="tipo">
          <option value disabled>--Selecione</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação</div>
      </div>
    </div>

    <div class="row mt-3">
      <!-- {{ titulo }} | {{ descricao }} | {{ salario }} | {{ modalidade }} |
      {{ tipo }} |-->
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="salvarVaga()">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
/* Para codificar e exportar o objeto de configuração do vueJS,
   para este componente (seletor) */
export default {
  name: "PublicarVaga",

  /* Retornando um objeto literal com os atributos do objeto */
  data: () => ({
    titulo: "",
    descricao: "",
    salario: "",
    modalidade: "",
    tipo: "",
    publicacao: "",
  }),
  methods: {
    /* Método que pega os atributos, transforme em objetos e persiste no LocalStorage,
       através do click do botão "cadastrar". */
    salvarVaga() {
      let tempoDecorrido = Date.now();
      let dataAtual = new Date(tempoDecorrido);

      /* Recuperando registro(s) do locaoStorage do navegador */
      /* A string recuperada de localStorage está sendo submetida como
         parâmetro para o método parse() do objeto JSON, convertendo uma string
         válida, em objeto javascript (contrário do setItem())  */
      let vaggas = JSON.parse(localStorage.getItem("vaggas"));
      /* console.log(vaggas); */

      if (!vaggas) vaggas = [];

      vaggas.push({
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo,
        publicacao: dataAtual.toISOString(), //data e hora no time zone UTC (tempo civil)
      });

      /* localStorage: Método nativo do javascript */
      /* JSON: Converte o objeto "vvaga" em uma string,
         para armazenar o objeto como texto(objeto literal),
         no localStorage do navegador(chrome) */
      //localStorage.setItem("vaggas", JSON.stringify(vaggas));

      /* Emitindo o alerta, para ser escutado pelo componente App.vue: */
      this.emitter.emit('alerta')

      this.resetaFormularioCadastroVaga()
    },
    resetaFormularioCadastroVaga() {
      this.titulo = ''
      this.descricao = ''
      this.salario = ''
      this.modalidade = ''
      this.tipo = ''
    },
  },

};
</script>


/* Define o estilo específico, somente para este componente */
<!-- Add "scoped" attribute to limit CSS to this component only-->
<style></style>