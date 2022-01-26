<template>
  <v-app class="grey" :style="{background:$vuetify.theme.themes.dark.background}">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <Navbar />
    <RightSideBar />
    <v-container >
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <v-toolbar-title class="white--text mt-n4">Task Management</v-toolbar-title>
      </v-toolbar>
      <v-toolbar color="#7C7C7F" class="mr-13" max-width="955px" rounded="lg" short>
        <div>
          <v-icon color="white" class="mr-2">
            fa fa-calendar</v-icon>
            <v-badge color="red" content="1">
              <span class="caption grey--text mt-2">DIM 9, 2022</span>
            </v-badge>
        </div>
        <v-spacer></v-spacer>
        <div class="rgba(0,0,0,0)">
          <v-tabs color="#A9DDD8" right background-color="#171721">
            <v-tab>Day</v-tab>
            <v-tab>Month</v-tab>
            <v-tab>Year</v-tab>
          </v-tabs>
        </div>
      </v-toolbar>
      <br>
      <v-divider color="#7C7C7F"></v-divider>
      <v-row>
        <v-col cols="12" sm="9">
          <v-tabs vertical >
            <v-tab>
              <v-icon left>
                fas fa-archive</v-icon>
              Design
              </v-tab>
              <v-tab>
                <v-icon left>
                  fa fa-mobile
                </v-icon>
                Mobile Apps
              </v-tab>
              <v-tab>
                <v-icon left>fa fa-user</v-icon>
                Users
              </v-tab>
              <v-tab-item>
                
                <v-card flat>
                  
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="mt-2 mr-3">

            <v-timeline-item color="green" fill-dot small>
              
              <v-card color="#22222C" dark max-width="180px">
                
                <v-card-title class="text-subtitle-2 red--text">
                About 2 Hours
              <v-spacer></v-spacer>
                <v-avatar size="30">
                  <img src="https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg" alt="john">
                </v-avatar>
               
                </v-card-title>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="red" fill-dot small>
              <v-card color="#22222C" dark max-width="180px">
                <v-card-title class="text-subtitle-2 green--text">
                About 7 Hours
              <v-spacer></v-spacer>
                <v-avatar size="30">
                  <img src="https://st2.depositphotos.com/4157265/8580/i/600/depositphotos_85800420-stock-photo-everything-is-awesome.jpg" alt="john">
                </v-avatar>
           
                </v-card-title>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="blue" fill-dot small>
              <v-card color="#22222C" dark max-width="180px">
                <v-card-title class="text-subtitle-2 cyan--text">
                About 5 Hours
              <v-spacer></v-spacer>
                <v-avatar size="30">
                  <img src="https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg" alt="john">
                </v-avatar>
               
                </v-card-title>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="yellow" fill-dot small>
              <v-card color="#22222C" dark max-width="180px">
                <v-card-title class="text-subtitle-2 cyan--text">
                About 1 Hours
              <v-spacer></v-spacer>
                <v-avatar size="30">
                  <img src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg" alt="john">
                </v-avatar>
               
                </v-card-title>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          </v-card>
              </v-tab-item>
                            <v-tab-item>
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="mt-2 mr-3">
            <v-timeline-item color="green" fill-dot small>
              <v-card color="#22222C" dark max-width="180px">
                <v-card-title class="text-subtitle-2 red--text">
                About 2 Hours
              <v-spacer></v-spacer>
                <v-avatar size="30">
                  <img src="https://image.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg" alt="john">
                </v-avatar>
               
                </v-card-title>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="red" fill-dot small>
              <v-card color="#22222C" dark max-width="180px">
                <v-card-title class="text-subtitle-2 green--text">
                About 7 Hours
              <v-spacer></v-spacer>
                <v-avatar size="30">
                  <img src="https://st2.depositphotos.com/4157265/8580/i/600/depositphotos_85800420-stock-photo-everything-is-awesome.jpg" alt="john">
                </v-avatar>
           
                </v-card-title>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="blue" fill-dot small>
              <v-card color="#22222C" dark max-width="180px">
                <v-card-title class="text-subtitle-2 cyan--text">
                About 5 Hours
              <v-spacer></v-spacer>
                <v-avatar size="30">
                  <img src="https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg" alt="john">
                </v-avatar>
               
                </v-card-title>
              </v-card>
            </v-timeline-item>
            
          </v-timeline>
              </v-tab-item>
              <v-tab-item>
                <v-container>
                  <v-row dense>
                    <v-col cols="12">
                <v-card color="#163A5F">
                  <v-card-title>Shahzad Bashir</v-card-title>
                  <v-card-subtitle>Asp.net Core Developer</v-card-subtitle>
                  <v-card-actions>
                    <v-btn text>
                      Learn More
                      <v-icon color="orange" right>mdi-open-in-new</v-icon>
                    </v-btn></v-card-actions>
                </v-card>
                    </v-col>
                    <v-col cols="12">
                      <v-card color="#1D566E">
                        <v-card-title>Aleem Awan</v-card-title>
                        <v-card-subtitle>React.Js Developer</v-card-subtitle>
                        <v-card-actions>
                          <v-btn color="#1f4068">Learn More
                            <v-icon color="orange" right>mdi-open-in-new</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                    <v-col cols="12">
                      <v-card color="#10375C">
                        <v-card-title>Bilal Arshad</v-card-title>
                        <v-card-subtitle>Wordpress Developer</v-card-subtitle>
                        <v-card-actions>
                          <v-btn color="#363940">
                            Learn More
                            <v-icon color="orange" right>mdi-open-in-new</v-icon>
                            </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
          </v-tabs>
        </v-col>
        <v-col cols="12" sm="9">
         
        </v-col>
      </v-row>
      <div id="main">
        We Deliver Excellence
      </div>
    </v-container>
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
    SelectItem:2
    
   
  }),

};
</script>
<style scoped>
.border{
  border-radius: 50%;
}
#main{
  background-image: url('https://www.insidehook.com/wp-content/uploads/2021/11/1-11.jpg?fit=1200%2C800');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 400px;
  width: 930px;
  color: black;
}
</style>
