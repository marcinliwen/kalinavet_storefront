import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import SearchEngineOptimization from "../components/utility/seo"

const Leistungen = () => {
  return (
    <div className="">
      <SearchEngineOptimization title="Leistungen" />
      <div className="container">
      <div className="border-b border-ui-medium mb-8 pb-8">
        <h1 className="mb-2">Leistungen</h1>
      </div>
      <div className="my-8">
        <p>Hier finden Sie die wichtigsten Informationen zu unseren Leistungen.</p>
      </div>
      </div>
      
      <div className="">
        <div className="container">
          <div className="grid grid-col-1 justify-center gap-12 flex-wrap   text-xl ">
            {/*  <div className="w-[350px] text-center ">
            <Link to="/kontakt">
            <StaticImage 
              src="../images/hotline.png"
              alt="Telefon"
              placeholder="tracedSVG"
              objectFit="contain"
              className="w-16 mb-4"
              />
              <p>Termin nur nach telefonischer Terminvereinbarung</p>
              </Link>
          </div> */} 
            <div className="max-w-[800px] w-full text-center">
              <Link to="/kontakt" className="block mb-4">
              <div className="w-[96px] h-[96px] flex items-center justify-center bg-ui-red rounded-full p-2 mx-auto">
                <StaticImage
                  src="../images/profilaktyka.png"
                  alt="profilaktyka"
                  placeholder="tracedSVG"
                  objectFit="contain"
                  className="w-16 "
                />
                 </div>
                <p>Verhütung</p>
              </Link>
             
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            {/*  <div className="w-[350px] text-center">
          <Link to="/kontakt">
          <StaticImage 
              src="../images/location.png"
              alt="Lokalizacja"
              placeholder="tracedSVG"
              objectFit="contain"
              className="w-16 mb-4"
              />
            <p>Neue Adresse: <br />Zasieki 75</p>
            </Link>
          </div> */}
            <div className="max-w-[800px] w-full text-center">
              <div className="block mb-4">
              <div className="w-[96px] h-[96px] flex items-center justify-center bg-ui-red rounded-full p-2 mx-auto">
              <StaticImage
                src="../images/medical-report.png"
                alt="Untersuchung"
                placeholder="tracedSVG"
                objectFit="contain"
                className="w-16"
              />
              </div>
              <p>Untersuchung</p>
              </div>
           
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <div className="max-w-[800px] w-full text-center">
              <div className="block mb-4">
              <div className="w-[96px] h-[96px] flex items-center justify-center bg-ui-red rounded-full p-2 mx-auto">
              <StaticImage
                src="../images/scalpel.png"
                alt="Chirurgie"
                placeholder="tracedSVG"
                objectFit="contain"
                className="w-16"
              />
              </div>
              <p>Chirurgie</p>
              </div>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <div className="max-w-[800px] w-full text-center">
              <div className="block mb-4">
              <div className="w-[96px] h-[96px] flex items-center justify-center bg-ui-red rounded-full p-2 mx-auto">
              <StaticImage
                src="../images/medicine.png"
                alt="Medicine"
                placeholder="tracedSVG"
                objectFit="contain"
                className="w-16"
              />
              </div>
              <p>Medikamenten</p>
              </div>
              <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Leistungen