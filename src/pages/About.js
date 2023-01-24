import React from 'react'
import { useGlobalContext } from '../context'
import Headshot from '../images/Headshot.jpg'

const About = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className='section about' onMouseOver={closeSubmenu}>
      <div className='section-title'>
        <h2>About Me</h2>
      </div>
      <div className='me-info'>
        <div className='img-container'>
          <img src={Headshot} alt='headshot' />
        </div>
        <div className='about-info'>
          <p>
            I'm a self-taught JS/React developer with a background in sales,
            marketing, and account management. This blend of hard and soft
            skills drives my focus on the user experience. It also facilitates
            effective interaction with a variety of teams, from stakeholders and
            managers to other developers and UI/UX designers. My artistic eye
            and technical know-how combine to create delightful pixel-perfect
            interfaces backed by clean, scalable, and reusable code.
          </p>
          <p>
            As a child I loved to color, craft, play dress up - really any
            activity where I was creating something fun and beautiful. Web
            development merges this artistic skill set with my natural
            inclination towards science, mathematics and spatial visualization
            in an extremely satisfying way. And because the tech industry is
            constantly evolving, there are always new challenges to tackle and
            things to learn. I stay current through continued coursework and
            professional development, and love to share my knowledge by
            mentoring others.
          </p>
          <p>
            When I set my mind on something, I accomplish it. My tried and true
            method involves creating a plan, breaking it down into actionable
            tasks with set deadlines, and working consistently to the end goal.
            Whether it's growing a start up to the point of being acquired by
            our biggest competitor, or making a career pivot by learning an
            entirely new industry, I'm not afraid of a challenge.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
