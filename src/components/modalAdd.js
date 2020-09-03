import React from "react";
// import Axios from "axios";
// import {connect} from 'react-redux';
// import {insertMenuCreator} from '../redux/actions/menuAndCart';

class ModalAdd extends React.Component {

  render() {
    return (
      <>
  
        <div className="modal add fade" id="modal-add" tabIndex="-1" aria-labelledby="modal-add" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modal-add">Add Data</h5>
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
                    <input className="upload" name="picture" type="file" id="image" autoComplete="off"  />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="price">Title</label>
                  </div>
                  <div className="col-10">
                    <input className="form-control shadow" name="title" type="text" id="price" autoComplete="off" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="cat">Description</label>
                  </div>
                  <div className="col-10">
                   <textarea></textarea>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn  btn-pink btn-save" data-dismiss="modal" >Save</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}



export default ModalAdd;