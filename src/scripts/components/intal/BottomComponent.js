// 这是底部导航栏


import {Link} from 'react-router'

class BottomComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    componentWillMount(){
        
    }
    render(){
       let {active} = this.props
        return (
            <div className="info_bottom">
                <ul>
                    <li>
                        <span className="icon icon-me"></span>
                        <span>客服</span>
                    </li>
                    <li>
                        <span className="icon icon-star"></span>
                        <span>收藏</span>
                    </li>
                </ul>    
                <div className="Car-bottom">
                    <span>加入购物车</span>
                </div>
                <div className="Near-bottom">
                    <span>预约附近验光点</span>
                </div>
            </div>
        )
    }
}
//定义默认属性
BottomComponent.defaultProps={
    
}



export default BottomComponent