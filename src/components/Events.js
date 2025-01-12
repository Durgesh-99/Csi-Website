import React, {useState, useEffect} from "react";
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.JPG";
import i4 from "../images/i4.jpg";
import l1 from "../images/l1.png";
import l2 from "../images/l2.png";
import l3 from "../images/l3.png";
import l4 from "../images/l4.png";
import './Events.css';

function Events() {
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTitle(!showTitle)
    }, 2000);
    return () => clearTimeout(timeout);
  }, [])

  const eventData = [
    {
      id: 1,
      logo: l1,
      img: i1,
      title: "Innovision",
      description: `Innovision idea presentation competition at our
                    college is a dynamic platform where students
                    showcase their innovative ideas and projects. From
                    cutting-edge technology to sustainable solutions,
                    participants present their creations to a panel of
                    judges, competing for recognition and rewards. It's a
                    vibrant event igniting creativity and fostering a
                    culture of innovation among budding engineers and
                    entrepreneurs
                    `
    },
    {
      id: 2,
      logo: l2,
      img: i2,
      title: "Tech Trek",
      description: `TechTrek was an engaging session designed for second-year
                    students, where our seniors shared their knowledge and
                    experiences to guide the juniors in exploring various career
                    options. It wasn’t just about advice—it was a lively,
                    interactive experience with fun quizzes and open discussions
                    that allowed students to connect, learn, and think about their
                    future paths. This event bridged the gap between seniors and
                    juniors, offering a platform for meaningful conversations
                    while making the journey of career exploration both
                    informative and enjoyable`
    },
    {
      id: 3,
      logo: l3,
      img: i3,
      title: "Aspire",
      description: `Aspire, an exhilarating flagship event by the Professional
                    Student Chapter of the Computer Society of India,
                    celebrates the ingenuity and technical brilliance of BE
                    students. It serves as a dynamic platform for showcasing
                    groundbreaking projects that push the boundaries of
                    innovation and creativity. With an emphasis on real
                    world solutions and advanced technologies. The event
                    not only highlights exceptional talent but also inspires
                    future leaders in technology, fostering a spirit of
                    excellence, collaboration, and limitless possibilities.`
    },
    {
      id: 4,
      logo: l4,
      img: i4,
      title: "Mini-Project",
      description: `The Mini-Project Competition,
      showcased the innovative prowess of all students. Encouraged 
      participants to develop and present projects that address real-world challenges 
      using advanced technologies. It serves as a platform for students to demonstrate 
      their technical skills, creativity, and problem-solving abilities. The event not 
      only recognizes exceptional talent but also fosters a spirit of collaboration and 
      continuous learning. By participating in the Mini-Project Competition, students gain 
      valuable experience and inspiration, preparing them to become future leaders in the field of technology.`
    }
  ];

  const handleClick = () => { window.location.href = "https://rzp.io/l/31bBIMJ"; };

  return (
    <div className='.Events'>
        <button class="button-64" role="button" onClick={handleClick}><span className="text">Support Us!</span></button>
        <h1 className="main">EVENTS</h1>
            <div className="events-grid">
              {eventData.map((event) => (
                <div key={event.id} className="event-item">
                    <img className="outer-img" src={event.logo} alt={event.title} />
                    <div className="event-info">
                        <img className="inner-img" src={event.img} alt={event.title} />
                        <div className="info-event">
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                        </div>
                    </div>
                  </div>
              ))}
            </div>
    </div>
  );
}

export default Events;