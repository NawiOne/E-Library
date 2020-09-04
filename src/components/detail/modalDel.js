import React from 'react';
import cheked from '../../assets/images/checked.png'

const ModalDel = () => {
    return (
        <div className="modal fade delete" tabIndex="-1" id="modal-delete">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img src={cheked} alt="checked"></img>
                        <p>Data<span className="font-weight-bold"> Dilan 1990 </span>berhasil dihapus!</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ModalDel;