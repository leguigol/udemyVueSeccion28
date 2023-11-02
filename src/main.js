import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { auth } from './firebase'

auth.onAuthStateChanged(user=>{
    if(user){
        console.log(user)
    }else{
        console.log(user)
    }
})
createApp(App).use(store).use(router).mount('#app')
