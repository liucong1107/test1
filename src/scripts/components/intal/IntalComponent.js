
// 这是详情页的主页面

import IntalHeader from '../header/IntalHeader'

import LunboComponent from './LunboComponent'
import InfoComponent from './InfoComponent'
import LookComponent from './LookComponent'

import BottomComponent from './BottomComponent'

import Fetch from '../../modules/fetch'

class intalComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            f_glass:{},
            L_glass:{},
            k_glass:{}
        }
    }

    // 获取 商品参数， 描述，颜色选择，镜片类型 四个部分的数据
    _glass(gid){
        let that = this
        Fetch.Get('http://localhost:9000/list/goods/'+gid)
        	.then(res=>{return res.json()}).then(json=>{     
            that.setState({
                f_glass:json.result
            })
            // console.log(this.state.f_glass,54)
        })
    }

    Lunbo_glass(gid){
        let that = this
        Fetch.Get('http://localhost:9000/list/goods/'+gid)
        	.then(res=>{return res.json()}).then(json=>{     
            that.setState({
                L_glass:json.result.info.pics
            })
        })
    }

    Look_glass(gid){
        let that = this
        Fetch.Get('http://localhost:9000/list/goods/peddle/'+gid)
        	.then(res=>{return res.json()}).then(json=>{     
            that.setState({
                k_glass:json.result
            })
        })
    }

    componentWillMount(){
        this._glass(this.props.location.query.goods)
//      console.log(this.props.location.query.goods,56)
        this.Lunbo_glass(this.props.location.query.goods)        
        this.Look_glass(this.props.location.query.goods)        
    }


    render(){
        return (
            <div className="intal">
                <IntalHeader/>
                <div className="info_section">
                     <LunboComponent lunbo_data={this.state.L_glass}/> 
                     <InfoComponent glass_data={this.state.f_glass}/>
                     <LookComponent look_data={this.state.k_glass}/>
                </div>
                <BottomComponent/> 
            </div>
        )
    }
}

//定义默认属性
intalComponent.defaultProps={

}



export default intalComponent