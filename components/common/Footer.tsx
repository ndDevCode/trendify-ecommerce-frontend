import React from "react";
import Image from "next/image";

import deliveryIcon from "@/public/icons/delivery.png";
import returnIcon from "@/public/icons/returns&exchanges.png";
import contactIcon from "@/public/icons/contact.png";
import mailIcon from "@/public/icons/mail.png";
import visaIcon from "@/public/icons/visa.png";
import mastercardIcon from "@/public/icons/mastercard.png";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white flex flex-col p-16">
      {/* Footer -> Features and Contact */}
      <div className="grid lg:grid-cols-4 min-[600px]:grid-cols-2 gap-4">
        <div className="flex lg:justify-center">
          <Image
            src={deliveryIcon}
            alt="delivery vehicle"
            width={56}
            height={56}
          ></Image>
          <p className="font-bold ms-2 my-auto text-gray-200">Delivery</p>
        </div>
        <div className="flex lg:justify-center">
          <Image
            src={returnIcon}
            alt="delivery vehicle"
            width={56}
            height={56}
          ></Image>
          <p className="font-bold ms-2 my-auto text-gray-200">
            Returns and Exchanges
          </p>
        </div>
        <div className="flex lg:justify-center">
          <Image
            src={contactIcon}
            alt="delivery vehicle"
            width={56}
            height={56}
          ></Image>
          <p className="font-bold ms-2 my-auto text-gray-200">
            +94 123 456 789
          </p>
        </div>
        <div className="flex lg:justify-center">
          <Image
            src={mailIcon}
            alt="delivery vehicle"
            width={56}
            height={56}
          ></Image>
          <p className="font-bold ms-2 my-auto text-gray-200">
            info@trendify.com
          </p>
        </div>
      </div>

      {/* Footer -> Navigation and SocialMedia */}
      <div className="grid md:grid-cols-3 mt-10 *:mt-8 md:*:mt-0">
        <div className="flex flex-col items-center">
          <h3 className="font-extrabold text-lg md:self-start">For Buyers</h3>
          <ul className="flex flex-col mt-5 md:self-start gap-2 *:text-center md:*:text-start text-gray-400">
            <a href="">
              <li className="hover:text-white">Payment</li>
            </a>
            <a href="">
              <li className="hover:text-white">Personal Data Policy</li>
            </a>
            <a href="">
              <li className="hover:text-white">Actions</li>
            </a>
            <a href="">
              <li className="hover:text-white">
                Rules for using promotional codes
              </li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-extrabold text-lg">About Company</h3>
          <ul className="flex flex-col mt-5 gap-2 *:text-center md:*:text-start text-gray-400">
            <a href="">
              <li className="hover:text-white">About Us</li>
            </a>
            <a href="">
              <li className="hover:text-white">Contacts</li>
            </a>
            <a href="">
              <li className="hover:text-white">News</li>
            </a>
            <a href="">
              <li className="hover:text-white">Careers</li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-extrabold text-lg md:self-end gap-2 *:text-center md:*:text-start">
            Our Social Networks
          </h3>
          <ul className="flex gap-3 mt-5 md:self-end">
            <a href="" className="text-gray-400 hover:text-white">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </li>
            </a>

            <a href="" className="text-gray-400 hover:text-white">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </li>
            </a>

            <a href="" className="text-gray-400 hover:text-white">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </li>
            </a>

            <a href="" className="text-gray-400 hover:text-white">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </li>
            </a>
          </ul>
        </div>
      </div>

      {/* Footer -> Copyright */}
      <div className="flex flex-col items-center justify-center mt-10 gap-2">
        <div className="flex gap-2 mb-5">
          <p className="text-sm text-gray-400 italic">We accept</p>
          <Image src={visaIcon} alt="Visa" width={62} height={20}></Image>
          <Image
            src={mastercardIcon}
            alt="Mastercard"
            width={32}
            height={20}
          ></Image>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            © 2024 Trendify. All rights reserved.
          </p>
        </div>
        <div>
          <address className="text-sm text-gray-400">
            Limited Liability Company &quot;Trendify Store&quot;, legal address:
            222A, Galle road, Panadura
          </address>
        </div>
      </div>
    </footer>
  );
}
