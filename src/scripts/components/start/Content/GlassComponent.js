
// 这是导航栏

 class GlassComponent extends React.Component {
     constructor(props,context){
         super(props,context)
 
         this.state={
            
         }
     }

    //  componentWillMount(){
    //      this.setState({
    //         getContentData:this.props.NavList
    //     })
    //  }

     getglassdata(){
            if(JSON.stringify(this.props.NavList) != "{}"){
            let arr = []
            this.props.NavList.cates.forEach((item,i)=>{
                arr.push(
                    <li>
                        <img src={item.pic} />
                        <span>{item.tag}</span>
                    </li>
                )
            })
            return arr
        }
        
     }

     
     render(){
        
         return (
             <div className="Glass__nav">
                 {/* {this.getglassdata()}   */}
                <ul>
                     {this.getglassdata()} 
                </ul>
             </div>
         )
     }
 }
 //定义默认属性
 GlassComponent.defaultProps={
     
 }
 
 export default GlassComponent
 