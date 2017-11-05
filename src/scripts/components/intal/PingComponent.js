

// 这是商品评价页

class PingComponent extends React.Component {   
    constructor(props,context){
        super(props,context)
        this.state={

        }
    }


    // Lunbo(){
    //     if(JSON.stringify(this.props.lunbo_data) != "{}"){
    //         console.log(this.props.lunbo_data,34)
    //         let lunbo_data = this.props.lunbo_data
    //         let arr = []
    //         lunbo_data.forEach((item,i)=>{
    //             arr.push(             
                      
    //             )
    //         })
    //         return arr
    //     }
    // }

    render(){
        return ( 
            <div className="Pingjia">
               没有更多评价了（0）
            </div>       
        )
    }
    
}




export default PingComponent