import PositionHeader from '../../header/PositionHeader' 

import CityComponent from './CityComponent'

import Fetch from '../../../modules/fetch'


// import {connect} from 'react-redux'


class PositionComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            city_data:{}
        }
    }

    HotCityList(){
        let that = this
        Fetch.Get('http://localhost:9000/list/store/clist')
        	.then(res=>{return res.json()}).then(json=>{     
            that.setState({
                city_data:json.result
            })
        })
    }

    componentWillMount(){
        this.HotCityList()
    }

    
    
    render(){
        return (
            <div className="pos">
                 <PositionHeader/> 
                 <CityComponent hotCity={this.state.city_data}/> 
            </div>
            
        )
    }
}
//定义默认属性
PositionComponent.defaultProps={

}


export default PositionComponent
