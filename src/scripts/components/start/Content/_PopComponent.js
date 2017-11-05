


//  普通的样式
// import actions from '../../flux/actions'

class _PopComponent extends React.Component {
    constructor(props,context){
        super(props,context)
       
        this.state={
            
        }
    }

  

    getPopData(){
       if(JSON.stringify(this.props.PopList) != "{}"){ // 当内容不为空的时候在输出
           let popList = this.props.PopList.show 
           let arr = []
           popList.forEach((item,i)=>{
               arr.push(
                   <li className="Pop__list__item">
                       <div>{item.tag}</div>
                       
                       <p>{item.tag_en}</p>
                       <img src={item.pic} />
                   </li>
               )
           })
           return arr
       }
       
   }

    
    render(){
       
        return (
            <div className="Popcomponent">
               <h4>
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
_PopComponent.defaultProps={
    
}

export default _PopComponent
