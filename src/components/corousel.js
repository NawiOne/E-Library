import React from 'react';
import next from '../assets/images/next.png';
import prev from '../assets/images/prev.png'

const Corousel = () => {
    return (
        <>
            <div className="corousel">
                <div className="prev">
                    <button className="carousel-control-prev-custom" href="#carouselExampleCaptions" data-slide="prev">
                        <img src={prev } alt="prev" />
                    </button>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide shadow" data-ride="carousel">
                    <div className="carousel-inner shadow">
                        <div className="carousel-item active">
                            <img src="https://3.bp.blogspot.com/-U1liU77ez-E/V2tVFlAdYSI/AAAAAAAACUc/DezQwn4Lll0onFl9nGL23mqpUGflXpdKQCLcB/s1600/poster.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h5>Koala Kumal</h5>
                                <p>Raditya Dika</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1549122728-f519709caa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80" className="d-block w-100" alt="..." />
                            <div className="carousel-caption">
                                <h5>Dilan 1990</h5>
                                <p>Raditiya Dika </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i2.wp.com/theofilusifan.com/wp-content/uploads/2018/02/ubur-ubur-lembur-sindulin.web_.id_.jpg?fit=1231%2C624&ssl=1" alt="..." />
                            <div className="carousel-caption">
                                <h5>Ubur ubur lembur</h5>
                                <p>Raditya Dika</p>
                            </div>
                        </div>
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
                    <img src={next } alt="prev" />
                    </button>
                </div>
            </div>
        </>
    );

};
export default Corousel;