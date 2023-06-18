const Card = ({ data }) => {
  return (
    <div className="cardcontainer">
      <div class="card">
        <div className="cardimg">
          <img src={data.img} alt="text" />
        </div>

        <div class="card__details">
          <div class="name">{data.title}</div>

          <p>{data.description}</p>

          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
