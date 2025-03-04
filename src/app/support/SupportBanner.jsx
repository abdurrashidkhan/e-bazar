import Link from "next/link";

const SupportBanner = () => {
  return (
    <div className="">
      <div className="container mx-auto px-2 relative" id="support_banner">
        <div className="px-4 mx-auto" id="content_center">
          <h1 className="text-[#fff] pt-2 capitalize text-2xl sm:text-4xl tracking-[1px] font-semibold">
            Contact us <br />& Support
          </h1>
          <p className="text-[#fff] py-5 text-base tracking-[.5px] capitalize">
            Welcome to our Contact Us & Support page, your gateway to seamless
            assistance and personalized care. Whether you have a question, need
            technical support, or simply want to share feedback, we’re here to
            help—every step of the way. At e-Bazar, we pride ourselves on
            delivering exceptional service and building lasting relationships
            with our customers. Our dedicated support team is just a click,
            call, or message away, ready to provide prompt, friendly, and expert
            solutions tailored to your needs.
          </p>
          <Link
            href=""
            className="text-[#fff] bg-[#004d44] text-base sm:text-lg px-6 py-2 rounded shadow-2xl hover:tracking-[1px] duration-700 ease-in-out mt-1 inline-block "
          >
            Support Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
