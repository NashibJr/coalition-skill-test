import React from "react";
import NavigationBar from "../components/NavigationBar";
import Row from "../components/Row";
import mountain from "../assets/photo-1417021423914-070979c8eb34.png";

const Climb = () => {
  const [link, setLink] = React.useState({ mountOne: true, mountTwo: false });
  return (
    <div className="container-content">
      <div
        className="overflow-x-hidden w-full"
        style={{
          backgroundImage: `url(${mountain})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <NavigationBar showMount={true} />
        <div className="flex m-0 ml-5 pt-5 flex-col sm:flex-row lg:ml-[150px] lg:mr-[150px] sm:ml-11 sm:mr-11 md:mr-16 md:ml-16">
          <span className="flex">
            <p className="text-4xl sm:text-6xl font-bold mr-1 text-[#414F6B] opacity-70 lg:text-8xl">
              02
            </p>
            <p className="flex flex-col mt-2 text-lg font-bold uppercase text-[#414F6B] sm:text-3xl lg:mt-9">
              Climb<span className="-mt-8 text-3xl sm:text-5xl">.</span>
            </p>
          </span>
          <p className="sm:text-lg text-[#414F6B] sm:ml-4 lg:mt-4">
            Cras scelerisque id quam sed dignissim Pellentesque urna
            nunc,gravida quis hendrerit ac tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue
          </p>
        </div>
        <div className="w-full bg-[#414F6B] p-0 mb-24">
          <ul className="flex mt-7 h-10 lg:ml-[120px] lg:mr-56 sm:ml-20 sm:mr-20 md:mr-28 md:ml-28">
            <li
              className={`font-bold text-[20px] pt-1 pl-2 pr-2 ml-5 mr-5 opacity-70 uppercase cursor-pointer hover:bg-white hover:opacity-70 hover:text-[#414F6B] ${
                link.mountOne
                  ? "bg-white opacity-70 text-[#414F6B] underline "
                  : "text-white"
              }`}
              onClick={() => setLink({ mountOne: true, mountTwo: false })}
            >
              <a>mountain 1</a>
            </li>
            <li
              className={`font-bold text-[20px] pt-1 pl-2 pr-2 opacity-70 uppercase cursor-pointer hover:bg-white hover:opacity-70 hover:text-[#414F6B] ${
                link.mountTwo
                  ? "bg-white opacity-70 text-[#414F6B] underline "
                  : "text-white"
              }`}
              onClick={() => setLink({ mountOne: false, mountTwo: true })}
            >
              <a>mountain 2</a>
            </li>
          </ul>
        </div>
        <div className="pt-5 pb-5 pr-8 pl-8 bg-white opacity-70 w-[300px] shadow-content m-5 mb-28 lg:ml-56 lg:mr-56 sm:ml-20 sm:mr-20 md:mr-28 md:ml-28 sm:w-[450px]">
          <p className="text-[25px] font-bold uppercase text-[#414F6B] mb-5">
            schedule
          </p>
          <table>
            <tbody>
              <Row date="25 Nov 2016" place="Vestibulum viverra" />
              <Row date="28 Nov 2016" place="Vestibulum viverra" />
              <Row date="18 Dec 2016" place="Vestibulum viverra" />
              <Row date="7 Jan 2017" place="Vestibulum viverra" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Climb;
