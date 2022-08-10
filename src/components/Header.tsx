import React, {
  useEffect,
  Fragment,
  ReactElement,
  CElement,
} from 'react'

import { Popover, Transition } from '@headlessui/react'
// import {
//   AnnotationIcon,
//   ChatAlt2Icon,
//   ChatAltIcon,
//   DocumentReportIcon,
//   HeartIcon,
//   InboxIcon,
//   MenuIcon,
//   PencilAltIcon,
//   PuzzleIcon,
//   SparklesIcon,
//   ScaleIcon,
//   PhoneIncomingIcon,
//   CloudIcon,
//   SupportIcon,
//   QuestionMarkCircleIcon,
//   ReplyIcon,
//   TrashIcon,
//   UserCircleIcon,
//   UsersIcon,
//   XIcon,
// } from '@heroicons/react/outline'


import { Link, PageProps } from 'gatsby'

import configs from '../app-config'

import { getIcon, getInteractIcon } from '../utils/Icons'
import { updateClassNames } from '../utils/styles'

import logo from '../images/header_logo.png'
import settings from '../settings/header.json'
import solutions from '../data/solutions.json'

const Header = (props: any): ReactElement => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src=`https://www.google.com/recaptcha/enterprise.js?render=${configs.googleRecaptchaSiteKey}`
    document.body.appendChild(script)
  }, [])

  return (
    <header>
      <Popover className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">{settings.title}</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
               { getIcon(settings.menus.mobile.icon) }
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link to="/" className="text-base font-medium text-gray-500 hover:text-custom-primary-light">
              {settings.menus.home.name}
            </Link>

            <Link to={props.path ? `/${settings.menus.about.path}` : `#${settings.menus.about.path}`} className="text-base font-medium text-gray-500 hover:text-custom-primary-light">
              {settings.menus.about.name}
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={updateClassNames(
                      open
                        ? 'text-custom-primary-light'
                        : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-custom-primary-light focus:outline-none'
                    )}
                  >
                    <span>Services</span>
                    { getInteractIcon('ChevronDownIcon', 
                        true,
                        updateClassNames(
                          open ? 'custom-primary-light' : 'text-gray-500',
                          'ml-2 h-5 w-5 group-hover:text-custom-primary-light'
                        )
                      ) }
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              to={props.path ? `/${item.to}` : `#${item.to}`}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-custom-primary-light text-white sm:h-12 sm:w-12">
                                { getIcon(item.icon) }
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link to={props.path ? `/${settings.menus.contact.path}` : `#${settings.menus.contact.path}`} className="text-base font-medium text-gray-500 hover:text-custom-primary-light">
              {settings.menus.contact.name}
            </Link>

          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="mailto:info@deepeyes.co.uk" className="mr-3 whitespace-nowrap text-base text-gray-500 hover:text-custom-primary-light">
              { getInteractIcon(settings.menus.contact.icon, true) }
            </a>
            <a href="#" className="whitespace-nowrap text-base text-gray-500 hover:text-custom-primary-light">
              { getInteractIcon(settings.menus.signin.icon, true) }
            </a>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-1 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      { getInteractIcon('XIcon', true) }
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-7">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={props.path ? `/${item.to}` : `#${item.to}`}
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-md bg-custom-primary-light text-white sm:h-8 sm:w-8">
                        { getIcon(item.icon) }
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-1 gap-4 text-center">
                  <Link to={props.path ? `/${settings.menus.about.path}` : `#${settings.menus.about.path}`} className="text-base font-medium text-gray-500 hover:text-custom-primary-light">
                    {settings.menus.about.name}
                  </Link>
                  <Link to={props.path ? `/${settings.menus.contact.path}` : `#${settings.menus.contact.path}`} className="text-base font-medium text-gray-500 hover:text-custom-primary-light">
                    {settings.menus.contact.name}
                  </Link>
                </div>
                <div className="mt-6">
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    <Link to={props.path ? `/${settings.menus.signin.path}` : `#${settings.menus.signin.path}`} className="text-base font-medium text-gray-500 hover:text-custom-primary-light">
                      {settings.menus.signin.name}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>

  );
}

export default Header
