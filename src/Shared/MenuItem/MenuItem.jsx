

const MenuItem = ({item}) => {
  
    const {name,image,price,recipe}=item

    return (
        <div className=" space-x-4 flex py-4">
            <img className="w-[120px] h-[80px]" src={image} alt="" />
            <div className="py-2">
                <h3 className="text-xl uppercase font-bold">{name}---------</h3>
                <p className="text-sm text-gray-500">{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
            
        </div>
    );
};

export default MenuItem;