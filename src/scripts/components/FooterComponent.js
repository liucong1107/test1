// 这是底部导航栏


import {Link} from 'react-router'

class FooterComponent extends React.Component {   
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
            <div className="start-navs">
                <Link to="/start" className={active=='/start'?'active':''}>
                    <span className="iconfont icon-home"></span>
                    <span className="Smal">首页</span>
                </Link>
                <Link to="/new" className={active=='/new'?'active':''}>
                    <span className="iconfont icon-viewgallery"></span>
                    <span className="Smal">新品</span>
                </Link>
                <Link to="/serve" className={active=='/serve'?'active':''}>
                    <span className="iconfont icon-wang_light"></span>
                    <span className="Smal">客服</span>
                </Link>
                <Link to="/exper" className={active=='/test'?'active':''}>
                    <span className="iconfont icon-location"></span>
                    <span className="Smal">附近</span>
                </Link>
                <Link to="/mine" className={active=='/mine'?'active':''}>
                    <span className="iconfont icon-account"></span>
                    <span className="Smal">我的</span>
                </Link>
            </div>
        )
    }
}
//定义默认属性
FooterComponent.defaultProps={
    
}



export default FooterComponent