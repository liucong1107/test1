

import Fetch from '../../../modules/fetch'

//import {concat} from 'react-router'

 class LikeComponent extends React.Component {
     constructor(props,context){
         super(props,context)
        
         this.state={
             Like_Data:{}
         }
     }

	getYouLikeData(page){
        let that = this
        //http://m.loho88.com/search/?sort=o6&e=249&page=1
        Fetch.Get('http://localhost:9000/list/search/?sort=o6&e=249&page='+page)
        	.then(res=>{return res.json()}).then(json=>{     
            that.setState({
            	Like_Data : json.result
            })
///////////////////////////////Like_Data : that.state.Like_Data.concat(json.result)////////////////////////////////
//          console.log(this.state.Like_Data,45)
        })
    }

    getLikeData(){
//  	let li = document.getElementById('a')
//  	console.log(li)
     	let arr = []
//   	arr.push(li)
        if(JSON.stringify(this.state.Like_Data) != "{}"){ // 当内容不为空的时候在输出
          	console.log(this.state.Like_Data,4)
          	let count = this.state.Like_Data.count%this.state.Like_Data.pageSize==0?this.state.Like_Data.count/this.state.Like_Data.pageSize:this.state.Like_Data.count/this.state.Like_Data.pageSize+1
            let likeList = this.state.Like_Data.data
            likeList.forEach((item,i)=>{
                arr.push(
                    <li>
                        <div><img src={'http://image.loho88.com/'+item.img}/></div>
                        <p>{item.title}</p>
                        <h4>{'￥'+item.price}</h4>
                    </li>
                )
            })
            if(count == this.state.Like_Data.page){
            	arr.push(
            		<button>已经到底了...</button>
            	)
            }else{
            	arr.push(
	            	<button onClick={this.getYouLikeData.bind(this,this.state.Like_Data.page+1)}>点击加载更多...</button>
	            )
            }
            
            return arr
        }else{
        	arr.push(
        		<button onClick={this.getYouLikeData.bind(this,1)}>点击加载更多...</button>
        	)
        	return arr
        }
        
    }

     
     render(){
        
         return (
             <div className="Start__nav2">
                <div>
                    <span>你可能喜欢</span>
                    <span className="iconfont icon-moreunfold"></span>
                </div>
                <ul className="Like__list">
                    {this.getLikeData()} 
                </ul>
                
             </div>
         )
     }
 }
 //定义默认属性
 LikeComponent.defaultProps={
     
 }
 
 export default LikeComponent
 