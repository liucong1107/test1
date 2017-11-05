
// 这是总模板，可以往其中添加所有模块以及模板


import FooterComponent from '../FooterComponent'
import ContentComponent from '../start/ContentComponent'
import StartHeader from '../header/StartHeader'
import Position from '../../modules/position'

import Fetch from '../../modules/fetch'

class StartComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            position_info:{}
        }
    }
    componentWillMount(){
        let that = this
        Position((info)=>{
            that.setState({
                position_info:info
            })
        })
    }
    render(){
        let {position_info} = this.state
        return (
            <div className="full-height start">
               <StartHeader position_info={position_info}/>
               <ContentComponent DataAll={this.state.data}/>
               <FooterComponent/>
            </div>
        )
    }
}
//定义默认属性
StartComponent.defaultProps={

}



export default StartComponent