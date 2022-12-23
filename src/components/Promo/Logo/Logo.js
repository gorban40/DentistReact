import logo from '../../../icons/logo/logo.png';

import './Logo.scss';

const Logo = () => {
    return (
        <div className="logo">
            <img className="logo__img" src={logo} alt="logo" />
            <h1 className="logo__title"><span>Час</span><br></br> Красивих <span>Зубів</span></h1>
        </div>
    )
}

export default Logo;