// 这是首页内容

import Fetch from '../../modules/fetch'
import GlassComponent from './Content/GlassComponent'  // 导航栏
import SwperComponent from './Content/SwperComponent' // 轮播
import PopComponent from './Content/PopComponent'  //  主内容区域
import LikeComponent from './Content/LikeComponent'   // 可能喜欢
import _PopComponent from './Content/_PopComponent'   // 可能喜欢

class ContentComponent extends React.Component {
    constructor(props,context){
        super(props,context)
        this.state={
        	data : {},
            data_Pop : {},
            data_New : {},
            data_Sun : {},
            data_Tan : {},
            data_Ban : {},
            data_Tai : {},
            data_Invis : {},
            data_Fun : {},
            Like_Data:{}
        }
    }

    componentWillMount(){
        this.getAllData()
//      this.getYouLikeData()
    }
    
    getAllData(){
        let that = this
        Fetch.Get('http://localhost:9000/list/index')
        	.then(res=>{return res.json()}).then(json=>{     
            that.setState({
            	data :json.result,
                data_Pop:json.result.popular,
                data_New:json.result.classify[0],
                data_Sun:json.result.classify[1],
                data_Tan:json.result.classify[2],
                data_Ban:json.result.classify[3],
                data_Tai:json.result.classify[4],
                data_Invis:json.result.classify[5],
                data_Fun:json.result.classify[6],
            })
            
        })
    }


//  getYouLikeData(page){
//  	console.log(page,'s')
//      let that = this
//      //http://m.loho88.com/search/?sort=o6&e=249&page=1
//      Fetch.Get('http://localhost:9000/list/search/?sort=o6&e=249&page='+page)
//      	.then(res=>{return res.json()}).then(json=>{     
//          that.setState({
//          	Like_Data : json.result.data
//          })
////          console.log(this.state.Like_Data,45)
//      })
//  }

    render(){
        return (
            <div className="start-content">
                <SwperComponent swpers={this.state.data}/>  {/*添加轮播*/}
                <GlassComponent NavList={this.state.data}/>{/* 多行栏 */}
                <div className="stoppt"><img src="http://img.loho88.com/images/loho-m/guanggaowei2/mzssx.jpg"/></div>{/* 图片 */}
                <PopComponent PopList={this.state.data_Pop}/>
                <_PopComponent PopList={this.state.data_New}/>
                <_PopComponent PopList={this.state.data_Sun}/>
                <_PopComponent PopList={this.state.data_Tan}/>
                <_PopComponent PopList={this.state.data_Ban}/>
                <_PopComponent PopList={this.state.data_Tai}/>
                <PopComponent PopList={this.state.data_Invis}/>
                <_PopComponent PopList={this.state.data_Fun}/>
                <LikeComponent/>
            </div>
                
        )
    }

}

export default ContentComponent