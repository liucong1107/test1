
import FooterComponent from '../FooterComponent'

class ExperComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        console.log(this)
        return (
            <div className="full-height">
               ExperComponent
            </div>
        )
    }
}
//定义默认属性
ExperComponent.defaultProps={

}



export default ExperComponent