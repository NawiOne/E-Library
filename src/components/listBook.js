import React from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {getBookCreator,addDetailCreator} from '../redux/actions/book'


class ListBook extends React.Component {
    componentDidMount= ()=>{
        this.props.getBookCreator()
    }
    render(){
        return (
            <>
                <div className="row ">
                    <div className="col-12 title">
                        <h3 className="mb-4">List Book</h3>
                    </div>
                </div>
                <div className="row">
                {
                    this.props.book.data.map((item) =>{
                        return(
                            <div className="col-12 col-sm-6 col-md-4 item">
                            <div className="card shadow">
                                <Link to="/detail" className="link-to bg-info">
                                    <img src={item.image} className="card-img-top" alt="..." onClick={ () => this.props.addDetailCreator(                                                                                                                        
                                        item.id,
                                        item.title,
                                        item.genre, 
                                        item.image,
                                        item.release_year,
                                        item.synopsis,   
                                    )
                                    } />
                                </Link>
                                <div className="card-body p-3">
                                    <p className="bt text-center">{item.title}</p>
                                    <p className="card-text">{item.synopsis}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                   
                </div> 
            </>
        );
    }

    
};
const mapStateToProps = (state) => {
    const {book} = state
    return{
        book
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getBookCreator: (book) =>{
            dispatch(getBookCreator(book))
        },
        addDetailCreator : (id, title,genre, image, year, synopsis)=>{
            dispatch(addDetailCreator(id, title,genre, image, year, synopsis))
        }
    }
    
    
}


export default connect(mapStateToProps,mapDispatchToProps)(ListBook);