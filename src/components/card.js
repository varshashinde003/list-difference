const Card = ({ title, col_width=6, children, count }) => {
  return (
    <div className={`col-md-${col_width}`}>
      <div className="card">
        <div className="card-header">
          <h3>{title}</h3>
          {count ? <span>{count}</span> : null}
        </div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
