import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css' 

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    // cada objeto va a ser una funcion que va a recibir un color
    "delete": (color) =><DeleteSVG className="Icon-svg" fill={color}/>,
};

function TodoIcon ({type, color , onClick}) {
  return (
    <span className={`Icon-container Icon-container-${type}`}
    onClick={onClick}>
        {iconTypes[type] (color)} 
        {/* se envia la propiedad color como si fuera una funcion  */}
    </span>
  )
}

export { TodoIcon };