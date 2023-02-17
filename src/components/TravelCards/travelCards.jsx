import "./travelCards.scss";

const Travelcards = ({ ImageUrl, City, description, Price }) => {
  return (
    <div className="travelcards">
      <img src={ImageUrl}></img>
      <div className="info_book">
        <div className="info">
          <p id="places">{City}</p>
          <div className="tagline">
            <p>{description}</p>
            <h2>$ {Price}</h2>
          </div>
        </div>
        <div className="bookHotel">Book Hotel</div>
      </div>
    </div>
  );
};

export default Travelcards;
