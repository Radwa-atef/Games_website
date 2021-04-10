<template>
<div class="mainDiv">
  <div>
    <h2 style="color:#be1e2d;text-align: center;">Featured game</h2>
    <div class="borderStyle"></div>
  </div>
    <br/>
    <el-row >
   <div v-if="getFilteredGame.length!=null&&getFilteredGame.length>0">
     <div v-for="(item,index) in games.slice(0,7)" :key="index">
  <el-col :lg="6" :md="8" :sm="8" :xs="24" v-for="(gameFilter,index) in getFilteredGame" :key="index" style="matgin-right:10px">
    <div v-if="item.id===gameFilter.id">
      <div @click="getDetails(gameFilter.id)">
    <el-card shadow="hover" >
        <img :src="gameFilter.background_image" style="width:100%;height:150px"/>
        <br/><br/>
      <el-tooltip v-if="gameFilter.name.length>22" class="item" effect="dark" :content="gameFilter.name" placement="bottom">
      <span>{{gameFilter.name.substring(0,22)+".."}}</span>
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
import {mapGetters} from "vuex";
export default {
	name: 'FeaturedGames',
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

 }

},
computed:{ 
...mapGetters(['games',"getFilteredGame"]),
},
 created () {
    this.$store.dispatch('loadItems')
   this.$store.commit("FILTERED_GAME",'')
  } 
}
</script>
<style lang="scss" scoped>
@import '../assets/style.scss';
.mainDiv
{
    margin-top: 30px;
}
.borderStyle
{
  border-bottom:2px solid $secMainColor;
  margin: auto;
  width: 240px;
}
.noData
{
    text-align: center;
    font-size: 20px;
    color: grey;
    padding: 20px;
}
</style>