import './App.css';
import { Routes, Route} from 'react-router-dom';
import CourseC from './body/pages/course/JS/course_c';
import About from './body/pages/about/JS';
import Header from './header/';
import HistoryElectronics from './body/pages/intro/history-electronics/JS/index';
import Intro from './body/pages/intro/index';
import Wisc from './body/pages/course/JS/course_c/what-is-c/index';
import DennisRitchi from './body/pages/denis_richi';
import BellLabs from './body/pages/bell_labs';
import Unix from './body/pages/unix';
import Home from './body/pages/home/JS/index';
import Course from './body/pages/course/JS/index';
import Dollar from './body/pages/course/JS/course_$';
import Compiler from './body/pages/course/JS/course_c/compiler';
import Directive from './body/pages/course/JS/course_c/compiler/directive';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Home />}></Route>

          {/* Документы курса */}
          <Route path="/course" element={<Course />}></Route>
          <Route path="/course/course_c" element={<CourseC />}></Route>
          <Route path="/course/course_c/what-is-c" element={<Wisc />}></Route>
          <Route path="/course/course_c/what-is-c/dennisritchi" element={<DennisRitchi />}></Route>
          <Route path="/course/course_c/what-is-c/bell_labs" element={<BellLabs />}></Route>
          <Route path="/course/course_c/what-is-c/unix" element={<Unix />}></Route>
          <Route path="/course/course_c/compiler" element={<Compiler />}></Route>
          <Route path="/course/course_c/compiler/directive" element={<Directive />}></Route>

          {/* Курс доллара */}
          <Route path="/course/course_$" element={<Dollar />}></Route>

          {/* О нас */}
          <Route path="/about" element={<About />}></Route>

          {/* История */}
          <Route path="/intro/history-electronics" element={<HistoryElectronics />}></Route>
          <Route path="/intro" element={<Intro />}></Route>

        </Routes>
      </main>
    </div>
  );
}

export default App;
