import { Chip } from "@material-tailwind/react";
import cv from "../../assets/CV - Ezequiel Fortuna.pdf";

export default function Profile() {
  return (
    <div className=" my-28 mb-44">
      {/*RUNS ubicacion */}
      <div className="flex items-center ml-2 mt-6">
        <Chip
          value="RUNS"
          className="w-12 bg-amber-500 rounded-none text-gray-800 h-4 flex text-xs justify-center"
        />
        <p className="ml-4 text-sm">src/pages</p>
        <p className=" font-bold text-blue-gray-50 text-sm">/profile</p>
      </div>
      <div className=" md:ml-7 ml-4">
        <div className=" my-8">
          <p className=" text-4xl md:text-6xl">Ezequiel Fortuna</p>
          <p className="mt-3 text-lg">Product owner</p>
          <p className="text-lg">QA tester</p>
          <p className="mt-7">Location: Monte Grande, Argentina</p>
          <p className="text-xs md:text-sm mt-5">
            My main function as a product owner is to represent the interests of
            the client and the business, collaborating closely with the team
            development team to define and prioritize product requirements.
          </p>
          <p className="text-xs md:text-sm">
            Background as an Architect gives me a deep understanding of system
            structure and design.
          </p>
        </div>
        <div className="mb-5">
          <div className="flex flex-col md:flex-row gap-2 text-xs md:text-sm">
            <p className=" text-deep-orange-600">[Email]</p>
            <a
              href="mailto:ezequielfortuna6@gmail.com"
              className=" text-amber-600 hover:text-light-blue-500"
              target="_blank"
            >
              ezequielfortuna6@gmail.com
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-2 text-xs md:text-sm mt-5">
            <p className=" text-light-blue-700">[Linkedin]</p>
            <a
              href="https://www.linkedin.com/in/ezequiel-emilio-fortuna-b4a80519a/"
              className=" text-amber-600 hover:text-light-blue-500"
              target="_blank"
            >
              Ezequiel Emilio Fortuna
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-2 text-xs md:text-sm mt-5">
            <p className=" text-light-blue-200">[cell phone]</p>
            <a href="" className=" text-amber-600 hover:text-light-blue-500">
              +5493416379257
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-xs md:text-sm md:gap-4 md:flex-row">
          <a download="" href={cv}>
            <p className=" text-light-green-500 hover:text-light-blue-500">
              [Download CV]
            </p>
          </a>
          <p>- Updated - 15/3/2024, 19:41:12 PM </p>
        </div>
      </div>
    </div>
  );
}
