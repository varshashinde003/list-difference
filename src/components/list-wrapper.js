
const ListWrapper = ({ list }) => {
  return (
    <div className="list-wrapper">
      <div className="row">
        <div className="col-md-12">
          <ul>
            {list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListWrapper;
