import SupportContent from "@/Components/Support/SupportContent";
import SupportTools from "@/Components/Support/SupportTools";
import "./style.css";
import SupportBanner from "./SupportBanner";

const Support = () => {
  return (
    <div className="container mx-auto px-2 pb-10 pt-[8rem]">
      <SupportBanner />
      <SupportTools />
      <div id="support_banner_input" className="rounded my-10">
        <div id="support_banner_input_content_center">
          <div className="py-6 text-[#fff]">
            <h1 className="text-2xl md:text-4xl  text-[#fff]">
              Hi, How can we help...?
            </h1>
            <p>
              Search for a question. Like: How to use Actual Collection Point?
            </p>
          </div>
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="Writing Here"
              className="bg-[#ffffffd7] text-base px-2 py-2 rounded-l placeholder:text-slate-500 focus:outline-none ease-in-out duration-700 border-none"
            />
            <button className="bg-[#961929] hover:bg-[#b42735] shadow-2xl py-2 px-3 rounded-r text-[#fff] ease-in-out duration-700">
              Search
            </button>
          </div>
        </div>
      </div>
      <SupportContent />
      {/*  */}
      {/* <Commitment />
      <Footer /> */}
    </div>
  );
};

export default Support;