import React from 'react'

import {
  coding,
  freelance,
  ui,
  architecture,
  education
} from '../assets/theme-light/index'

import images from '../assets/moment-images'
const {
  buchanan01,
  buchanan02,
  buchanan03,
  shelter01,
  shelter02,
  shelterDesktop,
  reed01,
  reed02,
  reed03,
  reedMobile,
  reedDesktop,
  renders01,
  renders02,
  renders03,
  renders04,
  renders05,
  renders06,
  ui01,
  ui02,
  ui03,
  ui04,
  ui05,
  uni01,
  uni02,
  uni03,
  uni04,
  uni05,
  uni06,
  vodafone01,
  vodafone02,
  vodafone03,
  vodafoneDesktop,
  web501,
  web502,
  web5Desktop
} = images

const moments = [
  {
    startDate: '2024',
    endDate: 'Present',
    heading: 'Shelter',
    subHeading: 'Software Developer',
    text: (clamp: number) => (
      <>
        <div style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: clamp, WebkitBoxOrient: 'vertical' }}>
          <p>
            After 6 years cutting my teeth and honing my Front End skills at
            Vodafone it felt like time to broaden my horizons and get some
            experience working on a different project. I knew I wanted to work
            on something more meaningful, and when I saw that Shelter was hiring
            I jumped at the chance.
          </p>
        </div>
        <p>
          Shelter's tech stack is similar to the projects I've worked on at
          Vodafone, with the exception of using Gatsby/graphql for static site
          generation. That familiarity meant I was able to hit the ground
          running and contribute to the codebase quickly. At the same time, the
          shift in team size and organisational structure has offered valuable
          new learning opportunities, allowing me to adapt to different ways of
          working and further broaden my skill set.
        </p>
        <p>Some of the things I've worked on so far include...</p>
        <ul>
          <li>Upgrading forms</li>
          <li>
            Using nx caching in the pipelines where we build and publish our
            contentful apps to reduce the build time from ~20 mins to 1 min
          </li>
        </ul>
      </>
    ),
    image: {
      desktop: shelterDesktop,
      mobile: shelter01
    },
    images: []
  },
  {
    startDate: 'Jan 2024',
    endDate: '',
    heading: 'TBD Web5 Hackathon',
    subHeading: 'Prize Winner',
    text: (clamp: number) => (
      <>
        <div style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: clamp, WebkitBoxOrient: 'vertical' }}>
          <p>
            In 2024 I entered my first hackathon with a pet project I'd been
            working on to record images and notes taken while travelling, called
            Tracks. I ended up winning the category for Best Personal Data
            Inspired App with approx. £2000 prize money and some swag from the
            Jack Dorsey-backed organisers of the competion,{' '}
            <a href="https://tbd.website/">TBD</a>.
          </p>
        </div>
        <p>
          Tracks is a travel documenting app that allows users to pin places
          they've been to on a world map and record their memories via notes and
          photos. The idea came to me after the realisation that over my
          lifetime, particularly in my formative
          (pre-everything-being-saved-to-the-cloud) years, I've lost countless
          photos and memories of my travels. This is less of an issue now that
          our photos get backed-up without us lifting a finger, however I still
          believed there was a much richer digital experience for viewing and
          sharing our travel history just waiting to be built. So I built one.
        </p>
        <p>
          I'd worked on Tracks on and off for a few years - initially using it
          as a playground for becoming a better developer. In it's first
          iteration it used Google Firebase for user authentication and storage.
          However, ever since Google decided to abandon their "Don't be evil"
          motto, the thought of people storing their most treasured and personal
          moments on the platform didn't sit well with me.
        </p>
        <p>
          Fortunately around the same time I was aware that TBD, a startup that
          was building the foundations of a{' '}
          <a href="https://identity.foundation/">decentralised web</a>, was
          running a hackathon for developers creating decentralised apps. The
          TLDR of decentralised apps is that the user has full control over
          their data, and if they decide to leave one service for another,
          migrating their data is a simple process. So I spent some time
          learning about the APIs TBD were building, replaced Firebase with
          their authorisation (DID) and storage (DWN) implementations and
          entered the competition.
        </p>
        <p>
          Winning the Best Personal Data Inspired App was a huge validating
          moment for me as a developer. It showed that I could take an idea and
          turn it into a fully functioning app with a nascent piece of tech at
          its core. One of the things that drove me to become a developer was
          that I was capable of conceiving of and designing digital experiences,
          but I wasn't able to build them without relying on others. Being able
          to incorporate both things by myself is an empowering feeling, and to
          have that ability recognised in a competition with a healthy prize
          pool and strong competition was great.
        </p>
      </>
    ),
    image: {
      desktop: web5Desktop,
      mobile: web502
    },
    images: [],
    isShiny: true
  },
  {
    startDate: '2018',
    endDate: '2024',
    heading: 'Vodafone',
    subHeading: 'Software Developer',
    text: (clamp: number) => (
      <>
        <div style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: clamp, WebkitBoxOrient: 'vertical' }}>
          <p>
            After years designing for the web I'd picked up the basics of HTML
            and CSS, and the more I learned the more I enjoyed toying around and
            building things. Coding had seemed like such an enigma to me until
            then, and slowly developing the ability to be able to turn my own
            designs into living breathing pages and apps felt very empowering.
          </p>
        </div>
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
    image: {
      desktop: vodafoneDesktop,
      mobile: vodafone02
    },
    images: []
  },
  {
    startDate: '2016',
    endDate: '2018',
    heading: 'Freelance',
    subHeading: 'UX/UI Designer',
    text: (clamp: number) => (
      <>
        <div style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: clamp, WebkitBoxOrient: 'vertical' }}>
          <p>
            I spent a couple of years working freelance as a digital designer as
            it gave me the opportunity to experience a wide range of projects,
            including a contract I had for a startup called VenueScanner -
            redesigning their homepage as well as product details pages and
            customer messaging centre.
          </p>
        </div>
        <p></p>
      </>
    ),
    image: {
      desktop: freelance,
      mobile: freelance
    },
    images: [
      { src: ui01, caption: '' },
      { src: ui02, caption: '' },
      { src: ui03, caption: '' },
      { src: ui04, caption: '' },
      { src: ui05, caption: '' }
    ]
  },
  {
    startDate: '2015',
    endDate: '2016',
    heading: 'Reed Recruitment',
    subHeading: 'UI designer',
    text: (clamp: number) => (
      <>
        <div style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: clamp, WebkitBoxOrient: 'vertical' }}>
          <p>
            At Reed I was part of a small team of UX designers whose task it was
            to create layouts and journeys for internal tooling interfaces used
            by recruiters.
          </p>
        </div>
        <p>
          I was also responsible for creating assets for use in marketing
          campaigns, working closely with the marketing team and adhering to
          strict brand guidelines.
        </p>
      </>
    ),
    image: {
      desktop: reedDesktop,
      mobile: reedMobile
    },
    images: [
      { src: reed01, caption: '' },
      { src: reed02, caption: '' },
      { src: reed03, caption: '' }
    ]
  },
  {
    startDate: '2012',
    endDate: '2015',
    heading: 'Freelance',
    subHeading: '3D Designer',
    text: (clamp: number) => (
      <>
        <div style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: clamp, WebkitBoxOrient: 'vertical' }}>
          <p>
            After leaving Buchanans I had one foot still in the architectural
            world and one foot in the digital world. I used the software I had
            learned throughout my degree and my year in practice to work
            freelance as a 3D designer. I worked with individuals and small
            businesses to turn drawings, sketches, and ideas into 3D models
            which could be used to generate images for marketing material,
            concept art, and help with planning permissions.
          </p>
        </div>
      </>
    ),
    image: {
      desktop: freelance,
      mobile: freelance
    },
    images: [
      { src: renders01, caption: '' },
      { src: renders02, caption: '' },
      { src: renders03, caption: '' },
      { src: renders04, caption: '' },
      { src: renders05, caption: '' },
      { src: renders06, caption: '' }
    ]
  },
  {
    startDate: '2011',
    endDate: '2012',
    heading: 'Buchanans',
    subHeading: 'Assistant Architect',
    text: (clamp: number) => (
      <>
        <div style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: clamp, WebkitBoxOrient: 'vertical' }}>
          <p>
            As part for becoming a qualified architect it's a requirement to do
            a year in practice between finishing your BA and starting the
            masters. Even though I was fairly sure I didn't want to go the
            distance I felt it would be good experience to work in a different
            practice, and joined a small architecture firm called Buchanans.
          </p>
        </div>
        <p>
          They specialised in hotel projects - both new build and refurbs, and
          as an Assistant Architect (assistant to the architect*), I spend a lot
          of time measuring up hotel rooms in existing sites and turning them
          into CAD drawings, calculating furniture inventory, and drawing
          architectural details.
        </p>
      </>
    ),
    image: {
      desktop: architecture,
      mobile: architecture
    },
    images: [
      { src: buchanan01, caption: '' },
      { src: buchanan02, caption: '' },
      { src: buchanan03, caption: '' }
    ]
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
        <div style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: clamp, WebkitBoxOrient: 'vertical' }}>
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
        </div>
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
    image: {
      desktop: education,
      mobile: education
    },
    images: [
      { src: uni01, caption: '' },
      { src: uni02, caption: '' },
      { src: uni03, caption: '' },
      { src: uni04, caption: '' },
      { src: uni05, caption: '' },
      { src: uni06, caption: '' }
    ]
  }
]

export default moments
