import Link from "next/link";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsChatLeftFill, BsGrid3X3GapFill } from "react-icons/bs";
import { FaShippingFast, FaUserEdit } from "react-icons/fa";
import { MdPassword, MdPayment } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";

const SupportTools = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-start justify-items-center  gap-5">
        <div className="w-full h-auto text-center py-10 bg-[#f1f1f1] shadow-2xl rounded">
          <h1 className="">
            <MdPassword className="inline-block text-3xl" />
          </h1>
          <Link to="/password-reset" className="underline">
            Password Reset
          </Link>
        </div>
        <div className="w-full h-auto text-center py-10 bg-[#f1f1f1] shadow-2xl rounded">
          <h1>
            <FaUserEdit className="inline-block text-2xl" />
          </h1>
          <Link to="" className="underline block">
            Update User Info
          </Link>
        </div>
        <div className="w-full h-auto text-center py-10 bg-[#f1f1f1] shadow-2xl rounded">
          {/* manage orders*/}
          <h1>
            <BsGrid3X3GapFill className="inline-block text-2xl" />
          </h1>
          <Link to="" className="underline block">
            Manage Orders
          </Link>
        </div>
        <div className="w-full h-auto text-center py-10 bg-[#f1f1f1] shadow-2xl rounded">
          {/* shipping and delivery*/}
          <h1>
            <FaShippingFast className="inline-block text-2xl" />
          </h1>
          <Link to="" className="underline block">
            Shipping and Delivery
          </Link>
        </div>
        <div className="w-full h-auto text-center py-10 bg-[#f1f1f1] shadow-2xl rounded">
          {/* payment  */}
          <h1>
            <MdPayment className="inline-block text-3xl" />
          </h1>
          <Link to="" className="underline block">
            Payment
          </Link>
        </div>
        <div className="w-full h-auto text-center py-10 bg-[#f1f1f1] shadow-2xl rounded">
          {/* returns and refound */}
          <h1>
            <RiRefund2Fill className="inline-block text-3xl" />
          </h1>
          <Link to="" className="underline block">
            Returns and Refound
          </Link>
        </div>
        <div className="w-full h-auto text-center py-10 bg-[#f1f1f1] shadow-2xl rounded">
          {/* sell and me*/}
          <AiFillDollarCircle className="inline-block text-3xl" />
          <Link to="" className="underline block">
            Sell and Marketing
          </Link>
        </div>
        <div className="w-full h-auto text-center py-10 bg-[#f1f1f1] shadow-2xl rounded">
          {/* Live Chat*/}
          <BsChatLeftFill className="inline-block text-2xl" />
          <Link to="/live-chat" className="underline block">
            Live Chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportTools;
