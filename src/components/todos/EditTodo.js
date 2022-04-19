import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useDocumnetTitle } from '../../helpers/setDocumentTitle';
import { cleanEditable, editTodo } from '../../redux/reducers/todoSlice';

const EditTodo = () => {
    const { id } = useParams();

    useDocumnetTitle(`edit - ${id}`)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { editable } = useSelector(state => state.todo);

    const [value, setValue] = useState('');

    useEffect(() => {
        if(editable.title){
            setValue(editable.title)
        }
    }, [editable])

    useEffect(() => {
        dispatch(editTodo(id));
        return () => {
            dispatch(cleanEditable());
            setValue('')
        }
    }, [id, dispatch])

    return (
        <>
            <div className="overflow-hidden">
                <input className="shadow appearance-none border rounded w-full py-2 px-3 m-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={value} onChange={(e) => setValue(e.target.value)} />

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4"
                onClick={() => navigate(-1)}
                >Back</button>
                
            </div>
        </>
    )
}

export default EditTodo