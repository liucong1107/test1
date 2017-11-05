import {Link} from "react-router"
class NewHeader extends React.Component {
    
        constructor(props,context){
            super(props,context)
            this.state={
                
            }
        }
    
        componentWillMount(){
            
        }
        goback(){
            location.href=""
        }
    
        render(){
            let {position_info} = this.props
            
            return (
                <div className="newheader">
                    <div className="left">
                        <Link className="iconfont icon-back " to="/"></Link>             
                        <p>新品上市</p>
                    </div>
                    <div className="right">
                        <div className="icon icon-cart"></div>
                        <div className="icon icon-menu"></div>
                    </div>
                    
                </div>
            )
        }
    
    
    }
    
    export default NewHeader