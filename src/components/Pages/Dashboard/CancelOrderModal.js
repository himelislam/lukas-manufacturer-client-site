import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderModal = ({setIsReload, cancelOrder, setCancelOrder, isReload}) => {
    const {_id, product,quantity, price} = cancelOrder;

    const handleCancel = ()=>{
        fetch(`https://lukas-manufacturer-server-site.vercel.app/order/${_id}`, {
            method: 'DELETE',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                toast(`Your Order For ${product} is Canceled`)
                setCancelOrder(null);
                setIsReload(!isReload)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to Cancel The Order?</h3>
                    <p className="font-semibold">Name : {product}</p>
                    <p className="font-semibold">Quantity : {quantity}</p>
                    <p className="font-semibold">Price : {price}</p>
                    <div className="modal-action">
                    <button onClick={() => handleCancel()} className="btn btn-sm btn-error">Cancel</button>
                        <label for="delete-confirm-modal" className="btn btn-sm">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CancelOrderModal;