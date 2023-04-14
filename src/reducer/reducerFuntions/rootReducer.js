export const reducerFunction = (oldState,action)=>{
    //console.log("oldState----->",oldState);
    let newState = oldState;
    switch(action.type){
        case "REMOVE_MOVIE":

            return {
                ...oldState,
                movies:[
                    ...oldState.movies.filter((cv,idx,arr)=>{
                        return cv.name !== action.mname
                    })

                ]
            }
            //console.log('Hello');
            break;
        case "ADD_MOVIE":
            //console.log('Hi');
            return newState;
            break;
        default:
            return newState;
    }   
}