function ListGroup() {
  const items = ["USA", "Nigeria", "Germany", "UK", "Finland"];

  console.log(items);
  if (items.length === 0) {
    return <p>No item found</p>;
  }
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
