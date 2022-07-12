import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { addTodo, completeTodo, deleteTodo } from "../action/index"
import useTimer from '../user'
import ShowList from './Showlist'
import "./List.css"
const List = () => {

    const [inputData, setInputData] = useState('')
    const dispatch = useDispatch()
    const lists = useSelector((state) => state.reducers.lists)

    const { time, setTimerOn } = useTimer(2)



    return (
        <div>
            <h2>List</h2>

            <div className='addTodo'>

                <input type="text"
                    value={inputData}
                    onChange={(e) => { setInputData(e.target.value) }}
                    placeholder='Enter Data ' />
                <button
                    onClick={() => { dispatch(addTodo(inputData), setInputData(''), setTimerOn(true)) }}
                >Add</button>
            </div>
            
            <div className='showItems'>

                {
                    lists.map((ele) => {

                        return (
                            <div className='Todo' key={ele.id}>

                                <h3>{ele.data}</h3>

                                <div className='items'>

                                    <h4>
                                       
                                        <span>{(Math.floor(time / 60)) < 10 ? ("0" + Math.floor(time / 60)) : (Math.floor(time / 60))}:</span>
                                       
                                        <span>{(time % 60) < 10 ? ("0" + time % 60) : (time % 60)}</span>
                                    </h4>
                                    <input type="checkbox" value="checked" />

                                    <button
                                        onClick={() => {
                                            dispatch(deleteTodo(ele.id), setTimerOn(false))
                                        }}
                                    >Delete</button>


                                </div>



                            </div>

                        )
                    })
                }

            </div>




        </div>
    )
}

export default List