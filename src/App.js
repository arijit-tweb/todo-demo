import NotFound from './components/NotFound';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dasboard from './components/Dasboard';
import Header from './components/Header';
import ProtectedRoute from './components/route/ProtectedRoute';
import EditTodo from './components/todos/EditTodo';
import Todo from './components/todos/Todo';
import { setAuth } from './redux/reducers/userSlice';
import Multiplex from './components/multiplex/Multiplex';
import ShowMultiplex from './components/multiplex/ShowMultiplex';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const token_ = localStorage.getItem('token');
    if (token_) {
      dispatch(setAuth(true));
    }
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dasboard />} />
          <Route exact path="/todo" element={<Todo />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/multiplex" element={<Multiplex />}/>
          <Route exact path="/multiplex/show" element={<ShowMultiplex/>}/>
          <Route exact
            path="/todo/edit/:id"
            element={
              <ProtectedRoute>
                <EditTodo />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
