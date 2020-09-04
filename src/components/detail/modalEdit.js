import React from "react";

class ModalAdd extends React.Component {

  render() {
    return (
      <>
  
        <div className="modal add fade" id="modal-edit" tabIndex="-1" aria-labelledby="modal-add" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
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
                   <textarea className="shadow"></textarea>
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