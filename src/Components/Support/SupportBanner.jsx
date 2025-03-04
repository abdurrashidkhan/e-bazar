import Link from "next/link";
import "./style.css";
const SupportBanner = () => {
  return (
    <div className="">
      <div className="container mx-auto px-2 relative" id="support_banner">
        <div className="" id="content_center">
          {/* <h1 className="text-[#fff] capitalize text-2xl font-mono">
            30<span className="font-serif"> % OFF </span>
          </h1> */}
          <h1 className="text-[#fff] pt-2 capitalize text-2xl sm:text-4xl tracking-[1px]">
            our support for customer.
          </h1>
          <p className="text-[#fff] py-5 text-base tracking-[.5px] capitalize">
            At our shopping website, customer satisfaction is our top priority.
            We take pride in providing exceptional customer support to ensure a
            seamless and enjoyable shopping experience. Our dedicated team of
            friendly and knowledgeable customer service representatives is
            available around the clock to assist you with any inquiries or
            concerns you may have. Whether you need help with product
            information, order tracking, returns, or any other aspect of your
            shopping journey, we are here to assist you promptly and
            efficiently. We value your feedback and are committed to resolving
            any issues to your satisfaction. Your trust and satisfaction are
            essential to us, and we strive to make your online shopping
            experience as convenient and enjoyable as possible. Thank you for
            choosing us for your shopping needs.
          </p>
          <Link
            href=""
            className="text-[#fff] bg-[#136b65] text-base sm:text-lg px-6 py-2 rounded shadow-2xl hover:tracking-[1px] duration-700 ease-in-out mt-1 inline-block"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
