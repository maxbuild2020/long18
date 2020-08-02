<template>
  <div id="app">
    <Header></Header>
    <Content></Content>
    <Sidebar></Sidebar>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'
// import axios from 'axios';

export default {
  components: {
    Header,
    Sidebar,
    Content,
    Footer
  }
}

</script>
<style lang="scss">
#app {
  font-family: "\5FAE\8F6F\96C5\9ED1",Microsoft Yahei,sans-serif,SF Pro Text,Myriad Set Pro,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #232429;
  width: 100%;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
