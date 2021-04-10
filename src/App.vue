<template>
  <div id="app" style="overflow-x: hidden;">
    <navBar/>
     <router-view />
  </div>
</template>
<script> 
import navBar from '@/components/navbar.vue';
//import {mapGetters } from "vuex";
export default {
	name: 'App',
    components:{
    navBar,
    },
// computed:{ 
// ... mapGetters(['games',"getFilteredGame"]),
// },
//  created () {
//     this.$store.dispatch('loadItems')
//    this.$store.commit("FILTERED_GAME",'')
//   }	,
watch: {
},

}
</script>

<style lang="scss" >
@import './assets/style.scss';

#app
{
  background-color:$greyColor;
  height: 100%;
}
</style>