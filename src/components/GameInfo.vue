<template>
<div style="margin:105px 0px">
  <div class="mainDiv">
<el-card class="box-card">
<div>
  <el-row>
    <el-col :lg="12" :md="12" :sm="12" :xs="24">
      <img :src="info.background_image" class="imgStyle"/>
    </el-col>
    <el-col :lg="12" :md="12" :sm="12" :xs="24">
     <img :src="info.background_image_additional" class="imgStyle"/>
    </el-col>
  </el-row>
  <br/><br/>
  <el-form label-width="100px" class="demo-ruleForm mb-10">
		  <el-form-item label="Name:">
        <span>{{info.name}}</span>
      </el-form-item>
      <el-form-item label="Description:">
        <span>{{info.description_raw}}</span>
      </el-form-item>
  </el-form>
  </div>
</el-card>
  </div>
  <br/>
<MostRecommended/>
     </div>
</template>
<script>
import MostRecommended from './MostRecommended.vue';
import { EventBus } from '@/event-bus.js'
import axios from 'axios';
export default {
	name: 'GameInfo',
	data() {
		return {
            id:'',
            info:[]

        }
    },
    components:{
    MostRecommended,
	},
  methods: {

 getGameData()
 {
    this.id=this.$route.params.gameID
    axios.get('https://rawg-video-games-database.p.rapidapi.com/games/'+this.id,{
   headers: {
    'x-rapidapi-key': 'cfeffb9564msh384b3a54fdac563p1574e5jsnd9db71020247',
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
  } 
    })
    .then(response => {
       this.info=response.data
      // this.totalItems = response.data.result.paging.totalItems
       }).catch((error) => {
       this.$message({
        showClose: true,
        message: 'There is an error, please try again.',
        type: 'error'
    });
   })   
 },

},
	mounted() {
		  EventBus.$on('signal', count => {
			 this.getGameData()
        window.scrollTo(0, 0); })
  },
created()
{
  window.scrollTo(0, 0);
    this.getGameData()
} 
}
</script>
<style lang="scss" scoped>

.mainDiv
{
    padding-top: 30px;
    margin: auto;
    width: 70%;
    .imgStyle
    {
   width:98%;
   height:300px;
   margin-right:10px;
   margin-bottom:10px;
    }
}
 @media only screen and (max-width: 800px){
  .mainDiv
{
    width: 90%;
  .imgStyle
    {
   height:200px;
    }
} 
 }

</style>