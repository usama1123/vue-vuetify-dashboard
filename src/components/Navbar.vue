<template>
<div>
    
  <v-toolbar flat app class="blue">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="white"><v-icon >mdi-magnify</v-icon></v-btn>
       <v-btn icon class="white"><v-icon>mdi-heart</v-icon></v-btn>
        <v-btn icon class="white"><v-icon>mdi-account</v-icon></v-btn>
  </v-toolbar>
<v-navigation-drawer
      app
      absolute
      temporary
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      bottom
      v-model="drawer"
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
      <v-list nav class="white--text" id="lis">
        
          <v-list-item link v-for="item in source" :key="item.text">
          <v-list-item-icon><v-icon>{{item.icon}}</v-icon></v-list-item-icon>
          <v-list-item-content>{{item.text}}</v-list-item-content>
          
        </v-list-item>
        <v-list-group :value="false" no-action prepend-icon="mdi-account circle">
            <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>
        <v-list-item v-for="item in admins" :key="item.title" link>
          <v-list-item-icon>{{item.icon}}</v-list-item-icon>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item>

       
        </v-list-group>
      
      </v-list>
     
      </v-navigation-drawer>
</div>
</template>

<script>
export default {
    data(){
        return{
            drawer:false,
            source:[
                {icon:'mdi-home',text:'Dashboard',route:'/'},
                {icon:'mdi-email',text:'Projects',route:'/'},
                {icon:'mdi-folder',text:'Teams',route:'/'},
                {icon:'fa fa-tv',text:'Dashboard',route:'/'},
                {icon:'mdi-license',text:'Dashboard',route:'/'},
                {icon:'mdi-web',text:'Dashboard',route:'/'},
                {icon:'mdi-help',text:'Dashboard',route:'/'},
                {icon:'fa fa-amazon',text:'Dashboard',route:'/'},
                {icon:'mdi-account',text:'Dashboard',route:'/'},
            ],
            admins: [
        {title:'Management', icon:'mdi-account'},
        {title:'Settings', icon:'mdi-cog-outline'}
      ],
            }
        
    }

}
</script>

<style>
/* #lis{
  
} */
</style>