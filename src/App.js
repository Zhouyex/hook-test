import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    // 定义数据源
    let [count,setCount] = useState(0);

    useEffect(()=>{
        console.log('aaaaa');
        return ()=>{
            console.log('卸载');
        }
    },[count])

    return (
        <div className="App">
            <h2> {count} </h2>
            <button onClick={ ()=>{setCount(count+1)} }> 增加 </button>
            {/* 使用useeffect */}

        </div>
    );
}

export default App;
