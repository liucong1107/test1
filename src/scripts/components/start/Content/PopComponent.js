


//  人气推荐
// import actions from '../../flux/actions'

import {Link} from 'react-router'

import {hashHistory} from 'react-router'

class PopComponent extends React.Component {
    constructor(props,context){
        super(props,context)
       
        this.state={
            
        }
    }
    
    
    // 点击商品，执行的传值函数
    handleClick(value){
        hashHistory.push({
            pathname: '/intal',
            query: {
            	goods:value
            },
        })
    }

  

    getPopData(){
       if(JSON.stringify(this.props.PopList) != "{}"){ // 当内容不为空的时候在输出
           let popList = this.props.PopList.show 
           let arr = []
           popList.forEach((item,i)=>{
               arr.push(
                   <Link onClick={this.handleClick.bind(this,item.gid)} className="Pop__list__item">
                       <div>{item.tag}</div>
                       <p>{item.tag_en}</p>
                       <img src={item.pic} />
                   </Link>
               )
           })
           return arr
       }
       
   }

    
    render(){
       
        return (
            <div className="Start__nav1">
               <h4 className="Start__nav1--h4">
                   <span>
                       <a></a>
                       {
                           JSON.stringify(this.props.PopList)!='{}'?this.props.PopList.title.word:''  
                       }    
                   </span> 
                   <a>
                       {
                           JSON.stringify(this.props.PopList)!='{}'?this.props.PopList.more.word:''  
                       } 
                   </a>
               </h4> 
               <span>
                   {
                       JSON.stringify(this.props.PopList)!='{}'?<img src={this.props.PopList.img.pic} />:''  
                   } 
               </span>
               <ul className="Pop__list">
                    {this.getPopData()} 
               </ul>
               
            </div>
        )
    }
}
//定义默认属性
PopComponent.defaultProps={
    
}

export default PopComponent
