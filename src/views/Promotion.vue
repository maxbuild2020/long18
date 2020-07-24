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
            :class="{active: index==menuIndex}"
          >{{item}}</div>
        </div>

        <div class="brand-content d-f">
          <div
            class="content-wrap raduis4 p-r" 
            v-for="(promo,index) in promos"
            :key="index"
            v-show="promo.type==menuIndex"
          >
              <div class="hover p-a d-f flex-direction-column justify-content-center">
                <div class="hover-btn">
                  <button>查看详情</button>
                </div>
              </div>
            <div class="img raduis4">
              <img :src="promo.src" style="width: 100%"  class="raduis4"/>
            </div>
            <div class="content p-r">
              <div class="title">
                <p>{{promo.title}}</p>
              </div>
              <span class="period p-a raduis4">{{ promo.deadline | timeDown}}</span>
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
      time: "",
      flag: false,
      menuIndex: 0,
      tabs: ["新手优惠", "限时优惠", "长期优惠", "往期优惠"],
      promos: [
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/usdt-free_pcpr.png_.webp",
          type: "0",
          title: "贴图回帖可免费获得8UST,新手优惠",
          deadline: "2020-8-15 24:00"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/usdt-free_pcpr.png_.webp",
          type: "0",
          title: "贴图回帖可免费获得8UST,新手优惠",
          deadline: "unlimited"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/usdt-free_pcpr.png_.webp",
          type: "0",
          title: "贴图回帖可免费获得8UST,新手优惠",
          deadline: "unlimited"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/usdt-free_pcpr.png_.webp",
          type: "0",
          title: "贴图回帖可免费获得8UST,新手优惠",
          deadline: "unlimited"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/5136c05480484fe5c5ff4288b5e88ebf.jpg_.webp",
          type: "1",
          title: "贴图回帖可免费获得8UST,限时优惠",
          deadline: "2020-8-10 24:00"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/5136c05480484fe5c5ff4288b5e88ebf.jpg_.webp",
          type: "1",
          title: "贴图回帖可免费获得8UST,限时优惠",
          deadline: "2020-9-11 24:00"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/5136c05480484fe5c5ff4288b5e88ebf.jpg_.webp",
          type: "1",
          title: "贴图回帖可免费获得8UST,限时优惠",
          deadline: "2020-10-12 24:00"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/5136c05480484fe5c5ff4288b5e88ebf.jpg_.webp",
          type: "1",
          title: "贴图回帖可免费获得8UST,限时优惠",
          deadline: "2020-11-13 24:00"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/top-banner/85035504c032ec90c708661bbc6fbb81.jpg_.webp",
          type: "2",
          title: "贴图回帖可免费获得8UST,长期优惠",
          deadline: "2020-12-10 24:00"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/top-banner/85035504c032ec90c708661bbc6fbb81.jpg_.webp",
          type: "2",
          title: "贴图回帖可免费获得8UST,长期优惠",
          deadline: "unlimited"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/top-banner/85035504c032ec90c708661bbc6fbb81.jpg_.webp",
          type: "2",
          title: "贴图回帖可免费获得8UST,长期优惠",
          deadline: "unlimited"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",
          type: "3",
          title: "贴图回帖可免费获得8UST,已过期",
          deadline: "expired"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",
          type: "3",
          title: "贴图回帖可免费获得8UST,已过期",
          deadline: "expired"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",
          type: "3",
          title: "贴图回帖可免费获得8UST,已过期",
          deadline: "expired"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",
          type: "3",
          title: "贴图回帖可免费获得8UST,已过期",
          deadline: "expired"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",
          type: "3",
          title: "贴图回帖可免费获得8UST,已过期",
          deadline: "expired"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",
          type: "3",
          title: "贴图回帖可免费获得8UST,已过期",
          deadline: "expired"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",
          type: "3",
          title: "贴图回帖可免费获得8UST,已过期",
          deadline: "expired"
        },
        {
          src: "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/promotion/f3ccdd27d2000e3f9255a7e3e2c48800.jpg_.webp",
          type: "3",
          title: "贴图回帖可免费获得8UST,已过期",
          deadline: "expired"
        }
      ]
    };
  },
  methods: {
    menuShow(index) {
      this.menuIndex = index;
    }
  },
  filters: {
    timeDown(value) {
      // setInterval(() => {
        if (value == "unlimited") {
          return "长期活动";
        } else if (value == "expired") {
          return "已结束";
        } else {
          const endTime = new Date(value);
          const nowTime = new Date();
          const msec = endTime - nowTime;
          if (msec <= 0) {
            return "已结束";
          } else {
            let day = parseInt(msec / 1000 / 60 / 60 / 24);
            let hr = parseInt((msec / 1000 / 60 / 60) % 24);
            let min = parseInt((msec / 1000 / 60) % 60);
            let sec = parseInt((msec / 1000) % 60);
            hr = hr > 9 ? hr : "0" + hr;
            min = min > 9 ? min : "0" + min;
            sec = sec > 9 ? sec : "0" + sec;
            return `截止日期: ${day}天 ${hr}小时 ${min}分钟 ${sec}秒`;
          }
        }
      // }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 952px;
  height: 780px;
  border: 1px solid;
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
.brand-content {
  width: 970px;
  border-bottom: 1px solid #333333;
  flex-wrap: wrap;
  .content-wrap {
    height: 230px;
    width: 306px;
    background: #2b2c31;
    margin: 0 10px 10px 0;
    box-sizing: border-box;
    border:1px solid transparent;
    animation: myMove 0.5s ease;
    @keyframes myMove {
      0% {
        transform: rotate(-90deg);
        transform-origin: 200px 200px;
      }
      100% {
        transform: rotate(0);
        transform-origin: 200px 200px;
      }
    }
    .hover {
    background: rgba(35, 35, 42, 0.3);
    width: inherit;
    height: inherit;
    text-align: center;
    left: 0;
    top: 0;
    display: none;
    z-index: 1;
    .hover-btn {
      font-size: 15px;
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
  .content-wrap:hover{
    border: 1px solid #F2CA91
  }
  .content-wrap:hover .img,   .content-wrap:hover .content{
    filter: blur(10px);
  }
  .content-wrap:hover .hover{
    display: flex;
  }
  .content {
    height: 72px;
    text-align: left;
    color: #ffffff;
    font-size: 13px;
    padding: 11px 9px 0 9px;
    line-height: 19px;
    .period {
      color: #d19881;
      font-size: 12px;
      bottom: 0;
      margin-bottom: 11px;
      padding: 0 10px;
      border: 1px solid #d19881;
    }
  }
}
</style>