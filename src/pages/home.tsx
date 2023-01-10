import React from 'react'
import { PageProps } from 'gatsby'
// import {
//   ChatAltIcon,
//   DocumentReportIcon,
//   InboxIcon,
//   PencilAltIcon,
//   ReplyIcon,
//   TrashIcon,
//   UsersIcon,
//   PuzzleIcon,
//   HeartIcon,
// } from '@heroicons/react/outline'
import { ToastProvider } from 'react-toast-notifications'

import Header from '../components/Header'
import Main from './main'
// import HeroSection from '../components/HeroSection'
// import solutions from '../data/solutions.json'
// import Services from '../components/Services'
// import Contact from '../components/Contact'
// import Aboutus from '../components/About'
import Footer from '../components/Footer'
// import CookieMessage from '../components/CookieMessage'

// import projectImage from "../images/sekyee_project.jpg"
// import recoveryImage from '../images/sekyee_recovery.jpg'
// import tradingImage from '../images/sekyee_trading.jpg'
// import telephonyImage from '../images/sekyee_telephony.jpg'
// import cloudImage from '../images/sekyee_cloud.jpg'
// import serviceImage from '../images/sekyee_service.jpg'


import Features from '../data/features.json'
import HeroSection from '../components/HeroSection'

const Home = (props: any) => {

  return (
    <ToastProvider>
      
      <div className="bg-white">

        <Header path={props.path} />

        <HeroSection path={props.path} theme='action-left-bg' />
        {/* <HeroSection /> */}
        <Main />
        {/* <CookieMessage />
        
        <main>
          <HeroSection />

          <LogoCloud />

          <Aboutus />

          {solutions.map((solution, index) => (
            <Services key={index} service={{
              title: solution.name,
              content: solution.description,
              toLink: solution.to,
              icon: PuzzleIcon,
              image: (index == 0) ? projectImage 
                : (index == 1) ? recoveryImage
                : (index == 2) ? tradingImage
                : (index == 3) ? telephonyImage
                : (index == 4) ? cloudImage
                : (index == 5) ? serviceImage
                : projectImage,
              reverse: index%2
            }} />  
          ))}

          <div className="bg-gradient-to-r from-sekyee-blue-light to-sekyee-blue-dark">
            <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Inbox support built for efficiency</h2>
              <p className="mt-4 max-w-3xl text-lg text-blue-100">
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit
                aliquam sit nisl euismod mattis in.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                {Features.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                      <p className="mt-2 text-base text-blue-100">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Contact active={true}/>

        </main> */}

        <Footer />
      </div>

    </ToastProvider>
  )
}

export default Home
