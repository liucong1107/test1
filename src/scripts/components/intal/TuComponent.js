

// 这是图文详情页

class TuComponent extends React.Component {   
    constructor(props,context){
        super(props,context)
        this.state={

        }
    }


    Tu(){
        if(JSON.stringify(this.props.Tu_data) != "{}"){
            console.log(this.props.Tu_data,1)
            // let Tu_data = this.props.Tu_data.stores.txtcontent
            console.log(this.props.Tu_data.txtcontent,12)
            let arr = []
            // Tu_data.forEach((item,i)=>{
            //     arr.push(             
            //         <img src={'http://image.loho88.com/'+item.store_image}/>  
            //     )
            // })
            // return arr
        }
    }

    render(){
        return ( 
            <div className="TuWen">
               {this.Tu()}
            </div>       
        )
    }
    
}




export default TuComponent