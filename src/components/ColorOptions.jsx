import { useDispatch } from 'react-redux';

import './ColorOptions.css';

const ColorOptions = () => {
    const dispatch = useDispatch();

    const settingColorHandler = enteredId => {
        dispatch({ type: enteredId, id: enteredId });
    };

    const colors = ['g-1', 'g-2', 'g-3', 'g-4'];
    const colorBalls = [];

    for (let i = 0; i < 4; i++) {
        colorBalls.push({ id: i, color: colors[i] });
    }

    return (
        <div id="color-options">
            <p>Select color:</p>
            {colorBalls.map(ball => {
                return (
                    <div
                        className={`red ${ball.color}`}
                        key={ball.id}
                        onClick={() => {
                            settingColorHandler(ball.id);
                        }}></div>
                );
            })}
        </div>
    );
};

export default ColorOptions;
