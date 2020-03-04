<template>
  <div>
    <div class="header">
      <div class="headermh" :style="{backgroundImage:'url('+data.avatar+')'}"></div>
      <div class="header">
        <div class="top">
          <img :src="data.avatar" class="hdimg">
          <div class="title">
            <p class="p1">
              <img src="../assets/img/brand@2x.png"> {{data.name}}
            </p>
            <p class="p2">{{data.description}}/{{data.deliveryTime}}分钟送达</p>
            <p class="p3">
              <img src="../assets/img/decrease_2@2x.png"> {{data.supports[0].description}},满50减10
            </p>
            <button class="five">5个 ></button>
          </div>
        </div>
        <div class="bot">
          <img src="../assets/img/bulletin@2x.png">
          <p>{{data.bulletin}}</p>>
        </div>
      </div>
    </div>
    <div class="nav">
      <Menu mode="horizontal" active-name="1">
        <MenuItem name="1">
        <router-link to="/goods">商品</router-link>
        </MenuItem>
        <MenuItem name="2">
        <router-link to="/evaluate">评价</router-link>
        </MenuItem>
        <MenuItem name="3">
        <router-link to="/store">商店</router-link>
        </MenuItem>
      </Menu>
    </div>
    <router-view></router-view>
    <transition name="slide-fade">
      <div v-show="shopcarShow" class="shopcar-board">

        <shopcar></shopcar>
      </div>
    </transition>
    <div class="shopcar" @click="shopcarShow = !shopcarShow">
      <div class="carImg">
        <img v-show="getPrice!==0" src="../assets/images/shopcar1.png">
        <img v-show="getPrice==0" src="../assets/images/shopcar2.png">
      </div>
      <div class="peisong">￥{{getPrice}}|
        <span>另需配送费￥{{data.deliveryPrice}}元</span>
      </div>
      <div v-show="getPrice<20" class="qisong">
        <span>20起送</span>
      </div>
      <div v-show="getPrice>=20" class="qisonga">
        <span>去结算</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getseller } from "../api/apis.js";
import { getgoods } from "../api/apis.js";
import shopcar from "./Shopcar";

export default {
  data() {
    return {
      shopcarShow: false,
      data: {
        supports: [{ description: "" }]
      }
    };
  },
  created() {
    getseller().then(res => {
      this.data = res.data.data;
    });
    getgoods().then(res => {
      this.$store.commit("iniGoodslist", res.data.data);
    });
  },
  methods: {},
  computed: {
    goodslist() {
      return this.$store.state.goodslist;
    },
    getPrice() {
      let total = 0;
      for (let food of this.$store.getters.getshopcargoods) {
        total += food.num * food.price;
      }
      return total;
    }
  },
  components: {
    shopcar
  }
};
</script>

<style lang="less" scoped>
.headermh {
  width: 100%;
  height: 150px;
  filter: blur(4px);
  position: absolute;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
}
.header {
  width: 100%;
  height: 150px;

  .top {
    padding-top: 20px;
    height: 80%;
    display: flex;
    .hdimg {
      border-radius: 5px;
      width: 80px;
      height: 80px;
      margin-right: 15px;
      margin-left: 20px;
    }
    .title {
      width: 210px;
      height: 80px;
      color: #fff;
      position: relative;
      .p1 {
        height: 20px;
        margin-top: 5px;
        font-weight: bolder;
        font-size: 16px;
        line-height: 20px;
        img {
          width: 36px;
          height: 20px;
        }
      }
      .p2 {
        font-size: 14px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .p3 {
        img {
          width: 16px;
        }
        font-size: 12px;
      }
      .five {
        width: 50px;
        height: 25px;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        line-height: 25px;
        border: none;
        border-radius: 25px;
        color: #fff;
        position: absolute;
        top: 50px;
        right: -38px;
      }
    }
  }
  .bot {
    height: 20%;
    display: flex;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    padding-top: 8px;
    img {
      margin-left: 20px;
      margin-right: 10px;
      width: 30px;
      height: 16px;
    }
    p {
      width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

.nav {
  height: 50px;
  .ivu-menu-horizontal {
    display: flex;
    justify-content: space-between;
    padding: 0;
    height: 50px;
    line-height: 50px;
  }
}

.shopcar {
  color: #919599;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  line-height: 60px;
  text-align: center;
  background-color: #141c27;
  display: flex;
  justify-content: space-between;
  .carImg {
    width: 80px;
    height: 80px;
    border-radius: 60px;
    background-color: #141c27;
    position: relative;
    top: -20px;
    left: 20px;
    img {
      width: 60px;
      height: 60px;
      margin-top: 10px;
    }
  }
  .peisong {
    height: 100%;
    background-color: #131d27;
    font-size: 20px;
    span {
      font-size: 10px;
    }
  }
  .qisong {
    height: 100%;
    width: 120px;
    background-color: color1afa29;
    font-weight: bolder;
  }
  .qisonga {
    height: 100%;
    width: 120px;
    background-color: #1afa29;
    color: #131d27;
    font-weight: bolder;
  }
}
.shopcar-board {
  position: fixed;
  height: 200px;
  width: 100%;
  bottom: 60px;
  background-color: #fff;
  overflow: scroll;
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(200px);
  opacity: 0;
}
</style>
