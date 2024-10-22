import logo from '../../../../images/LOCLOGOBLK1.png';
import './TopGridContent.css';

const TopGridContent = () => {
    return (
        <div className="top__grid__content">
        <div>
            <img className="loc-logo-img" src={logo} data-color="blk" />
        </div>
    </div>
    );
};

export default TopGridContent;