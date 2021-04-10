<template>
<div class="Slider">
  <el-carousel :interval="4000" type="card" indicator-position="outside">
    <el-carousel-item name="action">
     <img src="../assets/images/variety.jpg" @click="handleChange('')" id="1" alt="action"/>
     <h4>All Games</h4>
    </el-carousel-item>
    <el-carousel-item name="action">
     <img src="../assets/images/action.jpg" @click="handleChange('action')" id="1" alt="action"/>
     <h4>Action Games</h4>
    </el-carousel-item>
        <el-carousel-item name="sports">
     <img src="../assets/images/strategy.jpg" @click="handleChange('strategy')" alt="strategy"/>
     <h4>Strategy Games</h4>
    </el-carousel-item>
        <el-carousel-item name="Simulation">
     <img src="../assets/images/adventure.jpg" @click="handleChange('adventure')" alt="adventure"/>
      <h4>Adventure Games</h4>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
import {mapGetters } from "vuex";
export default {
	name: 'slider',
	data() {
		return {
			search: '',
        }
    },
  methods:{
    handleChange(type)
    {
      this.$store.dispatch('FILTERED_GAME', type)
    },
  },
  computed:{ 
... mapGetters(['games']),
},
 mounted () {
    this.$store.dispatch('loadItems')
  }
    
}
</script>
<style lang="scss" scoped>
@import '../assets/style.scss';
.Slider
{
    margin: auto;
    width: 70%;
    margin-top: 105px;
}
.el-carousel__item img {
    width: 100%;
    height: 85%;
  }
  .el-carousel__item h4 {
   text-align: center;
   background-color: $mainColor;
   padding: 8px;
   color: $secMainColor;
   font-family: emoji;
  }
 @media only screen and (max-width: 700px){
   .Slider
{
    width: 100%;
    margin-top: 125px;
}
.el-carousel__item img {
    width: 100%;
    height: 80%;
    object-fit: cover
      }
.el-carousel__item h4
 {
   font-size: 15px;
 }
 }
</style>
