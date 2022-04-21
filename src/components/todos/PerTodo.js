import React, { useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeLikeDisLike, deleteTodo } from '../../redux/reducers/todoSlice';

const PerTodo = ({ elem, index }) => {
    const { title, id, like, dislike } = elem;

    const location = useLocation();
    const navigate = useNavigate();

    const { auth } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const deleteClick = () => {
        dispatch(deleteTodo(index));
    };

    const setLikeDislike = (type, id) => {
        if (!auth) {
            return navigate(`/login?todoId=${id}`, {
                state: {
                    from: location,
                    type
                }
            });
        }

        dispatch(changeLikeDisLike({
            name: type,
            index: id - 1
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
                    <div className="cursor-pointer" id="like" onClick={() => setLikeDislike('like', elem.id)}>
                        Like: {auth ? like.length : null}
                    </div>
                    <div className="cursor-pointer" id="dislike" onClick={() => setLikeDislike('dislike', elem.id)}>
                        disLike: {auth ? dislike.length : null}
                    </div>
                </div>
                <p>{title}</p>
            </div>
        </>
    )
}

export default PerTodo