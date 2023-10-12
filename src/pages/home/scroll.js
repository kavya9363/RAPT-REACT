import './button.css';
import {Animator, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn, ZoomOut} from 'react-scroll-motion';
import './scroll.css';
import HoverRating from './btn';
import CustomizedRating from './overall-btn';
import Contact from './contact';
import { Link } from 'react-router-dom';
import Events from '../events/events';


const ZoomInScrollOut=batch(StickyIn(15,50),FadeIn(),ZoomIn());


const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
function Scroll(){
    return(
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(FadeIn(),Sticky(),Fade(),MoveOut(0,-100))}> 
                    <div className='sec-1'>
                        <h1 style={{fontSize:40}} >Welcome to</h1><h1 className='lh'> Rapt!</h1>
                        <br/>
                        <p>An online community for students, providing a platform for learning, sharing experiences and leveraging their knowledge to create a social impact solutions along with spreading awareness in an inclusive way.</p>
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={1}>
                <div className='sec-2-al'>
                <Animator animation={batch(MoveIn(1000,0),)}> 
                    <h1 style={{fontSize:60}}>Events</h1>
                </Animator>
                </div>
                <div className='sec-2'>
                <Animator animation={batch(MoveIn(-1000,0),)}> 
                <Link to='/UpEvents'><button className='btn'>Upcoming Events</button></Link>
                <br/>
                <Link to='/Events'><button className='btn'>Ongoing Events</button></Link>
                </Animator>
                </div>
                    <Animator animation={batch(MoveIn(500,0),Sticky(),Fade(),MoveOut(0,-10))}>
                    <div className='containerr'>
        <Link to='/Events'><div className='carddd'>
          <img src='https://www.eventbrite.com/blog/wp-content/uploads/2022/04/GP-socialdistancing-04_Blog-Header-2.png' />
          <div className='intro'>
            <h2>Ongoing Events</h2>
            <p>These are the current events...⭐✌️</p>
          </div>
        </div>
        </Link>
        <Link to='/UpEvents'>
        <div className='carddd'>
          <img src='https://thumbs.dreamstime.com/b/word-writing-text-upcoming-events-business-concept-approaching-planned-public-social-occasions-young-woman-speaking-163969171.jpg' />
          <div className='intro'>
            <h2>Upcoming Events</h2>
            <p>Know the future events and participate in those 🤩💪🏽</p>
          </div>
        </div>
        </Link>
        </div>
        </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
        <Animator animation={ZoomInScrollOut}> 
            <h1 style={{fontSize:60}}>Gallery</h1>
        </Animator>
        <Animator animation={batch(Sticky(),Fade(),Move())}> 
            <div className='body'>
            <div className='card1'>
                <img src='https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg' className='card-img' />
                <div className='card-body'>
                    <h2 className='card-title'>Gallery</h2>
                    <p className='card-subtitle'>all your posts</p>
                    <p className='card-info'>The place where you can view what's going on around you, get to know the acheivements and stories</p>
                    <button className='card-btn'><Link to='/Gallery'>view posts</Link></button>
                </div>
            </div>
            </div>
        </Animator>
        <Animator animation={batch(Sticky(80,60),Fade(),Move())}> 
            <div className='body'>
            <div className='card1'>
                <img src='https://visme.co/blog/wp-content/uploads/2020/03/Header-1200.png' className='card-img' />
                <div className='card-body'>
                    <h2 className='card-title'>Create Posts</h2>
                    <p className='card-subtitle'>create your post</p>
                    <p className='card-info'>Share your stories,acheivements and talents here and inspire others.</p>
                    <button className='card-btn'><Link to='/Upload'>create a post</Link></button>
                </div>
            </div>
            </div>
        </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
            <div className='sec-3'>
            <Animator animation={batch(FadeIn(),Sticky(30,50),ZoomOut())}>
                <div className='sec-3-1'>
                    <h1>About Us</h1>
                    <br/>
                    <br/>
                    <p>You are curious?</p>
                    <br/>
                    <p> Learn more about us and how the Student Community functions!</p>
                </div>
            </Animator>
            <Animator animation={batch(FadeIn(),Sticky(70,50),ZoomOut(1))}>
                <div className='sec-3-2'>
                    <button><Link to='/AboutUs'>About Us</Link></button>
                    <button>>Contact Us</button>
                </div>
            </Animator>
            </div>
        </ScrollPage>

        <ScrollPage page={4}>
                <Animator animation={batch(FadeIn(),Sticky(20,20))}>
                    <h1>Rate our WebApp</h1>
                </Animator>
                <Animator animation={batch(MoveIn(-1000,0),Sticky(25,55))}>
                    <h4>Design</h4>
                    <HoverRating/>
                    <h4>Linking</h4>
                    <HoverRating/>
                    <h4>Features</h4>
                    <HoverRating/>
                    <h4>Overall Rating</h4>
                    <CustomizedRating/>
                </Animator>
                <Animator animation={MoveIn(1000,0), Sticky(70,20)}>
                    <h1>Contact Us</h1>
                </Animator>
                <Animator animation={MoveIn(1000,0), Sticky(70,55)}>
                    <Contact/>
                </Animator>
            </ScrollPage>

        </ScrollContainer>
    )}


export default Scroll;
