import React, {useEffect} from 'react';
import './styles/App.scss';

const App: React.FC = () => {
    useEffect(() => {
        console.log('343434343')
    }, [])
    return (
        <div>
            app
        </div>
    )
}

export default App
