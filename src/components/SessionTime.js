import { Button } from 'reactstrap';

function SessionTime({weekday, date, showtimes, setSessionData, setIsOpen}) {

    const onClickHandler = (time) => {
        setSessionData({weekday: weekday, time: time})
        setIsOpen(true)
    }

    return (
        <>
            <p>{weekday} - {date}</p>
            <div className="sessions__times">
                    {showtimes.map((time) => <Button 
                         className="session__time" onClick={()=> onClickHandler(time)}>
                            <span>{time.name}</span>
                        </Button>)}
            </div>
        </>
    );
}

export default SessionTime;
