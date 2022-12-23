import './CardStandart.scss';
 
const CardStandart = ({title, descr, bg, icon, additionWidth = false}) => {

    let className;

    if (!additionWidth) {
        className = {background: `url(${bg}) center center/cover no-repeat`};
    } else {
        className = {background: `url(${bg}) center center/cover no-repeat`, height: '250px'}
    }
    return (
        <div className="cardStandart">
            <div className='cardStandart__wrapper_photo'>
                <img style={className}  className="cardStandart__icon" src={icon} alt="photo__perosn" />
                <img className='cardStandart__bg' src={bg} alt="background" />
            </div>
            <div className="cardStandart__wrapper">
                <h3 className="cardStandart__title">{title}</h3>
                <p className="cardStandart__descr">{descr}</p>
            </div>
        </div>
    )    
}

export default CardStandart;