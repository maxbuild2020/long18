<template>
  <div class="header p-r" :class=" {fixed: isfixed}">
    <div class="bgc p-a"></div>
    <div class="container">
      <div class="row p-r d-f align-items-center">
        <a class="logo">
          <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/logo.39626dbe.png_.webp"/>
        </a>
        <a class="btn p-a" href="https://www.google.com/" target="_blank"></a>
        <div class="right d-f">
          <div class="notice d-f align-items-center">
            公告:
            <div class="content">
              <span class="content1" v-html="notice"></span>
              <span class="content1" v-html="notice"></span>
            </div>
          </div>
          <div class="tools d-f">
            <span class="tool d-f align-items-center flex-direction-column">
              <font-awesome-icon icon="bell" size="lg" class="font-icon"/>
              <span class="icon">消息</span>
              <span class="hoverbox" style="display:none">我的消息</span>
            </span>
            <span class="tool d-f align-items-center flex-direction-column">
              <font-awesome-icon icon="envelope-open" size="lg" class="font-icon"/>
              <span class="icon">论坛</span>
              <span class="hoverbox" style="display:none">我的消息</span>
            </span>
            <span class="tool d-f align-items-center flex-direction-column">
              <font-awesome-icon icon="bookmark" size="lg" class="font-icon"/>
              <span class="icon">
                <a href="javascript:void(0);" @click="addFavorite">收藏本站</a>
              </span>
              <span class="hoverbox" style="display:none">我的消息</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      notice: "1111我是滚动动1111 1111我是滚动动1111 1111我是滚动动1111",
      isfixed: false
    };
  },
  methods:{
    handlescroll(){
      let top = document.documentElement.scrollTop
      if( top> 85){
        this.isfixed = true
      } else {
        this.isfixed = false
      }
    },
    addFavorite(){
      let title = 'text';
      let url = 'http://text';
      try {
        window.external.addFavorite(url, title);
      }
        catch (e) {
      try {
          window.sidebar.addPanel(title, url, "");
      }
      catch (e) {
          alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
      }
    }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handlescroll)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handlescroll)
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
  width: 100%;
  border-bottom: 1px solid #292a30;
  background: #232429;
  z-index: 2;
  .container {
    padding: 0 15px;
  }
  .bgc{
    top: 0;
    width: inherit;
    height: 86px;
    background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/hazard.2bb0402c.png") no-repeat;
    background-position: -250px;
  }
}
.fixed{
  position: fixed;
  top: 0;
}
.row {
  height: 86px;
  justify-content: space-between;
  .logo {
    width: 345px;
    height: 51px;
    img {
      height: 100%;
    }
  }
  .btn {
    height: 86px;
    width: 210px;
    left: 330px;
    cursor: pointer;
  }
}

.right {
  min-width: 840px;
  .notice {
    width: 320px;
    margin: 0 20px 0 320px;
    color: #9c9da1;
    white-space: nowrap;
    font-size: 12px;
    .content {
      overflow: hidden;
      margin-left: 10px;
      width: 324px;
      .content1 {
        display: inline-block;
        animation: myMove 12s linear infinite;
        animation-fill-mode: forwards;
        @keyframes myMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-400px);
          }
        }
      }
    }
  }
}

.tools {
  width: 212px;
  color: #747782;
  .tool{
    width: 33%;
    .icon{
      margin-top: 5px;
    }
    .font-icon{
      color: #DEA07D;
    }
  }
}
</style>
