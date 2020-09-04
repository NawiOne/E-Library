import React from "react";
import {connect} from 'react-redux';

const NavHide = (props) => {
    return (
        <div className={props.animate.navDisplay ?'nav-hide shadow show' : 'nav-hide shadow '}>
            <select className="" id="">
                <option>All Categories</option>
                <option>Romance</option>
                <option>Action</option>
                <option>Science fiction</option>
            </select>
            <select className="" id="">
                <option>All times</option>
                <option>2010</option>
                <option>2015</option>
                <option>2017</option>
                <option>2020</option>
            </select>       
        </div>
    );
};

const mapStateToProps = (state) => {
    const {animate} = state;
    return {
        animate,
    };
};

export default connect(mapStateToProps,null)(NavHide);
