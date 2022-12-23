import { Container } from "react-bootstrap";
import CardDoctor from "./CardDoctor/CardDoctor";

import doctor from '../../icons/doctors/doctor__doctor.png'

import './Doctors.scss'


const Doctors = () => {
    return (
        <section id="doctors" className="doctors">
            <Container >
                <h2 className="title">
                    Лікарі
                </h2>
                <div className="doctors__wrapper">
                    <CardDoctor name="Michael Horban Oleksandrovich" img={doctor} job='голов лікар ОРТОПЕД' categoria="высшая категория" experience='22' />
                    <CardDoctor name="Michael Horban Oleksandrovich" img={doctor} job='голов лікар ОРТОПЕД' categoria="высшая категория" experience='22' />
                    <CardDoctor name="Michael Horban Oleksandrovich" img={doctor} job='голов лікар ОРТОПЕД' categoria="высшая категория" experience='22' />
                </div>
            </Container>
        </section>
    )
}

export default Doctors