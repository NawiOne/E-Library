import React from "react";
import {connect} from 'react-redux';
import {clickLeftBarCreator} from '../redux/actions/animate';
import menu from '../assets/images/menu.png';
import person from '../assets/images/person.jpg';


const RightBar = (props) => {
    return (
        <div className={props.animate.leftBarDisplay ? "right-bar shadow show " : "right-bar shadow"}>
            <div className="menu">
                <img src={menu} alt="menu" onClick={props.clickLeftBarCreator}></img>
            </div>
            <div className="pic">
                <img src={person} alt="person"></img>
                <p className="mt-2">Hayley Williams</p>
            </div>
            <div className="navs">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button>Explore</button>
                    </li>
                    <li className="nav-item">
                        <button>History</button>
                    </li>
                    <li className="nav-item" data-target="#modal-add" data-toggle="modal">
                        <button>Add Book*</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {animate} = state;
    return {
        animate,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        clickLeftBarCreator: () => {
            dispatch(clickLeftBarCreator());
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(RightBar);