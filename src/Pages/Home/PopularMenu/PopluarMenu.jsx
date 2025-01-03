import { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../hook/UseMenu";

const PopularMenu = () => {
    const [menu]=UseMenu()
    const popular= menu.filter((item)=>
        item.category==='popular'
    )
    console.log(popular)
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems);
    //         });
    // }, []); // Added dependency array to ensure `useEffect` runs only once on component mount.

    return (
        <section>
            <Heading
                heading="From Our Menu"
                subheading="Popular Items"
            />
            <div className="grid grid-cols-2 py-10 max-md:grid-cols-2  max-sm:grid-cols-1 gap-5">
                {popular.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default PopularMenu;
