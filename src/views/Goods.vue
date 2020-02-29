<template>
  <div class="goods">
    <div class="letfdiv">
      <ul class="content">
        <div @click="clickLeft(index)" :class="{letfOne:true,
        selected:index==curselected}" v-for="(item,index) in list" :key="item.name">
          <span>{{ item.name }}</span>
        </div>
      </ul>
    </div>
    <div class="rightdiv">
      <ul class="content">
        <div :id="index" v-for="(item,index) in list" :key="item.id">
          <h5 class="rightType"> {{ item.name }}</h5>
          <div v-for="child in item.foods" :key="child.id" class="rightChild">
            <img :src="child.icon" class="childImg">
            <div class="childInf">
              <p class="childInf1">
                <label>{{child.name}}</label>
              </p>
              <p class="childInf2">
                <label>{{child.description}}</label>
              </p>
              <p>
                <label class="childInf3">月售{{child.sellCount}}份</label>
                <label>好评率{{child.rating}}%</label>
              </p>
              <p>
                <label class="childInf4">￥{{child.price}}</label>
                <label class="childInf5">{{child.oldPrice}}</label>
              </p>
              <div class="addRemove">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getgoods } from "../api/apis.js";
import Bscroll from "better-scroll";

export default {
  data() {
    return {
      list: [],
      curselected: 0
    };
  },
  created() {
    getgoods().then(res => {
      this.list = res.data.data;
    });
  },
  mounted() {
    new Bscroll(document.querySelector(".letfdiv"), {
      click: true
    });
    this.rightDiv = new Bscroll(document.querySelector(".rightdiv"));
  },
  methods: {
    clickLeft(index) {
      this.curselected = index;
      this.rightDiv.scrollToElement(document.getElementById(index), 500);
    }
  }
};
</script>

<style lang="less" scoped>
.goods {
  z-index: 10;
  display: flex;
  height: 400px;
  .letfdiv {
    width: 80px;
    height: 100%;
    overflow: scroll;
    text-align: center;
    .letfOne {
      height: 60px;
      background-color: #f3f6f6;
      border-bottom: 1px solid #dcdfdf;
      display: flex;
      align-items: center;
      span {
        text-indent: 10px;
        text-align: center;
      }
    }
  }
  .selected {
    background-color: #fff !important;
  }
  .rightdiv {
    flex: 1;
    height: 100%;
    overflow: scroll;
    font-size: 20px;
    .rightType {
      padding: 5px;
      background-color: #f3f6f6;
      color: #999da1;
      line-height: 20px;
      font-size: 16px;
      border-left: 4px solid #daddee;
    }
    .rightChild {
      height: 100px;
      display: flex;
      margin: 10px;
      color: #989b9d;
      border-bottom: 1px solid#989b9d;
      position: relative;
      .childImg {
        height: 80px;
      }
      .childInf {
        font-size: 14px;
        padding-left: 5px;
        .childInf1 {
          font-size: 16px;
          color: #000;
          font-weight: bolder;
        }
        .childInf2 {
          width: 90%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .childInf3 {
          margin-right: 10px;
        }
        .childInf4 {
          font-size: 16px;
          font-weight: bolder;
          color: #f1111b;
        }
      }
      .addRemove {
        position: absolute;
        bottom: 5px;
        right: 10px;
        span {
          margin-left: 5px;
          margin-right: 5px;
        }
        button {
          font-size: 20px;
          line-height: 24px;
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 24px;
          background-color: #00a1dc;
          color: #fff;
        }
      }
    }
  }
}
</style>