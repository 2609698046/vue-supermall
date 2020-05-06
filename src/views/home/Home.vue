<template>
  <div id="home">
    <!--navbar-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!--封装的Swiper-->
    <home-swiper :banners="banners"/>
    <!--RecommendView-->
    <home-recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  //这里使用{}导入，是因为home.js中没有使用default导出
  import {getHomeMultidata} from 'network/home'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      //创建的时候发送网络请求
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: #ff8198;
  }
</style>
