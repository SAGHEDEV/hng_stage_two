// import { FunctionComponent } from "react";
// import GroupComponent from "../components/GroupComponent";
// import Content from "../components/Content";
// import Footer from "../components/Footer";

const MacBookPro14 = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[5px] leading-[normal] tracking-[normal]">
      {/* <GroupComponent />
      <Content /> */}
      <footer className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[77px] box-border max-w-full text-center text-13xl text-black font-montserrat mq750:pb-[50px] mq750:box-border">
        <div className="w-[1336px] flex flex-col items-center justify-start pt-[90px] px-5 pb-[65px] box-border relative gap-[46px] max-w-full mq450:pt-[58px] mq450:pb-[42px] mq450:box-border mq750:gap-[23px]">
          <div
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[4px_4px_30px_15px_rgba(0,_0,_0,_0.05)] rounded-[40px] bg-white z-[1]"
            data-scroll-to="descriptionBackground"
          />
          <div className="max:w-[1104px] relative inline-block max-w-full z-[2] mq450:text-[19px] mq1050:text-[26px]">
            <i>{`The Academy is a community of Ideological Muslims founded by `}</i>
            <b className="text-[36px] text-darkslateblue-200">
              SHEIKH DR. ABDULHAKEEM ABAYOMI (RA.)
            </b>
            <i>{`. In October 2024, The ACADEMY would be hosting the 20th memorial event dedicated to celebrating teh memory and lifetime of the Shaykh. `}</i>
          </div>
          <div className="w-[1104px] flex flex-row items-start justify-center max-w-full">
            <button className="cursor-pointer [border:none] py-[25.5px] px-[54px] bg-green-200 rounded-81xl flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-crimson-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <b className="relative text-[24px] font-montserrat text-white text-left">
                Learn More
              </b>
            </button>
          </div>
        </div>
      </footer>
      {/* <Footer /> */}
    </div>
  );
};

export default MacBookPro14;
