<template>
  <div class="alert alert-success" role="alert">
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
  name: 'Alerta'
}
</script>

<style>
</style>