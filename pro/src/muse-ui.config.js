import 'muse-ui/lib/styles/base.less'
import 'muse-ui/lib/styles/theme.less';
import {
	APPBar,
	Icon,
  	List,
  	Menu,
  	BottomNav,
  	Slider,
	Button,
} from 'muse-ui'
const components =[APPBar,Icon,List,Menu,BottomNav,Slider,Button]
export default{
	install(Vue){
		components.forEach(c=>Vue.use(c))
	}
}