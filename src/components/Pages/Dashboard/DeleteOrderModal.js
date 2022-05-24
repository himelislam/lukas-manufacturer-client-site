import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({deleteOrder, setDeleteOrder, isReload, setIsReload}) => {
    const {_id, product,quantity, price, name} = deleteOrder;

    const handleCancel = ()=>{
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE',
            headers:{
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                toast(`Your Order For ${product} is Canceled`)
                setDeleteOrder(null);
                setIsReload(!isReload)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to Cancel The Order?</h3>
                    <p class="font-semibold">Order's Of Mr : {name}</p>
                    <p class="font-semibold">Product Name : {product}</p>
                    <p class="font-semibold">Quantity : {quantity}</p>
                    <p class="font-semibold">Price : {price}</p>
                    <div class="modal-action">
                    <button onClick={() => handleCancel()} class="btn btn-sm btn-error">Cancel</button>
                        <label for="delete-order-modal" class="btn btn-sm">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteOrderModal;