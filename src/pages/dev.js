import React from 'react'
import Link from 'gatsby-link'
import FaGithub from 'react-icons/lib/fa/github';

const DevPage = () => (
  <div className="inside dev">
    <div className="grid-container-dev">
      <div className="grid-intro-dev text-dev">
        <p>I enjoy working on new projects and keeping up with the latest JavaScript frameworks and web technologies. 
          Check out these examples from my <a href="http://github.com/kameronjohnson" target="_blank">Github</a> I've put together to keep my skills sharp.
        </p>
      </div>
      <div className="grid-left-dev">
        <h3>React Youtube Search</h3>
        <p>A blazing fast Youtube video search app built with React. 
          <span>
            <a href="https://github.com/KameronJohnson/React-YouTube-Search" target="_blank">
              <FaGithub />
            </a>
          </span>
        </p>
        <a href="https://react-youtube-search-kj.netlify.com/" target="_blank">
          <img src={require("../images/react-youtube-search.png")}/>
        </a>
      </div>
      <div className="grid-right-dev">
        <h3>My Weather Forecast</h3>
        <p>A weather forecast app built with React + Redux.
          <span>
            <a href="https://github.com/KameronJohnson/My-Weather-Forecast" target="_blank">
              <FaGithub />
            </a>
          </span>
        </p>
        <a href="https://my-weather-forecast.netlify.com/" target="_blank">
          <img src={require("../images/my-weather-forecast.png")}/>
        </a> 
      </div>
    </div>
  </div>
)

export default DevPage