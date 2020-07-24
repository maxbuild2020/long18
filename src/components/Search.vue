<template>
  <div>
    <div class="total-games">
      全部游戏
      <span>共123款游戏</span>
    </div>
    <div class="search">
      <div class="search-header d-f justify-content-between align-items-center">
        <div class="input-wrap d-f raduis4">
          <span class="title">搜索</span>
          <input type="text" />
          <font-awesome-icon icon="search" size="lg" class="font-icon"/>
        </div>
        <div class="hot d-f">
          <p>热门搜索:</p>
          <span>捕鱼王</span>
          <span>冰球突破</span>
          <span>宝石</span>
          <span>东方珍兽</span>
        </div>
        <button class="btn raduis4">
          <font-awesome-icon icon="heart" size="lg" class="font-icon"/>
          <span>我的搜藏</span>
        </button>
      </div>

      <hr />
      <div class="search-bar">
        <div class="search-bar-container d-f align-items-center" 
        v-for='(items,index) in category' :key="index">
          <div class="title">{{items.name}}</div>
          <router-link to=""
            class="selete-item btn"
            v-for="(item,key) in items.items" :key="key"
            :class="{ selected :item.active}"
            @click.native="select(item,index,key)"
          >{{item.name}}</router-link>
        </div>

      </div>
      <hr />

      <div class="search-list">
        <div class="result">
          搜索结果如下：有
          <span>1233</span> 款游戏符合要求
        </div>
        <div class="result-list p-r d-f flex-wrap-wrap">
          <div
            class="result-item d-f flex-direction-column"
            v-for="(item,index) in filterBox"
            :key="index"
          >
            <div class="game-pic">
              <img src="https://a04front.liweiyameirong.com/cdn/A04FW/assets/img/slots-hot-game4.1fd3cfad.png_.webp" />
            </div>
            <i class="favorite p-b"></i>
            <div class="game-detail">
              <div class="game-platform">{{item.platform}}</div>
              <div class="game-name">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// category.forEach(item=>item.index = -1);
import axios from "axios"
export default {
  data() {
    return {
      selectBox: [],
      filterBox: [],
      category:[
        {
          name: "游戏平台",
          items:[
            {name:"全部", active:true, select:"all"},
            {name:"AG", active:false, select:"AG"},
            {name:"MG", active:false, select:"MG"},
            {name:"PP", active:false, select:"PP"},
            {name:"PT", active:false, select:"PT"}
          ]
        },{
          name: "游戏类型",
          items:[
            {name:"全部", active:true, select:"all"},
            {name:"3D老虎机", active:false, select:"1"},
            {name:"老虎机", active:false, select:"2"},
            {name:"桌面游戏", active:false, select:"3"},
            {name:"纸牌", active:false, select:"4"},
            {name:"视频游戏", active:false, select:"5"},
            {name:"接机", active:false, select:"6"},
            {name:"赛车", active:false, select:"7"},
            {name:"其他", active:false, select:"8"}
          ]
        },{
          name: "游戏类型",
          items:[
            {name:"全部", active:true, select:"all"},
            {name:"1-4线", active:false, select:"1"},
            {name:"5-9线", active:false, select:"2"},
            {name:"15-25线", active:false, select:"3"},
            {name:"30-50线", active:false, select:"4"},
            {name:"51-146线", active:false, select:"5"},
            {name:"243线", active:false, select:"6"},
            {name:"1024线", active:false, select:"7"}
          ]
        }
      ],
      searchKey: {
        tab: "a",
        mdrender: true
      },
      games: []
    }
  },
  methods: {
    select(item,index,key) {
      // 方法一 切换点击
      this.category[index].items.map(item=>{
        item.active = false
      })
      this.category[index].items[key].active = true
      // 方法二 切换点击
      // let item = this.category[index].items;
      // item.filter(function(v,i){
      //   if(i==key){
      //     v.active = true
      //   } else {
      //     v.active = false
      //   }
      // })
      let newArry = []
      this.category.map(items=>{
        items.items.map(item=>{
          if(item.active == true){
            newArry.push(item.select)
            
          }
        })
      })

      this.selectBox = newArry
      console.log(this.selectBox[0])
      // if (this.selectBox[0]== "all" || this.selectBox[1]== "all" || this.selectBox[2]== "all" ){
      //   this.filterBox = this.games.filter(item => item.method == "all")
      // }  else  (
       
        this.filterBox = this.games.filter(item => 
        item.platform == this.selectBox[0] && item.type == this.selectBox[1] && item.thread == this.selectBox[2])
      // )
    },
    async getData() {
      let res = await axios.get("/api/api.json");
      this.games = res.data.data
      this.filterBox = this.games
      // console.log(res)
    }
  },
  created(){
    this.getData()
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.total-games {
  text-align: left;
  width: 100%;
  height: 61px;
  padding: 26px 0 10px 15px;
  box-sizing: border-box;
  font-size: 18px;
  color: #ffffff;
  span {
    font-size: 12px;
    color: #8c8c91;
    margin-left: 10px;
  }
}
.search {
  width: 924px;
  padding: 15px;
  background: #2b2c31;
  color: #96999f;
  hr {
    border: 0px;
    border-bottom: 1px solid #32323a;
    margin: 15px 0;
  }
  .search-header {
    width: 100%;
    .input-wrap {
      height: 43px;
      width: 409px;
      line-height: 43px;
      align-items: center;
      background: #393A44;
      .title{
        color: #fff;
        padding: 0 14px;
      }
      input{
        background: #393A44;
        border-left: 1px solid #575757;
        text-indent: 20px;
        width: 300px;
      }
      .font-icon{
        padding-left: 20px;
        cursor: pointer;
      }
    }
    .hot{
      span{
        cursor: pointer;
        padding: 0 9px;
      }
    }
    .btn{
      cursor: pointer;
      width: 140px;
      height: 40px;
      color: #fff;
      background: #5959A4;
      .font-icon{
        padding-right: 5px;
        color:#E74647;
      }
    }
  }
  .search-bar {
    font-size: 14px;
    .search-bar-container {
      height: 36px;
      line-height: 36px;
      .title {
        text-align: left;
        width: 80px;
        line-height: 29px;
      }
      .btn {
        line-height: 27px;
        border-radius: 4px;
        padding: 0 12px;
        border: 1px solid transparent;
        cursor: pointer;
      }
      .btn:hover {
        border: 1px solid #96999f;
      }
      .selected {
        border: 1px solid #fabe99;
      }
      .selected:hover {
        border: 1px solid #d3936c;
      }
    }
  }
}
.search-list {
  .result {
    text-align: left;
    width: 954px;
    font-size: 13px;
    padding: 20px 0;
  }
  .result-list {
    margin-left: -6px;
    margin-right: -10px;
    .result-item {
      height: 150px;
      width: 103px;
      padding: 7px;
      .game-pic {
        width: 103px;
        height: 103px;
        img {
          width: 100%;
        }
      }
      .game-detail {
        line-height: 18px;
        margin-top: 5px;
      }
    }
  }
}
</style>
