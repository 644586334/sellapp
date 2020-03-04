<template>
    <div class="Store">
        <div class="header">
            <div class="top">
                <div class="left">
                    <p class="sellname">{{sellerlist.name}}</p>
                    <p class="star1">
                        <img src="../assets/img/star24_on@3x.png">
                        <img src="../assets/img/star24_on@3x.png">
                        <img src="../assets/img/star24_on@3x.png">
                        <img src="../assets/img/star24_on@3x.png">
                        <img src="../assets/img/star24_off@3x.png">
                        <span>月售690单</span>
                    </p>
                </div>
                <div class="right">
                    <p>
                        <span>❤</span>
                    </p>
                    <p>已收藏</p>
                </div>
            </div>
            <div class="bot">
                <div class="botOne">
                    <h5>起送价</h5>
                    <p>
                        <span>{{sellerlist.minPrice}}</span>元</p>
                </div>
                <div class="botOne">
                    <h5>商家配送</h5>
                    <p>
                        <span>{{sellerlist.deliveryPrice}}</span>元</p>
                </div>
                <div class="botOne">
                    <h5>平均配送时间</h5>
                    <p>
                        <span>{{sellerlist.deliveryTime}}</span>分钟</p>
                </div>
            </div>
        </div>
        <div class="notice">
            <h3>公告与活动</h3>
            <p class="color">{{sellerlist.bulletin}}</p>
            <p><img src="../assets/img/decrease_1@2x.png"> 在线支付满28减5</p>
            <p><img src="../assets/img/discount_1@2x.png"> VC无限橙果汁全场8折</p>
            <p><img src="../assets/img/special_1@2x.png"> 单人精彩套餐</p>
        </div>
        <div class="pics">
            <h3>商家实景</h3>
            <div class="picsimg">
                <div v-for="item in sellerlist.pics" :key="item.id">
                    <img :src=item>
                </div>
            </div>
        </div>
        <div class="inf">
            <h3>商家信息</h3>
            <div class="infos">
                <div v-for="item in sellerlist.infos" :key="item.id">
                    <p>{{item}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getseller } from "../api/apis.js";
export default {
  created() {
    getseller().then(res => {
      this.$store.commit("iniSellerlist", res.data.data);
    });
  },
  computed: {
    sellerlist() {
      return this.$store.state.sellerlist;
    }
  }
};
</script>


<style lang="less" scoped>
.Store {
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: #f3f6f6;
  color: #040b14;
  .header {
    width: 100%;
    height: 120px;
    background-color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    .top {
      height: 60px;
      display: flex;
      justify-content: space-between;
      .left {
        .sellname {
          font-size: 16px;
          font-weight: bolder;
        }
        .star1 {
          img {
            width: 12px;
          }
          span {
            margin-left: 10px;
            color: #4f5b5a;
          }
        }
      }
      .right {
        p {
          height: 30px;
          line-height: 30px;
          span {
            font-size: 30px;
            color: #f01514;
          }
          color: #4f5b5a;
        }
      }
    }
    .bot {
      height: 60px;
      border-top: 1px solid #f3f6f6;
      display: flex;
      justify-content: space-around;
      .botOne {
        h5 {
          color: #4f5b5a;
          height: 16px;
          margin-top: 5px;
        }
        p {
          height: 24px;
          line-height: 24px;
          font-size: 12px;
          span {
            font-size: 24px;
          }
        }
      }
    }
  }
  .notice {
    width: 100%;
    background-color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    .color {
      color: #f01514;
    }
    p {
      padding: 5px;
      border-bottom: 1px solid #f3f6f6;
    }
  }
  .pics {
    width: 100%;
    height: 150px;
    background-color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    .picsimg {
      margin-top: 5px;
      display: flex;
      overflow: scroll;
      img {
        height: 100px;
      }
    }
  }
  .inf {
    width: 100%;
    background-color: #fff;
    padding: 10px;
    padding-bottom: 100px;
    .infos{
        div{
            height: 50px;
            line-height: 50px;
            border-top: 1px solid#f3f6f6;
            overflow: scroll;
        }
    }
  }
}
</style>
