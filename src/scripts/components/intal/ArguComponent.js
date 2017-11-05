

// 这是商品参数页

class ArguComponent extends React.Component {   
    constructor(props,context){
        super(props,context)
        this.state={

        }
    }


    Argu_data(){
        if(JSON.stringify(this.props.Argu_data) != "{}"){
            console.log(this.props.Argu_data,3)
            let Argu_data = this.props.Argu_data.arguments
            let arr = []
            Argu_data.forEach((item,i)=>{
                arr.push(             
                    <li>
                       <span>{item.tname}</span>
                       <span>{item.val}</span>
                   </li>
                )
            })
            return arr
        }
    }

    render(){
        return ( 
            <div className="Argu">
               <ul>
                   {this.Argu_data()}
               </ul>
            </div>       
        )
    }
    
}




export default ArguComponent