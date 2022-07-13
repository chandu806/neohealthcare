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

    const { time, setTimeOn } = useTimer(1)



    return (
        <div>
            <h2>List</h2>

            <div className='addTodo'>

                <input type="text"
                    value={inputData}
                    onChange={(e) => { setInputData(e.target.value) }}
                    placeholder='Enter Data ' />
                <button
                    onClick={() => { dispatch(addTodo(inputData), setInputData(''), setTimeOn(true)) }}
                >Add</button>
            </div>
            
            <div className='showItems'>
                {
                    lists.map((ele) => {
                        return (
                            <div className='Todo' key={ele.id}>
                                <h5>{ele.data}</h5>
                                <div className='items'>
                                    <h3>        
                                        <span>{(Math.floor(time / 60)) < 20 ? ("0" + Math.floor(time / 60)) : (Math.floor(time / 60))}:</span>
                                       
                                        <span>{(time % 60) < 20 ? ("0" + time % 60) : (time % 60)}</span>
                                    </h3>
                                    <input type="checkbox" value="checked" />
                                    <button
                                        onClick={() => {
                                            dispatch(deleteTodo(ele.id), setTimeOn(false))
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