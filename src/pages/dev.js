import React from 'react'
import Link from 'gatsby-link'
import KJResume from "../docs/KJ-Resume-2019.pdf";
import FaGithub from 'react-icons/lib/fa/github';

const DevPage = () => (
	<div className="inside dev">
		<div className="flex-container-dev">
			<div className="flex-intro-dev text-dev">
				<p>
					I enjoy creating excellent modern websites and applications while keeping up with the latest JavaScript frameworks and web technologies. I currently work as a Front-End Developer at <a href="http://parthenonsoftware.com">Parthenon Software Group</a>, a software company with over 10 years of expertise providing custom software solutions.
        </p>
				<p>

				</p>
				<p>I've worked on a variety of greenfield and brownfield development projects for clients including <a href="https://starterpack.intel.com/offer/" target="_blank">Intel</a>, <a href="https://blueprintlsat.com" target="_blank">Blueprint LSAT</a>, <a href="https://www.infocus.com/" target="_blank">InFocus</a>, <a href="https://www.authentic8.com/" target="_blank">Authentic8</a>, <a href="https://www.integritylogistics.com/" target="_blank">Integrity Logistics</a>, <a href="https://buynowcc.com/" target="_blank">BuyNow</a> & <a href="https://www.pooltables.com/" target="_blank">Pooltables.com</a>.</p>
				<p>Feel free to take a gander at my <a href={KJResume} target="_blank">Resume</a>.</p>
				{/* <hr></hr>
        <p className="projects">Below are some older personal projects to improve my skills.<br /> Codebases accessible via my <a href="http://github.com/kameronjohnson" target="_blank">Github</a>.</p>
       */}
			</div>

			{/* <div className="flex-dev">
        <h3><a href="https://github.com/KameronJohnson/React-YouTube-Search" target="_blank">Youtube Search</a></h3>
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
      <div className="flex-dev">
        <h3><a href="https://github.com/KameronJohnson/My-Weather-Forecast" target="_blank">My Weather Forecast</a></h3>
        <p>A weather forecasting app built with React + Redux.
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
      <div className="flex-dev">
        <h3><a href="https://github.com/KameronJohnson/Movie-Discover-React" target="_blank">Movie Discover</a></h3>
        <p>A React App for discovering new movie releases using TMDb's API, CSS Grid and Overdrive for animations.
          <span>
            <a href="https://github.com/KameronJohnson/Movie-Discover-React" target="_blank">
              <FaGithub />
            </a>
          </span>
        </p>
        <a href="https://movie-discover.netlify.com/" target="_blank">
          <img src={require("../images/movie-discover.png")}/>
        </a>
      </div>
      <div className="flex-dev">
        <h3><a href="https://github.com/KameronJohnson/Github-Search-React" target="_blank">Github Search</a></h3>
        <p>Via the Github API, this React App displays a queried user's avatar, repositories and gists.
          <span>
            <a href="https://github.com/KameronJohnson/Github-Search-React" target="_blank">
              <FaGithub />
            </a>
          </span>
        </p>
        <a href="https://github-search.netlify.com/" target="_blank">
          <img src={require("../images/github-search.png")}/>
        </a>
      </div>
      <div className="flex-dev">
        <h3><a href="https://github.com/KameronJohnson/Dog-Fetch" target="_blank">Dog Fetch</a></h3>
        <p>Practice using the Fetch API & vanilla JavaScript to show images of user-selected dog breeds using the Dog Api. 
          <span>
            <a href="https://github.com/KameronJohnson/Dog-Fetch" target="_blank">
              <FaGithub />
            </a>
          </span>
        </p>
        <a href="https://dog-fetch.netlify.com/" target="_blank">
          <img src={require("../images/dog-fetch.png")}/>
        </a>
      </div>              */}
		</div>
	</div>
)

export default DevPage