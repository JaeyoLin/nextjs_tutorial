export default ({ data }) => (
  <div>
    <p>Welcome to About!</p>
    <ul>
      {data.map(item => {
        return (
          <li key={item.id}>
            <p>
              {item.name} {item.description}
            </p>
          </li>
        );
      })}
    </ul>
  </div>
);
