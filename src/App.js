import React from 'react';


function App() {
  return (
    <div className="App">
      { /* navbar*/ }
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            { /* Logo*/}
            <img src={ require("./img/logo.png")} alt="logo" style={{width: 50, height: 50, marginRight: 5, alignSelf: 'flex-start'}} />
            <a className="navbar-brand" href="#"><h3 style={{color: 'black'}}>Chattel</h3></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link link-scroll active" href="#hero">Home <span className="sr-only">(current)</span></a></li>
                <li className="nav-item"><a className="nav-link link-scroll" href="#services">Products</a></li>
                <li className="nav-item"><a className="nav-link link-scroll" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link link-scroll" href="#testimonials">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      { /*  Hero Section*/}
      <section className="hero bg-top" id="hero" style={{backgroundImage: 'img/banner-4.png', backgroundSize: '100% 80%'}}>
        <div className="container">

              <h2 className="font-weight-bold">BUSINESS INSIGHTS</h2>
              <p className="h4 text-uppercase text-primary">Driven By Artificial Intelligence</p>
              <br />
              <p className="my-4 text-muted">90% of all data in the world was created in last 2 years. It is humanly impossible to collect all relevant data real time without exceptions.

                However, considering relevant information from all available information in order to make prudent investment decisions has proven to be profitable.</p>

                

                <div className="row">
                  <div className="col-sm ">
                    <img src={ require("./img/analytics2.jpg")} alt="Analytics" className="img-responsive" style={{margin: 5}} />
                  </div>
                  <div className="col-sm img-responsive">
                    <img src={ require("./img/analytics3.jpg")} alt="Curation" className="img-responsive" style={{margin: 5}} />
                  </div>
                  <div className="col-sm img-responsive">
                    <img src={ require("./img/analytics4.jpg")} alt="Visualization" className="img-responsive" style={{margin: 5}} />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mb-2 mb-lg-0">
                    <a className="btn btn-primary btn-lg px-4" href="#services">Get Started</a></li>
                  </ul>

        </div>

      </section>
        
      <section className="with-pattern-1" id="services">
        <div className="container">
          <p className="h5 text-uppercase text-primary">Our Products</p>
          <br />
          
          <div className="row align-items-center mb-5" id = "ai">
            <div className="col-lg-6" id="one"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Chattel Intelligent Services</h2>
              <p className="font-italic text-muted mb-4">We constantly tries to bring most advanced technologies for our clients and help them trade seamlessly. We provide end to end AI services, developing from scratch to integrating as an product i.e. app or web</p>
              <p id="demo2" className="font-italic text-muted mb-4 collapse">
                Plug and use API for instant implementation, customized APIs as per requirement. 
                Models trained on best dataset available. Natural Language Processing on news, tweets, texts. Trading bot with strategies which suits your requirements.
              </p>
              <a className="btn btn-light px-5 rounded-pill shadow-sm" data-toggle="collapse" data-target="#demo2">Learn More</a>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0" id="two"><img className="img-fluid w-100 px-lg-5 img-responsive" src="img/img-1.png" alt="Chattel AI" /></div>
          </div>

          <div className="row align-items-center mb-5" id = "news">
            <div className="ex3 col-lg-6 mb-5 mb-lg-0" id="four">
              {/*<iframe width="400" height="315" src={ require("https://tech.economictimes.indiatimes.com/widget/corporate")} frameborder="0"></iframe>*/}
            </div> 
              &nbsp; 
              &nbsp;
              &nbsp;
            { /* <div className="col-lg-6 mb-5 mb-lg-0" id="four"><img className="img-fluid w-100 px-lg-5 img-responsive" src="img/img-1.jpg" alt="Chattel News" /></div>*/}
            <div className="col-lg-6" id="three"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Chattel News</h2>
              <p className="font-italic text-muted mb-4">We collect information from an ever-expanding sea of sources, de-dupe, curate, and prepare a detailed and succinct executive summary
                of the news and its subsequent reactions and reactions produced by various digital media tailored to you and your company. </p>
                <p id="demo1" className="font-italic text-muted mb-4 collapse">
                  Natural Language Processing on text enables entity tagging, categorization, summarization, text to speech, intelligent chatbot. 
                </p>
                <a className="btn btn-light px-5 rounded-pill shadow-sm" data-toggle="collapse" data-target="#demo1">Learn More</a>
            </div>
          </div>

          <div className="row align-items-center mb-5" id = "stock">
            <div className="col-lg-6" id="five"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Chattel Stock</h2>
              <p className="font-italic text-muted mb-4">We continuously process the historical performance and the volatility of the stocks and
                the indices of your interest in order to determine the actions of investors.
                Our level of data mining and processing enables
                non-linear patterns to be found by predictive analysis. </p>
                <p id="demo" className="font-italic text-muted mb-4 collapse">
                  Time series analysis, reinforcement learning for winning stratagies, future price prediction.
                </p>
                { /* <a className="btn btn-light px-5 rounded-pill shadow-sm" data-toggle="collapse" data-target="#demo">Learn More</a>*/}

            </div>
              { /*               TradingView Widget BEGIN 
                      <div className="col-lg-6 mb-5 mb-lg-0 img-fluid w-100 px-lg-5 img-responsive" id="six">
                        <div className="tradingview-widget-container__widget"></div>
                        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
                            {
                            "interval": "1W",
                            "width": 400,
                            "isTransparent": false,
                            "height": 400,
                            "symbol": "NSE:RELIANCE",
                            "showIntervalTabs": true,
                            "locale": "in",
                            "colorTheme": "light"
                            }
                      
                        </script>
                      </div>
              TradingView Widget END        */ } 
          </div>
          &nbsp; 
          &nbsp;
          <div className="row align-items-center mb-5" id = "bot">
            <div className="col-lg-6 mb-5 mb-lg-0" id="seven"><img className="img-fluid w-100 px-lg-5 img-responsive" src= {require("./img/img-4.png")} alt="Chattel bot" style={{ width:300 , height:300 }} /></div>
              <div className="col-lg-6" id="five"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h2 className="font-weight-light">Chattel Bot</h2>
                <p className="font-italic text-muted mb-4">We are continuously trying to overcome inefficiencies of human in rapid fluctuating market. Our bot will ensure 
                maximum profit with minimum risk using different strategies ranging from moving average, candle pattern, advanced technical indicators like squeezed momentum indicators. 
                Our technical team can build your customized bot for trading of Equity, Forex, or Cryptocurrency. </p>
                <p id="demo" className="font-italic text-muted mb-4 collapse">
                  Time series analysis, automation, trading bot.
                </p>
                <a className="btn btn-light px-5 rounded-pill shadow-sm" data-toggle="collapse" data-target="#demo">Learn More</a>

              </div>

          </div>

        </div>
        
      </section>

      <section className="bg-center py-0" id="about" style={{backgroundImage: "img/service-bg.svg"}}>
        <section className="about py-0">
          <div className="container">
            <p className="h5 text-uppercase text-primary">About Us</p>
            <br />
            <div className="row pb-5">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                { /*  Services Item*/}
                <div className="card border-0 shadow rounded-lg py-4 text-left">
                  <div className="card-body p-5">
                      {
                        /* <svg className="svg-icon svg-icon-light" style="width:60px;height:60px;color:#ff904e">
                        <use xlink:href="#document-saved-1"> </use>
                        </svg> */
                      }
                  
                  </div>
                    <h3 className="font-weight-normal h4 my-4">Curation </h3>
                    <p className="text-small mb-0">We are a "event prone" knowledge gathering and curating approach, discovering
                      a method of madness and developing perspectives that you can trust.
                      We collect and curate relevant data
                      from a wide range of sources.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              { /*  Services Item*/}
              <div className="card border-0 shadow rounded-lg py-4 text-left">
                <div className="card-body p-5">
                  {
                    /*
                      <svg className="svg-icon svg-icon-light" style="width:60px;height:60px;color:#39f8d2">
                        <use xlink:href="#map-marker-1"> </use>
                      </svg>
                    */
                  }
                  <h3 className="font-weight-normal h4 my-4">Analytics </h3>
                  <p className="text-small mb-0">We take complete, and efficient advantage of using Supervised and Unsupervised Machine Learning algorithms
                    to continually learn from historical data, identify patterns and trends, and apply real-time intelligence.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              { /*  Services Item*/}
              <div className="card border-0 shadow rounded-lg py-4 text-left">
                <div className="card-body p-5">
                  {
                    /*
                      <svg className="svg-icon svg-icon-light" style="width:60px;height:60px;color:#8190ff">
                        <use xlink:href="#arrow-target-1"> </use>
                      </svg>
                    */
                  }
                  <h3 className="font-weight-normal h4 my-4">Insights</h3>
                  <p className="text-small mb-0">We produce investor perception reports that affect markets predictably; make it worthwhile to
                    interpret economic and market perceptions to make smarter and more informed investment decisions. </p>
                </div>
              </div>
            </div>
            </div>
          
        </section>
      </section>


      <section className="contact" id="testimonials">
        <div className="container">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box">
                <p className="h5 text-uppercase text-primary">Get in Touch</p>
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                {/*<iframe src={ require("http://maps.google.com/maps?q=12.9779083,77.6396974&z=15&output=embed")} width="400" height="300" frameborder="0" style={{border:0,marginRight: 10}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>*/}
                <br />
                <br />
                <p className="h5 text-uppercase text-primary" >Chattel Technologies</p>
                <p className="text-small mb-0">39, NGEF Ln, Binnamangala, 1st Stage, <br />
                  Indiranagar, Bengaluru, Karnataka-560038, India</p>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <div className="row" >    
              <div className="col-md-7 col-md-push-1">
                <div className="row" style={{margin: 10}}>
                  <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box">
                    <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/d3dileep@gmail.com" method="post">
                      <fieldset id="fs-frm-inputs">
                      <div className="form-group">
                        <input type="text" name="name" id="full-name" className="form-control" placeholder="Name" required="" />
                      </div>
                      <div className="form-group">
                        <input type="email" name="_replyto" id="email-address" className="form-control" placeholder="Email" required="" />
                      </div>
                      <div className="form-group">
                        <input type="text" name="sub" className="form-control" placeholder="Subject" />
                      </div>
                      <div className="form-group">
                        <textarea name="message" id="message" required=""  cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                      </div>
                      <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
                      </fieldset>
                      <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-send-message" name="submit" value="Send Message" />
                      </div>
                    </form>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <footer className="with-pattern-1 position-relative" >
        <div className="container section-padding-y">
          <div className="row">
            <div className="col-lg-3 mb-4 mb-lg-0"> <h4>Chattel</h4> <br />
              <p className="text-muted">With the passing decade, world market will be virtual and bots will do the business. Are you eqipped with latest technological tool?</p>
            </div>
            <div className="col-lg-2 mb-4 mb-lg-0">
              <h2 className="h5 mb-4">Quick Links</h2>
              <div className="d-flex">
                <ul className="list-unstyled d-inline-block mr-4 mb-0">
                  <li className="mb-2"><a className="footer-link" href="#hero">Home </a></li>
                  <li className="mb-2"><a className="footer-link" href="#about">About us</a></li>
                  <li className="mb-2"><a className="footer-link" href="#testimonials">Contact us</a></li>
                  <li className="mb-2"><a className="footer-link" href="#services">Products</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 mb-4 mb-lg-0">
              <h2 className="h5 mb-4">Services</h2>
              <div className="d-flex">
                <ul className="list-unstyled mr-4 mb-0">
                  <li className="mb-2"><a className="footer-link" href="#ai">Chattel AI</a></li>
                  <li className="mb-2"><a className="footer-link" href="#stock">Stock</a></li>
                  <li className="mb-2"><a className="footer-link" href="#news">News</a></li>
                <li className="mb-2"><a className="footer-link" href="#bot">Trading Bot</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <h2 className="h5 mb-4">Contact Info</h2>
              <ul className="list-unstyled mr-4 mb-3">
                <li className="mb-2 text-muted">Bangalore </li>
                <li className="mb-2"><a className="footer-link" href="#">(+91)9980-576898</a></li>
                <li className="mb-2"><a className="footer-link" href="#">help@chattel.in</a></li>
              </ul>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a className="social-link" href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li className="list-inline-item"><a className="social-link" href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="list-inline-item"><a className="social-link" href="#"><i className="fab fa-google-plus"></i></a></li>
                <li className="list-inline-item"><a className="social-link" href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default App;
