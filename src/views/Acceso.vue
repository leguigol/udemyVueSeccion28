<template>
  <div>
    <h1>Acceso de Usuarios</h1>
    <form @submit.prevent="ingresoUsuario({email: email, password: pass})"> 
        <input type="email" placeholder="Ingrese email" v-model="email" >
        <input type="password" placeholder="Ingrese contraseña" v-model="pass">
        <button type="submit">Acceder</button>
        {{ error }}
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Acceso',
    data(){
        return {
            email: '',
            pass: ''
        }
    }, 
    methods: {
        ...mapActions(['ingresoUsuario'])
    },
    computed: {
        ...mapState(['error'])
    }
}
</script>

<style>

</style>