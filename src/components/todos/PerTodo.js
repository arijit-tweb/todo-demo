import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/reducers/todoSlice';

const PerTodo = ({ elem, index }) => {
    const { title, id } = elem;

    const dispatch = useDispatch();

    const deleteClick = ()=>{
        dispatch(deleteTodo(index));
    }
    return (
        <>
            <div className="relative p-4 bg-gray-200 rounded-lg">
                <div className="flex gap-4 mb-3">
                    <div className="mx-0 cursor-pointer">
                        <Link to={`edit/${id}`}>
                            <FaEdit color="blue" size={20} />
                        </Link>
                    </div>
                    <div className="cursor-pointer" onClick={deleteClick}><AiFillDelete color="red" size={20} /></div>
                </div>
                <p>{title}</p>
            </div>
        </>
    )
}

export default PerTodo