"use client";
import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-md text-left text-gray-800 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronDownIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Can I do the course alongside my college ?",
    answer:
      "Yes, you can continue our courses alongside your college curriculum.",
  },
  {
    question: "What is your refund policy ?",
    answer:
      "We provide you a trial period of 15 days, if in that period you feel unsatisfied for whatever reason we refund you fully, no questions asked",
  },
  {
    question: "Do you offer technical support ?",
    answer:
      "Yes, we offer tech support. In case of any technical difficulty you can email us or contact us on our helpline number and we will do our best to resolve your issue.",
  },
  {
    question: "Do I get a certificate at the end ?",
    answer:
      "At the end of every course you receive a comprehensive job ready certificate.",
  },
];

export default Faq;
