<template>
  <div class="sidebar-star p-a">
    <div class="star d-f flex-direction-column align-items-center">
      <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/promote.49745b81.png_.webp" alt="">
      <span>晋级之路</span>
    </div>


    <div class="sidebar-tools">
      <div class="list p-r" :class="{ smallist: tosmall}">
        <div class="digital" :class="{digitalChange: tosmall}"></div>
        <div class="content p-a d-f align-items-center">
          <span>了解数字货币</span>
        </div>
      </div>

      <div class="list p-r d-f align-items-center" :class="{ smallist: tosmall}">
        <div class="icon"></div>
        <div class="content p-a d-f align-items-center" style="color: #FBC972">
          <span>存款小助手</span>
        </div>
      </div>
      
      <div class="list p-r d-f autoheight" style="height: 100px" :class="{ smallist: tosmall}">
        <div class="icon"></div>
        <div class="content p-a d-f flex-direction-column" style="color: #FBC972">
          <span style="line-height: 50px">在线客服</span>
          <p class="text">存取款问题</p>
          <p class="text">其他问题</p>
        </div>
      </div>

      <div class="list p-r d-f align-items-center" :class="{ smallist: tosmall}">
        <div class="icon"></div>
        <div class="content p-a d-f justify-content-center flex-direction-column" style="color: #FBC972">
          <span>电话回拨</span>
          <p>400-842-3711</p>
        </div>
      </div>

      <div class="list autoheight p-r d-f align-items-center flex-wrap-wrap" :class="{ smallist: tosmall}">
        <div class="icon"></div>
        <div class="content p-a d-f align-items-center" style="color: #FBC972">
          <span>下载尊龙APP</span>
        </div>
        <div class="qrcode">
          <div class="wrap">
            <img src="data:image/png;base64,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" alt="">
          </div>
        </div>
      </div>  

      <span class="btn p-a" @click="fold" v-show="flag">展开</span>
      <span class="btn p-a" @click="unfold" v-show="!flag">收起</span>


    </div>

    <div class="backtotop p-a" v-show="isShow" @click="backtotop">
      <font-awesome-icon icon="angle-double-up" size="lg" class="font-icon"/><br>返回<br>顶部
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      flag: false,
      tosmall: false,
      isShow: false
    }
  },
  methods:{
    fold(){
      this.flag= !this.flag
      this.tosmall= !this.tosmall
      
    },
    unfold(){
      this.flag= !this.flag
      this.tosmall= !this.tosmall
    },
    backtotop(){
      document.documentElement.scrollTop = 0
    },
    handleScroll(){
     let top = document.documentElement.scrollTop
      if( top> 85){
        this.isShow = true
      } else {
        this.isShow = false
      }
    }    
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed(){
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar-star{
  right: 13px;
  top: 15px;
  position: fixed;
  z-index: 2;
  .star{
    img{
      width: 45px;
      height: 45px;
    }
    span{
      font-size: 12px;
      color: #8d8d8d;
      line-height: 18px;
      margin-top: 5px;
    }
  }
}

.sidebar-tools{
  z-index: 2;
  right: 13px;
  top: 95px;
  position: fixed;
  .smallist{
    width: 50px!important;
    height: 50px!important;
    transition: all 0.5s;
  }
  .list{
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 12px;
    background: #424654;
    width: 185px;
    height: 50px;
    overflow: hidden;
    transition: all 0.5s;
    .digital{
      width: 100%;
      height: 100%;
      background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/usdt-l.14b854b5.png");
    }
    .digitalChange{
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAADNxJREFUaAW9mMuvXXUVx3/nce+5hULlUsVSKKKYgIaUASoaYzAxmujIkDhx4IiRCc4Y+hhaE/8LLDFOdMQjJA0DRVEjPktEsJTSAm1pgT5uufccv5/vWmvvfW6vj0nd9579++31W4/vd63123ufM2o67nrhuds255cPtcX4wdbm+1obId52LHRd8uE81BbzuSaSMy7mbaGPTprmtUetszaYW8eyLeuz3tvJnmvpl7/Ovi1OjhaLIyvTyaMnHnrktVGQ2HhBGNZ75ADlAPh/nxdY6xJ0EHgxD4Aj+bE8SQSw7SR7okV2sSiCfVJ6orJvi7Oz+fzgNCoxEokC/L8TsEMCYdtlOjLKNesmwJrmIevXuwRsqxw2nX2ulT02tZ5JWt9oi0PTthg9CPS+bZgPSTH/d5UhYB805jtkTv5cDRFSO2ieVerIl48gSbVM0nZbthm2l30ZY9jJ44NTodSekMBHAa69kOJuLa+xV7DKWgGDyNIcQAO9AGPjTs+ZTmJlT8ZdyWEbgjGTVj4HVdonIpAoAgCt+fZxSGLYtzF3Bh0oso/fICW7wZ4psI6LPiTQNeFtBGoNQvah9WFimEtOlUWksl/AAVzz4Ui8KH2bk53KdswNkP3itR7YdoLR37kOQIEoEn01s7VYQ6dlXMdMWa5V5bIigK+jiNV1jNuDkQWDMJgiWAEz09YJWRCaK4GpU1XQ9aBFYg/V2pJ9Vm4YT8TmmVz2iI4heIHwkTJfUr4+S1QDQEEGYD2BAgxJV62AW6f00pcAlx6js1txvDbQg1zna3lOnCQC8m0E8roq0YHqHEYmC/gwCKBKjt3y9XAt52qdXr/2Sey9zh4/EHH8WhPmvFEMiFRVIBTzHtwgMzjbyWFVwAHJNESDhPVzPgTc74nQZ3+FTdhVfMu6mGAJsvMkQbeICKALfIwdgKXgBGEzZ5ACqbEL6LX+usvm4O6Dbm1QKmXCHcjhPkhyrm48S8DVxdLczySNtPmgIpDgwMGyk7gO+fp0pf3hM18J1Wt4vvWxQ21DAIfAexwh9x2QJAQRCNTGjqyXcWUUB7SB5ePxNYTfuybWYksg89br2IDu9uhC+NkrqoYgdRUZ9mGULCoQpKKduoz08a7djNYx6OG+KRw1aq+MFm0iFt4jsSeUgeo7mGse5KhYVMSVcZauHf7yTAKd8W1VoI16PPO2MlU3qWP00qgFLQYZABeJrAjrbq1wwPz/clRSiZcYHVvzarPVmTbFOHBOEVZFhopFrEjWnWazbbY/vnM2uCSpoIbDorhoe1d3tf3X7S5BNx6/8E47u3FJoUo5x7pMJ1tb7Mncl9bNFstET1bY2TLS2pzb8YFfP7UokF0raXFIrr/fZzZyvaqHs5oz4u9bH/lE++F9X+gI1OSR555oh1/+k/XLhgx43iUVgNkJVQHFQIaeN7eIkAxwcqtSaxVoKfqFr8Aut1QX1KDjydrdFABvP/VUxlafHQ4CV2KcQPRkG5+cDwg5LpmnOtIdq5Umq7LEveyIy+E9sgwSZ+GwqtK91A2C7mhTmbWe/V99AnMmjDjOqm+jQaZI9sR6PGOBXpko/7SS5tWejN4jGAUw2PUVQmbGBNScwJ0uWbIzyXhXyjWDsy6+djhkowdEb5sxKr4BYu+kpJ51dIda0wNDt1u/ymidliLKWLO4axVAxgRR1eheu7VmYiYAoSI3JB6Be4I7EPELImSCfAfcSZF9tTdYMsHomATgMWXUHySiPbuKhFG9SeIgCAXgcshYL2q4C3mf3YnWb56ttfXVtXbn7j07sWgfu+Gmds+em9uZyxfb6Uvvta35ptzgq0/MMJ6AtNmsco+aMOnSRLAxma4i4cgOyERWZcmhgwm0TGejUfv0+i3tzutvbNzGKS3yTfX6+SuX27ml2+s2PtK/ffeN7d6bPtT2iPB0LFv7brLfbEfPnGq/PPGPtpHkVrWx7V7+3UyKzUuSN74WkHJ0e6TLCAty0u+JqBbXB3Zd377z8fvay++ea0+8/nJ79tSroed2CT38YH/HDs8QAr50/nR78tiL0im/WVH5Hyv2wb372/c++9W2vnZd+9Fvn2wnLumZlURJV7QSnoYH5OywyspYDyHNM1i12c8+97X25VsOtGdO/bO99O7b1rW9+5oEhJ9IwjBQP7fPrLhjGWQkj/34+zeOtade+Uv7xt33t59//dsGLsd2ECSCTrQWdlGw0f5nfirffVZcjbyrmIA06y30mwfubt/95ANqiVk7ev5M+83p19tfz73VXhGp4xfOtzcvvhdtJX+7xpO2Z2XV2eR7tTe1xrcvXWiXN9939tdnu9oH165vB3Z/oH10z952795b2+dvu6sduHG9nd+42H7w3C/aY0d/pfzk5hZpaHSHigoTU7v16cfpI/1T6ix3jhBBThYLyHWjSfvSvjvaF2+5vd1/84fbXTest7H6to65gl3e2mwb+lwSYMb3RWwmYrPptK3p3WKm19U1fUZLdvP297Nvtt+9dawdOX60Pf3qn9uFK1c6oEFFl5CSnZ9FCtvdxfY9+diiQLoatNaACDLLVaUgG/vHZRbJFeXjzhv2tP27dre9yjBZZnxALchn+/GsNvLzp461M7pjnb74bjujKh7Xu9sr595so1nfQtFNQoqIPJFoprxQURnIgC2PeLJLMKxIgQ8CcoCTJBQjVYLgvF3R2otqr6Nn38hg4evhez61I5GfHH2+Hf7b85Ec+1W1BWamh50rxH5Dgn8WHIcpMv0j0xwtHzmJd610CBmraBxuSpx1+yir1RPvSXUtmP4q1nDsqxoV5u67tmsSKiYR+BO3L6J9pGJiGmhJ6ZqDpoi7J3sXwED7KkSbJbGsQulSEWcM4oDPp3b8rNnlLEDWmaToFZ30TvWlaHWmveJUS1+IbKUToQDI6CPHkCnhIlNVwii+j1QGB0ADWLQJgL2PAFwVYbSddJiLhKNqju2wfxNKAgKRXjlW9DRenXiz4oYkA7Ky79urLZDqoauhfHYEWEiCIhK3Xt+hDLIAoQGBAbDhepEChbyZeMogbVIEuurQm8Fs3CYTPcKkx2cilPPaxOh7I2hDAwEe6CGPGtg1xDtiuvAeIeMS28BGgDPoBOiAQYg2KPJxt8OuyMdoUrLZ6VhRFSa8issPZyOVKq85NhF6t5qXjDbgs8hHpKMVNYqwPUk8dSUKuEEuk6hWCrDZMmy0rI6zUvYKBElXhMTscDiTAQ0u8oNe6HZrgT/8hDAqA2rBi4s4Z/G0R7IaPeBBFQBIEI2R5bge6nb7xGQim/+pIrQLeNw2YNJV9L+muQatzHVwRGArnYck0xDduGsliA4smTXBIoAnqhGbnupcrdtXifVMHQiuPuQuwGoJYAmymMQPI9IY6T1X1e8ffmFlMsUIkY6p36MITIk95tzkNGdUqALef9ECuGz8JhC26NBW3FZXVrrf/hxo+QT02AlVHePhgl6J/8AEYB0+m1in4viunBbzOdKTKMBBrLLMuj5ZOQiHXsozEVM911ZXeYdy7B1PuIngOusCVYksIzFec/Igig7rmrkCPQmMRv75VhPlerT38R+Dtst4ECigOeIK5w6wrIscAjwX/JAyMlwCzyiSUAAvsKyar/U0qzGsTBKN0E8XYZEXSRo7/fuuFQEFdCnTRQbFbSQEnmRMJrSRHmog8utFEECd32QJwOEXPZIhvZHaw6/ltol1zgs5qexDwAf6/sNV+HNhNEUeIs2Exc8RPxdQJeNiWM8JExheq4ZT7cTpyriNRUJUrI9D+5W5Q4zYKwnGImWPa2fdKETcKC0aaLqq4U9PFuuDN7OPL/kJffxoTmyt6/abX6rc50HE3uUkenirjbVv+c4xURn4vmFH6YCgffkj4GLhb9X4d5AOhnxENTTCw77wRix0nQZdxQVnVvNbuia0Wjw8aYBYI74qMoaIDfUgw5s+YzKqzIfzCIR2BxjLDF6yGBNUBvRtExhSV6O2kaqABuEMgp6wL7UbMZHmGmpuQ62nV0R6AwhfJDYIh8/pbLR5Ut+s9umHngCOLzkDmA+N/GWO+0Do6C+iRDD0cVtVMwDbhxzdSo692hytWE+a8pogcgUk4SsmtkBoKcPo5Hg+XhzBOwEMPvcJ13C2eq7hQDAtdcuzJ8zaaiG3Tmgi9ddgXeILqT36WrCDleXlOSLiRBbppuxGepKzbsIIOaSnmh8Zj2btUfnjN5dY4JzVCIwhh6Q/hNV+or+5c+HG93iJHUDqFYMZ8KPHsUsdRxrIMzIvjnELZy3+UlWDfGEv4HHIq1pT12fXVtuj4xMPff81BTuo9jo8Hi1OomxOTDwPAph7c0pOImkf66JuPQJr4jiaOyC6LCYAZ28AELk+QdYRUHVYL0iEts/Ypr0mzE9q4fDaSjv40sOHXvsXFYgDosEDhUQAAAAASUVORK5CYII=") ;
      background-size: 100%;
    }
    .content{
      height: 50px;
      width: inherit;
      padding-left: 52px;
      top: 0;
      text-align: left;
      color: #ffffff;
      box-sizing: border-box;
      p{
        font-size: 13px;
        color: #8F91A0;
        margin-top: 5px;
      }
      .text{
        margin-bottom: 5px;
      }
    }
    .icon{
      width: 40px;
      height: 40px;
      margin: 5px;
      background: url("https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/qt.c0a72a67.png_.webp") center;
      background-size: 100%;
    }
    .qrcode{
      padding: 10px;
      .wrap{
        background: #ffffff;
        padding: 8px;
        img{
          width: 149px;
          height: 149px;
        }
      }
    }
  }
  .autoheight{
    height: auto
  }
  .btn{
    cursor: pointer;
    color: #ffffff;
    font-size: 16px;
    right: 0;
  }
}
.backtotop{
  cursor: pointer;
  color: #8d8d8d;
  position: fixed;
  bottom: 10px;
  right: 13px;
}
</style>
