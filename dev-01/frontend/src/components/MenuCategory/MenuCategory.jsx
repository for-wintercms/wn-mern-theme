import { Link } from "react-router-dom";

const MenuCategory = () => {
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

  return (
    <>
      <div className="w-1/2">
        {categories.map((category) => (
          <div key={category.id}>
            <h2>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuCategory;
