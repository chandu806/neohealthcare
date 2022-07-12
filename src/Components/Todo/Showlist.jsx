import React from 'react'
import { useDispatch } from 'react-redux'
import "./List.css"

import { deleteTodo } from "../action/index"
const ShowList = ({ele,time}) => {

    const dispatch = useDispatch()

    return (
        <div>

            <div className='Todo' key={ele.id}>

                <h3>{ele.data}</h3>

                <div className='items'>

                    <h5>
                      
                        <span>{(Math.floor(time / 60)) < 10 ? ("0" + Math.floor(time / 60)) : (Math.floor(time / 60))}:</span>
                       
                        <span>{(time % 60) < 10 ? ("0" + time % 60) : (time % 60)}</span>
                    </h5>
                    <input type="checkbox" value="checked" />

                    <button
                        onClick={() => {
                            dispatch(deleteTodo(ele.id))
                        }}
                    >Delete</button>


                </div>



            </div>

        </div>
    )
}

export default ShowList