<template>
  <v-navigation-drawer app right color="#14141C" bottom>
      <v-toolbar color="rbga(0,0,0,0)">
          <v-icon color="#7C7C7F" class="mr-4">fa fa-search</v-icon>
          <v-badge borded overlap color="red" dot class="mr-8">
              <v-icon color="#7C7C7F">fa fa-bell</v-icon>
          </v-badge>
          <v-divider vertical inset color="#7C7C7F"></v-divider>
      <v-spacer></v-spacer>
      <v-badge bordered bottom color="#49D9A0" dot offset-x="10" offset-y="10">
          <v-avatar size="30" class="ml-n3">
              <v-img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg">
              </v-img>
          </v-avatar>
      </v-badge>
      <v-btn text color="#7C7C7F">John</v-btn>
      <v-btn text color="#7C7C7F" class="ml-n3">
          <v-icon x-small color="#7C7C7F">fa fa-chevron-down</v-icon>
      </v-btn>
      </v-toolbar>
      <strong class="ml-3 white--text" >Overall Progress</strong><br>
      <div class="text-center mb-5 mt-n5">
          <v-progress-circular :rotate="360"
      :size="100"
      :width="15"
      :value="value"
      color="orange" class="mt-5">
              {{value}}
          </v-progress-circular>
      </div>
      <strong class="white--text ml-3">Recent Activities</strong><br>
      <v-list three-line>
          <v-list-item-group>
              <template v-for="(item) in files" >
                  <v-list-item :key="item.title">
                      <v-list-item-avatar>
                          <img :src="item.avatar" /></v-list-item-avatar>
                          <template>
                              <v-list-item-content>
                                  <v-list-item-title v-html="item.title" class="white--text"></v-list-item-title>
                                  <v-list-item-subtitle v-text="item.time" class="white--grey"></v-list-item-subtitle>
                                  <v-list-item-subtitle v-text="item.subtitle" class="white--text"></v-list-item-subtitle>
                              </v-list-item-content>
                          </template>
                  </v-list-item>
              </template>
          </v-list-item-group>
      </v-list>
      <v-row>
          <v-col cols="12" sm="6">
              <v-card class="d-flex align-center wl-4" height="60px" width="120px" color="#21212B" link>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-list-item two-line class="text-center">
                              <v-list-item-content>
                                  <v-list-item-title class="white--text">550</v-list-item-title>
                                  <v-list-item-subtitle class="grey--text caption mt-2">Total Projects</v-list-item-subtitle>
                              </v-list-item-content>
                          </v-list-item>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
          <v-col cols="12" sm="6">
              <v-card class="d-flex align-center wl-4" height="60px" width="120px" color="red" link>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-list-item two-line class="text-center">
                              <v-list-item-content>
                                  <v-list-item-title class="white--text">550</v-list-item-title>
                                  <v-list-item-subtitle class="grey--text caption mt-2">Total Projects</v-list-item-subtitle>
                              </v-list-item-content>
                          </v-list-item>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="6">
              <v-card class="d-flex align-center wl-4" height="60px" width="120px" color="#21212B" link>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-list-item two-line class="text-center">
                              <v-list-item-content>
                                  <v-list-item-title class="white--text">239</v-list-item-title>
                                  <v-list-item-subtitle class="grey--text caption mt-2">Verified Users</v-list-item-subtitle>
                              </v-list-item-content>
                          </v-list-item>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
          <v-col cols="12" sm="6">
              <v-card class="d-flex align-center wl-4" height="60px" width="120px" color="#21212B" link>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-list-item two-line class="text-center">
                              <v-list-item-content>
                                  <v-list-item-title class="white--text">565</v-list-item-title>
                                  <v-list-item-subtitle class="grey--text caption mt-2">Apps Developed</v-list-item-subtitle>
                              </v-list-item-content>
                          </v-list-item>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="6">
              <v-card class="d-flex align-center wl-4" height="60px" width="120px" color="#21212B" link>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-list-item two-line class="text-center">
                              <v-list-item-content>
                                  <v-list-item-title class="white--text">320</v-list-item-title>
                                  <v-list-item-subtitle class="grey--text caption mt-2">Total Users</v-list-item-subtitle>
                              </v-list-item-content>
                          </v-list-item>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
          <v-col cols="12" sm="6">
              <v-card class="d-flex align-center wl-4" height="60px" width="120px" color="#21212B" link>
                  <v-row>
                      <v-col cols="12" sm="12">
                          <v-list-item two-line class="text-center">
                              <v-list-item-content>
                                  <v-list-item-title class="white--text">1320</v-list-item-title>
                                  <v-list-item-subtitle class="grey--text caption mt-2">Total Investors</v-list-item-subtitle>
                              </v-list-item-content>
                          </v-list-item>
                      </v-col>
                  </v-row>
              </v-card>
          </v-col>
      </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
data: ()=>({
    interval: {},
    value: 0,
    files:[
        {
            avatar:'https://www.psypost.org/wp-content/uploads/2018/10/young-attractive-woman.jpg',
            time:'5 Mints Ago',
            subtitle:'BlockChain Developer',
            title:`<strong>Stephne Max</strong>`
        },
        {
            avatar:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
            time:'36 Mints Ago',
            subtitle:'Android Developer',
            title:`<strong>John Steve</strong>`
        },
        {
            avatar:'https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.2.1520330645.1641168000',
            time:'5 Mints Ago',
            subtitle:'Website Developer',
            title:'Orly Oziz'
        },
        {
            avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            time:'5 Mints Ago',
            subtitle:'NFT Desginer and Developer',
            title:'Andy'
        },
    ]
}
),
beforeDestroy(){
    clearInterval(this.interval)
},
mounted(){
    this.interval=setInterval(() => {
     if(this.value===100){
         return(this.value=0)
     } this.value+=20  
    }, 1000);
},
}
</script>

<style>

</style>