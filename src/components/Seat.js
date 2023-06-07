import styled from 'styled-components';
import {useState} from 'react'
import { findIndex, times } from 'lodash';


function Seat({id, number, isAvailable, chosenSeats, setChosenSeats, numberSeat, setNumberSeat, setSeats, seats, numberOfSeat}) {

    const [seatSelected, setSeatSelected] = useState(false)

    const handleSeats = (ids, numbers) => {
        setChosenSeats([...chosenSeats, ...ids])
        setNumberSeat([...numberSeat, ...numbers])
    }

    const handleColor = (nextSeat) => {
        document.getElementById(nextSeat.id).style.cssText = 'background-color:#8DD7CF'
    }


    function seatVerification() {
        if (numberOfSeat == 1) {
            seats.seats[7].isAvailable = false
            seats.seats[8].isAvailable = false
            seats.seats[9].isAvailable = false
            seats.seats[20].isAvailable = false
            seats.seats[21].isAvailable = false
            seats.seats[32].isAvailable = false
            seats.seats[30].isAvailable = false
            seats.seats[31].isAvailable = false
            setSeats(seats)
        }
        if(isAvailable === false) {
            alert("this seat is not available");
            return;
        } else {
            setSeatSelected(!seatSelected);
            if(!seatSelected === true && !chosenSeats.includes(id)) {
                let ids = [];
                let seatNumbers = [];
                times(numberOfSeat, Number).forEach(num => {
                    let nextSeat = seats.seats[number-1 + num]
                    if(nextSeat.isAvailable) {
                        handleColor(nextSeat)
                        ids.push(nextSeat.id)
                        seatNumbers.push(nextSeat.name)
                    }else return;
                    handleSeats(ids, seatNumbers)
                })
            }
            if(!seatSelected === false && chosenSeats.includes(id)) {
                setChosenSeats([...chosenSeats].filter((value) => value !== id))
                setNumberSeat([...numberSeat, number].filter((value) => value !== number))
            }
        }
    }


    return (
        <SeatSession id={id} className="circle" isAvailable={isAvailable} seatSelected={seatSelected} onClick={seatVerification} borderColor={isAvailable}>
            <p>{number}</p>
        </SeatSession>
    );
}

export default Seat;

const SeatSession = styled.div`
    cursor: pointer; 
    background-color: ${props => props.isAvailable === true ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => props.isAvailable === true ? "#7B8B99" : "#F7C52B"};
    background-color: ${props => props.seatSelected === true ? "#8DD7CF" : ""};


    .selected {
        cursor: pointer; 
        background-color: "#C3CFD9";
        border: 1px solid "#7B8B99"
        background-color: "#8DD7CF";
    }
`;
