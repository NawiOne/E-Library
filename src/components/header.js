import React from 'react';
import Liblogo from "../assets/images/liblogo.png";
import glass from "../assets/images/glass.png";
import menu from '../assets/images/menu.png';
import "../index.css";
import arrow from '../assets/images/arrow.png';

import {connect} from 'react-redux';
import {clickLeftBarCreator, clickNavcreator} from '../redux/actions/animate';



const Header = (props) => {
    return (
        <>
            <ul className='nav header nav-pills d-flex justify-content-between shadow p-2 fixed-top'>
                <li className='nav-item menu ml-2 ' onClick={() => props.clickLeftBarCreator()}>
                    <img src={menu} alt="menu"></img>
                </li>
                <div className='drop ml-5'>
                    <select class="" id="">
                        <option>All Categories</option>
                        <option>Romance</option>
                        <option>Action</option>
                        <option>Science fiction</option>
                    </select>
                    <select class="right" id="">
                        <option>All times</option>
                        <option>2010</option>
                        <option>2015</option>
                        <option>2017</option>
                        <option>2020</option>
                    </select>

                </div>
                <div className='input search'>
                    <img src={glass} alt='logo' />
                    <input class='form-control' type='text' placeholder='search' />
                </div>
                <li className='nav-item arrow' onClick={() => props.clickNavcreator()}>
                    <img src={arrow} alt='logo' />
                </li>
                <div className='logo'>
                    <li className='nav-item' >
                        <a
                            className='nav-link'
                            href='home'
                            tabindex='-1'
                            aria-disabled='true'
                        >
                            <img src={Liblogo} alt='logo' />
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a
                            className='nav-link'
                            href='home'
                            tabindex='-1'
                            aria-disabled='true'
                        >
                            Library
                    </a>
                    </li>
                </div>
            </ul>
        </>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        clickNavcreator: () => {
            dispatch(clickNavcreator());
        },
        clickLeftBarCreator: () => {
            dispatch(clickLeftBarCreator());
        }
    };
};


export default connect(null, mapDispatchToProps)(Header);