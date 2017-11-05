


class LinkComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            userID:'',
            password:''
        }
    }
    
    login(){
    	let that = this
    	$.ajax({
    		url:'http://datainfo.duapp.com/shopdata/userinfo.php',
    		data:{
    			status:"login",
    			userID:that.state.userID,
    			password:that.state.password
    		},dataType:'json',
    		success(results){
 			// console.log(results)
    			that.props.login({name:results.userID})
    		}
    	})
    }

    changeValue(type,e){
    	let obj = {}
    	obj[type]=e.target.value
    	this.setState(obj)
    }


    render(){
        
        return (
            
                
            <div className="content">
                <div className="list-block">
                    <ul>			     
                    <li>
                        <div className="item-content">
                        <div className="item-media"><i className="icon icon-form-name"></i></div>
                        <div className="item-inner">
                            <div className="item-title label">姓名</div>
                            <div className="item-input">
                            <input onBlur={this.changeValue.bind(this,'userID')} type="text" placeholder="账号"/>
                            </div>
                        </div>
                        </div>
                    </li>			      
                    <li>
                        <div className="item-content">
                        <div className="item-media"><i className="icon icon-form-password"></i></div>
                        <div className="item-inner">
                            <div className="item-title label">密码</div>
                            <div className="item-input">
                            <input onBlur={this.changeValue.bind(this,'password')} type="password" placeholder="密码" className=""/>
                            </div>
                        </div>
                        </div>
                    </li>	

                    <li>
                        <div className="item-content">
                        <div className="item-media"><i className="icon icon-form-password"></i></div>
                        <div className="item-inner">
                            <div className="item-title label">验证码</div>
                            <div className="item-input">
                            <input  type="text" placeholder="验证码" className=""/>
                            </div>
                            <div>验证码</div>
                        </div>
                        </div>
                    </li>		   
                    </ul>
            </div>

                <div className="end">
                    <a href="#"> <p>注册</p></a>
                    <a onClick={this.login.bind(this)} ><p>登录</p></a>
                </div>
        </div>

                    
        )
    }
}
//定义默认属性
LinkComponent.defaultProps={

}



export default LinkComponent