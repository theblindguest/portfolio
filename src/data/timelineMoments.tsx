import React from 'react'
import Dotdotdot from 'react-dotdotdot'

import {
  coding,
  freelance,
  ui,
  architecture,
  education,
  childhood
} from '../assets/theme-light/index'

const moments = [
  {
    startDate: '2018',
    endDate: 'Today',
    heading: 'Vodafone',
    subHeading: 'Software Developer',
    text: (clamp: number) => (
      <>
        <Dotdotdot clamp={clamp}>
          <p>
            After years designing for the web I'd picked up the basics of HTML
            and CSS, and the more I learned the more I enjoyed toying around and
            building things. Coding had seemed like such an enigma to me until
            then, and slowly developing the ability to be able to turn my own
            designs into living breathing pages and apps felt very empowering.
          </p>
        </Dotdotdot>
        <p>
          Since joining Vodafone I have built on this foundation, working across
          multiple projects including the shop journeys, building the UK's
          internal component library from the ground up, and migrating the
          marketing CMS from WCS to Contentful.
        </p>
        <p>I'm now competent with the following technologies:</p>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Nodejs</li>
          <li>Sass</li>
          <li>Styled Components</li>
        </ul>
        <p>As part of my day to day work I...</p>
        <ul>
          <li>Enable new features and content to be created in the CMS</li>
          <li>Create new and update existing components</li>
          <li>Write and maintain unit and integration tests</li>
          <li>Release and test new code to the production environment</li>
          <li>Help write and refine stories</li>
          <li>Mentor a junior developer</li>
        </ul>
      </>
    ),
    image: coding
  },
  {
    startDate: '2016',
    endDate: '2018',
    heading: 'Freelance',
    subHeading: 'UX/UI Designer',
    text: (clamp: number) => (
      <>
        <Dotdotdot clamp={clamp}>
          <p>
            After years of designing for the web I'd picked up the basics of
            HTML and CSS, and the more I learned the more I enjoyed toying
            around and building things.
          </p>
        </Dotdotdot>
        <p>
          Since joining Vodafone I have built on this foundation, working across
          multiple projects including the shop journeys, building the UK's
          internal component library from the ground up, and migrating the
          marketing CMS from WCS to Contentful.
        </p>
        <p>I'm now competent with the following technologies:</p>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>Nodejs</li>
          <li>Sass</li>
          <li>Styled Components</li>
        </ul>
        <p>As part of my day to day work I...</p>
        <ul>
          <li>Enable new features and content to be created in the CMS</li>
          <li>Create new and update existing components</li>
          <li>Write and maintain unit and integration tests</li>
          <li>Release and test new code to the production environment</li>
          <li>Help write and refine stories</li>
          <li>Mentor a junior developer</li>
        </ul>
      </>
    ),
    image: freelance
  },
  {
    startDate: '2015',
    endDate: '2016',
    heading: 'Reed Recruitment',
    subHeading: 'UI designer',
    text: (clamp: number) => (
      <>
        <Dotdotdot clamp={clamp}>
          <p>
            At Reed I was part of a small team of UX designers whose task it was
            to create layouts and journeys for internal tooling interfaces used
            by recruiters.
          </p>
        </Dotdotdot>
        <p>
          I was also responsible for creating assets for use in marketing
          campaigns, working closely with the marketing team and adhering to
          strict brand guidelines.
        </p>
      </>
    ),
    image: ui
  },
  {
    startDate: '2012',
    endDate: '2015',
    heading: 'Freelance',
    subHeading: '3D Designer',
    text: (clamp: number) => (
      <>
        <Dotdotdot clamp={clamp}>
          <p>
            After leaving Buchanans I had one foot still in the architectural
            world and one foot in the digital world, as I used the software I
            had learned through my degree and my year in practice to work
            freelance as a 3D designer. I worked with individuals and small
            businesses to turn drawings, sketches, and ideas into 3D models
            which could be used to generate images for marketing material,
            concept art, and help with planning permissions.
          </p>
        </Dotdotdot>
      </>
    ),
    image: freelance
  },
  {
    startDate: '2011',
    endDate: '2012',
    heading: 'Buchanans',
    subHeading: 'Assistant Architect',
    text: (clamp: number) => (
      <>
        <Dotdotdot clamp={clamp}>
          <p>
            As part for becoming a qualified architect it's a requirement to do
            a year in practice between finishing your BA and starting the
            masters. Even though I was fairly sure I didn't want to go the
            distance I felt it would be good experience to work in a different
            practice, and joined a small architecture firm called Buchanans.
          </p>
        </Dotdotdot>
        <p>
          They specialised in hotel projects - both new build and refurbs, and
          as an Assistant Architect (assistant to the architect*), I spend a lot
          of time measuring up hotel rooms in existing sites and turning them
          into CAD drawings, calculating furniture inventory, and drawing
          architectural details.
        </p>
      </>
    ),
    image: architecture
  },
  {
    startDate: '2009',
    endDate: '2011',
    heading: 'Education',
    subHeading: 'BA Architecture',
    tldr: `
      <ul>
        <li></li>
        <li></li>
        <li>2:1</li>
      </ul>
    `,
    text: (clamp: number) => (
      <>
        <Dotdotdot clamp={clamp}>
          <p>
            Prior to going to university I had been working as a junior model
            maker at London based architecture practice RMJM. I loved the hands
            on work, and the important place that the models we made had in the
            creative process of the architects. When most people think of
            architectural models they picture the polished presentation pieces,
            but "sketch models" can also be used to explore ideas and visualise
            space, proportion, light etc. in real time. It was great to work
            alongside the architects to see how they used the models to inform
            design decisions.
          </p>
        </Dotdotdot>
        <p>
          I met lots of people at RMJM who had recently completed their part one
          (architecture bachelors degree), and was encouraged to join the
          architecture BA at the University of Westminster.
        </p>
        <p>
          The course combined creative and technical disciplines, and even
          though I was convinced I didn't want to become an architect by the end
          of the first year, it was well known that the BA provided a solid
          foundation for alumni to branch out into all kinds of industries. It
          also taught me skills using CAD packages as well as Adobe Creative
          Suite, which turned out to be invaluable when I later moved into
          digital design.
        </p>
      </>
    ),
    image: education
  }
  // {
  //   startDate: '1986',
  //   endDate: '2009',
  //   heading: 'Growing up',
  //   subHeading: '',
  //   text: `
  //     <p>
  //       After years of designing for the web I'd picked up the basics of HTML
  //       and CSS, and the more I learned the more I enjoyed toying around and
  //       building things. Since joining Vodafone I have built upon that knowledge
  //     </p>
  //   `,
  //   image: childhood
  // }
]

export default moments
