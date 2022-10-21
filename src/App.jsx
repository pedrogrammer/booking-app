import { useState } from 'react';

import ColsHeading from './components/ColsHeading';
import RowsHeading from './components/RowsHeading';
import Table from './components/Table';
import SubmitBtn from './components/SubmitBtn';
import ColorOptions from './components/ColorOptions';

import './App.css';

function App() {
    const [displayColorOptions, setDisplayColorOptions] = useState(false);

    const displayColorOptionsHandler = stat => {
        {
            stat === 'show' && setDisplayColorOptions(true);
            stat === 'hide' && setDisplayColorOptions(false);
        }
    };

    return (
        <>
            <ColsHeading />
            <section id="rows-table-wrapper">
                <RowsHeading />
                <Table
                    displayColorOptionsHandler={displayColorOptionsHandler}
                />
            </section>
            <section id="submit-btn-color-options-wrapper">
                <SubmitBtn />
                {displayColorOptions && <ColorOptions />}
            </section>
        </>
    );
}

export default App;
