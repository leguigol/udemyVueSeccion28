import { createStore } from 'vuex'
import { auth } from '@/firebase'
import router from '@/router'

export default createStore({
  state: {
    usuario: null,
    error: null
  },
  getters: {
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario=payload
    },
    setError(state,payload){
      state.error=payload
    }
  },
  actions: {
    crearUsuario({commit}, usuario){
      auth.createUserWithEmailAndPassword(usuario.email,usuario.password)
        .then(res=>{
          console.log(res)
          const usuarioCreado={
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuario', usuarioCreado)
          router.push('/inicio')
        })      
        .catch(error=>{
          console.log(error)
          commit('setError', error)
        })
    },
    ingresoUsuario({commit}, usuario){
      auth.signInWithEmailAndPassword(usuario.email,usuario.password)
        .then(res=>{
          console.log(res)
          const usuarioLogueado={
            email: res.user.email,
            uid: res.user.uid
          }
          commit('setUsuario', usuarioLogueado)
          router.push('/')
        })
        .catch(error =>{
          console.log(error) 
          commit('setError', error)
        }) 
    },
    cerrarSesion({commit}){
      auth.signOut()
        .then(()=>{
          router.push('/acceder')
        })
    }
  },
  modules: {
  }
})
