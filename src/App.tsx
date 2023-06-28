import s from './Components/Setting.module.css'
import './Components/null.css';
import {Settings} from './Components/Settings';
import React from 'react';



function App() {
    return (
        <div className={s.app}>
            <div className={s.app__container}>
                <div className={s.app__title}>This is my little React project.</div>
                <Settings/>
            </div>
        </div>
    );
}

export default App;
