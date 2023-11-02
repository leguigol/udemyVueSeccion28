<template>
  <nav>
    <router-link to="/inicio">Home</router-link> |
    <router-link to="/registro">Registro</router-link> |
    <router-link to="/acceder">Acceso</router-link>|
    <button @click="cerrarSesion">Cerrar Sesion</button>
  </nav>
  <router-view/>
</template>

<style>
</style>
<script>
import { mapActions } from 'vuex'

export default {
  methods:{
    ...mapActions(['cerrarSesion'])
  }  
}
</script>
