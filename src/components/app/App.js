import Promo from '../Promo/Promo';
import Worry from '../Worry/Worry';
import Doctors from '../Doctors/Doctors';
import Standart from '../Standart/Standart';
import Works from '../Works/Works';
import Dimploma from '../Dimploma/Diploma';
import Wait from '../Wait/Wait';
import Footer from '../Footer/Footer';
import Overlay from '../Overlay/Overlay';
import ModalForm from '../ModalForm/ModalForm';
import {Menu} from '../Menu/MenuExample';
import Politic from '../Politic/Politic';

import './App.scss';

function App() {
	return (
		<>
			<Promo/>
			<Menu/>
			<Worry/>
			<Doctors/>
			<Standart/>
			<Works/>
			<Dimploma/>
			<Wait/>
			<Footer/>

			<ModalForm/>
			<Overlay/>
			<Politic/>
		</>
	)

	
}

export default App;
