import React from "react";
import Axios from "axios";
import {connect} from 'react-redux';
import {getBookCreator} from '../../redux/actions/book';

class ModalAdd extends React.Component {
  state = {
    title: this.props.book.bookDetail.title,
    author: this.props.book.bookDetail.author,
    synopsis: this.props.book.bookDetail.synopsis,
    release_year: this.props.book.bookDetail.realease_year,
    genre_id: null,
    books_qty: this.props.book.bookDetail.qty,
    image: this.props.book.bookDetail.image,

  };
  handleSubmit = (id) => {
    let formData = new FormData();
    formData.append('id', id);
    formData.append('title', this.state.title);
    formData.append('author', this.state.author);
    formData.append('synopsis', this.state.synopsis);
    formData.append('release_year', this.state.release_year);
    formData.append('genre_id', this.state.genre_id);
    formData.append('books_qty', this.state.books_qty);
    formData.append('image', this.state.image);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    const url = process.env.REACT_APP_BOOK;
    Axios.patch(url, formData, config)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    this.props.getBookCreator();

  };


  render() {
    return (
      <>
      {console.log(this.props.book.bookDetail.id)}
        <div className="modal add fade" id="modal-edit" tabIndex="-1" aria-labelledby="modal-add" aria-hidden="true">
          <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modal-add">Edit Data</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="image">Image</label>
                  </div>
                  <div className="col-10">
                    <input className="upload" name="picture" type="file" id="image" autoComplete="off"
                      onChange={(event) => this.setState({image: event.target.files[0]})} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" name="title" type="text" id="title" autoComplete="off" defaultValue={this.props.book.bookDetail.title}
                      onChange={(event) => this.setState({title: event.target.value})} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="author">Author</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" name="author" type="text" id="author" autoComplete="off" defaultValue={this.props.book.bookDetail.author}
                      onChange={(event) => this.setState({author: event.target.value})} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="genre">Genre</label>
                  </div>
                  <div className="col-10">
                    <select class="form-control" id="genre" name="genre" 
                      onChange={(event) => this.setState({genre_id: event.target.value})}>
                      <option value="2">Biography</option>
                      <option value="5">Comic</option>
                      <option value="3">History</option>
                      <option value="4" >Novel</option>
                      <option value="1">Religion</option>
                      <option value="6">Scientific</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="release"><p style={{fontSize: "normal"}}>Release Date</p></label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" name="release" type="text" id="release" autoComplete="off" defaultValue={this.props.book.bookDetail.realease_year}
                      onChange={(event) => this.setState({
                        release_year: event.target.value
                      })} />
                  </div>
                </div>
                <div className="row quantity">
                  <div className="col-2">
                    <label htmlFor="qty">Quantity</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" name="qty" type="number" id="qty" autoComplete="off" defaultValue={this.props.book.bookDetail.qty}
                      onChange={(event) => this.setState({books_qty: event.target.value})} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="des">Description</label>
                  </div>
                  <div className="col-10">
                    <textarea name="des" id="des" className="shadow" defaultValue={this.props.book.bookDetail.synopsis} onChange={(event) => this.setState({synopsis: event.target.value})}></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn  btn-pink btn-save" data-dismiss="modal" onClick={() => this.handleSubmit(this.props.book.bookDetail.id)}>Save</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {book} = state;
  return {
    book
  };

};
const mapDispatchToProps = (dispatch) => {
  return {
    getBookCreator: () => {
      dispatch(getBookCreator());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalAdd);