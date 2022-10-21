import './SubmitBtn.css';

const SubmitBtn = () => {
    const submitHandler = () => {
        const allSelectedCells = Array.from(
            document.getElementsByClassName('selected')
        );

        const days = [];
        const hours = [];
        const colors = [];

        for (const cell of allSelectedCells) {
            if (!cell.getAttribute('data-color')) {
                return alert('Please select color first.');
            } else {
                days.push(+cell.getAttribute('data-day'));
                hours.push(+cell.getAttribute('data-hour'));
                colors.push(+cell.getAttribute('data-color'));
            }
        }

        const indexesOf0 = [];
        const indexesOf1 = [];
        const indexesOf2 = [];
        const indexesOf3 = [];
        const indexesOf4 = [];
        const indexesOf5 = [];
        const indexesOf6 = [];

        for (const i in days) {
            switch (days[i]) {
                case 0:
                    indexesOf0.push(i);
                    break;
                case 1:
                    indexesOf1.push(i);
                    break;
                case 2:
                    indexesOf2.push(i);
                    break;
                case 3:
                    indexesOf3.push(i);
                    break;
                case 4:
                    indexesOf4.push(i);
                    break;
                case 5:
                    indexesOf5.push(i);
                    break;
                case 6:
                    indexesOf6.push(i);
                    break;
            }
        }

        const zeroHours = [];
        for (const i in indexesOf0) {
            zeroHours.push({ hour: hours[indexesOf0[i]], color: colors[0] });
        }
        const oneHours = [];
        for (const i in indexesOf1) {
            oneHours.push({ hour: hours[indexesOf1[i]], color: colors[0] });
        }

        const twoHours = [];
        for (const i in indexesOf2) {
            twoHours.push({ hour: hours[indexesOf2[i]], color: colors[0] });
        }

        const threeHours = [];
        for (const i in indexesOf3) {
            threeHours.push({ hour: hours[indexesOf3[i]], color: colors[0] });
        }

        const fourHours = [];
        for (const i in indexesOf4) {
            fourHours.push({ hour: hours[indexesOf4[i]], color: colors[0] });
        }

        const fiveHours = [];
        for (const i in indexesOf5) {
            fiveHours.push({ hour: hours[indexesOf5[i]], color: colors[0] });
        }

        const sixHours = [];
        for (const i in indexesOf6) {
            sixHours.push({ hour: hours[indexesOf6[i]], color: colors[0] });
        }

        console.log([
            {
                ...zeroHours,
            },
            {
                ...oneHours,
            },
            {
                ...twoHours,
            },
            {
                ...threeHours,
            },
            {
                ...fourHours,
            },
            {
                ...fiveHours,
            },
            {
                ...sixHours,
            },
        ]);
    };

    return (
        <button id="submit-btn" onClick={submitHandler}>
            Submit
        </button>
    );
};

export default SubmitBtn;
