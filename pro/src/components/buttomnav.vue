<template>
	<div>
	  <div class="zhe1" :class="zhe" @click="changezbz"></div>
	 <mu-bottom-nav style="width: 100%; position: fixed; bottom: 0; z-index: 0;
    box-shadow: rgba(0, 0, 0, .6) 0px 12px 30px 9px; background: #f2f2f2;">
      <div class="boomcon">
        <div class="fl">
          <div class="boo_img" :style="'animation-play-state:'+zxtp" @click="changedetails">
            <img :src="all[i]==undefined?'':all[i].img">
          </div>
          <div class="boo_p">
            <p>{{all[i]==undefined?'':all[i].name}}</p>
            <span>{{dqgc}}</span>
          </div>
        </div>
        <div class="fr">
            <mu-button icon color="success" @click="changepos">
              <img :src="plorst">
            </mu-button>
            <mu-button icon color="success" @click="changezbz">
              <img src="/static/img/liebiao.svg" >
            </mu-button>
          
        </div>
        
      </div>
    </mu-bottom-nav>
    <div class="muslist" :class="zbz">
    	<div>
    		<p>
    			<img style="float:left;margin-right: 5px;height: 25px;
    width: 30px;" :src="rep" @click.stop="changexhms()">{{xhms}}
    			<span>({{all.length}}首)</span>
    			<img src="/static/img/12.png" @click.stop="removeall()">
    		</p>	
    	</div>
	    <div v-for="(item,index) in all" v-if = "all[i]!=undefined" @click="changemusic(index)">
	         <p :class="p_active[index]">{{item.name}}<span>-{{item.actor}}</span><img @click.stop="removeli(index)" src="/static/img/12.png"></p>
	    </div>
      <div class="details" :class='detailschange'>
        <div class="details_top">
          <img src="/static/img/shangla.png" @click="changedetails">
          <span>{{all[i]==undefined?'':all[i].name}}</span>
          <p>— {{all[i]==undefined?'':all[i].actor}} —</p>
          <div><i>标准</i><i>视频</i><i>音效</i></div>
        </div>
        <div class="details_middle">
          <ul :style="'right:'+touchright">
            <li @touchstart="touchstartx($event)" @touchmove="touchstartxx($event,1)">
              <div :style="'animation-play-state:'+zxtp">
                <img :src="all[i]==undefined?'':all[i].img">
              </div>
              <p style="text-align: center;margin: 5px;">{{all[i]==undefined?'':all[i].name}} - {{all[i]==undefined?'':all[i].actor}}</p>
              <p style="text-align: center;margin: 0; color: #aaa; font-size: 13px;">{{dqgc}}</p>
            </li>
            <li id="lsworld" @touchstart="touchstartx($event)" @touchmove="touchstartxx($event,-1)" @touchend="touchend">
              <h5 class="tzbf" v-if="istzt"><span>{{tztime}}</span><span style="float: right; width: 25px;"><img style="width:100%; height:auto;"  src="/static/img/bigplay.png" @touchstart.stop="tzbfaudio"></span></h5>
               <p style="text-align: center; height:21px;margin: 7px 0;" v-for="(val, key) in gclb">{{val}}</p>
            </li>
          </ul>
        </div>
        <div class="box-foot">
          <div class="hk">
            <span class="nowtime">{{nowtime}}</span>
            <div class="not-active progress"></div>

            <!-- 激活层 -->
            <div  class="activee progress" :style="'width:'+active"></div>

            <!-- 滑块层 -->
            <div class="mask" :style="'left:'+maskleft"></div>

            <!-- 绑定事件层 -->
            <div class="layer" @touchstart="touchst($event)" @touchmove="touchst($event)"></div>
            <audio id="audio" :src="all[i]==undefined?'':all[i].mus" :loop="isloop" @timeupdate="gcgz($event)"></audio>
            <span class="alltime">{{zongtime=='NaN:NaN'?'4:00':zongtime}}</span>       
          </div>
          <div class="btn-z">
            <mu-button icon color="success" class="btn_all" @click="changexhms">
               <img :src="rep">
            </mu-button>
            <mu-button icon color="success" class="btn_all" @click="neorpv(-1)">
              <img src="/static/img/prev.png">
            </mu-button>
            <mu-button icon color="success" style="width: 60px;" @click="changepos">
               <img :src="bigplorst">
            </mu-button>
            <mu-button icon color="success" class="btn_all" @click="neorpv(1)">
              <img src="/static/img/next.png">
            </mu-button>
            <div  class="volume">
                <div class="volume-icon ic">
                  <mu-button icon color="success" @click="chvolrig">
                    <img src="/static/img/vol.png">
                  </mu-button>
                  <div  class="modify-volume" :style="'right:'+volrig">
                    <!-- 未激活层 -->
                    <div class="volume-not-active"></div>

                    <!-- 激活层 -->
                    <div  class="volume-active" :style="'height:'+volactive"></div>

                    <!-- 滑块层 -->
                    <div  class="volume-mask" :style="'top:'+volmasktop"></div>

                    <!-- 绑定事件层 -->
                    <div  class="volume-layer"  @touchstart.stop="voltouchst($event)" @touchmove.stop="voltouchst($event)"></div>
                  </div>
                </div>
              </div>      
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script type="text/javascript">
  var wordn = 0
import {mapState, mapActions} from 'vuex'
import gccl from '../store/gccl.js'
export default {
  name:'buttomnav',
  data(){
  	return{
      istct:true,
      tzt:0,
      tztime:'',
      istzt:false,
      wordi:0,
      touchright:'0',
      xx:0,
      x:0,
      p_active:['p_active'],
      volmasktop:'80px',
      volactive:'70px',
      active:0,
      maskleft:'-7px',
      zongtime:'5:00',
      nowtime:'0:00',
      volrig:"-100px",
      detailschange:'',
  		zxtp:'paused',
  		isloop:'',
  		xhms:'顺序播放',
  		xhmskg:1,
  		rep:'/static/img/re.png',
  		dqgc:'',
 		  i:0,
 		  zbz:'zbz',
  		  zhe: '',
  		  plorst:'/static/img/play.svg',
        bigplorst:'/static/img/bigplay.png'
  	}
  },
  computed:{
    ...mapState(['all']),
    gclb(){
      if(this.$store.state.all.length==0){
        return
      }else{
        let thiszgc= gccl(this.$store.state.all[this.i].lrc)
        return thiszgc
      }
    }
  },
  methods:{
  	...mapActions(['removeli']),
  	...mapActions(['removeall']),
    tzbfaudio(){
      let audio =document.querySelector('#audio')
      this.zxtp='running'
      this.plorst='/static/img/stop.svg'
      this. bigplorst='/static/img/bigstop.png'
      audio.currentTime=this.tzt-2
      audio.play()
      this.istct=true
      this.istzt=false
    },
    touchend(){
      let helf =this
      let time1=setTimeout(function(){
         helf.istzt=false
         helf.istct=true
      },1000)
    },
    touchstartx($event){
       this.x = 0
       this.x = $event.changedTouches[0].pageX;
    },
    touchstartxx($event,z){
      let audio =document.querySelector('#audio')
      this.xx = 0
      this.xx = $event.changedTouches[0].pageX;
      //左滑
      if(this.x-100>this.xx&&z==1){
        this.touchright = "100%"
      }
      if(this.x<this.xx-100&&z==-1){ 
          this.touchright = "0"   
      }else if(z==-1){
        this.istzt=true
        let y = $event.path[1].scrollTop
        let i = parseInt(y/28+5)
        let thiszgc= gccl(this.$store.state.all[this.i].lrc)
        let thiszgcarr =[]
        for(let key in thiszgc){
          thiszgcarr.push(key)
        }
        this.tzt =thiszgcarr[i]
        let aass =parseInt(thiszgcarr[i]%60)
        this.tztime=parseInt(thiszgcarr[i]/60)+':'+(aass<10?'0'+aass:aass)
        this.istct=false
      }
      
    },
    voltouchst($event){
      let audio =document.querySelector('#audio')
      let pagey = $event.touches[0].pageY
      let offy = $event.path[1].offsetTop
      let inh = window.innerHeight 
      let pcz
      if(inh==568){
        pcz =35
      }else if(inh==667){
        pcz =25
      }else if(inh==736){
        pcz =20
      }else{
        pcz =15
      }      
      let y =-(pagey-inh-offy-pcz)
      y=y>0?y:0
      y=y<80?y:80
      this.volmasktop=(y+7) +'px'
      this.volactive=(y)+'px'
      audio.volume = y/80
    },
    touchst($event){
      let maxX=parseInt(window.getComputedStyle($event.path[1]).width)
      let audio =document.querySelector('#audio') 
      let allTime = audio.duration;
      let offx = $event.path[1].offsetLeft
      let pagex = $event.targetTouches[0].pageX
      let x = pagex-offx-7;
      x = x>-7?x:-7
      x = x>maxX?maxX:x
      this.maskleft=x-7 +'px'
      this.active = x + 'px'
       audio.currentTime=x/maxX*allTime
    },
    chvolrig(){
      if (this.volrig =='-100px' ) {
        this.volrig='-6px'
      }else{
      this.volrig ='-100px'
      }
    },
    neorpv(a){
      if (this.i==0&&a== -1) {
        this.i=this.$store.state.all.length-1
      }else if(this.i==this.$store.state.all.length-1&&a== 1){
        this.i=0
      }else{
        this.i+=a
        this.p_active=[]
        for(let j = 0; j<this.$store.state.all.length; j++ ){
          this.p_active.push('')
        }
        this.p_active[this.i]='p_active'
      }
      let audio =document.querySelector('#audio') 
      audio.load()
      this.zxtp='running'
      this.plorst='/static/img/stop.svg'
      this. bigplorst='/static/img/bigstop.png'
      audio.oncanplay=function(){
        audio.play()

      }
    },
    changedetails(){
      if (this.detailschange=='') {
        this.detailschange='detailschange'
      }else{
        this.detailschange=''
      }
    },
  	changexhms(){
  		if (this.rep=='/static/img/re.png') {
  			this.xhms='单曲循环'
  			this.rep='/static/img/rep.png'
  			this.xhmskg=0
  		}else if(this.rep=='/static/img/rep.png'){
  			this.xhms='随机播放'
  			this.rep='/static/img/repp.png'
  			this.xhmskg=2
  		}else{
  			this.xhms='顺序播放'
  			this.rep='/static/img/re.png'
  			this.xhmskg=1
  		}
  	},
  	gcgz($event){
  		if(this.$store.state.all.length == 0){
  			return
  		}
  	let audio =document.querySelector('#audio')
    let maxX=parseInt(window.getComputedStyle($event.path[1]).width)
		let time = audio.currentTime;
		let allTime = audio.duration;
    let aho =parseInt(allTime/60)
    let as = parseInt(allTime%60)
    let aass =parseInt(time%60)
    this.maskleft=(time/allTime*maxX-7) + 'px'
    this.active = time/allTime*maxX +'px'
    this.zongtime=aho+':'+as
    this.nowtime=parseInt(time/60)+':'+(aass<10?'0'+aass:aass)
		let thiszgc= gccl(this.$store.state.all[this.i].lrc)
    let thiszgcarr =[]
    for(let key in thiszgc){
      thiszgcarr.push(key)
    }
    let liw =document.getElementById('lsworld')
    let liwp = document.querySelectorAll('#lsworld>p') 
		for(let key in thiszgc){
			if(key == Math.round(time)){
        let i = thiszgcarr.indexOf(key)
        liwp.forEach(function(e) {
          e.classList.remove('activeWorld')
        })
        liwp[i].classList.add('activeWorld')
        if(this.istct){
          let time = setInterval(function(){
            if (i==this.wordi) {
              clearInterval(time)
              return
            }
            if (wordn>=28) {
              wordn=0
              this.wordi=i
              clearInterval(time)
              return
            }
            if (i<=5) {
              clearInterval(time)
              return
            }else{
              liw.scrollTo(0,((i-6)*28)+wordn);
              wordn+=4
            }     
          },50)
        }
        
				this.dqgc = thiszgc[key];
			}
		}
		if(time>=allTime-0.5){
			if (this.xhmskg==0){
				this.isloop='loop'
			}else if(this.xhmskg==1){
        if (this.i>=this.$store.state.all.length-1) {
          this.i=0
        }else{
          this.i++
        }
				audio.load()
  				audio.oncanplay=function(){
  					audio.play()
  				}
			}else{
				this.i=Math.floor(Math.random()*this.$store.state.all.length)
				audio.load()
  				audio.oncanplay=function(){
  					audio.play()
  				}
			}
		}
  	},
  	changemusic(index){
  		var audio =document.querySelector('#audio')
  		this.i=index
  		audio.load()
      this.p_active=[]
      for(let j = 0; j<this.$store.state.all.length; j++ ){
        this.p_active.push('')
      }
     this.p_active[index]='p_active'
  		audio.oncanplay=function(){
  			audio.play()
  		}
  		this.zxtp='running'
  		this.plorst='/static/img/stop.svg'
  		
  	},
  	changezbz(){
  		if (this.zbz=='') {
  			this.zbz='zbz'	
  			this.zhe= ''
  		}else{
  			this.zbz=''
  			this.zhe= 'zhe'

  		}	
  	},
  	changepos(){
  	  let audio =document.querySelector('#audio')
      if (this.plorst=='/static/img/play.svg') {
      	audio.play()
        this.bigplorst='/static/img/bigstop.png'
        this.plorst='/static/img/stop.svg'
        this.zxtp='running'
      }else{
        this.plorst='/static/img/play.svg'
        audio.pause()
        this.zxtp='paused'
        this.bigplorst='/static/img/bigplay.png'
      }
      
    }
  },
  created:function(){
    this.$store.dispatch('getall')
  }
}
</script>
<style scoped>
.tzbf{
  position: absolute;
  width:47%;
  top:36%;
  line-height: 25px;
  height:25px;
}
.p_active{
  color: #0f0;
}
.activeWorld{
  color: #0f0;
}
.details{
  position: fixed;
  background: #1E191F;
  width: 100%;
  height:100%;
  top: 1200px;
  left: 0;
  z-index: 999;
  transition: all .35s;
}
.detailschange{
  top: 0;
}
.zhe1{
	display: none;
}
.zhe{
	display: block;
	position: fixed;
	width: 100%;
	height:720px;
	background: rgba(0,0,0,.3);
	z-index:1;
  top: 0;
}
.muslist{
	width:100%;
	position: fixed;
	bottom: 0px;
	height:200px;
	background: #1F222B;
	color: #fff;
	overflow-y:scroll; 
	z-index:9;
	transition:bottom .3s
}
.zbz{
	bottom: -300px;
}
.muslist>div{
	padding:8px;
	border-bottom: 1px solid #0f0f0f
}
.muslist>div>p{
	margin:0;
}
.muslist>div>p>span{
	font-size: 12px;
	color:#868992;
}
.muslist>div>p>img{
	float: right;
}
.boomcon{
  width: 95%;
  height:40px;
}
.boo_img{
  animation: rotate 5s linear infinite;
  width: 40px;
  float: left;
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
}
.boo_img img{
  width: 100%;
  height:auto;
}
.boo_p{
  float: left;
  width: 150px;
  overflow: hidden;
  padding-left: 10px;
}
.boo_p p{
  margin-top: 0px;
  margin-bottom: -4px;
  color: #333;
  font-size: 17px;
}
.boo_p span{
  color: #aaa;
  font-size: 12px;
}
.fr{
  float: right;
}
.fl{
  float:left;
}
/*--------------------------------*/
.nowtime{
  position: absolute;
  left: -40px;
  color: #fff;
  font-size: 12px;
}
.alltime{
  position: absolute;
  right:-40px;
  color: #fff;
  font-size: 12px;
}
.btn-z{
  width: 100%;
  position: absolute;
  top: 91%;
    height: 50px;
}
.btn-z span{
  color: #fff;
    width: 35px;
    height: 35px;
    font-size: 22px;
    display: block;
    float: left;
    margin-right: 4px;
    margin-left: 24px;
    margin-top: 3px;

}
.btn-z .sx{
  line-height: 40px;
    font-size: 10px;
    width: 40px;
}
.btn-z .player{
  margin-top: -3px;
    font-size: 30px;
}

.volume{
    width: 10%;
    height: 50px;
    position: absolute;
    top: -31%;
    right: 6px;
}
.volume i{
  color: #fff;
    margin-left: 10px;
    margin-top: 25px;
}

.volume-icon{
  position: relative;
  right: 28px;
  top: 16px;
}
.modify-volume{
  position: absolute;
  top: -80px;
  width: 100%;
  height: 100px;
  padding: 5px;
  background-color: rgba(0, 0, 0, .8);
  z-index: 7;
  transform: rotateZ(180deg);
  transition: right .35s;

}

.volume-not-active{
  position: absolute;
  left: 0;
  right: 0;
  top: 15px;
  margin:0 auto;
  height: 70px;
  width: 3px;
  background-color: rgba(255, 255, 255, .3);
}

.volume-active{
  position: absolute;
  left: 0;
  right: 0;
  top: 15px;
  margin:0 auto;
  height: 70px;
  width: 3px;
  background-image: linear-gradient(to bottom, #F2E8A5 0%, #fde432 100%);
}

.volume-mask{
  position: absolute;
  left: 0;
  right: 0;
  top: 80px;
  margin:0 auto;
  height: 12px;
  width: 12px;
  background-color: #eee;
  border-radius: 50%;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, .5);
  animation: light .8s linear 0s infinite alternate;
}

.volume-layer{
  position: absolute;
  left: 0;
  right: 0;
  top: 5px;
  margin:0 auto;
  height: 90px;
  width: 12px;
  z-index: 7;
}
.not-active{
  width: 100%;
  background-color: rgba(255, 255, 255, .3);
  height: 30%;
  position: absolute;
  top: 35%;
}

.activee{
  width: 0;
  background-image: linear-gradient(to right, #F0B9B2 0%, #ed4532 100%);
  height: 30%;
  position: absolute;
  top: 35%;
}

.mask{
  position: absolute;
  left: -7px;
  top: 3px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #eee;
  z-index: 5;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, .5);
  animation: light .8s linear infinite alternate;
}

.time{
  width: 60px;
  height: 35px;
  font-size: 12px;
  color: rgba(255, 255, 255, .6);
  text-align: center;
  line-height: 20px;
}

.layer{
  position: absolute;
  left: -15px;
  top: 0;
  width: calc(100% + 30px);
  height: 20px;
  z-index: 6
}
.hk{
  width: 70%;
    height: 20px;
    position: absolute;
    top: 86%;
    margin: 0 auto;
    right: 0;
    left: 0;
}
.details_top{
  width: 90%;
  margin:10px auto 30px;
  overflow: hidden;
}
.details_top>img{
  float: left;
}
.details_top>span{
  display: block;
  width: 85%;
  float: left;
  text-align: center;
  font-size: 20px;
}
.details_top>div{
  width: 40%;
  margin: 0 auto;
}
.details_top i{
  font-size:12px;
  margin:0 5px;
}
.details_top>p{
  margin: 0 auto;
  float: left;
  width: 100%;
  text-align: center;
}
ul{
  list-style: none;
  padding:0;
  margin: 0;
  overflow: hidden;
}
.details_middle>ul{
  width: 200%;
  position: relative;
  top: 0;
  transition: all .35s;
  overflow-x:hidden;
}
.details_middle>ul>li{
  width: 46%;
  float: left;
  height: 360px;
  margin: 0px 11px;
  overflow-y:scroll; 
  overflow-x: hidden;
}
.details_middle>ul>li>div{
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  animation:rotate 8s linear infinite;
}
.details_middle>ul>li>div>img{
  width: 100%;
  height:auto;

}
.btn-z img{
  width: 100%;
  height:auto;
}
.btn_all{
  width: 58px;
}
@keyframes rotate
{
to {transform:rotate(360deg)}
}
</style>