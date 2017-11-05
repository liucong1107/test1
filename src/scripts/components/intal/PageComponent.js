

import {Link} from 'react-router'

import TuComponent from './TuComponent'
import PingComponent from './PingComponent'
import ArguComponent from './ArguComponent'

import Fetch from '../../modules/fetch'

class PageComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
           isShow:0,
           page_data:{}
        }
    }

    Page_data(gid){
        let that = this
        Fetch.Get('http://localhost:9000/list/goods/5923')
        	.then(res=>{return res.json()}).then(json=>{     
            that.setState({
                page_data:json.result
            })
        })
    }

    // Tu_data(){
    //     let that = this
    //     Fetch.Get('http://localhost:9000/list/store/302')
    //     	.then(res=>{return res.json()}).then(json=>{     
    //         that.setState({
    //             tu_data:json.result
    //         })
    //     })
    // }

     
    // // 点击商品，执行的传值函数
    // handleClick(value){
    //     hashHistory.push({
    //         pathname: '/argu',
    //         query: {
    //         	goods:value
    //         },
    //     })
    // }


    componentWillMount(){
        // console.log(this.props.location.query.goods)
        // this.Argu_data(this.props.location.query.goods)        
        this.Page_data()
        // if(JSON.stringify(this.props.For_page) != "{}"){
        //     console.log(this.props.For_page,76)
        // }      
    }
   

    btn(showPage,value){
        this.setState({
            isShow: showPage,
        })
        // if(JSON.stringify(this.props.For_page) != "{}"){
        //     console.log(this.props.For_page,76)
        // } 
    }

       
    render(){
        return (
            <div className="page-info">
                <div className="page__title">
                    <ul>
                        <li onClick={this.btn.bind(this,0)} className={this.state.isShow==0?'active':''}>图文详情</li>
                        <li onClick={this.btn.bind(this,1)} className={this.state.isShow==1?'active':''}>商品评价</li>
                        <li onClick={this.btn.bind(this,2)} className={this.state.isShow==2?'active':''}>商品参数</li>
                    </ul>
                </div>
                {this.state.isShow==0?<TuComponent Tu_data={this.state.page_data}/>:""}
                {this.state.isShow==1?<PingComponent PingComponent={this.state.page_data}/>:""}
                {this.state.isShow==2?<ArguComponent Argu_data={this.state.page_data}/>:""}
            </div>
        )
    }
}

//定义默认属性
PageComponent.defaultProps={

}


export default PageComponent
