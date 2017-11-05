


class LookComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
           
        }
    }


    look_data(){
        if(JSON.stringify(this.props.look_data) != "{}"){
            // console.log(this.props.look_data,34)
            let look_data = this.props.look_data
            let arr = []
            look_data.forEach((item,i)=>{
                arr.push(
                    <li>
                        <p><img src={"http://image.loho88.com/"+item.img}/></p>
                        <p>{item.title}</p>
                        <div>
                            <span>{"￥"+item.price}</span>
                            <span>{item.salesNum}人已买</span>
                        </div>
                    </li>
                )
            })
            return arr
        }
    }

       
    render(){
        return (

            <div className="look-glass">
                <div className="look__title">  
                    <span></span><span className="line"></span>  
                    <span></span><span className="txt">看了又看</span>  
                    <span></span><span className="line"></span>    
                </div>

                <div className="look__list">
                    <ul>
                        {this.look_data()} 
                    </ul>
                </div>

                <div className="look__title">  
                    <span></span><span className="line"></span>  
                    <span></span><span className="txt">已经到底了</span>  
                    <span></span><span className="line"></span>    
                </div>
                
            </div>
            
        )
    }
}

//定义默认属性
LookComponent.defaultProps={

}


export default LookComponent
