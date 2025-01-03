import { Sponsors_brand } from "../../Utils/Datas/Home_Page";
import "./Sponsors.scss";
const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="container">
        <div className="brands">
          {Sponsors_brand?.brands?.map((brand) => (
            <div className="brand" key={brand.id}>
              <img src={brand.img} alt="sponsor" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
