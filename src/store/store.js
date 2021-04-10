import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        games: [],
        filteredGames: null,
    },
    getters: {
        games:(state)=> state.games,
        getFilteredGame: (state) => state.filteredGames,
    },
    mutations: {
        set_Games(state,items){
            state.games=items;
        },
        FILTERED_GAME (state, word) {
            if (!(word) || word === '{}') {
                state.filteredGames = state.games
            } else {
              state.filteredGames = state.games.filter((game) => {
                // console.log(game.genres[0].slug)
                    return  game.genres[0].slug.toLowerCase().includes(word.toLowerCase())
              })
            }
            // console.log(Object.keys(state.filteredGames).length)
          }
    },
    actions: {
        loadItems ({ commit }) {
               axios.get('https://rawg-video-games-database.p.rapidapi.com/games?page=95',{
                headers: {
                  'x-rapidapi-key': 'cfeffb9564msh384b3a54fdac563p1574e5jsnd9db71020247',
                  'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
                }
               })
               .then(response => {
                commit('set_Games',response.data.results);
                this.state.filteredGames=response.data.results
                  }).catch((error) => {
                    console.log(error)

                 })  
        },
        FILTERED_GAME ({ commit }, word) {
            commit('FILTERED_GAME', word)
          }
    },
});

export default store;