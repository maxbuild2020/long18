<template>
  <div class="slots">
    <div class="slots-header d-f justify-content-between align-items-center">
      <div class="game-pool">
        <div class="game-pool-wraper">
          <div class="game-pool-bg" :class=" { active: isActive}">
            <p>电子游戏奖金奖池</p>
            <span>{{totalAmount | currency('¥')}}</span>
          </div>
        </div>
      </div>
      <div class="game-pool-platform">
        <div class="game-pool-platform-wraper">
          <div class="img">
            <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/ag.892a02b5.png_.webp" alt />
          </div>
        </div>
        <p>AG电游总奖金</p>
        <span>{{AGAmount | currency('¥')}}</span>
      </div>

      <div class="game-pool-platform">
        <div class="game-pool-platform-wraper">
          <div class="img">
            <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/pt.4e030d7c.png_.webp" alt />
          </div>
        </div>
        <p>PT电游总奖金</p>
        <span>{{MGAmount | currency('¥')}}</span>
      </div>

      <div class="game-pool-platform">
        <div class="game-pool-platform-wraper">
          <div class="img">
            <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/mg.b41feb90.png_.webp" alt />
          </div>
        </div>
        <p>MG电游总奖金</p>
        <span>{{MGAmount | currency('¥')}}</span>
      </div>
    </div>
    <div class="tab d-f">
      <span class="d-f align-items justify-content-center">真人娱乐</span>
    </div>

    <div class="high d-f justify-content-between">
      <div class="high-explosive raduis4">
        <div class="title">
          高爆
          <span>7日内数据统计</span>
        </div>
        <div class="content-wraper d-f">
          <div class="img">
            <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/fishking.4949dc8d.png_.webp?22d0b4dc164d374aec4558b66eb08830" />
          </div>
          <div class="inner-content">
            <div class="tiny-title">AG捕鱼王</div>
            <div class="tiny-content">
              <p>
                投注笔数
                <span>266,395,636.00</span>
              </p>
              <p>
                派奖金额
                <span>228,581,096.41</span>
              </p>
            </div>
            <button>立即游戏</button>
          </div>
        </div>
      </div>

      <div class="high-prize raduis4">
        <div class="title">
          高派彩
          <span>7日内数据统计</span>
        </div>
        <div class="content-item d-f">
          <div class="content-wraper d-f p-r" v-for="(prize,index) in prizes" :key="index">
            <div class="img d-f flex-direction-column align-content-between">
              <img src="https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/_l/electronicgames/pt/glrj.png_.webp" class="raduis4" />
              <button class="raduis4">立即游戏</button>
            </div>
            <div class="inner-content">
              <div class="tiny-title">{{prize.game}}</div>
              <div class="tiny-content">
                <p>
                  人气
                  <span>{{prize.popularity}}</span>
                </p>
                <p>
                  派彩
                  <span>{{prize.bonus}}</span>
                </p>
                <div class="type">
                  <span>{{prize.platform}}</span>
                  <span>|</span>
                  <span>{{prize.thread}}线</span>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>

    <div class="high-jackpot raduis4">
      <div class="title">高奖池<span>7日内数据统计</span></div>

      <div class="content-item d-f">
        <div v-for="(jackpot,index) in jackpots" :key="index">
          <div>
            <div class="content-wraper d-f">
              <div class="img d-f flex-direction-column align-content-between">
                <img src="https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/_l/electronicgames/pt/zcjbjp.png_.webp" class="raduis4" />
                <button class="raduis4">立即游戏</button>
              </div>
              <div class="inner-content">
                <div class="tiny-title">{{jackpot.game}}</div>
                <div class="tiny-content">
                  <div class="type">
                    <span>{{jackpot.thread}}</span>
                    <span>|</span>
                    <span>{{jackpot.platform}}线</span>
                  </div>
                </div>
              </div>
            </div>            
          </div>
          <div class="jackpot">
            <span>{{jackpot.amount| currency()}}</span>
          </div>        
        </div>
      </div>

    </div>
    <router-view></router-view>


  </div>
</template>

<script>
import {currency} from '@/unit/currency';
export default {
  data() {
    return {
      totalAmount: 876524321,
      AGAmount: 153454323,
      PTAmount: 645633233,
      MGAmount: 342345454,
      jackpot:{
        amount: 0
      },
      isActive: true,
      jackpotsAmount: '',
      prizes:[
        {"game": "疯狂铁路-疯狂铁路疯狂铁路", "popularity": "996,588.00","bonus":"3,250.00","platform": "PNG", "thread": "0"},
        {"game": "八宝一路", "popularity": "994,314.00","bonus":"70,098.00","platform": "PT", "thread": "243"},
        {"game": "押韵的卷轴", "popularity": "988,056.00","bonus":"38,373.00","platform": "MG", "thread": "0"},
        {"game": "万圣节", "popularity": "984,490.00","bonus":"6,250.00","platform": "PNG", "thread": "0"},
        {"game": "疯狂铁路", "popularity": "984,325.00","bonus":"9,250.00","platform": "TTG", "thread": "10"}
      ],
      jackpots:[
        {"game": "翡翠公主", "platform": "PT", "thread": "15", "amount": parseInt('012345678')},
        {"game": "角斗士", "platform": "PT", "thread": "25", "amount": "122345678"},
        {"game": "招财进宝", "platform": "PT", "thread": "9", "amount": "000345678"},
        {"game": "炫酷水果", "platform": "PT", "thread": "25", "amount": "01345678"},
        {"game": "泰国神庙", "platform": "PT", "thread": "15", "amount": "000445678"},
        {"game": "沉默的武士", "platform": "PT", "thread": "25", "amount": "000945678"},
      ]
    };
  },
  methods: {
    toggle() {
      setInterval(() => {
        this.isActive = !this.isActive;
      }, 1000);
    }
  },
  filters:{
    currency
  },
  mounted() {
    setInterval(()=>{
      this.AGAmount+=0.01
      this.MGAmount+=0.01
      this.PTAmount+=0.01
      this.totalAmount+=0.01
      this.jackpot.amount+=0.01
    },50)
  }
}
</script>

<style lang="scss" scoped>
.slots-header {
  p {
    font-size: 16px;
    padding-top: 38px;
    color: #ffffff;
    margin-bottom: 10px;
  }
  span {
    font-size: 21px;
    background-image: -webkit-linear-gradient(0deg, #f6a382, #ffe497);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
  .game-pool-wraper {
    background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/total-jackpot-bg.c2d67458.png_.webp") no-repeat;
    background-size: 100%;
    margin: 10px;
    background-position: 50%;
    letter-spacing: 1.47px;
    .game-pool-bg {
      width: 278px;
      height: 116px;
      background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/total-jackpot-run2.691e7140.png_.webp") no-repeat;
      background-size: 100%;
      background-position: 50%;
    }
    .active {
      background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/total-jackpot-run1.4fe05185.png_.webp") no-repeat;
      background-size: 100%;
      width: 278px;
      height: 116px;
      background-position: 50%;
    }
  }
  .game-pool-platform {
    width: 207px;
    height: 110px;
    background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/light.d116d9a1.png") no-repeat;
    background-size: 100%;
    margin-top: -35px;
    padding-top: 40px;
    .img {
      width: 54px;
      height: 54px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    p {
      padding-top: 6px;
      font-size: 14px;
      color: #d8d8d8;
    }
    span {
      font-size: 18px;
    }
  }
}
.slots {
  margin-left: 15px;
  width: 954px;
  .tab {
    border-bottom: 1px solid #333333;
    height: 50px;
    box-sizing: border-box;
    margin-bottom: 10px;
    padding-top: 15px;
    span {
      width: 195px;
      height: 100%;
      border-bottom: 2px solid #835b4c;
      font-size: 16px;
      color: #ffffff;
      align-items: center;
    }
  }
}
.high {
  text-align: left;
  .title {
    margin-bottom: 10px;
    font-size: 18px;
    color: #ffffff;
    span {
      font-size: 12px;
      color: #86868b;
    }
  }
  .high-explosive {
    width: 345px;
    height: 216px;
    background: #32333a;
    padding: 15px;
    box-sizing: border-box;
    .img {
      width: 135px;
      height: 145px;
      img {
        width: 100%;
      }
    }
    .inner-content {
      padding-left: 15px;
      .tiny-title {
        font-size: 16px;
        line-height: 46px;
        color: #ffffff;
      }
      .tiny-content {
        font-size: 14px;
        color: #86868b;
        line-height: 24px;
        span {
          font-size: 13px;
          color: #e9e9e9;
        }
      }
      button {
        background: #c18f75;
        color: #ffffff;
        height: 40px;
        width: 160px;
        border-radius: 4px;
        margin-top: 10px;
      }
    }
  }
}
.high-prize {
  width: 599px;
  height: 216px;
  background: #32333a;
  padding: 15px;
  box-sizing: border-box;
  .content-item {
    padding-top: 22px;
    overflow: hidden;
    .content-wraper {
      height: 108px;
      min-width: 192px;
      .img {
        width: 73px;
        height: 73px;
        img {
          width: 100%;
        }
        button {
          color: #d19881;
          background: #32333a;
          font-size: 12px;
          line-height: 26px;
          margin-top: 7px;
          padding: 0 10px;
          border: 1px solid #d19881;
        }
      }
      .inner-content {
        padding-left: 9px;
        .tiny-title {
          width: 70px;
          font-size: 14px;
          padding-bottom: 28px;
          color: #ffffff;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        .tiny-content {
          font-size: 12px;
          color: #86868b;
          line-height: 16px;
          span {
            color: #e9e9e9;
          }
        }
        button {
          background: #c18f75;
          color: #ffffff;
          height: 40px;
          width: 160px;
          border-radius: 4px;
          margin-top: 10px;
        }
        .type {
          margin-top: 10px;
          display: block;
          width: 86px;
          line-height: 20px;
          font-size: 12px;
          background: #3c4047;
          color: #8d8d92;
          border-radius: 10px;
          text-indent: 12px;
          span {
            margin: 0 2px;
          }
        }
      }
    }
  }

  
}
.high-jackpot {
  .title {
  margin-bottom: 10px;
  font-size: 18px;
  color: #ffffff;
    span {
      font-size: 12px;
      color: #86868b;
      padding-left: 5px
    }
  }
  text-align: left;
  width: 954px;
  height: 235px;
  background: #32333a;
  margin-top: 10px;
  padding: 15px;
  box-sizing: border-box;
  .content-item {
    padding-top: 22px;
    overflow: hidden;
    .content-wraper {
      height: 108px;
      width: 192px;
      .img {
        width: 73px;
        height: 73px;
        img {
          width: 100%;
        }
        button {
          color: #d19881;
          background: #32333a;
          font-size: 12px;
          line-height: 26px;
          margin-top: 7px;
          padding: 0 10px;
          border: 1px solid #d19881;
        }
      }
      .inner-content {
        padding-left: 9px;
        .tiny-title {
          font-size: 14px;
          padding-bottom: 28px;
          color: #ffffff;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        button {
          background: #c18f75;
          color: #ffffff;
          height: 40px;
          width: 160px;
          border-radius: 4px;
          margin-top: 10px;
        }
        .type {
          margin-top: 10px;
          display: block;
          width: 86px;
          line-height: 20px;
          font-size: 12px;
          background: #3c4047;
          color: #8d8d92;
          border-radius: 10px;
          text-indent: 12px;
          span {
            margin: 0 2px;
          }
        }
      }
    }
    .jackpot{
      background: url("/slots/amount.png");
      background-size: 100%;
      width: 155px;
      height: 25px;
      font-size: 14px;
      color: #f2c992;
      margin-top: 18px;
      text-align: right;
      span{
        padding-right: 1px;
        line-height: 27px;
        letter-spacing: 3.5px;
        text-indent: 2px;
      }
    }
  }
}
</style>