import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date(Date.now()));
    const [show, setShow] = useState<boolean>(false);

    const monthName: Array<string> = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'ноя', 'дек'];

    const normalizeToTen = (arg: number): string => arg < 10 ? '0' + arg.toString() : arg.toString();

    const stop = () => {
        clearInterval(timerId);
    };
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date(Date.now()));
        }, 1000);
        setTimerId(id);
    };

    const onMouseEnter = () => {
        setShow(true);
    };
    const onMouseLeave = () => {
        setShow(false);
    };

    const stringTime = `${normalizeToTen(date.getHours())}:${normalizeToTen(date.getMinutes())}:${normalizeToTen(date.getSeconds())}`; // fix with date
    const stringDate = `${normalizeToTen(date.getDate())} ${monthName[date.getMonth()]} ${date.getFullYear()}`; // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton
                bgColor={'green'}
                onClick={start}>start</SuperButton>
            <SuperButton
                bgColor={'red'}
                onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
