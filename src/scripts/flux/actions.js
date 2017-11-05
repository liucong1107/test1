

import Position from '../modules/position'
// import dispatcher from './dispatcher'
const actions = {

	getAllData(){
		Fetch.Get('http://localhost:9000/list/index')
        	.then(res=>{return res.json()}).then(json=>{     
            console.log(json.result)	
            return json.result
		})
		DataList((result)=>{
			dispatcher.dispatch({
				type:'GETALLDATA',
				result
			})
		})
	},

	getPosition(){
		Position((info)=>{
           dispatcher.dispatch({
           		type:'CHANGE_POSITION_INFO',
           	    info
           })
        })
	},
	
	changePosition(info){
		dispatcher.dispatch({
       		type:'CHANGE_POSITION_INFO',
       	    info
        })
	}

}

export default actions
