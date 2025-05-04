import { Image } from "antd";
import { usePizzaOfTheDay } from "./usePizzaOfTheDay";
import Title from "antd/es/typography/Title";
import { Typography } from "antd";

const { Text } = Typography;

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
          <Title>{pizzaOfTheDay.name}</Title>
          <Text>{pizzaOfTheDay.description}</Text>
          <Text className="pizza-of-the-day-price">
            From: {intl.format(pizzaOfTheDay.sizes.S)}
          </Text>
        </div>

        <Image
          src={pizzaOfTheDay.image}
          className="pizza-of-the-day-image"
          alt={pizzaOfTheDay.name}
        />
      </div>
    </div>
  );
};

export default PizzaOfTheDay;
