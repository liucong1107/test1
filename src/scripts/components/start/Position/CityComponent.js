
import {Link} from 'react-router'

class CityComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={

        }
    }


    changeHotCity(){

    }

    cityFloor(){
        
    }
    
    // 热门城市
    city_list(){
        if(JSON.stringify(this.props.hotCity) != "{}"){
            console.log(this.props.hotCity)
            let arr = []
            this.props.hotCity.hot.forEach((item,i)=>{
                arr.push(
                    <li>
                        <span onClick={this.changeHotCity.bind(this)}>{item.cityName}</span>
                    </li>
                )
            })


            return arr
        }
    }

    // 字母列表
    letter_list(){
        if(JSON.stringify(this.props.hotCity) != "{}"){
            // console.log(this.props.hotCity)
            let arr = []
            this.props.hotCity.letters.forEach((item,i)=>{
                arr.push(
                    <li>
                        <span onClick={this.cityFloor.bind(this)}>{item}</span>
                    </li>
                )
            })
            return arr
        }
    }

    // 城市列表
    Allcity_list(){
        if(JSON.stringify(this.props.hotCity) != "{}"){
            // console.log(this.props.hotCity)
            let col = []
            let obj = this.props.hotCity.list
            for(let letter in obj){
                obj[letter].forEach((item,i)=>{
                    if(i==0){
                        col.push(
                        <div className="city">
                            <h3>{letter}</h3>
                            <ul> 
                                <li>
                                    <span>{item.cityName}</span>
                                </li>
                            </ul>
                        </div>
                        )
                    }else{
                        col.push(
                            <div className="city">
                                <ul>
                                    <li>
                                        <span>{item.cityName}</span>
                                    </li>
                                </ul>
                            </div>
                        )
                    }	
                })
           }
            
            return col
        }
    }
    
    render(){
        
        return (    
            <div className="pos-body">
                <Link to="/serve">
               		<div className="left">
               			<span className="icon icon-browser">&nbsp;&nbsp;当前城市:</span>
               			<span></span>
               		</div>
               		<div className="icon icon-right"></div>
               </Link>
                <div className="hotCity">
               		<div className="hotCity__title">热门城市</div>
               		<div className="hotCity__list">
               			 {this.city_list()} 
               		</div>
               </div>
               <div className="letter">
                    <div className="letter__title">全部城市</div>
                    <div className="letter__list">
                        {this.letter_list()}
                    </div>
                    {this.Allcity_list()}
               </div>
            </div>
        )
    }
}
//定义默认属性
CityComponent.defaultProps={

}



export default CityComponent