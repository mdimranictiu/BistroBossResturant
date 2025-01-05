import React from 'react';
import { MdDelete } from "react-icons/md";
import useCart from '../../../hook/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hook/useAxiosSecure';

const Cart = () => {
    const [cart,refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const total_price = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/carts/${id}`);
                    if (res.data.deletedCount > 0) {
                        refetch()
                        // Ensure the property name matches your backend
                        Swal.fire("Deleted!", "Your item has been deleted.", "success");
                        //setCart(cart.filter((item) => item._id !== id)); // Update state locally
                    }
                } catch (error) {
                    Swal.fire("Error!", "Something went wrong while deleting.", "error");
                    console.error("Delete Error:", error);
                }
            }
        });
    };

    return (
        <>
            <div className='flex justify-around py-5 items-center'>
                <h2 className='text-2xl'>Items: {cart.length}</h2>
                <h2 className='text-2xl'>Total Price: ${total_price}</h2>
                <button className='btn btn-primary'>Pay</button>
            </div>
            <div>
                <div className="overflow-x-auto p-5">
                    <table className="table">
                        {/* Table Head */}
                        <thead className='bg-orange-500 text-2xl text-white'>
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <img
                                                className='w-20 h-20 rounded-xl'
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="text-xl text-red-500"
                                        >
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Cart;
