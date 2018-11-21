<template>
  <div>
    <div  :class="zhe" @click="gbwid()"></div>
    <div class="tabs">
      <div class="uesr_meun" :style="styleW">
        <ul>
          <li>个性装扮<span class="fr li_clue">默认套装</span></li>
          <li>消息中心<span class="fr li_clue red">2</span></li>
          <li>免流量服务<span class="fr li_clue">王卡听歌免流量</span></li>
        </ul>
        <ul>
          <li>定时关闭<div @click="chanf(0)" :style="stylebg[0]"><div :style="stylefl[0]"></div></div></li>
          <li>仅Wi-Fi联网<div @click="chanf(1)" :style="stylebg[1]"><div :style="stylefl[1]"></div></div></li>
          <li>流量提醒<div @click="chanf(2)" :style="stylebg[2]"><div :style="stylefl[2]"></div></div></li>
          <li>听歌偏好</li>
        </ul>
        <ul>
          <li>微云音乐网盘</li>
          <li>导入外部歌单</li>
          <li>清理空间</li>
          <li>帮助与反馈</li>
          <li>关于qq音乐</li>
        </ul>
        <div>
          <h4>精品应用推荐</h4>
          <p><img src="/static/img/tab1.jpg">猫眼电影</p>
          <p><img src="/static/img/tab2.jpg">多看阅读</p>
          <p><img src="/static/img/tab3.jpg">QQ空间</p>
          <p><img src="/static/img/tab4.jpg">全民K歌</p>
        </div>
        <div class="tab_bottom">
          <span class='fl'><img src="/static/img/222.svg"><span>设置</span></span>
          <span class='fr'><span>退出登陆/关闭</span><img @click="gbwid" src="/static/img/221.svg"></span>
        </div>
      </div>
      <mu-appbar style="width: 100%; position: fixed; top: 0; z-index: 0;background: #31C27C" color="success">
        <mu-button class='tab_mar_l' icon color="success" @click="chwid()">
          <img src="/static/img/111.svg">
        </mu-button>
        <div class="tab_m_aut">
          <mu-button class="tab_he" :class="active[0]" flat color="success" @click="goRouter({name: 'mine'},0)">我的</mu-button>
          <mu-button class="tab_he" :class="active[1]" flat color="success" @click="goRouter({name: 'musrchome'},1)">音乐馆</mu-button>
          <mu-button class="tab_he" :class="active[2]" flat color="success" @click="goRouter({name: 'find'},2)">发现</mu-button>
        </div>
        <mu-button class='tab_mar_r' icon color="success" @click="chhe">
          <img src="/static/img/112.svg">
          <div class="jia_mvu" :style="stylehe">
            <i></i> 
            <ul>
              <li><img src="">听歌识曲</li>
              <li><img src="">扫一扫</li>
              <li class="last_naw"><img src="">视频海报</li>
            </ul>
          </div>
        </mu-button>
      </mu-appbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'tabs',
  data(){
    return{
      active:['','active',''],
      zhe:'',
      styleW:{width:'0'},
      stylefl:[{left:'-2px'},{left:'-2px'},{left:'-2px'}],
      stylebg:[{background: '#aaa'},{background: '#aaa'},{background: '#aaa'}],
      stylehe:{height:'0px'},
    }
  },
  methods:{
    goRouter(params,i){
      this.active=['','','']
      this.active[i]='active'
      this.$router.push(params);
    },
    chwid(){
       this.styleW = {width:'85%'} 
       this.zhe='zhe'     
    },
    chanf(i){
      if(this.stylefl[i].left=='-2px'){
        this.stylefl[i].left='18px'
        this.stylebg[i].background='#8DD35F'
      }else{
        this.stylefl[i].left='-2px'
         this.stylebg[i].background='#aaa'
      }
    },
    gbwid(){
      this.styleW = {width:'0'}
      this.zhe=''
    },
    chhe(){
      if (this.stylehe.height=='0px') {
        this.stylehe.height='140px'
      }else{
        this.stylehe={height:'0px'}
      }
    }
  }
  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
  padding: 0;
}
div .active{
  color: #fff;
}
.tab_m_aut{
}
.zhe{
  position: fixed;
  width: 100%;
  height:720px;
  background: rgba(0,0,0,.3);
  z-index: 1
}
.uesr_meun{
  position: fixed;
  z-index: 55;
}
.tab_mar_l{
  margin-top: 8px;
  margin-left: -15px;
}
.tab_mar_r{
 margin-top: 8px;
 position: absolute;
 right: 2%;
}
.tab_m_aut{
  display: inline-block;
  position: relative;
  top: -5px;
  width: 70%;
}
.tab_he{
  height: 30px;
  width: 30%;
  margin: 0 2%;
  color: #afaf;
}
.uesr_meun{
  overflow: hidden;
  transition: width .25s;
  background-image:linear-gradient(to bottom,#d7d7d7 0%,#fff 5%,#fff 100%);
  height:100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
.uesr_meun>ul{
  margin: 30px 0 10px;
  width: 100%;
}
.uesr_meun>ul>li{
  width: 85%;
  margin:10px auto;
  font-size: 12px;
}
.uesr_meun>ul>li>div{
  width: 30px;
  border-radius: 10px;
  height:10px;
  float: right;
  position: relative;
}
.uesr_meun>ul>li>div>div{
  width:15px;
  height:15px;
  background: #eee;
  border-radius:50%;
  position: absolute;
  top: -2px;
  box-shadow: 0 0 12px 2px #aaa;
  transition: left .25s
}
.fr{
  float: right;
}
.fl{
  float:left;
}
.li_clue{
  font-size: 8px;
  line-height: 18px;
  color: #aaa;
}
.red{
    background: red;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    text-align: center;
    color: #fff;
    line-height: 12px;
    margin-top: 2px;
  }
.uesr_meun>div{
  width: 100%;
  overflow: hidden;
}
.uesr_meun>div>h4{
  width: 85%;
  margin:0 auto;
  font-size: 12px;
  margin-top: 20px;
}
.uesr_meun>div>p{
  margin-top: 0;
  float: left;
  width: 25%;
  padding: 13px;
  font-size: 10px;
  text-align: center;
}
.uesr_meun>div>p>img{
  width: 100%;
  height:auto;
}
.uesr_meun>.tab_bottom{
  width: 85%;
  border-top: 1px solid #ddd ;
  margin: 0 auto;
}
.tab_bottom span span{
 font-size: 12px;
 position: relative;
 top:-5px;
}
.tab_bottom span{
  padding:5px;
}
.tab_bottom img{
  width: 20px;
  height:auto;
  margin-top: 5px;
}
.jia_mvu{
  position: fixed;
  top: 28px;
  width: 150px;
  right: 6px;
  overflow: hidden;
  transition: height .15s;
  z-index: 9
}
.jia_mvu>ul{
  background: #eee;
  border-radius: 20px;
}
.jia_mvu>ul>li{
  font-size: 14px;
  color: #0a0a0a;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.jia_mvu>ul>.last_naw{
  border-bottom:0px;
}
.jia_mvu>i{
  border-width: 0 10px 15px;
  border-style: solid;
  border-color: transparent transparent #eee;
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
