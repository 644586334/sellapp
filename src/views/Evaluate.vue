<template>
  <div class="evaluate">
    <div class="score">
      <div class="scoreL">
        <p>
          <span class="ps1">{{sellerlist.score}}</span>
        </p>
        <p>综合评分</p>
        <p class="color">高于周边商家{{sellerlist.rankRate}}%</p>
      </div>
      <div class="scoreR">
        <p>口味评分
          <img src="../assets/img/star24_on@3x.png">
          <img src="../assets/img/star24_on@3x.png">
          <img src="../assets/img/star24_on@3x.png">
          <img src="../assets/img/star24_on@3x.png">
          <img src="../assets/img/star24_off@3x.png">
          <span class="colorScore">{{sellerlist.foodScore}}</span>
        </p>
        <p>服务态度
          <img src="../assets/img/star24_on@3x.png">
          <img src="../assets/img/star24_on@3x.png">
          <img src="../assets/img/star24_on@3x.png">
          <img src="../assets/img/star24_on@3x.png">
          <img src="../assets/img/star24_off@3x.png">
          <span class="colorScore">{{sellerlist.serviceScore}}</span>
        </p>
        <p>送达时间
          <span class="color">{{sellerlist.deliveryTime}}分钟</span>
        </p>
      </div>
    </div>
    <div class="comment">
      <div class="comAll">
        <div class="comTop">
          <div class="comTopa">全部
            <span>57</span>
          </div>
          <div class="comTopb">满意
            <span>47</span>
          </div>
          <div class="comTopb">不满意
            <span>10</span>
          </div>
        </div>
        <div class="comBot">
          <p>只看有内容的评价</p>
        </div>
      </div>
      <div class="comOne">
        <div class="comSon" v-for="item in ratingslist" :key="item.id">
          <div class="avatar"><img :src=item.avatar></div>
          <div class="rightOne">
            <div class="top">
              <p>{{ item.username }}
                <span>{{ item.rateTime| formatDate }}</span>
              </p>
              <p class="star1">
                <img src="../assets/img/star24_on@3x.png">
                <img src="../assets/img/star24_on@3x.png">
                <img src="../assets/img/star24_on@3x.png">
                <img src="../assets/img/star24_on@3x.png">
                <img src="../assets/img/star24_off@3x.png">
              </p>
            </div>
            <div>{{item.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getseller } from "../api/apis.js";
import { getratings } from "../api/apis.js";

export default {
  data() {
    return {};
  },
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },
  created() {
    getseller().then(res => {
      this.$store.commit("iniSellerlist", res.data.data);
    }),
      getratings().then(res => {
        this.$store.commit("iniRatingslist", res.data.data);
      });
  },
  computed: {
    sellerlist() {
      return this.$store.state.sellerlist;
    },
    ratingslist() {
      return this.$store.state.ratingslist;
    }
  }
};
</script>

<style lang="less" scoped>
.evaluate {
  width: 100%;
  height: 400px;
  background-color: #f3f6f6;
  color: #0e151a;
  font-size: 14px;
  .color {
    color: #b7bbbf;
  }
  .score {
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100%;
    height: 90px;
    background-color: #fff;
    display: flex;
    .scoreL {
      width: 40%;
      height: 100%;
      text-align: center;
      .ps1 {
        font-size: 24px;
        color: #fe9b00;
      }
    }
    .scoreR {
      width: 60%;
      height: 65px;
      border-left: 1px solid#b7bbbf;
      padding-left: 20px;
      margin-top: 10px;
      img {
        width: 14px;
      }
      .colorScore {
        color: #fe9b00;
        margin-left: 5px;
      }
    }
  }
  .comment {
    width: 100%;
    height: 285px;

    margin-top: 15px;
    .comAll {
      width: 100%;
      height: 70px;
      background-color: #fff;
      padding: 8px;
      margin-bottom: 1px;
      .comTop {
        width: 100%;
        height: 28px;
        display: flex;
        padding-bottom: 5px;
        border-bottom: 1px solid #f3f6f6;
        div {
          padding: 2px;
          color: #fff;
          background-color: #00a1dc;
          margin-right: 5px;
          text-align: center;
        }
        .comTopa {
          span {
            font-size: 10px;
          }
        }
        .comTopb {
          background-color: #e9ecec;
          color: #4c575c;
          span {
            font-size: 10px;
          }
        }
      }
      .comBot {
        color: #b7bbbf;
        line-height: 34px;
      }
    }
    .comOne {
      width: 100%;
      height: 100%;
      background: #fff;
      padding: 10px;
      .comSon {
        width: 100%;
        height: 80px;
        margin-bottom: 10px;
        border-bottom: 1px solid #f3f6f6;
        display: flex;
        .avatar {
          width: 24px;
          height: 24px;
          margin-right: 5px;
          img {
            width: 24px;
            border-radius: 24px;
          }
        }
        .rightOne {
          .top {
            margin-bottom: 10px;
            p {
              height: 12px;
              span {
                margin-left: 100px;
                color: #969b9c;
              }
            }
            .star1 {
              img {
                width: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
