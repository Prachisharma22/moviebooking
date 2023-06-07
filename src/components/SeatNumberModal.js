import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { range } from 'lodash';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


 function SeatNumberModal(props) {
  const  { isOpen, setIsOpen, setNumberOfSeat, timeId } = props;
  const [input, setInput] = useState(1)

  return (
    <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}  >
      <ModalHeader style={{color: "whitesmoke", backgroundColor: '#E8833A'}} toggle={() => setIsOpen(!isOpen)}>Numbee of Seat to be booked</ModalHeader>
      <ModalBody >
        <ABC>
          <div className='abc-wrapper'>
          <h5>How many seats ?</h5>
            <select value={input} onChange={(e) => setInput(e.target.value)} >
            { range(1, 11).map((num)=> <option value={`${num}`}>{num}</option>)}
            </select>
          </div>
        </ABC>
      </ModalBody>
      <ModalFooter >
        <LinkStyle>
          <Link to={`/assentos/${timeId}`} style={{ textDecoration: 'none' }}>
            <div className="link_style" onClick={()=> setNumberOfSeat(input)}><span>Confirm</span></div>
          </Link>
        </LinkStyle>
      </ModalFooter>
    </Modal>
  )
};

export default SeatNumberModal;


const ABC = styled.div`

  .abc-wrapper {
    display: flex;
    align-items: center;
    gap: 15px
  }
`
const LinkStyle = styled.div`
    .link_style {
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 8px 8px 0;
        cursor: pointer;
    }

    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        
    }
`