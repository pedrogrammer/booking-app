import './ColsHeading.css';

const ColsHeading = () => {
    const weekDays = [
        'Hours / Days',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];

    return (
        <div id="cols-heading">
            {weekDays.map(day => {
                return (
                    <div className="week-day" key={day}>
                        {day}
                    </div>
                );
            })}
        </div>
    );
};

export default ColsHeading;
