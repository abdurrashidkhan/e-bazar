import React from "react";
import giftCard1 from "../../assert/images/GiftCard/1.jpg";
import giftCard2 from "../../assert/images/GiftCard/2.jpg";
import giftCard3 from "../../assert/images/GiftCard/3.jpg";
import giftCard4 from "../../assert/images/GiftCard/4.jpg";
import Link from "next/link";
import Image from "next/image";

const GiftCardCategories = () => {
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center justify-items-center py-10">
        <div className="">
          <a
            target="_blank"
            href="https://www.amazon.com/b/ref=s9_acss_bw_cg_GCLPTYPE_1a1_w?node=117059571011&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=K6TQ0H4DAHHT7NY9TTP2&pf_rd_t=101&pf_rd_p=5fcd8f6d-ae06-4079-9ce3-83dc2a127443&pf_rd_i=2238192011"
          >
            <Image
              src={giftCard1}
              width={500}
              height={500}
              className="w-full h-auto rounded shadow-2xl"
              alt="loading"
            />
          </a>
        </div>
        <div className="">
          <a
            target="_blank"
            href="https://www.amazon.com/b/ref=s9_acss_bw_cg_GCLPTYPE_1b1_w?node=117394558011&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=K6TQ0H4DAHHT7NY9TTP2&pf_rd_t=101&pf_rd_p=5fcd8f6d-ae06-4079-9ce3-83dc2a127443&pf_rd_i=2238192011"
          >
            <Image
              src={giftCard4}
              width={500}
              height={500}
              className="w-full h-auto rounded shadow-2xl"
              alt="loading"
            />
          </a>
        </div>
        <div className="">
          <a
            target="_blank"
            href={
              "https://www.amazon.com/b/ref=s9_acss_bw_cg_GCLPTYPE_2b1_w?node=15243182011&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=K6TQ0H4DAHHT7NY9TTP2&pf_rd_t=101&pf_rd_p=5fcd8f6d-ae06-4079-9ce3-83dc2a127443&pf_rd_i=2238192011"
            }
          >
            <Image
              src={giftCard3}
              width={500}
              height={500}
              className="w-full h-auto rounded shadow-2xl"
              alt="loading"
            />
          </a>
        </div>
        <div className="">
          <Link
            target="_blank"
            href={
              "https://www.amazon.com/b/ref=s9_acss_bw_cg_GCLPTYPE_2b1_w?node=15243182011&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-3&pf_rd_r=K6TQ0H4DAHHT7NY9TTP2&pf_rd_t=101&pf_rd_p=5fcd8f6d-ae06-4079-9ce3-83dc2a127443&pf_rd_i=2238192011"
            }
          >
            <Image
              src={giftCard2}
              width={500}
              height={500}
              className="w-full h-auto rounded shadow-2xl"
              alt="loading"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GiftCardCategories;
