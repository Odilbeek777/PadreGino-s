import { Image } from "antd";
import Title from "antd/es/typography/Title";
import { Typography } from "antd";

const { Text } = Typography;

const Pizza = (props) => {
  return (
    <div className="pizza">
      <Title>{props.name}</Title>
      <Text>{props.description}</Text>
      <Image
        style={{ margin: 0 }}
        src={props.image ? props.image : "https://picsum.photos/200"}
        alt={props.name}
        className="pizza-cart"
      />
    </div>
  );
};

export default Pizza;
