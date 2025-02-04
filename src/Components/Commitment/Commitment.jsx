import { AiFillAndroid, AiFillApple, AiOutlineTeam } from "react-icons/ai";
import { BiDollarCircle } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineVerifiedUser, MdPayment } from "react-icons/md";

const Commitment = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="py-b pt-4 ">
        <h1 className="text-2xl font-semibold text-[#2e3a4b]">Commitment</h1>
      </div>
      <div className="py-10">
        {/* content  */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <div className="text-center">
            <span className="inline-block">
              {" "}
              <BiDollarCircle className="text-[35px] text-slate-600" />
            </span>
            <h1 className="text-base text-slate-800">Great value</h1>
            <p className="text-xs pt-2 text-slate-600 font-normal">
              We offer competitive prices on over 100 million items.
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block">
              {" "}
              <CiDeliveryTruck className="text-[35px] text-slate-600" />
            </span>
            <h1 className="text-base text-slate-800">Worldwide shopping</h1>
            <p className="text-xs pt-2 text-slate-600 font-normal">
              We ship to over 200 countries and regions, and our site comes in
              12 languages.
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block">
              {" "}
              <MdPayment className="text-[35px] text-slate-600" />
            </span>
            <h1 className="text-base text-slate-800">Safe payment</h1>
            <p className="text-xs pt-2 text-slate-600 font-normal">
              Pay with the world’s most popular and secure payment methods.
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block">
              {" "}
              <MdOutlineVerifiedUser className="text-[35px] text-slate-600" />
            </span>
            <h1 className="text-base text-slate-800">Shop with confidence</h1>
            <p className="text-xs pt-2 text-slate-600 font-normal">
              Our Buyer Protection policy covers your entire purchase journey.
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block">
              {" "}
              <AiOutlineTeam className="text-[35px] text-slate-600" />
            </span>
            <h1 className="text-base text-slate-800">Help center</h1>
            <p className="text-xs pt-2 text-slate-600 font-normal">
              Round-the-clock assistance for a smooth shopping experience.
            </p>
          </div>
          <div className="text-center">
            <span className="inline-block">
              {" "}
              <div className="flex">
                <AiFillApple className="text-[35px] text-slate-600" />
                <AiFillAndroid className="text-[35px] text-slate-600" />
              </div>
            </span>
            <h1 className="text-base text-slate-800">Shop better</h1>
            <p className="text-xs pt-2 text-slate-600 font-normal">
              <a href="https://play.google.com/store/games" target="_blank">
                Download the app for mobile-only features such as image search
                and discount games.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
