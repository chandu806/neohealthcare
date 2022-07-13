const data = {
    lists: []
}
const reducer = (state = data, action) => {
    switch (action.type) {

        case "Add":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.lists,
                    {
                        id,
                        data,

                    }]
            }

            case "Delete":

              const newList=state.lists.filter((el)=> el.id!==action.id)
            return {
                ...state,
                lists: newList
            }

        default: return state;
    }





}

export default reducer