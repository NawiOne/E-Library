import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getBookCreator, addDetailCreator, PageCreator} from '../redux/actions/book';

import next from '../assets/images/next.png';
import prev from '../assets/images/prev.png';
import spinner from '../assets/images/Spinner.gif';



class ListBook extends React.Component {

    componentDidMount() {
        this.props.getBookCreator();
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12 title">
                        <h3 className="mb-4">List Book</h3>
                    </div>
                </div>
                <div className="row">
                    {this.props.book.isfulfilled === true ?
                        this.props.book.data.length ?
                            this.props.book.data.map((item) => {
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 item" key={item.id}>
                                        <div className="card shadow">
                                            <Link to="/detail" className="link-to bg-info">
                                                <img src={item.image} className="card-img-top" alt="..." onClick={() => this.props.addDetailCreator(
                                                    item.id,
                                                    item.title,
                                                    item.genre,
                                                    item.image,
                                                    item.release_year,
                                                    item.synopsis,
                                                    item.author,
                                                    item.books_qty
                                                )
                                                } />
                                            </Link>
                                            <div className="card-body p-3">
                                                <p className="bt text-center">{item.title}</p>
                                                <p className="card-text">{item.synopsis}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }) : <div className="row spinner">
                                <div className="col-12">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzibBVD9w_go7Ofo5BK44_ufJf_y7qQAoPKg&usqp=CAU" alt="spinner" />
                                </div>
                            </div>
                        : <div className="row spinner">
                            <div className="col-12">
                                <img src={spinner} alt="spinner" />
                            </div>
                        </div>
                    }
                </div>
                <div className="row pagination">
                    <div className="col-12 mt-5">
                        <nav aria-label="Page navigation example ">
                            <ul className="pagination pagination-lg">
                                <li className="page-item">
                                    {this.props.book.pageInfo.prevPage !== "" ?
                                        <button className="page-link " aria-label="Previous" onClick={() =>
                                            this.props.PageCreator(this.props.book.pageInfo.prevPage)}>
                                            <img src={prev} alt="prev"></img>
                                            <img src={prev} alt="prev"></img>
                                        </button>
                                        : <button className="page-link " aria-label="Previous" disabled>
                                            <img src={prev} alt="prev"></img>
                                            <img src={prev} alt="prev"></img>
                                        </button>
                                    }

                                </li>
                                <li className="page-item">
                                    {this.props.book.pageInfo.nextPage !== "" ?
                                        <button className="page-link " aria-label="Previous" onClick={() =>
                                            this.props.PageCreator(this.props.book.pageInfo.nextPage)}>
                                            <img src={next} alt="next"></img>
                                            <img src={next} alt="next"></img>
                                        </button>
                                        : <button className="page-link " aria-label="Previous" disabled>
                                            <img src={next} alt="prev"></img>
                                            <img src={next} alt="next"></img>
                                        </button>
                                    }
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        );
    }

};



const mapStateToProps = (state) => {
    const {book} = state;
    return {
        book
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBookCreator: (book) => {
            dispatch(getBookCreator(book));
        },
        addDetailCreator: (id, title, genre, image, year, synopsis, author, qty) => {
            dispatch(addDetailCreator(id, title, genre, image, year, synopsis, author, qty));
        },
        PageCreator: (params) => {
            dispatch(PageCreator(params));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ListBook);