import React from "react";
import "../../assets/css/detail-page.css";
import {connect} from 'react-redux';

const Content = (props) => {
    return (
        <>
        {console.log(props.book.bookDetail.title)}
            <div className="row">
                <div className="col-md-12 main">
                    <div className="row mb-5 top-desc">
                        <div className="col-sm-6 book-title">
                            <button type="button" className="btn category btn-warning">{props.book.bookDetail.genre}</button>
                            <h2>{props.book.bookDetail.title}</h2>
                            <p>{props.book.bookDetail.realease_year}</p>
                        </div>
                        <div className="col-sm-6 status">
                            <h5>Avaliable</h5>
                        </div>
                    </div>
                    <div className="row description">
                        <div className="col-sm-8">
                            <p className="text-break">{props.book.bookDetail.synopsis}</p>
                        </div>
                        <div className="col-sm-4 borrow">
                            <button type="button" className="btn btn-warning">Borrow</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) =>{
    const {book} = state;
    return{
        book
    }
}
export default connect(mapStateToProps,null)(Content);