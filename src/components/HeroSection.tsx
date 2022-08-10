import React from 'react'
// import image from '../images/hero_section.jpg'
import image from '../images/header_logo.png'
import settings from '../settings/site.json'
import { getInteractIcon } from '../utils/Icons'

interface HeroSectionProps {
  path: any,
  theme: string
}

const HeroSection = (props: HeroSectionProps) => {
  return (
    <>
      { (props.theme == 'full-center-bg') &&
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-custom-background-light" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative h-2/3 shadow-xl sm:rounded-2xl overflow-hidden"
            style={{maxHeight:600}} >
              <div className="absolute inset-0 bg-opacity-10">
                <img
                  className="h-full w-full object-cover"
                  src={image}
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-sekyee-skyblue-light to-sekyee-skyblue-dark mix-blend-multiply" />
              </div>
              <div className="relative mt-48 px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    {settings.sections.hero.tagline1}
                  </span>
                  <span className="pb-3 block bg-clip-text text-transparent bg-custom-primary sm:pb-5">
                    {settings.sections.hero.tagline2}
                  </span>
                </h1>
                <p className="mt-10 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                  {settings.sections.hero.sectionMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      }
      { (props.theme == 'action-left-bg') &&
        <div className="pt-10 bg-custom-background-dark sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-custom-background-dark rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-custom-body-light"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-custom-primary rounded-full">
                      {settings.sections.hero.actionTitle}
                    </span>
                    <span className="ml-4 text-sm">{settings.sections.hero.actionMessage}</span>
                    {getInteractIcon('ChevronRightIcon', true, 'ml-2 w-5 h-5 text-custom-body')}
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">{settings.sections.hero.tagline1}</span>
                    <span className="pb-3 block bg-clip-text text-transparent bg-custom-primary sm:pb-5">
                      {settings.sections.hero.tagline2}
                    </span>
                  </h1>
                  <p className="text-base text-custom-body-light sm:text-xl lg:text-lg xl:text-xl">
                    {settings.sections.hero.sectionMessage}
                  </p>
                </div>
              </div>
              <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <img
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default HeroSection
