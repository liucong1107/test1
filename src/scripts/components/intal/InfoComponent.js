

// import CityComponent from './CityComponent'

// import {connect} from 'react-redux'

import PageComponent from './PageComponent'


class InfoComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            for_page:{}
        }
    }

    // componentWillMount(){
    //     if(JSON.stringify(this.props.glass_data) != "{}"){
    //         this.setState({
                
    //         })
    //     }
    // }


    glass_data(){
        let that = this
        if(JSON.stringify(this.props.glass_data) != "{}"){
            // console.log(this.props.glass_data,34)
            let glass_data = this.props.glass_data
            let arr = []
            arr.push(
                <div>
                    {/* // 描述栏 */}
                    <div className="glass__dis">
                        <span>{glass_data.info.goodsName}</span>
                        <span>
                            <a className="icon icon-share"></a>
                            <a> 分享 </a>
                        </span>
                    </div>
                    {/* //  费用栏 */}
                    <div className="glass__fei">
                        <span>{"￥"+glass_data.info.shopPrice}</span>
                        <span>快递：免运费</span>
                        <span>{glass_data.info.salesNum}人已买</span>
                    </div>
                    {/* 广告栏 */}
                    <div className="glass__free">
                        <span className="icon icon-emoji"> {glass_data.info.promiseTag[0]}</span>
                        <span className="icon icon-emoji"> {glass_data.info.promiseTag[1]}</span>
                        <span className="icon icon-emoji"> {glass_data.info.promiseTag[2]}</span>
                        <span className="icon icon-emoji"> {glass_data.info.promiseTag[3]}</span>
                    </div>

                    {/* 颜色选择区域 */}
                    <div className="glass__color">
                        <p>颜色选择</p>
                        <div className="_color">
                            <button>{glass_data.models[0].color}</button>
                            <button className="chosed">{glass_data.models[1].color}</button>
                        </div>
                        <div className="jp">
                            <div className="jp__left">
                                <div className="jp__left-img">
                                    <img src={'http://image.loho88.com/'+glass_data.unioned[0].goods[0].goodsThumbMin}/>
                                </div>
                                <span className="plus">+</span>
                                <div className="jp__left-img">
                                    <img src={'http://image.loho88.com/'+glass_data.unioned[0].goods[1].goodsThumbMin}/>
                                </div>
                            </div>
                            <div className="jp__right">
                                <span>{glass_data.unioned[0].tname}</span>
                                <span>{'￥'+glass_data.unioned[0].price}</span>
                                <span>￥898</span>
                            </div>
                            <span className="icon icon-right"></span>
                        </div>
                    </div>

                    
                    {/* 购物中心指南 */}
                    <div className="glass__address">
                        <h4>购物中心</h4>
                        <div className="free-talk">
                            <span className="icon icon-browser"> 1.6km </span>
                            <i>免费预约直营店眼光</i>
                        </div>
                        <div className="_address">
                            <div>地址：北京王府进大街大三就撒惹我从创新大厦</div>
                            <span className="icon icon-phone"></span>
                        </div>
                        <div className="other-doors">
                            <div>查看附近17家门店</div>
                            <span className="icon icon-right"></span>
                        </div>
                    </div>

                </div>
            )
            // that.setState({
            //     for_page:that.props.glass_data
            // })
            return arr
        }
    }

    componentWillMount(){
        this.setState({
            for_page:this.props.glass_data
        })
    }

       
    render(){
        return (

            <div className="info-glass">
                {this.glass_data()}
                <PageComponent For_page={this.state.for_page}/> 
            </div>
            
        )
    }

}

//定义默认属性
InfoComponent.defaultProps={

}


export default InfoComponent
