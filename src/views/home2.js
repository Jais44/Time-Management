import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home2.css'

const Home2 = (props) => {
  return (
    <div className="home2-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <div className="home2-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer home2-navbar-interactive"
        >
          <span className="logo">STUDYTOOL</span>
          <div data-thq="thq-navbar-nav" className="home2-desktop-menu">
            <nav className="home2-links">
              <span className="bodySmall">Home</span>
              <span className="home2-nav22 bodySmall">Features</span>
              <span className="home2-nav32 bodySmall">How It Works</span>
              <span className="home2-nav42 bodySmall">Testimonials</span>
              <span className="home2-nav52 bodySmall">Contact</span>
            </nav>
            <div className="home2-buttons">
              <button className="home2-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home2-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home2-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="home2-mobile-menu1 mobileMenu"
          >
            <div className="home2-nav">
              <div className="home2-top">
                <span className="logo">STUDYTOOL</span>
                <div data-thq="thq-close-menu" className="home2-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home2-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home2-links1">
                <span className="home2-nav121 bodySmall">Home</span>
                <span className="home2-nav221 bodySmall">Features</span>
                <span className="home2-nav321 bodySmall">How It Works</span>
                <span className="home2-nav421 bodySmall">Testimonials</span>
                <span className="home2-nav521 bodySmall">Contact</span>
              </nav>
              <div className="home2-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home2-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home2-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home2-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home2-hero">
        <div className="heroContainer home2-hero1">
          <div className="home2-container01">
            <h1 className="home2-hero-heading heading1">Master Your Time</h1>
            <span className="home2-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Efficient time management tool for students</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home2-btn-group">
              <button className="buttonFilled">Get Started</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-features">
        <div className="featuresContainer">
          <div className="home2-features1">
            <div className="home2-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home2-features-heading heading2">
                Key Features of Our Time Management Tool
              </h2>
              <span className="home2-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Empower yourself with these essential features to enhance
                      your productivity and time management skills
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home2-container03">
              <FeatureCard
                heading="Task Prioritization"
                subHeading="Easily prioritize tasks based on deadlines and importance"
              ></FeatureCard>
              <FeatureCard
                heading="Time Tracking"
                subHeading="Track time spent on different activities to improve efficiency"
              ></FeatureCard>
              <FeatureCard
                heading="Goal Setting"
                subHeading="Set achievable goals and monitor progress towards them"
              ></FeatureCard>
              <FeatureCard
                heading="Reminder Alerts"
                subHeading="Receive timely reminders for upcoming deadlines and tasks"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-pricing">
        <div className="pricingContainer">
          <div className="home2-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose Your Ideal Plan</h2>
            <span className="home2-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock the power of effective time management with our
                  flexible pricing options
                </span>
              </span>
            </span>
          </div>
          <div className="home2-container05">
            <div className="freePricingCard home2-pricing-card">
              <div className="home2-container06">
                <span className="home2-text36 heading3">Free</span>
                <span className="bodySmall">
                  Get started with essential time management tools for free
                </span>
              </div>
              <div className="home2-container07">
                <span className="home2-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home2-free-plan-price">0</span>
              </div>
              <div className="home2-container08">
                <div className="home2-container09">
                  <span className="home2-text40">✔</span>
                  <span className="bodySmall">Task organization</span>
                </div>
                <div className="home2-container10">
                  <span className="home2-text41">✔</span>
                  <span className="bodySmall">Deadline reminders</span>
                </div>
                <div className="home2-container11">
                  <span className="home2-text42">✔</span>
                  <span className="bodySmall">Basic calendar integration</span>
                </div>
                <div className="home2-container12">
                  <span className="home2-text43">✔</span>
                  <span className="bodySmall">
                    Limited access to advanced features
                  </span>
                </div>
              </div>
              <button className="home2-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home2-pricing-card1">
              <div className="home2-container13">
                <span className="home2-text44 heading3">BASIC</span>
                <span className="bodySmall">
                  Upgrade to unlock more features for better time management
                </span>
              </div>
              <div className="home2-container14">
                <span className="home2-text45">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home2-basic-plan-pricing">5</span>
                <span className="home2-text48">/ month</span>
              </div>
              <div className="home2-container15">
                <div className="home2-container16">
                  <span className="home2-text49">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home2-container17">
                  <span className="home2-text51">✔</span>
                  <span className="bodySmall">Unlimited task organization</span>
                </div>
                <div className="home2-container18">
                  <span className="home2-text52">✔</span>
                  <span className="bodySmall">
                    Customizable deadline reminders
                  </span>
                </div>
                <div className="home2-container19">
                  <span className="home2-text53">✔</span>
                  <span className="bodySmall">
                    Enhanced calendar integration
                  </span>
                </div>
                <div className="home2-container20">
                  <span className="home2-text54">✔</span>
                  <span className="bodySmall">
                    Access to productivity analytics
                  </span>
                </div>
              </div>
              <button className="home2-button1 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home2-pricing-card2">
              <div className="home2-container21">
                <span className="home2-text55 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Experience the ultimate time management toolkit for peak
                  performance
                </span>
              </div>
              <div className="home2-container22">
                <span className="home2-text58">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home2-pro-plan-pricing">10</span>
                <span className="home2-text61">/ month</span>
              </div>
              <div className="home2-container23">
                <div className="home2-container24">
                  <span className="home2-text62">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home2-container25">
                  <span className="home2-text64">✔</span>
                  <span className="bodySmall">Priority task management</span>
                </div>
                <div className="home2-container26">
                  <span className="home2-text65">✔</span>
                  <span className="bodySmall">Advanced deadline alerts</span>
                </div>
                <div className="home2-container27">
                  <span className="home2-text66">✔</span>
                  <span className="bodySmall">
                    Full calendar synchronization
                  </span>
                </div>
                <div className="home2-container28">
                  <span className="home2-text67">✔</span>
                  <span className="bodySmall">
                    Detailed productivity reports
                  </span>
                </div>
              </div>
              <button className="home2-button2 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-banner">
        <div className="bannerContainer home2-banner1">
          <h1 className="home2-banner-heading heading2">
            Take Control of Your Schedule
          </h1>
          <span className="home2-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  Our time management tool is designed to help students organize
                  their tasks, prioritize assignments, and improve productivity.
                  With intuitive features and customizable options, staying on
                  top of your academic responsibilities has never been easier.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="home2-faq">
        <div className="faqContainer">
          <div className="home2-faq1">
            <div className="home2-container29">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home2-text85 heading2">Common questions</h2>
              <span className="home2-text86 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home2-container30">
              <Question1
                answer="Our time management tool helps students organize their tasks, set priorities, and track progress to ensure efficient use of time."
                question="How can this time management tool help students?"
              ></Question1>
              <Question1
                answer="Yes, our time management tool is designed to cater to the needs of high school, college, and university students."
                question="Is this tool suitable for all types of students?"
              ></Question1>
              <Question1
                answer="Yes, our time management tool is accessible on various devices including laptops, tablets, and smartphones for convenience."
                question="Can I access this tool on different devices?"
              ></Question1>
              <Question1
                answer="Yes, we provide a comprehensive tutorial to guide students on how to effectively utilize our time management tool."
                question="Is there a tutorial available for using this tool?"
              ></Question1>
              <Question1
                answer="Yes, our time management tool allows students to sync their tasks with popular calendar applications for better organization."
                question="Can I sync my tasks with calendar applications using this tool?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home2-footer">
        <footer className="footerContainer home2-footer1">
          <div className="home2-container31">
            <span className="logo">STUDYTOOL</span>
            <nav className="home2-nav1">
              <span className="bodySmall">Home</span>
              <span className="home2-nav222 bodySmall">Features</span>
              <span className="home2-nav322 bodySmall">How It Works</span>
              <span className="home2-nav422 bodySmall">Testimonials</span>
              <span className="home2-nav522 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="home2-separator"></div>
          <div className="home2-container32">
            <span className="bodySmall home2-text89">
              © 2023 myCompany, All Rights Reserved.
            </span>
            <div className="home2-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home2-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home2-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home2-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home2
