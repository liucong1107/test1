// 这是首页

import Fetch from '../../modules/fetch'

import {Link} from 'react-router'

class IntaltHeader extends React.Component {

    constructor(props,context){
        super(props,context)
        this.state={

        }
    }

  

    render(){
        return (
            <div className="intal-header">
                <Link to='/start' className="span-iconfont icon icon-left"></Link>
                <div className="two-header">
                    <div className="icon icon-cart"></div>
                    <div className="icon icon-menu"></div>
                </div>
            </div>
        )
    }
}

export default IntaltHeader