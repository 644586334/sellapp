<template>
    <div class="mian">
        <h3>购物车</h3>
        <div class="shopOne" v-for="item in shopcargoods" :key="item.name">
            <span>{{ item.name }} </span>
            <label>
                <button class="addDec" v-show="item.num>0" @click="clickDec(item.name)">-</button>
                <span v-show="item.num>0">{{item.num}}</span>
                <button class="addDec" @click="clickAdd(item.name)">+</button>
            </label>
        </div>
    </div>
</template>

<script>
export default {
  created() {},
  computed: {
    shopcargoods() {
      return this.$store.getters.getshopcargoods;
    }
  },
  methods: {
    clickDec(name) {
      this.$store.commit("decNum", name);
    },
    clickAdd(name) {
      this.$store.commit("addNum", name);
    }
  }
};
</script>

<style lang="less" scoped>
.mian {
  h3 {
    padding: 10px;
    background-color: #eee;
  }
  .shopOne {
    font-size: 14px;
    color: #000;
    padding: 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
  }
}
.addDec {
  width: 24px;
  height: 24px;
  line-height: 24px;
  border-radius: 24px;
  border: none;
  background-color: #00a1dc;
  font-size: 20px;
  color: #fff;

}
</style>
