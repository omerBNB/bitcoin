import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

export class HomePage extends Component {
  render() {
    return (
      <section className="main-homepage-container">
        <div className="hompage-opening-card">
          <NavLink to="/signup" className="homepage-opening-navlink">
            <div className="hompage-opening-inner-card">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                  fill="#1652F0"></path>
                <path
                  d="M17.274 10.5149C17.5095 8.94294 16.3118 8.09769 14.6753 7.53369L15.2063 5.40369L13.9103 5.08119L13.3928 7.15494C13.0523 7.06944 12.7028 6.98994 12.354 6.91044L12.8753 4.82319L11.5793 4.49994L11.0483 6.62919C10.7663 6.56469 10.4888 6.50169 10.2203 6.43419L10.2218 6.42744L8.43375 5.98119L8.08875 7.36569C8.08875 7.36569 9.051 7.58619 9.03075 7.59969C9.55575 7.73094 9.65025 8.07819 9.6345 8.35419L9.03 10.7804C9.066 10.7894 9.1125 10.8029 9.165 10.8232L9.02775 10.7894L8.18025 14.1884C8.11575 14.3474 7.953 14.5867 7.5855 14.4959C7.599 14.5147 6.6435 14.2612 6.6435 14.2612L6 15.7447L7.6875 16.1654C8.001 16.2442 8.3085 16.3267 8.61075 16.4039L8.0745 18.5579L9.36975 18.8804L9.90075 16.7504C10.2548 16.8457 10.5983 16.9342 10.9343 17.0182L10.4047 19.1392L11.7008 19.4617L12.237 17.3122C14.448 17.7307 16.11 17.5619 16.8098 15.5624C17.3738 13.9529 16.782 13.0237 15.6188 12.4184C16.4663 12.2234 17.1038 11.6662 17.274 10.5149ZM14.3115 14.6684C13.9118 16.2787 11.2005 15.4079 10.3215 15.1897L11.034 12.3359C11.913 12.5557 14.7308 12.9899 14.3115 14.6684ZM14.7128 10.4917C14.3475 11.9564 12.0915 11.2117 11.3603 11.0294L12.0053 8.44194C12.7365 8.62419 15.0938 8.96394 14.7128 10.4917Z"
                  fill="white"></path>
              </svg>
              Jump start your portfolio
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.10013e-07 6.99994L12.17 6.99994L8.89 10.2799L10.3 11.6899L16 5.99994L10.3 0.309942L8.89 1.71994L12.17 4.99994L5.84858e-07 4.99994L4.10013e-07 6.99994Z"
                  fill="#1652F0"></path>
              </svg>
            </div>
          </NavLink>
          <h1 className="hompage-h1">Jump start your crypto portfolio</h1>
          <h3 className="hompage-h3">
            Bitcoin is the easiest place to buy and sell cryptocurrency. Sign up and get started
            today.
          </h3>
          <NavLink to="/signup">
            <button className="homepage-btn">Get Started</button>
          </NavLink>
        </div>
        <div className="hompage-img-card">
          {/* {' '} */}
          <img
            alt="Hero Image of the Coinbase app"
            src="https://images.ctfassets.net/c5bd0wqjc7v0/1DrLQBxqDE4XmGXcmaGy7u/8acbd0322803e3190154169b028e9d20/freeMoney-1.5.webp"
            loading="eager"
          />
        </div>
        <div className="hompage-second-card">
          <img
            src="https://images.ctfassets.net/c5bd0wqjc7v0/2nmdMe3zBL8fgv3Ltvk6JD/068793dfeb8744955ed8794b97e0f9c5/image_26.png?fl=progressive&amp;q=100&amp;w=1180"
            alt="Wallet with a circle around with bitcoin and other symbols"
            aria-label="Wallet with a circle around with bitcoin and other symbols"
            loading="lazy"
            className="hompage-second-card-img"></img>
          <div className="hompage-second-card-content">
            <h1 className="hompage-second-card-h1">
              Explore web3 profiles, and create one for free
            </h1>
            <p className="hompage-second-card-p">
              Create and customize your web3 profile, check out other profiles, and explore popular
              NFT collections and tokens.
            </p>
            <NavLink to="/signup">
              <button className="homepage-sec-btn">Learn More</button>
            </NavLink>
          </div>
        </div>
        <div className="hompage-third-card">
          <h2 className="hompage-third-card-h3">Create your cryptocurrency portfolio today</h2>
          <p className="hompage-third-card-p">
            Bitcoin has a variety of features that make it the best place to start trading
          </p>
          <div className="hompage-inner-third-card-container">
            <div className="hompage-inner-third-card">
              <div>
                <div className="flex">
                  <div>
                    <svg
                      width="30px"
                      height="32px"
                      viewBox="0 0 30 32"
                      xmlns="http://www.w3.org/2000/svg">
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Second-Group"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd">
                        <g id="V2---All-new" transform="translate(-683.000000, -1591.000000)">
                          <g id="Group-20" transform="translate(0.000000, 1068.000000)">
                            <g id="Group-48" transform="translate(662.000000, 229.000000)">
                              <g id="Group-10" transform="translate(0.000000, 270.000000)">
                                <g id="Group-38" transform="translate(0.000000, 4.000000)">
                                  <g id="Group" transform="translate(21.000000, 20.000000)">
                                    <polygon
                                      id="Fill-1"
                                      fill="#D4EEFF"
                                      points="10 32 20 32 20 10 10 10"></polygon>
                                    <polygon
                                      id="Fill-2"
                                      fill="#1752F0"
                                      points="20 32 30.0005 32 30.0005 0 20 0"></polygon>
                                    <polygon
                                      id="Fill-3"
                                      fill="#55B4FC"
                                      points="0 32 10 32 10 19 0 19"></polygon>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h2>Manage your portfolio</h2>
                    <p>
                      Buy and sell popular digital currencies, keep track of them in the one place.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      width="30px"
                      height="32px"
                      viewBox="0 0 30 32"
                      xmlns="http://www.w3.org/2000/svg">
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Second-Group"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd">
                        <g id="V2---All-new" transform="translate(-683.000000, -1591.000000)">
                          <g id="Group-20" transform="translate(0.000000, 1068.000000)">
                            <g id="Group-48" transform="translate(662.000000, 229.000000)">
                              <g id="Group-10" transform="translate(0.000000, 270.000000)">
                                <g id="Group-38" transform="translate(0.000000, 4.000000)">
                                  <g id="Group" transform="translate(21.000000, 20.000000)">
                                    <polygon
                                      id="Fill-1"
                                      fill="#D4EEFF"
                                      points="10 32 20 32 20 10 10 10"></polygon>
                                    <polygon
                                      id="Fill-2"
                                      fill="#1752F0"
                                      points="20 32 30.0005 32 30.0005 0 20 0"></polygon>
                                    <polygon
                                      id="Fill-3"
                                      fill="#55B4FC"
                                      points="0 32 10 32 10 19 0 19"></polygon>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h2>Manage your portfolio</h2>
                    <p>
                      Buy and sell popular digital currencies, keep track of them in the one place.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      width="30px"
                      height="32px"
                      viewBox="0 0 30 32"
                      xmlns="http://www.w3.org/2000/svg">
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Second-Group"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd">
                        <g id="V2---All-new" transform="translate(-683.000000, -1591.000000)">
                          <g id="Group-20" transform="translate(0.000000, 1068.000000)">
                            <g id="Group-48" transform="translate(662.000000, 229.000000)">
                              <g id="Group-10" transform="translate(0.000000, 270.000000)">
                                <g id="Group-38" transform="translate(0.000000, 4.000000)">
                                  <g id="Group" transform="translate(21.000000, 20.000000)">
                                    <polygon
                                      id="Fill-1"
                                      fill="#D4EEFF"
                                      points="10 32 20 32 20 10 10 10"></polygon>
                                    <polygon
                                      id="Fill-2"
                                      fill="#1752F0"
                                      points="20 32 30.0005 32 30.0005 0 20 0"></polygon>
                                    <polygon
                                      id="Fill-3"
                                      fill="#55B4FC"
                                      points="0 32 10 32 10 19 0 19"></polygon>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h2>Manage your portfolio</h2>
                    <p>
                      Buy and sell popular digital currencies, keep track of them in the one place.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      width="30px"
                      height="32px"
                      viewBox="0 0 30 32"
                      xmlns="http://www.w3.org/2000/svg">
                      <desc>Created with Sketch.</desc>
                      <defs></defs>
                      <g
                        id="Second-Group"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd">
                        <g id="V2---All-new" transform="translate(-683.000000, -1591.000000)">
                          <g id="Group-20" transform="translate(0.000000, 1068.000000)">
                            <g id="Group-48" transform="translate(662.000000, 229.000000)">
                              <g id="Group-10" transform="translate(0.000000, 270.000000)">
                                <g id="Group-38" transform="translate(0.000000, 4.000000)">
                                  <g id="Group" transform="translate(21.000000, 20.000000)">
                                    <polygon
                                      id="Fill-1"
                                      fill="#D4EEFF"
                                      points="10 32 20 32 20 10 10 10"></polygon>
                                    <polygon
                                      id="Fill-2"
                                      fill="#1752F0"
                                      points="20 32 30.0005 32 30.0005 0 20 0"></polygon>
                                    <polygon
                                      id="Fill-3"
                                      fill="#55B4FC"
                                      points="0 32 10 32 10 19 0 19"></polygon>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <h2>Manage your portfolio</h2>
                    <p>
                      Buy and sell popular digital currencies, keep track of them in the one place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="hompage-inner-third-card-img"
                src="https://assets.coinbase.com/assets/2a688cc86b2508f2.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
