<template>
  <div class="footer">
    <div class="footer-container d-f flex-direction-column">
      <div class="content d-f ">
        <div class="left d-f align-items-center p-r">
          <div class="lisence"></div>
          <span>菲律宾PAGCOR合法博彩执照</span>
        </div>
        <div class="right d-f align-items-center">
          <span>尊龙支付合作渠道</span>
          <div class="corporate"><img src="" alt=""></div>
        </div>
      </div>
      <div class="text-content">
        © 2020 尊龙 版权所有. All rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
  width: 100%;
  margin-top: 102px;
  border-top: 1px solid #424244;
  margin-top: 102px;
  height: 113px;
  .footer-container{
    width: 1000px;
    height: inherit;
    margin: 0 auto;
    padding: 0 140px;
    box-sizing: border-box;
    .content{
      color: #969696;
      font-size: 12px;
      .left{
        height: 75px;
        width: 260px;
        .lisence{
          margin: 0 10px 0 20px;
          height: 58px;
          width: 40px;
          background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/license-icon.aba6be03.png_.webp") no-repeat;
          background-size: 100%;
        }
        span::after{
          content: "|";
          position: absolute;
          right: 0;
        }
      }
      .right{
        font-size: 13px;
        padding-left: 31px;
        height: 75px;
        .corporate{
          width: 289px;
          height: 21px;
          margin-left: 21px;
          background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/payment-icon.2b0bc1e3.png_.webp") no-repeat;
          background-size: 100%;
        }
      }
      img{
        opacity: 0.6;
        width: 100%;
        transition: all 0.5s;
      }
      img:hover{
        opacity: 1;
      }
    }
  }
  .text-content{
    color:  #585858;
    border-top: 0.5px solid #2f2f2f;
    line-height: 38px;
  }
}
</style>
