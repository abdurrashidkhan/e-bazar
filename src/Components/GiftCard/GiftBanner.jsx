import Link from "next/link";
import "./style.css";

const GiftBanner = () => {
  return (
    <div>
      <div className="">
        <div className="container mx-auto px-2 relative" id="gift_banner">
          <div className="" id="content_center">
            <h1 className="text-[#fff] capitalize text-2xl font-mono">
              30<span className="font-serif"> % OFF </span>
            </h1>
            <h1 className="text-[#fff] pt-2 capitalize text-2xl sm:text-4xl tracking-[1px]">
              special offer for next deals.
            </h1>
            <p className="text-[#fff] py-5 text-base tracking-[.5px] capitalize">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus maiores animi assumenda impedit atque illum fugit
              quibusdam quas eius pariatur molestiae illo aspernatur voluptatum
              in, officia qui exercitationem. Earum quisquam fugit quae porro,
              eos debitis asperiores quia dolorem quo repellat minima est
              temporibus aperiam consectetur velit suscipit, numquam ullam.
              Expedita, iure accusantium officiis labore vel explicabo earum
              impedit sunt quam?
            </p>
            <Link
              href=""
              className="text-[#fff] bg-[#136b65] text-base sm:text-lg px-6 py-2 rounded shadow-2xl hover:tracking-[1px] duration-700 ease-in-out mt-1 inline-block"
            >
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftBanner;
