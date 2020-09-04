import React from 'react';

const Corousel = () => {
    return (
        <>
            <div className="corousel">
                <div className="prev">
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    </a>
                </div>
                <div id="carouselExampleCaptions" class="carousel slide shadow" data-ride="carousel">
                    <div class="carousel-inner shadow">
                        <div class="carousel-item active">
                            <img src="https://3.bp.blogspot.com/-U1liU77ez-E/V2tVFlAdYSI/AAAAAAAACUc/DezQwn4Lll0onFl9nGL23mqpUGflXpdKQCLcB/s1600/poster.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption">
                                <h5>Koala Kumal</h5>
                                <p>Raditya Dika</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://statik.tempo.co/data/2018/02/10/id_683404/683404_720.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption">
                            <h5>Dilan 1990</h5>
                            <p>Raditiya Dika </p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://i2.wp.com/theofilusifan.com/wp-content/uploads/2018/02/ubur-ubur-lembur-sindulin.web_.id_.jpg?fit=1231%2C624&ssl=1" alt="..." />
                            <div class="carousel-caption">
                            <h5>Ubur ubur lembur</h5>
                            <p>Raditya Dika</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div className="next">
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </>
    );

};
export default Corousel;