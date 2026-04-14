// Home.js
import logo from '../IMAGES/logo.svg';
import '../CSS/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Course from '../../course/JS/course_c';
import About from '../../about/JS';
import Practice from '../../practice/index';

function Home() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
    
            <Link className="App-link" to="/course">
              Курс Си
            </Link>
            <Link className="App-link" to="/practice">
              Страница для практики
            </Link>
    
          </header>
    
          <main>
            <Routes>
              <Route path="/course" element={<Course />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/practice" element={<Practice />}></Route>
            </Routes>
          </main>
    
        </div>
  );
}
export default Home;