import React from "react";
import peak from "../assets/peak.png";
import man from "../assets/man.png";
import snow from "../assets/snow.png";
import NavigationBar from "../components/NavigationBar";

const History = () => {
  const images = [
    man,
    snow,
    man,
    snow,
    man,
    snow,
    man,
    snow,
    man,
    snow,
    man,
    snow,
  ];
  const [currentPage, setCurrentPage] = React.useState(1);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [imagesPerPage, setImagesPerPage] = React.useState(2);
  const numberOfPages = Math.ceil(images.length / imagesPerPage);
  const lastIndex = imagesPerPage * currentPage;
  const firstIndex = lastIndex - imagesPerPage;
  const myImages = images.slice(firstIndex, lastIndex);
  let pagination = [];

  for (let index = 0; index < numberOfPages; index++) {
    pagination = [...pagination, index + 1];
  }

  React.useEffect(() => {
    if (width >= 640) {
      setImagesPerPage(4);
    } else {
      setImagesPerPage(2);
    }
    const widthSetter = setInterval(() => setWidth(window.innerWidth), 1);

    return () => clearInterval(widthSetter);
  }, [width, imagesPerPage]);

  React.useEffect(() => {
    if (currentPage === numberOfPages + 1) {
      setCurrentPage(1);
    }
    const updatePage = setInterval(() => setCurrentPage(currentPage + 1), 7000);

    return () => clearInterval(updatePage);
  }, [currentPage]);

  return (
    <div>
      <NavigationBar showMount={true} />
      <div
        style={{
          backgroundImage: `url(${peak})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex m-0 ml-5 pt-5 lg:ml-[150px] lg:mr-[150px] sm:ml-11 sm:mr-11 md:mr-16 md:ml-16">
          <p className="text-4xl sm:text-6xl font-bold mr-1 text-[#414F6B] opacity-70 lg:text-8xl">
            01
          </p>
          <p className="flex flex-col mt-2 text-lg font-bold uppercase text-[#414F6B] sm:text-3xl lg:mt-9">
            history<span className="-mt-8 text-3xl sm:text-5xl">.</span>
          </p>
        </div>
        <div className="p-5 -mt-5 mb-10 lg:ml-[150px] lg:mr-[150px] sm:ml-11 sm:mr-11 md:mr-16 md:ml-16">
          <p className="text-normal text-[#414F6B] sm:text-lg sm:ml-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, return erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purux ex, iaculis sed erat sed, blandit tincidunt quam
            sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac,
            tristique ut quam. Vivamus suscipit dignissim tortor nec congue
          </p>
        </div>
        <div className="opacity-50 bg-black lg:ml-[150px] lg:mr-[150px] sm:ml-11 sm:mr-11 md:mr-16 md:ml-16">
          <div className="p-5 flex justify-center items-center flex-col sm:h-[240px] mt-40 md:mt-44 ">
            <div className="flex mb-2 z-50 sm:p-2">
              {myImages.map((image, index) => (
                <img
                  src={image}
                  alt=""
                  key={index}
                  className={`w-1/2 h-[150px] ${
                    index === 0 ? "-ml-1 sm:-ml-3" : ""
                  } m-1 sm:w-1/4 animation`}
                />
              ))}
            </div>
            <div className="flex">
              {pagination.map((page) => (
                <div
                  key={page}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    page === currentPage ? "page-active" : "page"
                  } m-[2px]`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
