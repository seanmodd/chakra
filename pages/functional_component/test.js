/* eslint-disable react/prop-types */
export const List = ({ items }) => (
  <div>
    {items.map((item) => (
      <li key={item}>{`${item} wow this is the fucking future`}</li>
    ))}
  </div>
)

const ListContainer = () => (
  <div>
    <List items={['one', 'two', 'three']} />
  </div>
);

export default ListContainer;
