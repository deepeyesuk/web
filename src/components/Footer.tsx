import React from 'react'
import { Link, PageProps } from 'gatsby'
import solutions from '../data/solutions.json'
import settings from '../settings/footer.json'
import { getFAIcon } from '../utils/Icons'

import Push from 'push.js'

const handlePushNotification = () => {
  const promise = Push.create('Test Notify', {
    body: "How's it hangin'?",
    timeout: 4000,
    onClick: function () {
      window.focus()
    }
  })

  console.log('>><<<>><< : ', promise)
  promise.then(function (notification) {
    notification.close()
  })

  Push.clear
}

const fireLazyNotification = () => {
  setTimeout(() => handlePushNotification(), 1000)
}

const Footer = () => {
  return(
    <footer className="bg-custom-background-light" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        { settings.title }
      </h2>
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-custom-body-light tracking-wider uppercase">{settings.sitemap.solutions.title}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {solutions.map((item) => (
                    <li key={item.name}>
                      <Link to={`/${item.to}`} className="text-base text-custom-body hover:text-custom-primary-light">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-custom-body-light tracking-wider uppercase">{settings.sitemap.support.title}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {settings.sitemap.support.menu.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-custom-body hover:text-custom-primary-light">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-custom-body-light tracking-wider uppercase">{settings.sitemap.company.title}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {settings.sitemap.company.menu.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-custom-body hover:text-custom-primary-light">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-custom-body-light tracking-wider uppercase">{settings.sitemap.legal.title}</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {settings.sitemap.legal.menu.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-custom-body hover:text-custom-primary-light">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-custom-body-light tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-custom-body">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-custom-gray rounded-md shadow-sm py-2 px-4 text-base text-custom-body-dark placeholder-custom-body focus:outline-none focus:ring-custom-primary focus:border-custom-primary focus:placeholder-custom-body-light"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-gradient-to-r from-custom-primary to-custom-primary-dark bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-custom-primary-dark hover:to-custom-primary-dark"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-custom-gray-light pt-8 md:flex md:items-center md:justify-between lg:mt-16">
          <div className="flex space-x-6 md:order-2">
            {settings.sitemap.socials.map((item) => (
              <a key={item.name} href={item.href} target="_blank" className="text-custom-body-light hover:text-custom-body">
                <span className="sr-only">{item.name}</span>
                {getFAIcon(item.icon, "lg", "h-6 w-6")}
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-custom-body-light md:mt-0 md:order-1">
            {settings.copyright}
            <button onClick={() => fireLazyNotification()} >Test Btn</button>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer