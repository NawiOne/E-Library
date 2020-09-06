import React from 'react';
import Liblogo from "../assets/images/liblogo.png";
import glass from "../assets/images/glass.png";
import menu from '../assets/images/menu.png';
import "../index.css";
import arrow from '../assets/images/arrow.png';

import {connect} from 'react-redux';
import {clickLeftBarCreator, clickNavcreator} from '../redux/actions/animate';
import {searchBookCreator} from '../redux/actions/book'



const Header = (props) => {
    return (
        <>
            <ul className={!props.animate.navDisplay ?  'nav header nav-pills d-flex justify-content-between shadow p-2 fixed-top'
        : 'nav header nav-pills d-flex justify-content-between p-2 fixed-top'}>
                <li className='nav-item menu ml-2 ' onClick={() => props.clickLeftBarCreator()}>
                    <img src={menu} alt="menu"></img>
                </li>
                <div className='drop ml-5'>
                    <select className="" id="">
                        <option>All Categories</option>
                        <option>Comic</option>
                        <option>History</option>
                        <option>Novel</option>
                        <option>Religion</option>
                        <option>Scientific</option>
                    </select>
                    <select className="right" id="">
                        <option>All times</option>
                        <option>2010</option>
                        <option>2015</option>
                        <option>2017</option>
                        <option>2020</option>
                    </select>

                </div>
                <div className='input search'>
                    <img src={glass} alt='logo' />
                    <input className='form-control' type='text' placeholder='search' onKeyPress={(event) =>{
                        if(event.key === 'Enter'){
                            props.searchBookCreator(event.target.value)
                        }
                    }}/>
                </div>
                <li className='nav-item arrow' onClick={() => props.clickNavcreator()}>
                    <img src={arrow} alt='logo' />
                </li>
                <div className='logo'>
                    <li className='nav-item' >
                        <button
                            className='nav-link lib'
                            href='home'
                            tabIndex='-1'
                            aria-disabled='true'
                        >
                            <img src={Liblogo} alt='logo' />
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button
                            className='nav-link lib'
                            href='home'
                            tabIndex='-1'
                            aria-disabled='true'
                        >
                            Library
                    </button>
                    </li>
                </div>
            </ul>
        </>
    );
};
const mapStateToProps= (state) =>{
    const {animate} = state;
    return{
        animate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickNavcreator: () => {
            dispatch(clickNavcreator());
        },
        clickLeftBarCreator: () => {
            dispatch(clickLeftBarCreator());
        },
        searchBookCreator : (title) =>{
            dispatch(searchBookCreator(title))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);