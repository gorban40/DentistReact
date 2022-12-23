import { useState } from "react";

import arrow from '../../../icons/accordion/right-arrows.png'

import './Accordion.scss'

const Accordion = (props) => {
    const {title} = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion">
            <h4 className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <img className='toggle' src={arrow} aria-expanded={isOpen} alt='Toggle Accordion'/>
            </h4>
            <div className="accordion-content" aria-expanded={!isOpen}>
                {props.children}
            </div>
        </div>
    )
}

export default Accordion;