<template>
  <div :class="estiloAlerta" role="alert">
    <!-- Slot nomeado -->
    <slot name="titulo">
      <!-- Valores padrões só funcionam, se o componente pai
      não enviar conteúdo algum para o componente filho-->
      <!-- Definindo aqui neste slot, um valor "padrão" -->
      <h3>
        <!-- Título da mensagem de feedback -->
      </h3>
    </slot>
    <hr />
    <!-- Slot padrão -->
    <!-- Definindo aqui neste slot padrão, um valor "padrão" -->
    <slot>
      <!-- Mensagem de feedback -->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Alerta',
  props: { tipooo: String },
  /* Propriedades computadas */
  computed: {
    estiloAlerta() {
      switch (this.tipooo) {
        case 'erro': return 'alert alert-danger'
        case 'sucesso': return 'alert alert-success'
        default: return 'alert alert-success'
      }
    }
  }
}
</script>

<style>
</style>