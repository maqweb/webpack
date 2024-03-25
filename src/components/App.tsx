import {useState} from 'react';
import classes from './App.module.scss'

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h4>{count}</h4>
            <button className={classes.button} onClick={() => setCount(prevState => prevState + 1)}>inc</button>
        </div>
    );
};

export default App;