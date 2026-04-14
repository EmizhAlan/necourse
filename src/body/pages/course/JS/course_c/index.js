// Course.js
import '../../CSS/style.css'
import image from '../../IMG/image_interfase.png';
import image2 from '../../IMG/image_bash.png';
import image3 from '../../IMG/image_3.png';
import Wisc from './what-is-c/index';
import { Routes, Route, Link } from 'react-router-dom';

function CourseC() {
    return (
        <div>
            <h1>Курс</h1>
            <ul className='content'>
                {/* Раздел 0 */}
                <li className='section'>
                    <h4>0. Введение</h4>
                    <ul className='sub-section'>
                        <li><Link className='link-section' to="/course/course_c/what-is-c">0.1 Что такое С</Link></li>
                        <li><Link className='link-section' to="/course/course_c/compiler">0.2 Как работает программа (компиляция)</Link></li>
                        <li>0.3 Установка компилятора (GCC)</li>
                        <li>0.4 Первая программа (Hello, World)</li>
                        <li>0.5 Структура программы</li>
                    </ul>
                </li>
                {/* Раздел 1 */}
                <li className='section'>
                    <h4>1. Базовый синтаксис</h4>
                    <ul className='sub-section'>
                        <li>1.1 Переменные</li>
                        <li>1.2 Типы данных (int, float, char)</li>
                        <li>1.3 Константы (const, #define)</li>
                        <li>1.4 Операторы (арифметика, сравнение, логика)</li>
                        <li>1.5 Ввод / вывод (printf, scanf)</li>
                    </ul>
                </li>
                {/* Раздел 2 */}
                <li className='section'>
                    <h4>2. Условия</h4>
                    <ul className='sub-section'>
                        <li>2.1 if</li>
                        <li>2.2 if-else</li>
                        <li>2.3 Вложенные условия</li>
                        <li>2.4 switch</li>
                    </ul>
                </li>
                {/* Раздел 3 */}
                <li className='section'>
                    <h4>3. Циклы</h4>
                    <ul className='sub-section'>
                        <li>3.1 for</li>
                        <li>3.2 while</li>
                        <li>3.3 do while</li>
                        <li>3.4 break и continue</li>
                    </ul>
                </li>
                {/* Раздел 4 */}
                <li className='section'>
                    <h4>4. Функции</h4>
                    <ul className='sub-section'>
                        <li>4.1 Что такое функция</li>
                        <li>4.2 Объявление и вызов</li>
                        <li>4.3 Параметры</li>
                        <li>4.4 Возврат значения (return)</li>
                        <li>4.5 Рекурсия</li>
                    </ul>
                </li>
                {/* Раздел 5 */}
                <li className='section'>
                    <h4>5. Массивы</h4>
                    <ul className='sub-section'>
                        <li>5.1 Одномерные массивы</li>
                        <li>5.2 Перебор массива</li>
                        <li>5.3 Многомерные массивы</li>
                    </ul>
                </li>
                {/* Раздел 6 */}
                <li className='section'>
                    <h4>6. Строки</h4>
                    <ul className='sub-section'>
                        <li>6.1 Строки как массив char</li>
                        <li>6.2 Основные функции (strlen, strcpy)</li>
                        <li>6.3 Ввод строк</li>
                    </ul>
                </li>
                {/* Раздел 7 */}
                <li className='section'>
                    <h4>7. Указатели</h4>
                    <ul className='sub-section'>
                        <li>7.1 Что такое указатели</li>
                        <li>7.2 Оператор & и *</li>
                        <li>7.3 Указатели и переменые</li>
                        <li>7.4 Указатели и массивы</li>
                        <li>7.5 Указатели и функции</li>
                    </ul>
                </li>
                {/* Раздел 8 */}
                <li className='section'>
                    <h4>8. Память</h4>
                    <ul className='sub-section'>
                        <li>8.1 Что такое память</li>
                        <li>8.2 mallok</li>
                        <li>8.3 free</li>
                        <li>8.4 Динамические массивы</li>
                    </ul>
                </li>
                {/* Раздел 9 */}
                <li className='section'>
                    <h4>9. Структуры</h4>
                    <ul className='sub-section'>
                        <li>9.1 struct</li>
                        <li>9.2 Доступ к полям</li>
                        <li>9.3 Массив структур</li>
                    </ul>
                </li>
                {/* Раздел 10 */}
                <li className='section'>
                    <h4>10. Файлы</h4>
                    <ul className='sub-section'>
                        <li>10.1 Открытие файла</li>
                        <li>10.2 Чтение</li>
                        <li>10.3 Запись</li>
                        <li>10.4 Закрытие файла</li>
                    </ul>
                </li>
                {/* Раздел 11 */}
                <li className='section'>
                    <h4>11. Процессор</h4>
                    <ul className='sub-section'>
                        <li>11.1 #include</li>
                        <li>11.2 #define</li>
                        <li>11.3 Макросы</li>
                    </ul>
                </li>
                {/* Раздел 12 */}
                <li className='section'>
                    <h4>12. Продвинутые темы</h4>
                    <ul className='sub-section'>
                        <li>12.1 Битовые операции</li>
                        <li>12.2 tipedef</li>
                        <li>12.3 enum</li>
                        <li>12.4 Заголовочные файлы (.h)</li>
                    </ul>
                </li>
                {/* Раздел 13 */}
                <li className='section'>
                    <h4>13. Практика</h4>
                    <ul className='sub-section'>
                        <li>13.1 Задачи на условия</li>
                        <li>13.2 Задачи на циклы</li>
                        <li>13.3 Задачи на массивы</li>
                        <li>13.4 Задачи на указатели</li>
                    </ul>
                </li>
                {/* Раздел 14 */}
                <li className='section'>
                    <h4>14. Мини-проекты</h4>
                    <ul className='sub-section'>
                        <li>14.1 Калькулятро</li>
                        <li>14.2 Игра "угадай число"</li>
                        <li>14.3 Работа с файлами</li>
                        <li>14.4 Телефонная книга</li>
                    </ul>
                </li>
                {/* Раздел 15 */}
                <li className='section'>
                    <h4>15. полноценные проекты</h4>
                    <ul className='sub-section'>
                        <li>23. Перейти к портфолио</li>
                    </ul>
                </li>
            </ul>
            <h2>Содержание курса</h2>
            <h2>Cам курс</h2>
            <h3>Сам курс будет состоять из простых примеров моих же работ, 
                тут будет тупо все программы которые я буду писать на языке программирования Си</h3>
            <p>Начну я с объяснения как я использую код, всмысле как я программиру.</p>
            <p>Обычно я использую либо виртуальную оболочку от 
             гарварда <a href='https://cs50.dev/'>гарварда</a> и 
             с помощью команд mkdir, rm, code, make взаимодействую с интерфейсом, тоесть все что нужно это 
             зарегестрироваться в оболочке через тот же гит хаб и все будет работать, mkdir для создания дирректорий, 
             rm для удаления дирректорий, code для создания файлов на си и make для их компиляции, с помощью ./nameproject можно 
             запустить исполняемый файл</p>
             <p>Давайте попробуем на примере, на фотографии ниже я покажу интерфейс и свои дирректории.</p>
             <img alt='test' src={image}></img>
             <p>Вот пример, сейчас мы создадим папку курса и создадим файлик на си скомпилируем его и 
                исполним первую команду привет мир.</p>
            <p>В командной строке пишем <br></br><br></br><code>mkdir course</code></p>
            <p>А после успешного создания папки переходим в неё cd course
                 создадим файл с помощью <br></br><br></br><code>code name.c</code></p>
            <img alt='test' src={image2}></img>
            <p>Далее напише простенький скрипт
                <br></br><br></br>
                <img alt="image3" src={image3}></img>
            </p>
            <p>Ну и собственно на картинке все видно, как скомпилировать команду чтобы все получилось
                и как запустить исполняемый файл
            </p>
            <p>Есть также и другие способы например локально использовать левые компиляторы и запускать скрипт 
                напрямую через вс код, но это долго муторно и без лишних хоромосом вам это не понадобится, если у вас есть пара лишних 
                хромосом, то смело берите себе в оборону.
            </p>
            <p>Теперь вопрос что дальше, я собираюсь поэтапно разбирать каждую тему, эта страница будет как бы введение в работу и 
                изучение языка Си, дальше я собираюсь на самом сайте добавить боковую понель где поэтапом можно будет просмотреть каждую тему, 
                может быть как нибудь потом добавлю подвал оформлю получше стили когда изучу дизайн и добавлю портфолио, самое главное,
                в дальнейшем я может быть поделюсь с колегами своей разработкой, а именно сайтом и поделюсь своим проектом, который я хочу написать, 
                это будет аналитика пользователей на сайте, писать я буду на Си, мне просто интересно, возможно ли такое вообще.
            </p>
            <main>
                <Routes>
                    <Route path="/what-is-c" element={<Wisc />}></Route>
                </Routes>
            </main>
        </div>
    );
}
export default CourseC;