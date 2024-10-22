import imgBg from '../../../../images/STOREBG.jpg';
import './MobileContentGrid.css';


const MobileContentGrid = ({ top,mid,bottom }) => {
    return (
        <div className="mobile__content__grid">            
            <img src={imgBg} className="bg-image" />
            <div className='bgd__gradient'>
                <div className='mobile__content__view'>
                    {top}
                    {mid}
                    {bottom}
                </div>
            </div>
            
        </div>
    );
};

export default MobileContentGrid;