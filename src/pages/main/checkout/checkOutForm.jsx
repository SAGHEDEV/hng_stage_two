import { Form } from "antd";
import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const CheckOutForm = () => {
  const [chosen, setChosen] = useState();
  return (
    <div className="mt-16">
      <div className="mb-16">
        <p className="flex justify-between items-center mb-4">
          <span className="text-sm lg:text-[16px] font-normal">
            Customer Information
          </span>
          <label
            className="text-xs text-[#016FD0] cursor-pointer"
            htmlFor="email"
          >
            edit
          </label>
        </p>
        <Form.Item name="con_email">
          <input
            type="email"
            placeholder="Email for order confirmation"
            id="email"
            className="w-full h-[38px] border pl-2 rounded font-light"
            required
          />
        </Form.Item>
      </div>

      <div className="flex justify-start flex-col lg:flex-row items-center gap-4">
        <div
          className="border bg-gray-50 py-5 px-7 rounded relative cursor-pointer hover:scale-95"
          onClick={() => setChosen(1)}
        >
          <p className="font-mediu text-sm">Home Delivery</p>
          <p className="text-[12px]">Takes 3-5 business days</p>
          {chosen === 1 ? (
            <FaRegCheckCircle className="absolute top-4 right-4 text-green-500" />
          ) : (
            ""
          )}
        </div>
        <div
          className="border bg-gray-50 py-5 px-7 rounded relative cursor-pointer hover:scale-95"
          onClick={() => setChosen(2)}
        >
          <p className="font-mediu text-sm">Home Delivery</p>
          <p className="text-[12px]">Takes 3-5 business days</p>
          {chosen === 2 ? (
            <FaRegCheckCircle className="absolute top-4 right-4 text-green-500" />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="mt-16">
        <p className="flex justify-between items-center mb-4">
          <span className="text-sm lg:text-[16px] font-normal">
            Billing Address
          </span>
          <label
            className="text-xs text-[#016FD0] cursor-pointer"
            htmlFor="first_name"
          >
            edit
          </label>
        </p>
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-2">
            <Form.Item name="first_name" className="w-full !m-0 lg:w-1/2">
              <input
                type="text"
                placeholder="First Name"
                id="first_name"
                className="w-full  h-[38px] border pl-2 rounded font-light"
                required
              />
            </Form.Item>
            <Form.Item name="last_name" className="w-full !m-0 lg:w-1/2">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-[38px] border pl-2 rounded font-light"
                required
              />
            </Form.Item>
          </div>
          <Form.Item name="address" className="w-full !m-0 ">
            <input
              type="text"
              placeholder="Address line-1"
              className="w-full  h-[38px] border pl-2 rounded font-light"
              required
            />
          </Form.Item>
          <Form.Item name="address2" className="w-full !m-0">
            <input
              type="text"
              placeholder="Address line-2"
              className="w-full  h-[38px] border pl-2 rounded font-light"
              required
            />
          </Form.Item>
          <Form.Item name="city" className="w-full !m-0">
            <input
              type="text"
              placeholder="City"
              className="w-full  h-[38px] border pl-2 rounded font-light"
            />
          </Form.Item>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-2">
            <Form.Item name="state" className="w-full lg:w-1/2 !m-0">
              <select
                name="state"
                id=""
                className="w-full  h-[38px] border pl-2 rounded font-light"
                required
              >
                <option value="lagos">Lagos</option>
                <option value="Ogun">Ogun</option>
                <option value="Osun">Osun</option>
                <option value="Abuja">Abuja</option>
              </select>
            </Form.Item>
            <Form.Item name="phone_number" className="w-full lg:w-1/2 !m-0">
              <input
                type="mobile"
                placeholder="Phone number"
                className="w-full  h-[38px] border pl-2 rounded font-light"
                required
              />
            </Form.Item>
          </div>
        </div>
        <p className="mt-5">
          <input type="radio" name="save" id="save" />
          <label htmlFor="save" className="pl-2">
            Save Details Update
          </label>
        </p>
      </div>
    </div>
  );
};

export default CheckOutForm;
