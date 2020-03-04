import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        goodslist: [],
        ratingslist: [],
        sellerlist: []
    },
    mutations: {
        iniGoodslist(state, newArr) {
            state.goodslist = newArr
        },
        iniRatingslist(state, newArr) {
            state.ratingslist = newArr
        },
        iniSellerlist(state, newArr) {
            state.sellerlist = newArr
        },
        addNum(state, name) {
            state.goodslist.map((val) => {
                val.foods.map((son) => {
                    if (son.name == name) {
                        son.num++
                    }
                })
            })
        },
        decNum(state, name) {
            state.goodslist.map((val) => {
                val.foods.map((son) => {
                    if (son.name == name) {
                        son.num--
                    }
                })
            })
        },

    },
    getters: {
        getshopcargoods(state) {
            let arr = []
            let names = []
            for (let obj of state.goodslist) {
                for (let food of obj.foods) {
                    if (food.num > 0) {
                        if (!names.includes(food.name)) {
                            arr.push(food)
                            names.push(food.name)
                        }
                    }
                }
            }
            return arr
        }
    }

})

export default store