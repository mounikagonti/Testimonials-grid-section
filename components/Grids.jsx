import React from "react"
import Image from "next/image"

const Grids = () => {
  return (
    <div className='testimonial_wrapper'>
      <div className='card_one'>
        <div className='cardOne_header'>
          <div className='img_one'>
            <Image
              className='img'
              src='/images/image-daniel.jpg'
              layout='fill'
              objectFit='cover'
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <h3>Daniel Clifford</h3>
            <p>Verified Graduate</p>
          </div>
        </div>
        <div className='content'>
          <p className='header_content'>
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny’s worth.
          </p>
          <p className='main_content'>
            “ I was an EMT for many years before I joined the bootcamp. I’ve
            been looking to make a transition and have heard some people who had
            an amazing experience here. I signed up for the free intro course
            and found it incredibly fun! I enrolled shortly thereafter. The next
            12 weeks was the best - and most grueling - time of my life. Since
            completing the course, I’ve successfully switched careers, working
            as a Software Engineer at a VR startup. ”
          </p>
        </div>
      </div>
      <div className='card_two'>
        <div className='cardTwo_header'>
          <div className='img_two'>
            <Image
              className='img'
              src='/images/image-jonathan.jpg'
              layout='fill'
              objectFit='cover'
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <h3>Jonathan Walters</h3>
            <p>Verified Graduate</p>
          </div>
        </div>
        <div className='content'>
          <p className='header_content'>
            The team was very supportive and kept me motivated
          </p>
          <p className='main_content'>
            “ I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I’ve made in myself. ”
          </p>
        </div>
      </div>
      <div className='card_three'>
        <div className='cardThree_header'>
          <div className='img_three'>
            <Image
              className='img'
              src='/images/image-jeanette.jpg'
              layout='fill'
              objectFit='cover'
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <h3>Jeanette Harmon</h3>
            <p>Verified Graduate</p>
          </div>
        </div>
        <div className='content'>
          <p className='header_content'>
            An overall wonderful and rewarding experience
          </p>
          <p className='main_content'>
            “ Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love. ”
          </p>
        </div>
      </div>
      <div className='card_four'>
        <div className='cardFive_header'>
          <div className='img_five'>
            <Image
              className='img'
              src='/images/image-kira.jpg'
              layout='fill'
              objectFit='cover'
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <h3>Kira Whittle</h3>
            <p>Verified Graduate</p>
          </div>
        </div>
        <div className='content'>
          <p className='header_content'>
            Such a life-changing experience. Highly recommended!
          </p>
          <p className='main_content'>
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
      </div>
      <div className='card_five'>
        <div className='cardFour_header'>
          <div className='img_four'>
            <Image
              className='img'
              src='/images/image-patrick.jpg'
              layout='fill'
              objectFit='cover'
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <h3>Patrick Abrams</h3>
            <p>Verified Graduate</p>
          </div>
        </div>
        <div className='content'>
          <p className='header_content'>
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>
          <p className='main_content'>
            “ The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people. ”
          </p>
        </div>
      </div>
    </div>
  )
}

export default Grids
