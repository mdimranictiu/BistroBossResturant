const FoodCard = ({ item, handleAddToCart }) => {
    const { name = "Unknown Dish", recipe = "No recipe available", image } = item || {};

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                    alt={name}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart?.(item)}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
