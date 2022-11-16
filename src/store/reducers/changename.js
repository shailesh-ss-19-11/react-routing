const initialstate = "shailesh"
export const ChangeName = (state = initialstate,action)=>{
    if(action.type==="name"){
        return state = "tushar"
    }
    else{
        return state;
    }
}