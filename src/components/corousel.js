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
                            <div class="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://statik.tempo.co/data/2018/02/10/id_683404/683404_720.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://lh3.googleusercontent.com/proxy/OTJUE2BILlVS9ogrAwizWZ1ilpairCb9lcTmTcpV4CLzT2nFW28VWxrrSsxZvw9tjZvCizTTv2pyEm22oDr4luVllF9LaJi_TC83V6GUMHyOD1QrlGFR3wCh1_r9ACWEygQZBvV9J3TyQJ2T0mZjOGGGFo0LpRdg5Id6l5gsTpZ3VDDb97rmtOzm8LGUuLMS9Pplw1-hL3cToP-8ukeujy4SaeeRaHz8a-q7tjXIraw9iRTyXg_X75BN3PhrFAwbVgLw9gv-FIJKmbnrI3snnUH3P2qLXwaXFqWF4nM" alt="..." />
                            <div class="carousel-caption d-none d-md-block">

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