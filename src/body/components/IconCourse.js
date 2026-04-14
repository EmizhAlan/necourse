// Иконки для курсов
import './styles/IconCourse.css'
import { Link } from 'react-router-dom';

export default function IconCourse({ text, to }) {
    // Если текст не передан, показываем заглушку
    const displayText = text || "?";

    // Если передан путь (to), делаем ссылку, иначе просто div
    if (to) {
        return (
            <Link to={to} className="icon-course-link">
                <div className='icon'>
                    <h1>{displayText}</h1>
                </div>
            </Link>
        )
    }
    return (
        <div className="icon">
            <h1>{displayText}</h1>
        </div>
    );
}