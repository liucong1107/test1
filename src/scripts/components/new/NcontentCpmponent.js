

class NcontentCpmponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            a:1
        }
    }
   getNewData(){

       if(JSON.stringify(this.props.NewList)!="{}"){
           let NewList=this.props.NewList.data
           console.log(NewList,4)
           let arr=[]
           NewList.forEach((item,i)=>{
               arr.push(
                    <li className="New_list_item">
                        
                            <div className="list_item1">
                                <img src={"http://image.loho88.com/"+item.img}/>
                            </div>
                            <span>{item.isNew}</span>
                            <p>{item.title}</p>
                            <div className="list_item2">
                                <span>￥{item.price}</span>
                                <span>{item.salesNum}人已买</span>
                            </div>
                            
                    </li>
               )
           })
                 return arr
       }
   }
  
    
    render(){
        console.log(this)
        return (
            <div className="content">
                <div className="buttons-tab">
                    <a href="#tab1" className="tab-link active button">综合</a>
                    <a href="#tab2" className="tab-link button" >销量</a>
                    <a href="#tab3" className="tab-link button">价格</a>
                    <a href="#tab4" className="tab-link button">筛选</a>
                </div>
                <div className="content-block">
                    <div className="tabs">
                        <div id="tab1" className="tab active">
                            <div className="content-block">
                                <p>
                                    <ul className="new__list2">
                                         {this.getNewData()}
                                          
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div id="tab2" className="tab">
                            <div className="content-block">
                                <p>
                                    <ul className="new__list2">
                                         {this.getNewData()} 
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div id="tab3" className="tab">
                            <div className="content-block">
                                <p>
                                    <ul className="new__list2">
                                         {this.getNewData()} 
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div id="tab4" className="tab">
                            <div className="content-block">
                                <p>
                                    <ul className="new__list2">
                                         {this.getNewData()} 
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}
//定义默认属性
NcontentCpmponent.defaultProps={

}



export default NcontentCpmponent

