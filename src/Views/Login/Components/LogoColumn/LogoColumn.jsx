import logo from '../../../../images/LOCLOGOBLK1.png';
import byGLDS from '../../../../images/byglds.png';
import './LogoColumn.css';

function LogoColumn() {
  return (
    <div className="loc-logo-col">
        <div>
            <img className="loc-logo-img" src={logo} data-color="blk" />
        </div>	
        <div>
            <img src={byGLDS} className="glds-logo" />
        </div>
    </div>
  );
}

export default LogoColumn;