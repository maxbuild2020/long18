<template>
  <div class="swiper-wrapper" >
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="banner of banners" :key="banner">
        <img class="swiper-img" :src="banner" />
      </swiper-slide>
      <div class="swiper-button-prev d-f align-items-center" slot="button-prev">
      <font-awesome-icon icon="chevron-left" class="fonticon chevron-left"/>
      </div>
      <div class="swiper-button-next d-f align-items-center" slot="button-next">
      <font-awesome-icon icon="chevron-right" class="fonticon chevron-right"/>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/top-banner/630usdtfree.png",
        "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/top-banner/yjbdpcbn714.jpg",
        "https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/top-banner/usdt2-pcbn.png"
      ],
      swiperOption: {
        autoplay: 1000,
        loop: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-wrapper {
  width: 440px;
  height: 187px;
  .fonticon {
    padding: 8px 6px;
    background: rgba($color: white, $alpha: 0.5);
  }
  .chevron-left {
    border-radius: 0 4px 4px 0;
  }
  .chevron-right {
    border-radius: 4px 0 0 4px;
  }
}
</style>
