import React from 'react';
import '../assets/css/detail-page.css';
import Header from '../components/detail/header';
import ModalEdit from "../components/detail/modalEdit"

import back from '../assets/images/back.png'
import Content from '../components/detail/content';
import ModalDel from '../components/detail/modalDel';

class DetailPage extends React.Component {
    render() {
        return (
            <>
                <ModalEdit />
                <ModalDel/>
                <div className="detail-page">
                    <nav class="nav p-1">
                        <div className="round">
                            <img alt="back" src={back} />
                        </div>
                        <div className="d-flex">
                            <button class="nav-link" data-target="#modal-edit" data-toggle="modal">Edit</button>
                            <button class="nav-link" data-target="#modal-delete" data-toggle="modal">Delete</button>
                        </div>
                    </nav>
                    <Header/>
                    <div className="content">
                        <Content/>
                    </div>
                </div>
            </>
        );
    }
}
export default DetailPage;