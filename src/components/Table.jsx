import { useState } from 'react';

import { useSelector } from 'react-redux';

import Cell from './Cell';

import './Table.css';

const Table = ({ displayColorOptionsHandler }) => {
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [selecting, setSelecting] = useState(false);

    const choseColor = useSelector(state => state.id);

    const beginSelection = enteredId => {
        setSelecting(true);
        setStart(enteredId);
        updateSelection(enteredId);
        displayColorOptionsHandler('hide');
    };

    const endSelection = enteredId => {
        setSelecting(false);
        updateSelection(enteredId);
        displayColorOptionsHandler('show');
    };

    const updateSelection = enteredId => {
        if (selecting) {
            setEnd(enteredId);
        }
    };

    const cellsData = [];

    for (let i = 0; i < 24; i++) {
        for (let j = i * 7; j < 7 + i * 7; j++) {
            cellsData.push({ id: j, hour: i, day: j - i * 7 });
        }
    }

    return (
        <div id="grid-view">
            {cellsData.map(cell => {
                return (
                    <Cell
                        key={cell.id}
                        id={cell.id}
                        dataDay={cell.day}
                        dataHour={cell.hour}
                        dataColor={choseColor}
                        beginSelection={beginSelection}
                        endSelection={endSelection}
                        updateSelection={updateSelection}
                        classNameeee={
                            (end <= cell.id && cell.id <= start) ||
                            (start <= cell.id && cell.id <= end)
                                ? 'cell selected'
                                : 'cell'
                        }
                    />
                );
            })}
        </div>
    );
};

export default Table;
