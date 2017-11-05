// 这是首页

import {Link} from 'react-router'

class PositionHeader extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={
            
        }
    }

    // getHotCity(props){
    //     let that = this
    //     Fetch.Get('http://localhost:9000/list/store/clist')
    //     	.then(res=>{return res.json()}).then(json=>{     
    //         console.log(json)	
    //         that.setState({data:json})
    //     })
    // }


    // componentWillReceiveProps(props,state){
    //     this.getHotCity(props)
    // }


    render(){
        let {position_info} = this.props
        
        return (
            <div className="pos-header">
                <Link to='/start' className="icon icon-left header"></Link>              
                <h2>选择城市</h2>
                <div className="iconfont icon-cart"></div>
                <div className="iconfont icon-account"></div>
            </div>
        )
    }


}

export default PositionHeader