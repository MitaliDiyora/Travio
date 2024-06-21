import React from 'react'
import { Accordion } from "react-bootstrap";

const Faqitem = (props) => {
  return (
    <>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey={props.value.key}>
        <Accordion.Header> {props.value.title} </Accordion.Header>
        <Accordion.Body>
          <p>
            Lorem ipsum dolor sit amet consectur adip icing sed do eiusmod
            tempor incididunt labore dolore magna aliqua enim ad minim veniam.
            quis nostrud exercitation amco laboris nisi ut aliquip ex ea commodo
            consequat Duis aute irure dolor in reprehen derit in voluptate velit
            esse cillum.
          </p>

          <ul class="list ">
            <li>Air fares</li>
            <li>4 Nights Hotel Accomodation</li>
            <li>Entrance Fees</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>



    </>
  )
}

export default Faqitem