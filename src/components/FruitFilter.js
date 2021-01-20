const FruitFilter = props => (
  <div>
    <label htmlFor="fruit-filter">Filter these Fruits: </label>
    <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
   </div>
)
// FruitFilter renders a single input. Its value and onChange callbacks
// will both be set by the container component.

export default FruitFilter