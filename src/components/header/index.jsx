import { Link } from "gatsby"
import React, { useState } from "react"
import Logo from "../../icons/logo.svg"
import AccountPopover from "./account-popover"
import Banner from "./banner"
import CartPopover from "./cart-popover"
import HeaderLink from "./header-link"
import MobileMenu from "./mobile-menu"
import RegionPopover from "./region-popover"

const mockData = {
  customer: {
    first_name: "Kasper",
    last_name: "F. Kristensen",
  },
  cart: {
    currency_code: "DKK",
    items: [
      {
        title: "Medusa Tote",
        amount: 12500,
        quantity: 1,
        thumbnail:
          "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png",
      },
      {
        title: "Medusa Cover",
        amount: 9000,
        quantity: 1,
        thumbnail:
          "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png",
      },
      {
        title: "Medusa Sweatshirt",
        amount: 28000,
        quantity: 2,
        thumbnail:
          "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tshirt.png",
      },
    ],
  },
  regions: [
    {
      id: "1",
      name: "Denmark",
      currency_code: "DKK",
      countries: [
        {
          display_name: "Denmark",
        },
      ],
    },
    {
      id: "2",
      name: "Norway",
      currency_code: "NOK",
      countries: [
        {
          display_name: "Norway",
        },
      ],
    },
    {
      id: "3",
      name: "Europe",
      currency_code: "EUR",
      countries: [
        {
          display_name: "Germany",
        },
        {
          display_name: "France",
        },
        {
          display_name: "Italy",
        },
        {
          display_name: "Spain",
        },
      ],
    },
  ],
}

const Header = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="sticky top-0 z-20">
      <header className="relative bg-white">
{/*         <Banner /> */}
        <MobileMenu open={open} setOpen={setOpen} />
        <nav
          aria-label="Top"
          className="px-4 sm:px-6 lg:px-8  flex items-center justify-between"
        >
          <div className="flex items-center">
            <div className="h:16 md:h-24 flex items-center">
              <button
                type="button"
                className="bg-white p-2 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="w-4 h-4 black"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>

              <div className="ml-4 flex lg:ml-0 lg:mr-8">
                <Link to="/">
                  <img className="h-12 md:h-16 w-auto" src={Logo} alt="" />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center">
              <div className="hidden flex-grow items-center justify-center lg:flex text-sm font-medium">
               {/*  <HeaderLink to="/products" text="Haustierproducte" />
                <HeaderLink to="/collections" text="Kategorie" /> */}
                <HeaderLink to="/leistungen" text="Leistungen" />
                <HeaderLink text="Uber Uns"/>
                <HeaderLink text="Blog"/>
                
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
          <div className="hidden lg:flex">
            
            <a className="mr-4  btn-ui btn-second text-sm font-medium text-gray-700 hover:text-gray-600" href="tel:48506109445" target="_blank">+48 506 109 445</a>
            <div>
            <Link to="/kontakt" className="flex items-center text-sm px-4 py-2 font-medium text-gray-700 hover:text-gray-600">Kontakt</Link>
            </div>
           {/*  <AccountPopover customer={mockData.customer} /> */}
          </div>
          {/* <CartPopover cart={mockData.cart} /> */}
           {/*  <div className="hidden lg:flex">
              <RegionPopover regions={mockData.regions} />
              <AccountPopover customer={mockData.customer} />
            </div>
            <CartPopover cart={mockData.cart} /> */}
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
