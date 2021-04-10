<template>
<div class="PopmainDiv" v-if="getFilteredGame.length!=0">
    <h2 style="color:#be1e2d;text-align: center;margin-top:20px">Most recommended</h2>
    <div class="borderStyle"></div>
    <br/>
    <el-row >
   <div v-if="getFilteredGame.length!=null && getFilteredGame.length>0">
     <div v-for="(item,index) in games.slice(8,13)" :key="index">
  <el-col :lg="6" :md="8" :sm="8" :xs="24" v-for="(gameFilter,index) in getFilteredGame" :key="index" style="matgin-right:10px">
    <div v-if="item.id===gameFilter.id">
      <div @click="getDetails(gameFilter.id)">
    <el-card shadow="hover" >
        <img :src="gameFilter.background_image" style="width:100%;height:150px"/>
        <br/><br/>
      <el-tooltip v-if="gameFilter.name.length>22" class="item" effect="dark" :content="gameFilter.name" placement="bottom">
      <span >{{gameFilter.name.substring(0,22)+".."}}</span>
      </el-tooltip>
       <span v-else>{{gameFilter.name}}</span>
    </el-card>
      </div>
    </div>
  </el-col>
     </div>
      </div>
</el-row>
     </div>
</template>
<script>
import { EventBus } from '@/event-bus.js'
import {mapGetters} from "vuex";
export default {
	name: 'MostRecommended',
	data() {
		return {
        showData: false,
        }
    },

methods: {
 getDetails(id)
 {
    this.$router.push({
    name: 'GameInfo',
    params: {
      gameID:id,
    }
  })
  EventBus.$emit('signal', this.count)
 },

},
computed:{ 
... mapGetters(['games',"getFilteredGame"]),
},
 created () {
    this.$store.dispatch('loadItems')
   this.$store.commit("FILTERED_GAME",'')
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/style.scss';
.PopmainDiv
{
    margin-top: 30px;
}
.borderStyle
{
  border-bottom:2px solid $secMainColor;
  margin: auto;
  width: 340px;
}
</style>