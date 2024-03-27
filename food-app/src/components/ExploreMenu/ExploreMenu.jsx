import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
        doloremque nesciunt eaque voluptates fugit ex enim sapiente, sit
        molestias? Quasi!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div className="explore-menu-list-item">
              <img
                src={item.menu_image}
                className="explore-menu-list-item-img"
                alt=""
              />
              <h3>{item.menu_name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ExploreMenu;
