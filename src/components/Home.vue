<template>
    <div class='row'>
        <div id='home' class="col-sm-12 text-center">
            <div class='background'>
                <h1>欢迎来到订餐系统</h1>
                <h2>这里种类齐全</h2>
                <button @click='goToMenu()' class="btn btn-success">订餐从这里开始...</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    goToMenu() {
      // 跳转到上一次浏览的页面
      // this.$router.go(-1);
      // 指定跳转的地址
      // this.$router.replace('/menu');
      // 指定跳转路由的name
      // this.$router.replace({name:'menuLink'});
      // 通过push,可以传更多的参数
      this.$router.push({ name: "menuLink" });
    }
  }
};
</script>

<style lang='scss'>
#home {
  background: url("../assets/pizza.jpg");
  height: 85vh;
  padding: 10%;
  h1,
  h2 {
    margin: 6%;
  }
  .background {
    background: #eee;
    opacity: 0.8;
    /* chrome支持比较好 */
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
  }
}
</style>


