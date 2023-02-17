import Nav from "../navbar";
import "./hotelSearch.scss";
import { CityCards } from "../CityCards/CityCards";
import Travelcards from "../TravelCards/travelCards";
import Footer from "../footer/footer";

export const HotelSearch = () => {
  return (
    <div className="hotelSearch">
      <Nav></Nav>
      <div className="home">
        <div className="backgroundImage">
          <img
            className="backImage"
            src="assets/background_image.svg"
            alt="Background"
          ></img>
        </div>
        <div className="MiddleHome">
          <div className="recent">
            <div className="text">Your Recent Searches</div>
            <div className="recentSearches">
              <CityCards
                imageUrl="assets/istanbul.svg"
                cityName="Istanbul"
                country="Turkey"
                places="325"
              ></CityCards>
              <CityCards
                imageUrl="assets/sydney.svg"
                cityName="Sydney"
                country="Australia"
                places="325"
              ></CityCards>
              <CityCards
                imageUrl="assets/baku.svg"
                cityName="Baku"
                country="Azerbaijan"
                places="325"
              ></CityCards>
              <CityCards
                imageUrl="assets/male.svg"
                cityName="Malé"
                country="Maldives"
                places="325"
              ></CityCards>
            </div>
          </div>
          <div className="tarvelSection">
            <div className="subject">
              <div className="heading">Fall into travel</div>
              <div className="desc_All">
                <div className="descreption">
                  Going somewhere to celebrate this season? Whether you’re going
                  home or somewhere to roam, we’ve got the travel tools to get
                  you to your destination.
                </div>

                <div className="All"> See All</div>
              </div>
            </div>
            <div className="famousCity">
              <Travelcards
                ImageUrl="assets/melbourne.svg"
                City="Mellbourne
            "
                description="An amazing journey"
                Price="700"
              ></Travelcards>
              <Travelcards
                ImageUrl="assets/Paris.svg"
                City="Paris
            "
                description="A Paris Adventure"
                Price="600"
              ></Travelcards>

              <Travelcards
                ImageUrl="assets/London.svg"
                City="London
            "
                description="London eye adventure"
                Price="350"
              ></Travelcards>

              <Travelcards
                ImageUrl="assets/Columbia.svg"
                City="Columbia
            "
                description="Amazing streets"
                Price="700"
              ></Travelcards>
            </div>
          </div>

          <div className="BackPackSection">
            <div className="subject">
              <div className="heading">Fall into travel</div>
              <div className="desc_All">
                <div className="descreption">
                  Going somewhere to celebrate this season? Whether you’re going
                  home or somewhere to roam, we’ve got the travel tools to get
                  you to your destination.
                </div>

                <div className="All"> See All</div>
              </div>
            </div>
            <div className="BackPackingCountry">
              <div className="CountryCard">
                <div className="headingAndDescription">
                  <div className="heading">
                    <div className="Country">Backpacking Sri Lanka</div>
                    <div className="CountryTravelPrice">
                      <h5>From</h5>
                      <h3>$ 700</h3>
                    </div>
                  </div>
                  <div className="Description">
                    Traveling is a unique experience as it's the best way to
                    unplug from the pushes and pulls of daily life. It helps us
                    to forget about our problems, frustrations, and fears at
                    home. During our journey, we experience life in different
                    ways. We explore new places, cultures, cuisines, traditions,
                    and ways of living.
                  </div>
                </div>
                <div className="BookHotel">
                  <p>Book Hotel</p>
                </div>
              </div>
              <div className="PicsContainer">
                <img src="assets/srilanka1.svg"></img>
                <img src="assets/srilanka2.svg"></img>
                <img src="assets/srilanka3.svg"></img>
                <img src="assets/srilanka4.svg"></img>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};
