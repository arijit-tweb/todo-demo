import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useDocumnetTitle } from '../../helpers/setDocumentTitle';
import { changeLikeDisLike, fetchTodos } from '../../redux/reducers/todoSlice';
import PerTodo from './PerTodo';

const Todo = () => {
    useDocumnetTitle('todo');

    const dispatch = useDispatch();

    // const ref = useRef(true);

    const [params] = useSearchParams();
    const paramId = params.get('todoId');

    const location = useLocation();
    // console.log(location);

    const { todoList } = useSelector(state => state.todo);

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    useEffect(() => {
        if (paramId) {
            const id = Number(paramId);
            dispatch(changeLikeDisLike({
                name: location.state?.type,
                index: id - 1
            }));
            const updatedUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.pushState({ path: updatedUrl }, '', updatedUrl);
        };
        // setParams();
    }, [todoList])
    return (
        <>
            <div className="container px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        todoList.length !== 0 && todoList.map((e, i) => {
                            return <PerTodo elem={e} key={i} index={i} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Todo