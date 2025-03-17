const Button = ({ a, handle }) => {
  return (
    <div className="button">
      {a.map((item, index) =>
        Number(item) ? (
          <button
            className="numberbtn"
            key={index}
            value={item}
            onClick={(e) => handle(item, e)}
          >
            {item}
          </button>
        ) : (
          <button
            className="functionbtn"
            key={index}
            value={item}
            onClick={(e) => handle(item, e)}
          >
            {item}
          </button>
        )
      )}
    </div>
  );
};
export default Button;
