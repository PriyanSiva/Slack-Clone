<template>
    <div>
       <div class="jumbotron bg-primary text-white text-center py-5">
           <h2 class="lead display-3">#SLACK#</h2>
           <p>Realtime communication at it's best!</p>
       </div>

       <div class="container-fluid text-center">
           <div class="row mt-5">
               <div class="col">
                   <button @click="loginWithGoogle" class="btn btn-outline-danger btn-lg">Login with Google</button>
               </div>
           </div>
            <div class="row mt-5">
               <div class="col">
                   <button class="btn btn-outline-info btn-lg">Login with Twitter</button>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
import auth from 'firebase/auth'

export default {
    name: 'login',
    methods: {
        loginWithGoogle() {
            firebase.auth().signInWithPopup( new firebase.auth.GoogleAuthProvider())
            .then( response => {
                console.log(response.user)
            })
        }
    }
}
</script>

<style scoped>
.btn, .jumbotron {
    border-radius: 0px;
}
</style>