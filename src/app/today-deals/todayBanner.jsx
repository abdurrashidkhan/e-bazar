import Link from "next/link";
import "./style.css";
export default function TodayBanner() {
  return (
    <div className="container mx-auto px-2 relative" id="today_banner">
      <div className="px-2 mx-auto" id="content_center">
        <h1 className="text-[#fff] capitalize text-2xl font-mono">
          Up to 55<span className="font-serif"> % discount </span>
        </h1>
        <h1 className="text-[#fff] pt-2 capitalize text-2xl sm:text-4xl tracking-[1px]">
          For Today special offer.
        </h1>
        <p className="text-[#fff] py-5 text-base tracking-[.5px] capitalize">
          Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Doloribus
          Maiores Animi Assumenda Impedit Atque Illum Fugit Quibusdam Quas Eius
          Pariatur Molestiae Illo Aspernatur Voluptatum In, Officia Qui
          Exercitationem. Earum Quisquam Fugit Quae Porro, Eos Debitis
          Asperiores Quia Dolorem Quo Repellat Minima Est Temporibus Aperiam
          Consectetur Velit Suscipit, Numquam Ullam. Expedita, Iure Accusantium
          Officiis Labore Vel Explicabo Earum Impedit Sunt Quam?
        </p>
        <Link
          href=""
          className="text-[#fff] bg-[#1F4E4D] text-base sm:text-lg px-6 py-2 rounded shadow hover:tracking-[1px] duration-700 ease-in-out mt-1 inline-block"
        >
          Click Here
        </Link>
      </div>
    </div>
  );
}
