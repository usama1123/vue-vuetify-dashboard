<template>
  <v-app class="grey" :style="{background:$vuetify.theme.themes.dark.background}">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <Navbar />
    <RightSideBar />
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
import RightSideBar from './components/RightSideBar.vue';
export default {
  name: "App",
  components: { Navbar,
  RightSideBar } ,

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
