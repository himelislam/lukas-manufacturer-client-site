import React from 'react';
import { toast } from 'react-toastify';

const DeleteProductModal = ({isReload, setIsReload, deleteProduct, setDeleteProduct}) => {
    const {_id, name} = deleteProduct;

    const handleDeleteProduct = ()=>{
        fetch(`https://infinite-brook-85062.herokuapp.com/product/${_id}`, {
            method: 'DELETE',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                toast(`${name} is Deleted`)
                setDeleteProduct(null);
                setIsReload(!isReload)
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-product-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to Delete The Order?</h3>
                    <p class="font-semibold">Product Name : {name}</p>
                    <div class="modal-action">
                    <button onClick={() => handleDeleteProduct()} class="btn btn-sm btn-error">Delete</button>
                        <label for="delete-product-modal" class="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteProductModal;