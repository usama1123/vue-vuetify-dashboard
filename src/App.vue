<template>
  <v-app class="grey">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <Navbar />
    <!-- <v-app-bar app>
     
      <Navbar />
    </v-app-bar> -->

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  components: { Navbar } ,

  data: () => ({
    
    // drawer:f
    // Navigation_draweralse,
    // group:null,
    // links:[
    //   {icon:'mdi-account', text:'Dashboard', route:'/' },
    //   {icon:'mdi-image',text:'About',route:'/About'}
    // ]
    //
  }),
  // watch:{
  //   group()
  //   {
  //     this.drawer=false
  //   }
  // }
};
</script>
