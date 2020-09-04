import React from 'react';
import cheked from '../../assets/images/checked.png'

const ModalDel = () => {
    return (
        <div class="modal fade delete" tabindex="-1" id="modal-delete">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src={cheked} alt="checked"></img>
                        <p>Data<span className="font-weight-bold"> Dilan 1990 </span>berhasil dihapus!</p>  
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ModalDel;