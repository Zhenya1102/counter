import s from './Components/Setting.module.css'
import './Components/null.css';
import {Settings} from './Components/Settings';



function App() {
    return (
        <div className={s.app}>
            <div className={s.app__container}>
                <Settings/>
            </div>
        </div>
    );
}

export default App;
