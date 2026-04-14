// Course.js
import '../CSS/style.css'
import IconCourse from '../../../components/IconCourse';

function Course() {
    return (
        <div className='course-container'>
            <IconCourse text="C" to="./course_c" />
            <IconCourse text="$" to="./course_$" />
        </div>
    );
}
export default Course;