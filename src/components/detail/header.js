import React from 'react';
import "../../assets/css/detail-page.css";

const Header = () => {
    return (
        <>
            <div className="header-detail">
                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avenger"></img>
            </div>
            <div className="picture shadow">
            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="header"></img>
            </div>
        </>
    );
};
export default Header;