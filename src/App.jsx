import aziz from "./App.module.css"

import {data1} from "./db/data.js"
import {data2} from "./db/data.js"
import {data3} from "./db/data.js"
import {data4} from "./db/data.js"

import fotochi from "./images/fotochi.jpg"
import need from "./images/need.jpg"

function App() {

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

        <div className={aziz.yonmayon}>

      <nav className={aziz.nav}>

        <div className={aziz.navContainer}>

          <button className={aziz.btn}>Game</button>

          <ul className={aziz.ul}>

            <li><a href="#">LiveScore</a></li>
            <li><a href="#">Statistics</a></li>
            <li><a href="#">Analitics</a></li>
            <li><a href="#">Forecasts</a></li>

          </ul>

        </div>

        <div className={aziz.headerDisplay}>

          <header className={aziz.header}>

            <h1 className={aziz.headerText}>The Forbidden Kingdom Adventure War</h1>

      <button className={aziz.headerBtn}>More Details</button>
            
     </header>
          
      </div>
        
      <h1 className={aziz.gameH1}>Most popular Game</h1>

        <div className={aziz.footerboss}>
          <div className={aziz.footer}>

            <div className={aziz.footertexts}>

              <h1>Sniper 2</h1>

              <div className={aziz.iconText}>
                <i class="fa-solid fa-star"></i>
                <p>8.6 / 10 Action-rpg,</p>
              </div>

            </div>


          </div>

          <div className={aziz.footer2}>

            <div className={aziz.footertexts}>

              <h1>Motor Race</h1>

              <div className={aziz.iconText}>
                <i class="fa-solid fa-star"></i>
                <p>8.6 / 10 Action-rpg,</p>
              </div>

            </div>


          </div>

          <div className={aziz.footer3}>

            <div className={aziz.footertexts}>

              <h1>Witcher Hunt</h1>

              <div className={aziz.iconText}>
                <i class="fa-solid fa-star"></i>
                <p>8.6 / 10 Action-rpg,</p>
              </div>

            </div>


          </div>

          <div className={aziz.footer4}>

            <div className={aziz.footertexts}>

              <h1>Pabg war</h1>

              <div className={aziz.iconText}>
                <i class="fa-solid fa-star"></i>
                <p>8.6 / 10 Action-rpg,</p>
              </div>

            </div>


          </div>

          <div className={aziz.footer5}>

            <div className={aziz.footertexts}>

              <h1>Sniper 2</h1>

              <div className={aziz.iconText}>
                <i class="fa-solid fa-star"></i>
                <p>8.6 / 10 Action-rpg,</p>
              </div>

            </div>


          </div>

        </div>

        <h1 className={aziz.sectionH1}>New Released Games</h1>

        <div className={aziz.disp}>

        {
          data1.map(article => 
            <div className={aziz.box}>
              <img src={article.image} alt="" />

              <div>
                <h3>{article.title}</h3>
                <p className={aziz.boxP}>{article.desc}</p>

                <div className={aziz.displey}>
                <p className={aziz.authorr}>{article.author}</p>

                <div className={aziz.icons}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                </div>
              </div>

            </div>
            )
        }

{
          data2.map(article => 
            <div className={aziz.box2}>
              <img src={article.image} alt="" />

              <div>
                <h3>{article.title}</h3>
                <p className={aziz.boxP}>{article.desc}</p>

                <div className={aziz.displey}>
                <p className={aziz.authorr}>{article.author}</p>

                <div className={aziz.icons2}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                </div>
              </div>

            </div>
            )
        }

</div>

<div className={aziz.disp}>
{
          data3.map(article => 
            <div className={aziz.box2}>
              <img src={article.image} alt="" />

              <div>
                <h3>{article.title}</h3>
                <p className={aziz.boxP}>{article.desc}</p>

                <div className={aziz.displey}>
                <p className={aziz.authorr}>{article.author}</p>

                <div className={aziz.icons2}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                </div>
              </div>

            </div>
            )
        }
</div>
     </nav>

     <nav className={aziz.nav2}>

      <div className={aziz.nav2container}>

      <div className={aziz.nav2disp}>
      <img src={fotochi} alt="" />
      <p>William jonson</p>
      </div>

      <i class="fa-regular fa-bell"></i>
 
      </div>

      <p className={aziz.live}>Live Game</p>

      <div className={aziz.newbox}>

      </div>
      

      {
          data4.map(article => 
            <div className={aziz.box3}>
              <img src={article.image} alt="" />

              <div>
                <h3>{article.title}</h3>
                <p className={aziz.boxP}>{article.desc}</p>
                <div className={aziz.displey}>

                </div>
              </div>

            </div>
            )
        }

        <div className={aziz.needphoto}>

        <img src={need} alt="" />
        <p>Need for Speed</p>
        <h3>Racing</h3>
        <h4>4.5</h4>
        <h5>Interactively synergize revolutionary viasustaina communities. Energistically foster distinctiveide resource maximizing.</h5>
        <button>Download Now</button>

        </div>

     </nav>

        </div>

    

    
     </>
  )
}

export default App
