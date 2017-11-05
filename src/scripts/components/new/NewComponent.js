// 这是新品页


import FooterComponent from '../FooterComponent'
import NewHeader from '../header/NewHeader'
import NcontentCpmponent from './NcontentCpmponent'
import Fetch from '../../modules/fetch'
class NewComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
           data:{},
           data_newCenter:{},
            isNew:true,
            new_center:[],
            count:1
        }
    }
    componentWillMount(){
        this.getAllData()
        // console.log(this.getAllData(),1)
       
    }
    getAllData(){
        let that=this
        Fetch.Get('http://localhost:9000/list/search/?e=222&page=1')
        .then(res=>{return res.json()}).then(json=>{
            that.setState({
                data:json.result,
                data_newCenter:json.result.data
            })
            console.log(this.state.data,1)
        })
    }
   
    
    render(){
        console.log(this)
        return (
            <div className="full-height">
               <NewHeader/>
               <NcontentCpmponent NewList={this.state.data} />
            </div>
        )
    }
}
//定义默认属性
NewComponent.defaultProps={

}



export default NewComponent

