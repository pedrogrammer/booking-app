import './RowsHeading.css';

const RowsHeading = () => {
    const hours = [];

    for (let i = 0; i < 24; i++) {
        hours.push(`${i}-${i + 1}`);
    }

    return (
        <div id="rows-heading">
            {hours.map(hour => {
                return (
                    <div className="day-hours" key={hour}>
                        {hour}
                    </div>
                );
            })}
        </div>
    );
};

export default RowsHeading;
