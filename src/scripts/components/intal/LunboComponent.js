


// 这是轮播摸版

class LunboComponent extends React.Component {   
    constructor(props,context){
        super(props,context)
        this.state={

        }
    }


    Lunbo(){
        if(JSON.stringify(this.props.lunbo_data) != "{}"){
            // console.log(this.props.lunbo_data,34)
            let lunbo_data = this.props.lunbo_data
            let arr = []
            lunbo_data.forEach((item,i)=>{
                arr.push(             
                    <div className="swiper-slide">
                        <img src={"http://image.loho88.com/"+item}/>
                    </div>       
                )
            })
            return arr
        }
    }

    render(){
        return ( 
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.Lunbo()}
                </div>
                <div className="swiper-pagination"></div>
            </div>       
        )
    }
    
    componentDidMount(){
        // 轮播样式， 操作真实dom
        let swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop : true,
            autoplay : 1000,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true//修改swiper的父元素时，自动初始化swiper
        });
        
    }
}




export default LunboComponent