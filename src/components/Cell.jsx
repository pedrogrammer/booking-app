import { useSelector, useDispatch } from 'react-redux';

import './Cell.css';

const Cell = ({
    beginSelection,
    endSelection,
    updateSelection,
    id,
    dataDay,
    dataHour,
    dataColor,
    classNameeee,
}) => {
    const dispatch = useDispatch();

    const color = useSelector(state => state.color);

    const beginSelectionHandler = enteredId => {
        beginSelection(enteredId);
        dispatch({ type: 'default' });
    };

    const endSelectionHandler = enteredId => {
        endSelection(enteredId);
    };

    const updateSelectionHandler = enteredId => {
        updateSelection(enteredId);
    };

    return (
        <div
            className={classNameeee}
            onMouseDown={() => beginSelectionHandler(id)}
            onMouseUp={() => endSelectionHandler(id)}
            onMouseMove={() => updateSelectionHandler(id)}
            data-color={classNameeee === 'cell selected' ? dataColor : ''}
            data-day={dataDay}
            data-hour={dataHour}
            style={
                classNameeee === 'cell selected'
                    ? { backgroundColor: `${color}` }
                    : {}
            }></div>
    );
};

export default Cell;
