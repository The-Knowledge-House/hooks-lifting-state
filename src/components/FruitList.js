

const FruitList = props => {
  console.log(props, 'fruitlist')
  return (
    < ul >
      {props.fruits.map(fruit => <li>{fruit}</li>)}
    </ul>
  )
}

export default FruitList