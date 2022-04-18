import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai'

const PerTodo = ({ elem }) => {
    const { title } = elem;
    return (
        <>
            <div className="relative p-4 bg-gray-200 rounded-lg">
                <div className="flex gap-4 mb-3">
                    <div className="mx-0"><FaEdit color="blue" size={20}/></div>
                    <div><AiFillDelete color="red" size={20}/></div>
                </div>
                <p>{title}</p>
            </div>
        </>
    )
}

export default PerTodo