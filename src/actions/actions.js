export const addWish = (name) => {
    return{
       type:'ADD_wish',
       payload:'code'
        }
    } 

export const anotherName = () => {
return (dispatch)=>{
    fetch("https://jsonplaceholder.typicode.com/users").
    then(res=>res.json()).
    then(res2=>{
        dispatch({type:'CHANGE_NAME',
        payload:res2[0].name})
    
    })
} 
}


    