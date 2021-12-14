export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="wrapper-head-nav">
          <div className="head-nav">
            <button className="btn-in">Sign In</button>
            <button className="btn-up">Sign Up</button>
          </div>
        </div>

        <div className="head-content">
          <div className="brand-company">
            <img className="img-d" src="/logoD.png" />
            <img
              className="doordash-icon"
              src="/doordash.png"
              style={{ marginLeft: 18 }}
            />
          </div>
          <div className="title-company">
            <span>Restaurants and more, delivered to your door</span>
          </div>
          <div className="flex-input">
            <div className="wrapper-input">
              <div className="content-input">
                <div className="container-input">
                  <div className="maps-img">
                    <img src="/location.png" width="24px" height="24px" />
                  </div>
                  <div className="input">
                    <input placeholder="Enter delivery address"></input>
                  </div>
                  <div className="btn-input">
                    <button className="btn-arrow-right">
                      <img src="/right1.png" width="24" height="24" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-box-fiture">
        <div className="wrapper-fiture">
          <div className="content-fiture">
            <div className="dispaly-fiture">
              <div className="img-fiture">
                <img src="/content1.svg" height="120" width="120" />
              </div>
              <div className="desc-fiture">
                <div className="content-desc-fiture">
                  <h2>Become a Dasher</h2>
                  <h3>
                    As a delivery driver, youll make reliable money-working
                    anytime, anywhere.
                  </h3>
                </div>
                <button className="btn-right">
                  <span>Start earning</span>
                  <img src="/right.png" />
                </button>
              </div>
            </div>
            <div className="dispaly-fiture">
              <div className="img-fiture">
                <img src="/content2.svg" height="120" width="120" />
              </div>
              <div className="desc-fiture">
                <div className="content-desc-fiture">
                  <h2>
                    Become a <span />
                    Partner
                  </h2>
                  <h3>
                    Grow your business and reach new customers by partnering
                    with us.
                  </h3>
                </div>
                <button className="btn-right">
                  <span>Sign up your store</span>
                  <img src="/right.png" />
                </button>
              </div>
            </div>
            <div className="dispaly-fiture">
              <div className="img-fiture">
                <img src="/content3.svg" height="120" width="120" />
              </div>
              <div className="desc-fiture">
                <div className="content-desc-fiture">
                  <h2>Try the App</h2>
                  <h3>
                    Experience the best your neighborhood has to offer, all in
                    one app.
                  </h3>
                </div>
                <button className="btn-right">
                  <span>Get the app</span>
                  <img src="/right.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-menu">
        <div className="wrapper-menu">
          <div className="content-menu">
            <div className="desc-menu">
              <span>Its all here.</span>
              <span>All in one app.</span>
            </div>
            <div className="title-menu">
              <span>
                Discover local, on-demand delivery or Pickup from restaurants,
                nearby grocery and convenience stores, and more.
              </span>
            </div>
            <div>
              <a className="btn-app">
                <div>Get the app</div>
              </a>
            </div>
          </div>
          <div className="wrapper-img-menu">
            <img src="img-content1.jpg" />
          </div>
        </div>
      </div>

      <div className="wrapper-resto">
        <div className="content-resto">
          <div className="wrapper-img-resto">
            <img src="img-content2.jpg" />
          </div>
          <div className="desc-resto">
            <div className="hero-resto">
              <span>Every Flavor Welcome</span>
            </div>
            <div className="description-resto">
              <p>
                From your neighborhood sushi spot to the burger and fries you
                crave, choose from over 300,000 local and national favorites
                across the U.S., Canada and Australia.
              </p>
            </div>
            <div>
              <a className="btn-app">
                <div>Find restaurants</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-head">
        <div className="wrapper-footer">
          <footer>
            <div className="flex-footer">
              <div className="content-footer">
                <h2>Top Cities</h2>
                <div className="container-footer">
                  <div className="list-topCities">
                    <a href="">
                      <span>New York City</span>
                    </a>
                    <a href="">
                      <span>Los Angeles</span>
                    </a>
                    <a href="">
                      <span>Toronto</span>
                    </a>
                    <a href="">
                      <span>Chicago</span>
                    </a>
                    <a href="">
                      <span>Houston</span>
                    </a>
                    <a href="">
                      <span>Brooklyn</span>
                    </a>
                    <a href="">
                      <span>San Diego</span>
                    </a>
                    <a href="">
                      <span>Las Vegas</span>
                    </a>
                  </div>
                  <div className="list-topCities">
                    <a href="">
                      <span>San Francisco</span>
                    </a>
                    <a href="">
                      <span>Seattle</span>
                    </a>
                    <a href="">
                      <span>Atlanta</span>
                    </a>
                    <a href="">
                      <span>Queens</span>
                    </a>
                    <a href="">
                      <span>Vancouver, BC</span>
                    </a>
                    <a href="">
                      <span>Miami</span>
                    </a>
                    <a href="">
                      <span>San Antonio</span>
                    </a>
                    <a href="">
                      <span>Phoenix</span>
                    </a>
                  </div>
                  <div className="list-topCities">
                    <a href="">
                      <span>Denver</span>
                    </a>
                    <a href="">
                      <span>Austin</span>
                    </a>
                    <a href="">
                      <span>Washington, DC</span>
                    </a>
                    <a href="">
                      <span>Dallas</span>
                    </a>
                    <a href="">
                      <span>Melbourne</span>
                    </a>
                    <a href="">
                      <span>Sydney</span>
                    </a>
                    <a href="">
                      <span>Montreal</span>
                    </a>
                    <a href="">
                      <span>All Cities</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="list-topCuines">
                <h2>Top Cuines Near Your</h2>
                <div className="container-footer">
                  <div className="list-topCities">
                    <a href="">
                      <span>Pizza Near Me</span>
                    </a>
                    <a href="">
                      <span>Chinese Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Sushi Near Me</span>
                    </a>
                    <a href="">
                      <span>Cafe Near Me</span>
                    </a>
                    <a href="">
                      <span>Mexican Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Thai Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Lunch Near Me</span>
                    </a>
                    <a href="">
                      <span>Seafood Near Me</span>
                    </a>
                  </div>
                  <div className="list-topCities">
                    <a href="">
                      <span>Indian Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Dessert Near Me</span>
                    </a>
                    <a href="">
                      <span>Burgers Near Me</span>
                    </a>
                    <a href="">
                      <span>Asian Food Me</span>
                    </a>
                    <a href="">
                      <span>Italian Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Vegan Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Sandwiches Near Me</span>
                    </a>
                    <a href="">
                      <span>Restaurants Near Me</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-about-company">
              <div className="about-company">
                <div className="desc-about">
                  <h2>Get To Know Us</h2>
                  <a href="">
                    <span>About Us</span>
                  </a>
                  <a href="">
                    <span>Careers</span>
                  </a>
                  <a href="">
                    <span>Investors</span>
                  </a>
                  <a href="">
                    <span>Company Blog</span>
                  </a>
                  <a href="">
                    <span>Engineering Blog</span>
                  </a>
                  <a href="">
                    <span>Merchant Blog</span>
                  </a>
                  <a href="">
                    <span>Gift Cards</span>
                  </a>
                  <a href="">
                    <span>Dasher Centrals</span>
                  </a>
                  <a href="">
                    <span>DoorDash Stories</span>
                  </a>
                  <a href="">
                    <span>Linkedln</span>
                  </a>
                  <a href="">
                    <span>Glassdoor</span>
                  </a>
                  <a href="">
                    <span>Accessibilty</span>
                  </a>
                </div>
                <div className="desc-about">
                  <h2>Let Us Help You</h2>
                  <a href="">
                    <span>Account Details</span>
                  </a>
                  <a href="">
                    <span>Order History</span>
                  </a>
                  <a href="">
                    <span>Help</span>
                  </a>
                </div>
                <div className="desc-about">
                  <h2>Doing Business</h2>
                  <a href="">
                    <span>Become a Dasher</span>
                  </a>
                  <a href="">
                    <span>Be a Partner Restaurants</span>
                  </a>
                  <a href="">
                    <span>Get Dashers for Deliveries</span>
                  </a>
                  <a href="">
                    <span>Get DoorDash for Work</span>
                  </a>
                </div>
              </div>
              <div className="app-store">
                <div className="wrapper-app-store">
                  <img src="/appstore.png" width="170" height="auto" />
                  <img src="/gp1.png" width="170" height="auto" />
                </div>
              </div>
            </div>
            <div className="footer-buttom">
              <div className="title-footer">
                <div className="img-footer">
                  <img src="logoD.png" width="32" height="18" />
                </div>
                <a href="">
                  <span>Terms of Service</span>
                </a>
                <a href="">
                  <span>Privacy</span>
                </a>
                <a href="">
                  <span>Notice At Collection</span>
                </a>
                <a href="">
                  <span>Delivery Locations</span>
                </a>
                <a href="">
                  <span>© 2021 DoorDash</span>
                </a>
              </div>
              <div className="medsos">
                <img src="facebook.png" width="24" height="24" />
                <img src="twitter.png" width="24" height="24" />
                <img src="instagram.png" width="24" height="24" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
