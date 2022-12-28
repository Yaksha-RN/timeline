import pic1 from './Images/black.jpeg';
import bubbles from './Images/bubble.png';
import barrenLand from './Images/barrenLand.jpg';
import leaves from './Images/leaves.jpeg';
import road from './Images/road.jpeg';
import beach from './Images/beach.jpeg';
import grassland from './Images/grassland.jpeg';
import { Parallax } from 'react-parallax';
import ProfileCard from './ProfileCard.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bubbles} className="App-logo" alt="logo" />
        Activities
      </header>
      <div className="profileCard">
        <ProfileCard></ProfileCard>
      </div>
      <main className='Container'>
        <Parallax className="Parallax" strength={-600} bgImage={barrenLand}>
          <div className="Card">
            <div className='date-card'><h2>2019</h2><h3>19 MAY</h3></div>
            <img src={pic1} alt="activity-name"/>
            <div className='description'>
              <h3> Paragliding </h3>
              <p>Laboris cupidatat duis Lorem ullamco officia sint in quis non tempor ad eu. Velit esse cillum qui cillum id ex officia nisi ea aliqua non proident pariatur incididunt. Nostrud commodo labore consectetur reprehenderit irure est culpa sit. Deserunt enim quis dolore labore consectetur adipisicing aute sint sint do anim do exercitation. Adipisicing ex tempor fugiat magna nulla aliquip ea. Pariatur quis fugiat sit eu irure in commodo.</p>
            </div>
          </div>
        </Parallax>
          <Parallax className="Parallax" strength={400} bgImage={leaves}>
        <section className="Card" 
          data-aos="fade-left" 
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true">
          <img src={pic1} alt="activity-name"/>
          <div className='description'>
            <h3> Paragliding </h3>
            <p>Laboris cupidatat duis Lorem ullamco officia sint in quis non tempor ad eu. Velit esse cillum qui cillum id ex officia nisi ea aliqua non proident pariatur incididunt. Nostrud commodo labore consectetur reprehenderit irure est culpa sit. Deserunt enim quis dolore labore consectetur adipisicing aute sint sint do anim do exercitation. Adipisicing ex tempor fugiat magna nulla aliquip ea. Pariatur quis fugiat sit eu irure in commodo.</p>
          </div>
          <div className='date-card'><h2>2019</h2><h3>19 MAY</h3></div>
        </section>
        </Parallax>
          <Parallax className="Parallax" strength={-400} bgImage={road}>
        <section className="Card" 
          data-aos="flip-left" 
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true">
            <div className='date-card'><h2>2019</h2><h3>19 MAY</h3></div>
          <img src={pic1} alt="activity-name"/>
          <div className='description'>
            <h3> Paragliding </h3>
            <p>hi Laboris cupidatat duis Lorem ullamco officia sint in quis non tempor ad eu. Velit esse cillum qui cillum id ex officia nisi ea aliqua non proident pariatur incididunt. Nostrud commodo labore consectetur reprehenderit irure est culpa sit. Deserunt enim quis dolore labore consectetur adipisicing aute sint sint do anim do exercitation. Adipisicing ex tempor fugiat magna nulla aliquip ea. Pariatur quis fugiat sit eu irure in commodo.</p>
          </div>
        </section>
        </Parallax>
        <Parallax className="Parallax" blur={{min :-5, max: 10}} strength={600} bgImage={grassland}>
        <section className="Card" 
          data-aos="fade-right" 
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true">
          <img src={pic1} alt="activity-name"/>
          <div className='description'>
            <h3> Paragliding </h3>
            <p>Laboris cupidatat duis Lorem ullamco officia sint in quis non tempor ad eu. Velit esse cillum qui cillum id ex officia nisi ea aliqua non proident pariatur incididunt. Nostrud commodo labore consectetur reprehenderit irure est culpa sit. Deserunt enim quis dolore labore consectetur adipisicing aute sint sint do anim do exercitation. Adipisicing ex tempor fugiat magna nulla aliquip ea. Pariatur quis fugiat sit eu irure in commodo.</p>
          </div>
          <div className='date-card'><h2>2019</h2><h3>19 MAY</h3></div>
        </section>
        </Parallax>
        <Parallax className="Parallax" strength={-600} bgImage={beach}>
          <section className="Card" 
            data-aos="fade-up" 
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true">
              <div className='date-card'><h2>2019</h2><h3>19 MAY</h3></div>
            <img src={pic1} alt="activity-name"/>
            <div className='description'>
              <h3> Paragliding </h3>
              <p>Laboris cupidatat duis Lorem ullamco officia sint in quis non tempor ad eu. Velit esse cillum qui cillum id ex officia nisi ea aliqua non proident pariatur incididunt. Nostrud commodo labore consectetur reprehenderit irure est culpa sit. Deserunt enim quis dolore labore consectetur adipisicing aute sint sint do anim do exercitation. Adipisicing ex tempor fugiat magna nulla aliquip ea. Pariatur quis fugiat sit eu irure in commodo.</p>
            </div>
          </section>
        </Parallax>
      </main>
      <div className='bubbles'>
          <img src={bubbles} />
          <img src={bubbles} />
          <img src={bubbles} />
          <img src={bubbles} />
          <img src={bubbles} />
          <img src={bubbles} />
          <img src={bubbles} />
        </div>
    </div>
  );
}

export default App;
