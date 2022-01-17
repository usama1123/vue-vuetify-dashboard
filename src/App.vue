<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="john">
      </v-avatar>
      <v-navigation-drawer
      app
      absolute
      temporary
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      bottom
      v-model="drawer"
      height="885px"
      >
      <v-list-item>
        <v-list-item-content>
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="john">
          </v-avatar>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav>
        <v-list-item v-for="item in links" :key="item.text" link>
          <v-list-item-icon><v-icon>{{item.icon}}</v-icon></v-list-item-icon>
          <v-list-item-content>{{item.text}}</v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-list>
        <v-list-item-title v-for="link in links" :key="link.text">
          <v-list-item-action>
            <v-icon class="white--text">{{list.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{list.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item-title>
      </v-list> -->
      </v-navigation-drawer>

     
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer:false,
    group:null,
    links:[
      {icon:'mdi-account', text:'Dashboard', route:'/' },
      {icon:'mdi-image',text:'About',route:'/About'}
    ]
    //
  }),
  watch:{
    group()
    {
      this.drawer=false
    }
  }
};
</script>
