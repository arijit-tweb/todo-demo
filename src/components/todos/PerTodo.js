import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLikeDisLike, deleteTodo } from '../../redux/reducers/todoSlice';

const PerTodo = ({ elem, index }) => {
    const { title, id, like, dislike } = elem;

    const location = useLocation();
    const navigate = useNavigate();

    const {auth} = useSelector(state => state.user);

    const dispatch = useDispatch();

    const deleteClick = ()=>{
        dispatch(deleteTodo(index));
    };

    const setLikeDislike = (e) => {
        if(!auth){
            return navigate('/login', {state: {
                from: location,
                name: e.target.id,
                index: index
            }});
        }

        dispatch(changeLikeDisLike({
            name: e.target.id,
            index: index
        }))
    };

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
                    <div className="cursor-pointer" id="like" onClick={setLikeDislike}>
                        Like: {auth ? like.length : null}
                    </div>
                    <div className="cursor-pointer" id="dislike" onClick={setLikeDislike}>
                        disLike: {auth ? dislike.length: null}
                    </div>
                </div>
                <p>{title}</p>
            </div>
        </>
    )
}

export default PerTodo