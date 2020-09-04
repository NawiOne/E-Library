import React from 'react';
import {connect} from 'react-redux';

import next from '../assets/images/next.png';
import prev from '../assets/images/prev.png';

const Corousel = (props) => {
    return (
        <>
            <div className="corousel">
                <div className="prev">
                    <button className="carousel-control-prev-custom" href="#carouselExampleCaptions" data-slide="prev">
                        <img src={prev} alt="prev" />
                    </button>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide shadow" data-ride="carousel">
                    <div className="carousel-inner shadow">
                        <div className="carousel-item active">
                            <img src="https://sweatpantsandcoffee.com/wp-content/uploads/2018/01/She-reads-940x450.png" className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h5>HAPPY READING</h5>
                            </div>
                        </div>
                        {
                            props.book.data.map((item) => {
                                return (
                                    <div className="carousel-item">
                                        <img src={item.image} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption">
                                            <h5>{item.title}</h5>
                                            <p>{item.author}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="next">
                    <button className="carousel-control-next-custom" href="#carouselExampleCaptions" data-slide="next">
                        <img src={next} alt="prev" />
                    </button>
                </div>
            </div>
        </>
    );

};
const mapStateToProps = (state) => {
    const {book} = state;
    return {
        book,
    };
};

export default connect(mapStateToProps, null)(Corousel);