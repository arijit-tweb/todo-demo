import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Dasboard from './components/Dasboard';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dasboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
