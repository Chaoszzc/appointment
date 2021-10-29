<template>
  <div id="app">
    <keep-alive>
          <!-- 如果当前打开页面的路由中 keepAlive: true （开启了缓存时） -->
          <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 如果当前打开页面的路由中 没有 或者为 keepAlive: false （关闭缓存时[默认就是false]） -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

*{
  padding: 0;
  margin: 0;
}
</style>
