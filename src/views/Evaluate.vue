<template>
    <div class="evaluate">
        <div class="score">
            <div class="scoreL">
                <p>{{list1.score}}</p>
                <p>综合评分</p>
                <p>高于周边商家{{list1.rankRate}}</p>
            </div>
            <div class="scoreR">
                <p>口味评分
                    <img src="../assets/img/star24_on@3x.png">
                    <img src="../assets/img/star24_on@3x.png">
                    <img src="../assets/img/star24_on@3x.png">
                    <img src="../assets/img/star24_on@3x.png">
                    <img src="../assets/img/star24_off@3x.png"> {{list1.foodScore}}
                </p>
                <p>服务态度
                    <img src="../assets/img/star24_on@3x.png">
                    <img src="../assets/img/star24_on@3x.png">
                    <img src="../assets/img/star24_on@3x.png">
                    <img src="../assets/img/star24_on@3x.png">
                    <img src="../assets/img/star24_off@3x.png"> {{list1.serviceScore}}
                </p>
                <p>送达时间{{list1.deliveryTime}}分钟</p>
            </div>
        </div>
        <div class="comment">
            <div class="comAll">
                <div class="comTop">
                    <div>全部</div>
                    <div>满意</div>
                    <div>不满意</div>
                </div>
                <div class="comBot">
                    <p>√只看有内容的评价</p>
                </div>
            </div>
            <div class="comOne">
                <div class="comSon" v-for="item in list2" :key="item.id">
                    <div>{{ item.username }}</div>
                    <div>{{item.text}}</div>
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
    return {
      list1: [],
      list2: []
    };
  },
  created() {
    getseller().then(res => {
      this.list1 = res.data.data;
      console.log(this.list1);
    }),
      getratings().then(res => {
        this.list2 = res.data.data;
        console.log(this.list2);
      });
  }
};
</script>

<style lang="less" scoped>
.evaluate {
  width: 100%;
  height: 400px;
  background-color: #f3f6f6;
  .score {
    width: 100%;
    height: 80px;
    background-color: #fff;
    display: flex;
    .scoreL {
      width: 40%;
      height: 100%;
    }
    .scoreR {
      width: 60%;
      height: 100%;
      border-left: 1px solid red;
      img {
        width: 14px;
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
      padding: 10px;
      margin-bottom: 1px;
      .comTop {
        width: 100%;
        height: 25px;
        display: flex;
        border-bottom: 1px solid #f3f6f6;
        div {
          width: 50px;
          height: 20px;
          color: #fff;
          background-color: #00a1dc;
          margin-right: 10px;
        }
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
        border-bottom: 1px solid #f3f6f6;
      }
    }
  }
}
</style>
