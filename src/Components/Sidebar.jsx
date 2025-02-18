import React from 'react';
import '../Styles/Sidebar.css'

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button onClick={onClose} className="close-btn">X</button>
            <div className="sidebar-content">
                <p>Keep your sign close by with a personalised birthstone bracelet. Your birth month is beautifully represented with a dark green zirconia representing May’s Emerald birthstone. This is pure luck, optimism and joy, set into a tank chain bracelet and sandwiched between delicate white crystals. Materials: 18ct Gold Plated Sterling Silver // Chain length: 17-20cm // Stone size: 3.5mm
                </p>
            </div>
            <button className='need'>Need help? Chat to us</button>
        </div>
    );
}

export default Sidebar;

