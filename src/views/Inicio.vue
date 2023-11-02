<template>
  <h1>ruta protegida</h1>
  <p>{{ usuario.email }}</p>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Inicio',
  computed: {
    ...mapState(['usuario'])
  }
}
</script>

<style>

</style>