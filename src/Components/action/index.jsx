export const addTodo=(data)=>{

    return {
        type:"Add",
        payload:{
           id:new Date().getTime().toString(),
           data,
        }
    }
}
export const deleteTodo=(id)=>{
   return {
       type:"Delete",
       id
   }
}

export const completeTodo=()=>{
   return {
       type:"Complete"
   }
}

