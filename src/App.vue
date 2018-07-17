<template>
  <div id="app">
    <div class="container">
      <!-- 展示共有的头部 -->
      <app-header></app-header>  
    </div>
    <!-- router-view的共用 -->
    <div class='container'>
      <router-view></router-view>
    </div>
    <br>
    <!-- 展示底部卡片 -->
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name='orderGuide'>

          </router-view>
        </div>
         <div class="col-sm-12 col-md-4">
          <router-view name='delivery'>

          </router-view>
        </div>
         <div class="col-sm-12 col-md-4">
          <router-view name='history'>

          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  }
};
</script>

<style lang="scss">
</style>
