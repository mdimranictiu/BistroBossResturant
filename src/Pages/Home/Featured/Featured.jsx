import featuredImg from "../../../assets/home/featured.jpg";
import Heading from "../../../components/Heading/Heading";
const Featured = () => {
  return (
    <div className="py-10 bg-fixed" style={{
        backgroundImage: `url(${featuredImg})`,
      }}>
      <Heading subheading={"Check it Out"} heading={"Featured Item"} />
      <div className="flex items-center p-20 px-30 gap-10">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="flex text-white flex-col items-start gap-5">
            <p>Aug 20, 2025</p>
            <p className="uppercase  font-bold">WHERE CAN I GET SOME?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
