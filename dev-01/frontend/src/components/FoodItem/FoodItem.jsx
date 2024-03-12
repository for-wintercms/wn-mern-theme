import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const FoodItem = () => {
  const { categoryId } = useParams();

  const categories = [
    {
      id: 1,
      name: "Appetizers",
      items: [
        {
          id: 1,
          name: "Spring Rolls",
          price: "$5",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Bruschetta",
          price: "$6",
          image: "https://via.placeholder.com/150",
        },
        // Add more appetizers
      ],
    },
    {
      id: 2,
      name: "Main Course",
      items: [
        {
          id: 3,
          name: "Pasta Carbonara",
          price: "$12",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          name: "Chicken Curry",
          price: "$10",
          image: "https://via.placeholder.com/150",
        },
        // Add more main course items
      ],
    },
    {
      id: 3,
      name: "Desserts",
      items: [
        {
          id: 5,
          name: "Cheesecake",
          price: "$8",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 6,
          name: "Chocolate Brownie",
          price: "$7",
          image: "https://via.placeholder.com/150",
        },
        // Add more desserts
      ],
    },
    // Add more categories as needed
  ];

  const category = categories.find((cat) => cat.id === parseInt(categoryId));

  return (
    <>
      <div>
        <h2>{category.name}</h2>
        {category.items.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

FoodItem.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FoodItem;
