import React from "react";
import Instagram from "../assets/images/instagram.jpeg";
import Tiktok from "../assets/images/tiktok3.png";
import Twitter from "../assets/images/twitter.jpeg";

const Footer = () => {
  return (
    <div>
      <footer class="bg-[#FAFAFA] font-normal md:px-[120px] px-5 md:py-20 py-10 space-y-8 lg:space-y-0">
        <div class="mx-auto max-w-screen-xl flex flex-col md:flex-row gap-8 md:gap-12 justify-between ">
          <div class="flex flex-col gap-6">
            <a
              class="lg:text-[24px] text-[18px] font-bold text-black w-max"
              href="/"
            >
              ROME<span class="font-normal">KAN</span>
            </a>
            <p class="hidden md:block max-w-xs lg:max-w-full">
              © 2024
              <a class="hover:text-[#024E82] duration-150" href="">
                Romekan Furnitures
              </a>
              . All rights reserved
            </p>
            <span class="hidden md:flex gap-4">
              <a class="hover:scale-110 duration-150" href="">
                <img className="h-[30px] rounded-lg" src={Tiktok} alt="" />
              </a>
              <a class="hover:scale-110 duration-150" href="">
                <img className="h-[30px] rounded-lg" src={Instagram} alt="" />
              </a>
              <a class="hover:scale-110 duration-150" href="">
                <img className="h-[30px] rounded-lg" src={Twitter} alt="" />
              </a>
            </span>
          </div>
          <ul class="space-y-4 hidden md:block">
            <li>
              <a class="duration-150 hover:underline font-medium" href="">
                Home
              </a>
            </li>
            <li>
              <a class="duration-150 hover:underline font-medium" href="">
                Collections
              </a>
            </li>
            <li>
              <a class="duration-150 hover:underline font-medium" href="">
                Brand
              </a>
            </li>
            <li>
              <a class="duration-150 hover:underline font-medium" href="">
                About Us
              </a>
            </li>
          </ul>
          <ul class="space-y-4 hidden md:block">
            <li>
              <a class="duration-150 hover:underline font-medium" href="">
                Contact Us
              </a>
            </li>
            <li>
              <a class="duration-150 hover:underline font-medium" href="">
                525-252-4244
              </a>
            </li>
            <li>
              <a class="duration-150 hover:underline font-medium" href="">
                romekan@gmail.com
              </a>
            </li>
            <li>
              <a class="duration-150 hover:underline font-medium" href="">
                www.romekan-customer.care
              </a>
            </li>
          </ul>
          <div class="flex md:hidden gap-8 justify-between">
            <ul class="space-y-4">
              <li>
                <a class="duration-150 hover:underline font-medium" href="">
                  Home
                </a>
              </li>
              <li>
                <a class="duration-150 hover:underline font-medium" href="">
                  Collections
                </a>
              </li>
              <li>
                <a class="duration-150 hover:underline font-medium" href="">
                  Brand
                </a>
              </li>
              <li>
                <a class="duration-150 hover:underline font-medium" href="">
                  About Us
                </a>
              </li>
            </ul>
            <ul class="space-y-4">
              <li>
                <a class="duration-150 hover:underline font-medium" href="">
                  Contact Us
                </a>
              </li>
              <li>
                <a class="duration-150 hover:underline font-medium" href="">
                  525-252-4244
                </a>
              </li>
              <li>
                <a class="duration-150 hover:underline font-medium" href="">
                  romekan@gmail.com
                </a>
              </li>
              <li>
                <a class="duration-150 hover:underline font-medium" href="">
                  www.romekan-customer.care
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col md:hidden gap-4 justify-center">
          <p class="text-center lg:text-start">
            © 2024{" "}
            <a class="hover:text-[#024E82] duration-150" href="">
              {" "}
              Romekan Furnitures
            </a>
            . All rights reserved
          </p>
          <span class="flex gap-4 w-max mx-auto">
            <a class="hover:scale-110 duration-150" href="">
              <img className="h-[30px] rounded-lg" src={Tiktok} alt="" />
            </a>
            <a class="hover:scale-110 duration-150" href="">
              <img className="h-[30px] rounded-lg" src={Instagram} alt="" />
            </a>
            <a class="hover:scale-110 duration-150" href="">
              <img className="h-[30px] rounded-lg" src={Twitter} alt="" />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
