
import FooterComponent from '../FooterComponent'

class ServeComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        console.log(this)
        return (
            <div className="full-height">
               ServeComponent
            </div>
        )
    }
}
//定义默认属性
ServeComponent.defaultProps={

}



export default ServeComponent