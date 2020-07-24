<template>
  <div class="main">
    <div class="main-container">
      <div class="content">
        <div class="tab d-f">
          <div
            class="tabchange d-f align-items justify-content-center"
            @click="menuShow(index)"
            v-for="(item,index) in tabs"
            :key="index"
            :class="{active: index==tabIndex}"
          >{{item}}</div>
        </div>
      </div>  

    <div class="download-container" v-show="tabIndex==0">
      <div class="tips">
        <span>
        <p>温馨提示：</p>
        <p>1.安卓手机建议使用手机UC、QQ、百度等浏览器下载</p>
        <p>2.苹果手机建议使用自带safari浏览器或直接使用自带相机对准二维码扫描下载</p></span>
      </div>

      <div class="download app p-r raduis4">
        <div class="title p-a">真人娱乐</div>
        <div class="content p-a"><img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/bacalet2.c68d2def.png_.webp"></div>
        <div class="qrcode-wrap p-a d-f">
          <div class="wrap raduis4">
            <div class="qrcode">
              <img src="/img/code.png" alt="">
            </div>
            <span>尊龙APP</span>
          </div>
          <div class="wrap raduis4">
            <div class="qrcode">
              <img src="/img/code.png" alt="">
            </div>
            <span>AG旗舰厅</span>
          </div>
          <div class="wrap raduis4">
            <div class="qrcode">
              <img src="/img/code.png" alt="">
            </div>
            <span>AS真人棋牌</span>
          </div>
        </div>
      </div>
      <div class="download app p-r raduis4">
        <div class="title p-a">彩票娱乐</div>
        <div class="content p-a"><img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/bacalet2.c68d2def.png_.webp"></div>
        <div class="qrcode-wrap p-a d-f">
          <div class="wrap raduis4">
            <div class="qrcode">
              <img src="/img/code.png" alt="">
            </div>
            <span>AG彩票</span>
          </div>
        </div>
      </div>

      <div class="download app p-r raduis4">
        <div class="title p-a">体投注乐</div>
        <div class="content p-a"><img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/bacalet2.c68d2def.png_.webp"></div>
        <div class="qrcode-wrap p-a d-f">
          <div class="wrap raduis4">
            <div class="qrcode">
              <img src="/img/code.png" alt="">
            </div>
            <span>易胜博体育</span>
          </div>

        </div>
      </div>
    </div>
  
    <div class="download-container" v-show="tabIndex==1">
      <div class="tips">
        <span>
          <p>仅适用于 windows 系统</p>  
        </span>
      </div>

      <div class="download tools p-r raduis4">
        <div class="title p-a">远程协助软件</div>
        <div class="content p-a"><img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/faraway.cbfb960b.png_.webp"></div>
        <div class="tools-wrap p-a d-f">
          <div class="wrap">
            <div class="wrap-title d-f" style="margin-bottom: 56px">
              <div class="img"><img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/icon2-1.87527c8b.png_.webp"></div>
              <div class="text">
              <span>轻松安全的远程桌面访问</span></div>
            </div>
            <div class="button-wrap">
              <button class="raduis4 button-download">立即下载</button>  
              <button class="raduis4 button-guide">安装教程</button>  
            </div>
          </div>
        </div>
      </div>
      <div class="download tools p-r raduis4">
        <div class="title p-a">远程协助软件</div>
        <div class="content p-a" style="width: 153px; height: 142px; top:60px ; left:80px"><img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/clear.331c5d5c.png_.webp"></div>
        <div class="tools-wrap p-a d-f">
          <div class="wrap">
            <div class="wrap-title d-f" style="margin-bottom: 56px">
              <div class="img"><img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/icon2-1.87527c8b.png_.webp"></div>
              <div class="text">
              <span>轻松安全的远程桌面访问</span></div>
            </div>
            <div class="button-wrap">
              <button class="raduis4 button-download">立即下载</button>  
              <button class="raduis4 button-guide">安装教程</button>  
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="download-container" v-show="tabIndex==2">
      <div class="tips">
        <span>
          <p>仅适用于 windows 系统</p>  
        </span>
      </div>

      <div class="download browser p-r raduis4">
        <div class="title p-a">谷歌浏览器</div>
        <div class="content p-a d-f">
          <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/chrome.6e5c2639.png_.webp">
        </div>
        <div class="text p-a">
          Google Chrome
          <p>智能工具，Chrome现在更易用，更安全，更快速</p>
        </div>
        <div class="tools-wrap p-a d-f">
          <div class="wrap">
            <div class="button-wrap" style="margin-top: 56px">
              <button class="raduis4 button-download">立即下载</button>  
              <button class="raduis4 button-guide">安装教程</button>  
            </div>
          </div>
        </div>
      </div>
      <div class="download browser p-r raduis4">
        <div class="title p-a">谷歌浏览器</div>
        <div class="content p-a d-f">
          <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/huanyu.d014147d.png_.webp">
        </div>
        <div class="text p-a">
          Universe Browser
          <p>哪里都能去</p>
        </div>
        <div class="tools-wrap p-a d-f">
          <div class="wrap">
            <div class="button-wrap" style="margin-top: 56px">
              <button class="raduis4 button-download">立即下载</button>  
              <button class="raduis4 button-guide">安装教程</button>  
            </div>
          </div>
        </div>
      </div>
      <div class="download browser p-r raduis4">
        <div class="title p-a">谷歌浏览器</div>
        <div class="content p-a d-f">
          <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/firefox.e075ff64.png_.webp">
        </div>
        <div class="text p-a">
          mozilla Fire Fox
          <p>快，只为更好</p>
        </div>
        <div class="tools-wrap p-a d-f">
          <div class="wrap">
            <div class="button-wrap" style="margin-top: 56px">
              <button class="raduis4 button-download">立即下载</button>  
              <button class="raduis4 button-guide">安装教程</button>  
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      tabs: ["游戏APP下载", "工具下载", "浏览器下载"]
    }
  },
  methods:{
    menuShow(index){
      this.tabIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 950px;
  height: 780px;
  margin-left: 15px;
  .tab {
    border-bottom: 1px solid #333333;
    height: 50px;
    box-sizing: border-box;
    margin-bottom: 10px;
    color: #94979e;
    .tabchange {
      width: 195px;
      height: 100%;
      font-size: 16px;
      cursor: pointer;
      align-items: center;
    }
    .tabchange:hover {
      color: #ffffff;
    }
    .active {
      border-bottom: 2px solid #835b4c;
      color: #ffffff;
    }
  }
}

.download-container{
  .tips{
    color: #D2D0CE;
    font-size: 12px;
    text-align: right;
    margin: 29px 0 20px 0;
    span{
      display: inline-block;
      text-align: left;
      line-height: 18px;
    }
  } 
}

.download{
  width: 950px;
  height: 215px;
  background: grey;
  margin-top: 10px;
  background: #2B2C31;
  .title{
    font-size: 16px;
    color: #ffffff;
    left: 30px;
    top: 15px;
    background-image: -webkit-gradient(linear,left top,right bottom,from(#f9db9a),to(#c88768));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content{
    width: 142px;
    height: 131px;
    left: 15px;
    top: 60px;
    z-index: 1;
    img{
      width: 100%;
    }
  }
  .qrcode-wrap{
    padding: 16px 0 0 250px;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/download-bg.7f42fd19.png") no-repeat;
    background-size: 100%;
    box-sizing: border-box;
    .wrap{
      margin-right: 60px;
      padding: 10px 13px;
      border: 1px solid #828282; 
      width: 172px;
      height: 187px;
      box-sizing: border-box;
      .qrcode{
      padding: 10px;
      background-size: 100%;
      width: 144px;
      height: 144px;
      background: #ffffff;
      box-sizing: border-box; 
      right: 50px;
      top: 40px;
      margin-bottom: 10px;
        img{
          width: 100%;
        }
      }
      span{
          color: #ffffff;
        }
      span:hover{
        background-image: -webkit-gradient(linear,left top,right bottom,from(#f9db9a),to(#c88768));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
.tools{
  background-size: 100%;
  .content{
    width: 274px;
    height: 181px;
    top: 25px;
    left: 55px;
  }
}
.tools-wrap{
    width: 100%;
    height: 100%;
    background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/download-bg.7f42fd19.png") no-repeat;
    background-size: 100%;
    .wrap{
      margin: 36px 0 0 428px;
      .img{
        height: 41px;
        padding-right: 25px;
        img{
          height: 100%;
        }
        border-right: 1px solid #454545;
      }
      span{
        font-size: 13px;
        color: #c3c2c2;
        line-height: 41px;
        padding: 0 25px;
      }
      .button-wrap{
        button{
          width: 205px;
          height: 44px;
          font-size: 15px;
          font-weight: 500;
        }
        .button-download{
          color:#ffffff;
          background-image: linear-gradient(135deg,#c7977c,#ad7a62);
        }
        .button-download:hover{
          background-image: linear-gradient(135deg,#ad7a62,#c7977c);
        }
        .button-guide{
          color: #BD8164;
          background: #32333A;
          border: 1px solid #FABE99;
          margin-left: 40px;
        }
      }
    }
  }
.browser{
  .content{
    left: 27px;
    top: 85px;
    img{
      width: 86px;
      height: 86px;
    }
  }
  .text{
    padding: 98px 0 0 145px;
    text-align: left;
    font-size: 18px;
    color: #ffff;
    width: 210px;
    z-index: 2;
    
    p{
      font-size: 13px;
      color: #747782; 
      margin-top: 5px;
      line-height: 18px;
    }
  }
}
</style>