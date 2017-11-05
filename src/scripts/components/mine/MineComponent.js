import MineHeader from '../header/MineHeader' 

import LinkComponent from './LinkComponent'

import {connect} from 'react-redux'


class MineComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            userID:'',
            password:''
        }
    }


    login(info){
        console.log(info)
        this.props.changeUserInfo(info)
    }
    
    render(){
        return (
            <div className="mine-gulp">
                <MineHeader/>
                {/*  添加图片 */}
            <div><img src="http://m.loho88.com/assets/images/login-banner.png"/></div>
                <div className="link">
                    <p><a>手机号快速登录</a></p>
                    <p><a>密码账号登录</a></p>
                    
                </div>
                {/* 这个模块失效了 */}
                <LinkComponent login={this.login.bind(this)} />      

                {/* 点击登录 */}
                
                
            
                
                
            </div>
            
        )
    }
}
//定义默认属性
MineComponent.defaultProps={

}


const mapDispatchToProps = (dispatch)=>{
	return {
		changeUserInfo:(info)=>{
			dispatch({type:'CHANGE_USER_INFO',info:info})
		}
	}
}
export default connect(state=>state,mapDispatchToProps)(MineComponent)
