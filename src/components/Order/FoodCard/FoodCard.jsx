import useAuth from "../../../hook/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useCart from "../../../hook/useCart";

const FoodCard = ({ item }) => {
    const { name,recipe, image,price,_id } = item || {};
    const {user}=useAuth()
    const axiosSecure=useAxiosSecure();
    const [,refetch]= useCart()
      const handleAddToCart=(food)=>{
        const cartItem={
            email:user.email,
            menuId:_id,price,image,recipe,name

        }
        if(user && user.email){
            axiosSecure.
            post('/carts',cartItem)
            .then((res)=>
                console.log(res.data,'data sent successfully')
               
            )
            refetch()
            .catch((error)=>{
                console.log(error)
            })
        }
        else{
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
        }
      }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                    alt={name}
                />
            </figure>
            <span className="absolute bg-purple-600 ml-10 mt-5 rounded-xl text-white p-2">${price}
            </span>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(item)}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
