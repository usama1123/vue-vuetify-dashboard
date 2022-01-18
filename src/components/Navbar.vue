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
      <v-list nav>
        <!-- <v-list-item v-for="item in links" :key="item.text" link> -->
          <v-list-item link v-for="item in source" :key="item.text">
          <v-list-item-icon><v-icon>{{item.icon}}</v-icon></v-list-item-icon>
          <v-list-item-content>{{item.text}}</v-list-item-content>
          
        </v-list-item>
        <v-list-group :value="true" prepend-icon="mdi-account circle">
            <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
          </v-list-group>
        </v-list-group>
        <!-- <v-list-item link>
          <v-list-item-icon><v-icon>mdi-image</v-icon></v-list-item-icon>
          <v-list-item-content>Sample</v-list-item-content>
        </v-list-item> -->
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
      </v-list> Hello There .-->
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
                {icon:'mdi-favorite',text:'Dashboard',route:'/'},
                {icon:'mdi-license',text:'Dashboard',route:'/'},
                {icon:'mdi-web',text:'Dashboard',route:'/'},
                {icon:'mdi-account',text:'Dashboard',route:'/'},
                {icon:'mdi-account',text:'Dashboard',route:'/'},
                {icon:'mdi-account',text:'Dashboard',route:'/'},
            ],
            admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
            }
        
    }

}
</script>

<style>

</style>