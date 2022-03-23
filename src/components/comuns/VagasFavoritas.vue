<template>
  <div>
    <!-- Componente bootstrap "offcanvas" -->
    <!-- Deixando o botão flutuando absoluto -->
    <!-- <div style="position: absolute; z-index: 1; top: 10px; right: 5px"> -->
    <!-- ou: -->
    <div class="divVagasFavoritas">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Vagas Favoritas
      </button>
    </div>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Vagas favoritadas</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(vaga, indexxx) in vagas"
            :key="indexxx"
          >
            {{ vaga }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "VagasFavoritas",
  data: () => ({
    vagas: [],
  }),
  //Quando este componente estiver criado/montado,
  //estará pronto para capturar evento mitt
  /* Mitt: Configurado globalmente em main.js*/
  //Escutando com a função "on()"
  //2º parâmetro, uma função de callback.
  mounted() {
    this.emitter.on("favoritarVaga", (titulo) => {
      /* Inserindo no final deste array */
      this.vagas.push(titulo);
    });

    this.emitter.on("desfavoritarVaga", (titulo) => {
      /* Fazendo uma pesquisa dentro deste array */
      let indiceArray = this.vagas.indexOf(titulo);
      /* Removendo um elemento a partir de um índice do array */
      if (indiceArray !== -1) this.vagas.splice(indiceArray, 1);
    });
  },
};
</script>


<style scoped>
.divVagasFavoritas {
  position: absolute;
  z-index: 1;
  top: 70px;
  right: 0px;
}
</style>