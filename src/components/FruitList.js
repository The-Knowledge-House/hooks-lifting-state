const FruitList = (props) => {
  return (
    <ul>
      {props.fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;
