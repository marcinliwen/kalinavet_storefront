import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
    },

  ]

  const internals = [
    {
      name: "Create return",
      to: "/create-return",
    },
    {
      name: "FAQ",
      to: "/faq",
    },
    {
      name: "Terms & Conditions",
      to: "/terms-and-conditions",
    },
  ]

  const main_internals =[
    {
      name: "Leistungen",
      to: "/leistungen"
    },
    {
      name: "Uber Uns",
      to: "/"
    },
    {
      name: "Blog",
      to: "/"
    }
  ]
  return (
    <footer>
      <div className="bg-ui-black px-4 pt-24 pb-4 sm:px-6 lg:px-8 border-t border-ui-medium flex items-start md:items-center justify-between text-sm">
        <div className="flex flex-col md:flex-row md:items-center">
          {main_internals.map(internal => {
            return (
              <Link
                to={internal.to}
                key={internal.name}
                className="mr-3 my-2 md:my-0 last:mr-0 text-ui-light hover:text-gray-700"
              >
                {internal.name}
              </Link>
            )
          })}
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          {socials.map(social => {
            return (
              <a
                href={social.url}
                key={social.name}
                className="mr-3 my-2 md:my-0 last:mr-0 text-ui-light hover:text-gray-700"
              >
                {social.name}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
