import React from 'react';
import '../App.scss';

let tieuDe = "Find out how we can";
const body1 = [
  {
    url: "../img/undraw_exploring_1l7f 1.png",
    name: "Promoting your territory towards foreign tourists",
    noiDung: "EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy.",
    discover: "Discover the places linked to your area that you can link to your structure"
  },
  {
    url: "../img/undraw_exploring_1l7f 1.png",
    name: "Promoting your territory towards foreign tourists",
    noiDung: "EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy.",
    discover: "Discover the places linked to your area that you can link to your structure"
  },
  {
    url: "../img/undraw_exploring_1l7f 1.png",
    name: "Promoting your territory towards foreign tourists",
    noiDung: "EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy.",
    discover: "Discover the places linked to your area that you can link to your structure"
  }
]

const body2 = [
  {
    url: "../img/icon2.png",
    choose: "Choose the type of stop",
    sel: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping",
    show: "Show me more"
  },
  {
    url: "../img/icon2.png",
    choose: "Choose the type of stop",
    sel: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping",
    show: "Show me more"
  },
  {
    url: "../img/icon2.png",
    choose: "Choose the type of stop",
    sel: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping",
    show: "Show me more"
  },
  {
    url: "../img/icon2.png",
    choose: "Choose the type of stop",
    sel: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping",
    show: "Show me more"
  }
]

const body3 = [
  {
    url: "",
    title: "Lucciano",
    describe: "Roma",
    view: "View the Site"
  },
  {
    url: "",
    title: "Lucciano",
    describe: "Roma",
    view: "View the Site"
  },
  {
    url: "",
    title: "Lucciano",
    describe: "Roma",
    view: "View the Site"
  }
]

const body4 = [
  {
    url: "../img/XMLID.png",
    title: "Convenience and Transparency",
    description: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
  },
  {
    url: "../img/XMLID.png",
    title: "Convenience and Transparency",
    description: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
  },
  {
    url: "../img/XMLID.png",
    title: "Convenience and Transparency",
    description: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
  }
]

const Discover = [
  "Where to shop",
  "Tour Guided",
  "Our Tours",
  "About Us"
]

const Become = [
  "Join your Pairing",
  "Offer your Service",
  "Are you a guide?"
]

const Assistance = [
  "Support Center",
  "FAQs",
  "Cancallation Options",
  "Reliablity and Sequrity"
]

const footer = [
  "About",
  "Site Map",
  "Terms",
  "Privacy Policy",
  "Teams"
]

function Home() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="log">
          <select name="cars" id="cars">
          {/* <img src="../img/XMLID_119.png" alt="" className="iconLog"/> */}
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
          <div className="popup">
            <div className="title">
               {tieuDe}<span className ="highlight">save your time</span> in Backpacking in Europe
            </div>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.</p>
            </div>
            <div className="explore">
              <div className="icon_explore"></div>
              <a className="btn_explore" href="!#" >
                Explore
              </a>
            </div>
          </div>
      </header>

      <body>
          <div className="body1">

            { body1.map((item) =>{
              return <div className="body1_1">
                <img src={item.url} alt="" className="hinh1"/>
                <div className="body1_content1">
                  <h1>{item.name}</h1>
                  <p>{item.noiDung}</p>
                  <b>{item.discover}</b>
                </div>
              </div>
            })}

          </div>

          <div className="body2">
            <h1>Making your facility known is our priority</h1>

            <div className="body2_content">

              {body2.map((body2_1)=> {
                return <div className="body2_content1">
                  <img src={body2_1.url} alt="" className="icon1"/>
                  <b className="b_choose">{body2_1.choose}</b>
                  <p>{body2_1.sel}</p>
                  <b className="b_show">{body2_1.show}</b>
                </div>
              })}

            </div>

          </div>
          <div className="body3">
            <div className="body3_1">
              <h1>Join the community campervan sites managers.</h1>
              <p>Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.</p>
              <div className="start">
                <div className="icon_start"></div>
                <a className="btn_start" href="!#" >
                  Start
                </a>
              </div>
            </div>

            <div className="body3_2">
               
                {body3.map((body3_2)=> {
                  return <div className="body3_content">
                    <img src={body3_2.url} alt="" className="sp1"/>
                    <p className="title">{body3_2.title}</p>
                    <p className="describe">{body3_2.describe}</p>
                    <p className="view">{body3_2.view}</p>
                  </div>

                })}

            </div>
          </div>
          <div className="body4">
            <h1>Our Advantages</h1>
            <div className="body4_content">

              {body4.map((body4_1)=> {
                return  <div className="body4_content1">
                  <img src={body4_1.url} alt="" className="iconXMLID"/>
                  <b className="b_choose">{body4_1.title}</b>
                  <p className="body4_describe">{body4_1.description}</p>
                </div>
              })}

            </div>
          </div>
      </body>

      <footer>
          <div className="footer1">
            <div className="footer1_left">
              <p className="easy">Easy Camper</p>
              <h1 className="when">When Passion Meets Comfort.</h1>
            </div>

            <div className="footer1_right">
              <div className="content_right">
                <b>Discover the Network</b>
                <div className="content">
                 {Discover.map((dis)=>{
                   return <p>{dis}</p>
                 })}
                </div>
              </div>

              <div className="content_right">
                <b>Become a Manager</b>
                <div className="content">
                  {Become.map((bec)=>{
                    return <p>{bec}</p>
                  })}
                </div>
              </div>

              <div className="content_right">
                <b>Assistance</b>
                <div className="content">
                  {Assistance.map((ass)=>{
                    return <p>{ass}</p>
                  })}
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="footer2">
            <div className="footer2_left">
              <p>EazyCamper. All rights reserved. </p>
            </div>

            <div className="footer2_right">
              {footer.map((foo)=> {
                return <p>{foo}</p>
              })}
            </div>
          </div>
      </footer>
    </div>
  );
}

export default Home;
