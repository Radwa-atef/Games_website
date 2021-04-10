<template>
<div>
    <Slider/>
    <FeaturedGames/>
    <MostRecommended/>
    <MostPopular/>
    </div>
</template>
<script>
import Slider from '@/components/slider.vue';
import FeaturedGames from '@/components/FeaturedGames.vue';
import MostRecommended from '@/components/MostRecommended.vue';
import MostPopular from '@/components/MostPopular.vue';
export default {
	name: 'HomePage',
	data() {
		return {
         id:''
        }
    },
    components:{
    Slider,
    FeaturedGames,
    MostRecommended,
    MostPopular
	},
}
</script>
<style>


</style>