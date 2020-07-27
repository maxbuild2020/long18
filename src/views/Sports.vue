<template>
  <div class="main">
    <div class="main-container">
      <div class="content p-r">
        <div class="tab d-f">
          <a href class="d-f align-items justify-content-center">最新体育赛事</a>
        </div>
      </div>

      <div class="banner">
         <swiper :options="swiperOption"  ref="mySwiper">
          <swiper-slide><img src="https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/main_banner/shabah-pc.png" alt=""></swiper-slide>
          <swiper-slide><img src="https://a04front.liweiyameirong.com/cdn/A04FW/externals/img/_wms/main_banner/sport2.jpg" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>

      <div class="lives-container d-f flex-wrap-wrap justify-content-between">
        <div class="lives hover-box p-r">
          <div class="lives-bg1 origin-img raduis4"></div>
          <div class="hover p-a d-f flex-direction-column justify-content-center">
            <div class="hover-img">
              <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/main-level1-1.d4affa87.png_.webp" />
            </div>
            <div class="hover-btn">
              <button>免费试玩</button>
            </div>
          </div>
          <div class="lives-content hover-content p-a">
            <div class="title">AG国际厅</div>
            <div class="content p-a">
              <span class="inner-title">美女主播 互动发牌</span>
              <div class="tags d-f">
                <span class="tag raduis4">百家乐</span>
                <span class="tag raduis4">21点</span>
              </div>
            </div>
          </div>
        </div>
        <div class="lives hover-box p-r">
          <div class="lives-bg1 origin-img raduis4"></div>
          <div class="hover p-a d-f flex-direction-column justify-content-center">
            <div class="hover-img">
              <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/main-level1-1.d4affa87.png_.webp" />
            </div>
            <div class="hover-btn">
              <button>免费试玩</button>
            </div>
          </div>
          <div class="lives-content hover-content p-a">
            <div class="title">AG国际厅</div>
            <div class="content p-a">
              <span class="inner-title">美女主播 互动发牌</span>
              <div class="tags d-f">
                <span class="tag raduis4">百家乐</span>
                <span class="tag raduis4">21点</span>
              </div>
            </div>
          </div>
        </div>
        <div class="lives hover-box p-r">
          <div class="lives-bg2 origin-img raduis4"></div>
          <div class="hover p-a d-f flex-direction-column justify-content-center">
            <div class="hover-img">
              <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/main-level1-1.d4affa87.png_.webp" />
            </div>
            <div class="hover-btn">
              <button>免费试玩</button>
            </div>
          </div>
          <div class="lives-content hover-content p-a">
            <div class="title">AG国际厅</div>
            <div class="content p-a">
              <span class="inner-title">美女主播 互动发牌</span>
              <div class="tags d-f">
                <span class="tag raduis4">百家乐</span>
                <span class="tag raduis4">21点</span>
              </div>
            </div>
          </div>
        </div>
        <div class="lives hover-box p-r">
          <div class="lives-bg2 origin-img raduis4"></div>
          <div class="hover p-a d-f flex-direction-column justify-content-center">
            <div class="hover-img">
              <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/main-level1-1.d4affa87.png_.webp" />
            </div>
            <div class="hover-btn">
              <button>免费试玩</button>
            </div>
          </div>
          <div class="lives-content hover-content p-a">
            <div class="title">AG国际厅</div>
            <div class="content p-a">
              <span class="inner-title">美女主播 互动发牌</span>
              <div class="tags d-f">
                <span class="tag raduis4">百家乐</span>
                <span class="tag raduis4">21点</span>
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
  data(){
    return{
      swiperOption: {
        autoplay: 1000,
        loop: true,
        pagination: '.swiper-pagination'
      }
    }
  }
};
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
    a {
      width: 195px;
      height: 100%;
      border-bottom: 2px solid #835b4c;
      font-size: 16px;
      color: #ffffff;
      align-items: center;
    }
  }
}

.banner {
  width: 952px;
  height: 187px;
  background: grey;
  border-radius: 4px;
}

.lives {
  width: 230px;
  height: 524px;
  .lives-bg1 {
    background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/shaba-bg.c37d4a77.png_.webp") center;
    background-size: 100%;
    width: inherit;
    height: inherit;
  }
  .lives-bg2 {
    background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/bti-bg.a06aeef6.png_.webp");
    background-size: 100%;
    width: inherit;
    height: inherit;
  }
}
.lives-content {
  text-align: left;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 5px 0 0 10px;
  box-sizing: border-box;
}
.hover-img {
  height: 100px;
  img {
    height: 100%;
  }
}

.lives-container{
  .hover-box:hover .hover {
    display: flex;
  }
  .hover-box:hover .hover-content {
    filter: blur(10px);
  }
  .hover-box:hover .origin-img {
    filter: blur(10px);
  }
  margin-top: 10px;
  .title {
    color: #efefef;
    font-size: 18px;
    padding-top: 8px;
  }
  .content {
    color: #e7e7e7;
    bottom: 10px;
    .tags {
      flex-direction: row;
      .tag {
        text-align: center;
        font-size: 12px;
        padding: 2px 6px;
        margin-top: 10px;
        margin-right: 5px;
        background: #5959a4;
      }
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
</style>