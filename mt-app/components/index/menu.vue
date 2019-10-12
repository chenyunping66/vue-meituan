<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 16:28:57
 * @LastEditTime: 2019-10-09 11:16:25
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="item in menu" :key="item.id" @mouseenter="enter">
        <i :class="item.type" />{{ item.name }} <span class="arrow" />
      </dd>
    </dl>
    <div v-if="kind" class="detail" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(items,index) in curdetail.child">
        <h4 :key="index">{{ items.title }}</h4>
        <span v-for="list in items.child" :key="list.id">{{ list }}</span>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: '',  //鼠标移入类型
      menu: [{
        type: 'food',
        name: '美食',
        child: [{
          title: '美食',
          child: ['代金券', '葡萄干', '火锅', '快餐', '小吃']
        }]
      }, {
        type: 'takeout',
        name: '外卖',
        child: [{
          title: '外卖',
          child: ['干锅', '快餐', '中餐', '小炒', '汤品']
        }]
      }, {
        type: 'hotel',
        name: '酒店',
        child: [{
          title: '酒店星级',
          child: ['经济型', '舒适型', '三星', '四星', '五星']
        }]
      }, {
        type: 'movie',
        name: '电影',
        child: [{
          title: '热门电影',
          child: ['功夫熊猫', '哪吒传奇', '去哪儿爸爸', '我和我的祖国', '冰雪奇缘']
        }]
      }]
    }
  },
  computed: {
    curdetail: function () { //判断当前数据 并遍历
      console.log(this.menu.filter((item) => item.type === this.kind)[0])
      return this.menu.filter((item) => item.type === this.kind)[0]
      // 用 filer过滤item数组，并拿到type 然后添加到kind
    }
  },
  methods: {
    mouseleave: function () { //鼠标离开的时候
      let self = this;
      self._timer = setTimeout(() => {
        self.kind = ''
      }, 150);
    },
    enter: function (e) { //鼠标移入 获取当前 i上面的type值 然后赋值给kind
      console.log(this.kind)
      this.kind = e.target.querySelector('i').className
    },
    // 鼠标移入子级
    sover: function () {
      clearTimeout(this._timer)
    },
    sout: function () {
      this.kind = ''
    }
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/css/index/index.scss";
</style>
