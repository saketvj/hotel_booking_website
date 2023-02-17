import Ideas from "../Ideas/ideas";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="SubscribeCard">
        <div className="Email">
          <div className="Heading">Subscribe Newsletter</div>
          <h4>The Travel</h4>
          <h5>
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </h5>
          <div className="SubscribeEmail">
            <div className="EmailBox">Your Email Address</div>
            <div className="SubscribeBox">
              <p>Subscribe</p>
            </div>
          </div>
        </div>
        <img src="assets/mailbox.svg"></img>
      </div>
      <div className="About">
        <div className="Availablity">
          <img src="assets/Logo2.svg"></img>
          <div className="Platforms">
            <img src="assets/facebook.svg"></img>
            <img src="assets/twitter.svg"></img>
            <img src="assets/youtube.svg"></img>
            <img src="assets/instagram.svg"></img>
          </div>
        </div>
        <div className="FutureIdeas"></div>
        <Ideas
          data={["Our Destination", "Canada", "Alaksa", "France", "Iceland"]}
        ></Ideas>
        <Ideas
          data={[
            "Our Activities",
            "Nothern Lights",
            "Cruising & sailing",
            "Multi-activities",
            "Kayaing",
          ]}
        ></Ideas>
        <Ideas
          data={[
            "Travel Blogs",
            "Bali Travel Guide",
            "Sri Lanks Travel Guide",
            "Peru Travel Guide",
            "Bali Travel Guide",
          ]}
        ></Ideas>
        <Ideas data={["About Us", "Our Story", "Work with us"]}></Ideas>
        <Ideas data={["Contact Us", "Our Story", "Work with us"]}></Ideas>
      </div>
    </div>
  );
};

export default Footer;
