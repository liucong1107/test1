// 这是首页

import Fetch from '../../modules/fetch'

import {Link} from 'react-router'

class StartHeader extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={

        }
    }

  

    render(){
        let {position_info} = this.props
        
        return (
            <div className="start-header">
                <div className="header">
                    <Link to='/position'>{position_info.address||'获取地址中...'}</Link>
                    <span className="iconfont icon-moreunfold"></span>
                </div>
                <h2>LOHO</h2>
                <div className="icon icon-cart"></div>
                <div className="icon icon-home"></div>
            </div>
        )
    }
}

export default StartHeader