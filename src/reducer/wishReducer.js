const nameReducer = (state=[], action) => {
    if (action.type == "ADD_wish") {
        return  [...state,action.payload];
            
        
    }
    return state

}

export default nameReducer;