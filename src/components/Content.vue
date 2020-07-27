<template>
  <div class="content" :class=" {fixed: isfixed}">
    <div class="content-container">
      <div class="row d-f">
        <div class="lsidebar d-f flex-direction-column">
          <div class="registor d-f flex-direction-column  justify-content-center">
            <div class="registor-img">
            <img src="data:image/png;base64,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" alt=""></div>
            <span>极速开户</span>
          </div>
          <div class="login flex-direction-column d-f justify-content-center">登陆</div>
          <div class="menu flex-direction-column d-f">
            <div class="withdraw d-f align-items-center justify-content-center">
              <font-awesome-icon icon="money-check" size="lg" class="font-icon"/><span>取款</span>
            </div>

            <nav>
              <div class="selection">
                <div class="title">列表</div>
                <ul>
                  <li><font-awesome-icon icon="home" size="lg" class="font-icon"/><a href="/">首页</a></li>
                  <li>
                    <font-awesome-icon icon="dragon" size="lg" class="font-icon"/>
                    <a href="/promotion">最新优惠</a>
                    <font-awesome-icon icon="fire" size="lg" class="font-icon"/>
                  </li>
                </ul>
              </div>
              <div class="selection">
                <div class="title">游戏</div>
                <ul>
                  <li><font-awesome-icon icon="dice" size="lg" class="font-icon"/><a href="/lives">真人娱乐</a></li>
                  <li><font-awesome-icon icon="dice" size="lg" class="font-icon"/><a href="/slots">电游大厅</a></li>
                  <li><font-awesome-icon icon="dice" size="lg" class="font-icon"/><a href="/sports">体育</a></li>
                  <li><font-awesome-icon icon="dice" size="lg" class="font-icon"/><a href="/lotto">彩票</a></li>
                </ul>
              </div>
              <div class="selection">
                <div class="title">其他</div>
                <ul>
                  <li><font-awesome-icon icon="download" size="lg" class="font-icon"/><a href="/download">下载中心</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <router-view></router-view>
        <div class="rsidebar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 data(){
   return{
     isfixed: false
   }
 },
  methods:{
    handlescroll(){
      let top = document.documentElement.scrollTop
      // console.log(top)
      if( top> 85){
        this.isfixed = true
      } else {
        this.isfixed = false
      }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handlescroll)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handlescroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content{
  // min-height: 546px;
  // border:1px solid green;
  margin-top: 24px;
}
.fixed{
  margin-top: 110px;
}
.lsidebar{
  width: 160px;
  margin-left: 5px;
  height: 780px;
  background: #2b2b32;
  border-radius: 2px;
  .registor{
    background: #BA886F;
    height: 100px;
    margin-bottom: 4px;
    border-radius: 4px;
    cursor:pointer;
    .registor-img{
      margin: 0 auto;
      width: 115px;
      height: 36px; 
      img{
        width: 100%;
      }
    }
    span{
      font-size: 17px;
      color: #fff;
      margin-top: 8px;
    }
  }
  .login{
    background: #363C4E;
    color: #d3d3d3;
    height: 56px;
    margin-bottom: 4px;
    border-radius: 4px;
    cursor: pointer;
  }
}

.menu{
  padding: 0 7px;
  background: #2b2b32;
  color: #95979f;
  .withdraw{
    height: 67px;
    font-size: 14px;
    border-bottom: 1px solid #343437;
    .font-icon{
      color: #FF9C6D;
    }
    span{
       padding-left: 10px;
    }
  }
  nav{
    text-align: left;
    padding: 5px 10px;
  }
}

.selection{
  .title{
    margin: 6px 0 10px 0;
    font-size: 12px;
  }
  li{
    font-size: 14px;
    margin-bottom: 18px;
    height: 18px;
    
    .font-icon{
      color: #FF9C6D;
    }
    a{
      padding: 0 5px;
      vertical-align: middle;
    }
  }
}
.fa{
  width: 50px;
  height: 50px;
  color: red;
}

</style>
