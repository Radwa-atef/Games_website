<template>
    <div>
  <b-navbar toggleable="lg" style="border-bottom:3px solid #fdb405" >
    <router-link to="/">
        <img src="../assets/images/unnamed.png" alt="logo" style="width:160px;height:55px;margin-left:20px;padding-top:5px"/>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
    <el-autocomplete
    size="small"
      class="inline-input inputStyle"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Search by game name"
      :trigger-on-focus="false"
      @select="handleSelect"
    >
      <template slot-scope="{ item }">
    <div class="value">{{ item.name }}</div>
  </template>
     </el-autocomplete>
        </b-nav-form>
        <b-nav-item-dropdown text="Setting" right>
          <b-dropdown-item href="#">Login</b-dropdown-item>
          <b-dropdown-item href="#">Sign Up</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import {mapState,mapGetters } from "vuex";
import { EventBus } from '@/event-bus.js'
export default {
	name: 'navbar',
	data() {
		return {
			search: '',
        state2: ''
        }
    },
        methods: {
      querySearch(queryString, cb) {
        var games = this.games;
        var results = queryString ? games.filter(this.createFilter(queryString)) : games;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
            this.$router.push({
            name: 'GameInfo',
            params: {
              gameID:item.id,
            }
      })
       EventBus.$emit('signal', this.count)
      }
    },
    mounted() {
     // this.$store.dispatch('loadItems')
    },
    computed:{ 
    ... mapGetters(['games']),
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/style.scss';
.navbar
{   
  border-bottom: 3px solid rgb(253, 180, 5);
    position: fixed;
    width: 100%;
    z-index: 200;
    background-color: $greyColor;
    .el-input--small .el-input__inner
    {
      margin-top: 20px;
      width: 80%;
    }
}
 @media only screen and (max-width: 800px){
   .navbar
{   
    .inputStyle
    {
      margin-top: 20px !important;
      width: 80% !important;
      margin-bottom: 10px;
    }
    .form-inline
    {
      width: 100%;
    }
}
 }

</style>