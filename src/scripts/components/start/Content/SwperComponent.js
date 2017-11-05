
// 这是轮播摸版

class swperComponent extends React.Component {   
    constructor(props,context){
        super(props,context)
        this.state={
            data:{},
        }
    }


    Glass(){
        
        if(JSON.stringify(this.props.swpers) != "{}"){
            let arr = []
            let pict =  this.props.swpers.focus
           
            pict.forEach((item,i)=>{
                arr.push(
                    <div className="swiper-slide">
                        <img src={item.pic}/>
                    </div>
                )
            })
           
            return arr
        }
    }

    

    render(){
        return ( 
            <div className="swiper-container">
                {/*<轮播>*/}
                <div className="swiper-wrapper">
                    {this.Glass()}
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
                autoplay : 2000,
                observer: true,//修改swiper自己或子元素时，自动初始化swiper
            });
        
    }
}




export default swperComponent