import CardItem from "./CardItem";

const CardList = () => {
  const data = [
    {
      title: "Iphone 17 Pro",
      description: "A premium smartphone known for its smooth performance, high-quality camera, sleek design, and seamless integration with Apple’s ecosystem. It offers fast processing, strong security, and an easy-to-use interface, making it one of the most reliable devices available.",
      category: "Smart phones",
    },
    {
      title: "Macbook Pro",
      description: "A powerful and professional-grade laptop from Apple, known for its fast performance, high-resolution Retina display, long battery life, and sleek aluminum design. Ideal for creators, developers, and anyone who needs top-tier speed and reliability.",
      category: "Laptops",
    },
    {
      title: "Airpods Pro",
      description: "Premium wireless earbuds from Apple featuring active noise cancellation, transparent mode, a comfortable in-ear fit, and excellent sound quality. Perfect for immersive music, calls, and seamless connection across Apple devices.",
      category: "Accessories",
    },
    {
      title: "I Mac",
      description: "Apple’s all-in-one desktop computer with a stunning high-resolution display, powerful performance, and a sleek, minimalist design. Built for creativity, productivity, and a clean workspace experience.",
      category: "Desktops",
    },
    {
      title: "Apple Watch Series 9",
      description: "The latest smartwatch from Apple featuring advanced health monitoring, fitness tracking, customizable watch faces, and seamless integration with iOS devices. Ideal for staying connected and motivated throughout the day.",
      category: "Wearables",
    },
     {
      title: "Ipad Pro M5",
      description: "A powerful and portable tablet with a sleek design, vibrant display, and smooth performance. Ideal for entertainment, studying, drawing, and productivity, with support for Apple Pencil and a wide range of apps.",
      category: "Tablets",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Reusable Cards</h2>
      <div className="row">
        {data.map((item, index) => (
          <CardItem
            key={index}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;