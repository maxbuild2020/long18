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
            <img
              src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/ag.892a02b5.png_.webp"
              alt
            />
          </div>
        </div>
        <p>AG电游总奖金</p>
        <span>{{AGAmount | currency('¥')}}</span>
      </div>

      <div class="game-pool-platform">
        <div class="game-pool-platform-wraper">
          <div class="img">
            <img
              src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/pt.4e030d7c.png_.webp"
              alt
            />
          </div>
        </div>
        <p>PT电游总奖金</p>
        <span>{{MGAmount | currency('¥')}}</span>
      </div>

      <div class="game-pool-platform">
        <div class="game-pool-platform-wraper">
          <div class="img">
            <img
              src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/mg.b41feb90.png_.webp"
              alt
            />
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
            <img
              src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/fishking.4949dc8d.png_.webp?22d0b4dc164d374aec4558b66eb08830"
            />
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
              <img
                src="https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/_l/electronicgames/pt/glrj.png_.webp"
                class="raduis4"
              />
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
      <div class="title">
        高奖池
        <span>7日内数据统计</span>
      </div>

      <div class="content-item d-f">
        <div v-for="(jackpot,index) in jackpots" :key="index">
          <div>
            <div class="content-wraper d-f">
              <div class="img d-f flex-direction-column align-content-between">
                <img
                  src="https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/_l/electronicgames/pt/zcjbjp.png_.webp"
                  class="raduis4"
                />
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
            <span>{{jackpot.amountx}}</span>
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
      isActive: true,
      jackpotsAmount: "",
      timer1: "",
      timer2: "",
      prizes: [
        {
          game: "疯狂铁路-疯狂铁路疯狂铁路",
          popularity: "996,588.00",
          bonus: "3,250.00",
          platform: "PNG",
          thread: "0",
        },
        {
          game: "八宝一路",
          popularity: "994,314.00",
          bonus: "70,098.00",
          platform: "PT",
          thread: "243",
        },
        {
          game: "押韵的卷轴",
          popularity: "988,056.00",
          bonus: "38,373.00",
          platform: "MG",
          thread: "0",
        },
        {
          game: "万圣节",
          popularity: "984,490.00",
          bonus: "6,250.00",
          platform: "PNG",
          thread: "0",
        },
        {
          game: "疯狂铁路",
          popularity: "984,325.00",
          bonus: "9,250.00",
          platform: "TTG",
          thread: "10",
        },
      ],
      jackpots:[
        {"game": "角斗士", "platform": "PT", "thread": "25", "amount": parseInt('1231248'), "amountx": ""},
        {"game": "招财进宝", "platform": "PT", "thread": "9", "amount": parseInt('12423534'), "amountx": ""},
        {"game": "炫酷水果", "platform": "PT", "thread": "25", "amount": parseInt('6543521'), "amountx": ""},
        {"game": "泰国神庙", "platform": "PT", "thread": "15", "amount": parseInt('123466666'), "amountx": ""},
        {"game": "沉默的武士", "platform": "PT", "thread": "25", "amount": parseInt('7654332'), "amountx": ""},
      ]
    };
  },
  methods: {
    toggle() {
      setInterval(() => {
        this.isActive = !this.isActive;
      }, 1000);
    },
    getAmount(){
      let jackpots = this.jackpots
      for( let i of this.jackpots){
        i['amountx'] = this.momney((i['amount']) += 0.01)
      }
      this.jackpots = jackpots
    },
    momney(s, n) {
      n = n > 0 && n <= 20 ? n : 2;
      // eslint-disable-next-line
      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
      var l = s.split(".")[0].split("").reverse(),
          r = s.split(".")[1];
      let t = "";
      for (let i = 0; i < l.length; i++) {
          t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
      }
      return t.split("").reverse().join("") + "." + r;
    }
  },
  mounted() {
    this.timer1 = setInterval(() => {
      this.AGAmount += 0.01;
      this.MGAmount += 0.01;
      this.PTAmount += 0.01;
      this.totalAmount += 0.01;
    }, 100);
    this.timer2 = setInterval(this.getAmount, 100);
  },
  beforeDestroy() {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  },
  filters:{
    currency
  }
};
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
    background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/total-jackpot-bg.c2d67458.png_.webp")
      no-repeat;
    background-size: 100%;
    margin: 10px;
    background-position: 50%;
    letter-spacing: 1.47px;
    .game-pool-bg {
      width: 278px;
      height: 116px;
      background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/total-jackpot-run2.691e7140.png_.webp")
        no-repeat;
      background-size: 100%;
      background-position: 50%;
    }
    .active {
      background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/total-jackpot-run1.4fe05185.png_.webp")
        no-repeat;
      background-size: 100%;
      width: 278px;
      height: 116px;
      background-position: 50%;
    }
  }
  .game-pool-platform {
    width: 207px;
    height: 110px;
    background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/light.d116d9a1.png")
      no-repeat;
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
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
      padding-left: 5px;
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
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
    .jackpot {
      background: url("data:image/png;base64,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");
      background-size: 100%;
      width: 155px;
      height: 25px;
      font-size: 14px;
      color: #f2c992;
      margin-top: 18px;
      text-align: right;
      span {
        padding-right: 1px;
        line-height: 27px;
        letter-spacing: 3.2px;
        text-indent: 2px;
      }
    }
  }
}
</style>