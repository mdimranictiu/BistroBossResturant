import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";


const MenuCategory = ({items,title,img}) => {
    return (
        <div className="py-10">
             {title &&  <Cover
            img={img}
            title={title}
            />}
            <div className="grid grid-cols-2 py-10 max-md:grid-cols-2  max-sm:grid-cols-1 gap-5">
                {items.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
            <div className="flex flex-col items-center justify-center">
           <Link to={`/order/${title}`}> <button className="btn bg-[#e9de45c5]">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;