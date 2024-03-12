import { Chip } from "@material-tailwind/react";

export default function Experience() {
  return (
    <div id="experience" className="mb-28">
      {/*RUNS ubicacion */}
      <div className="flex items-center ml-2 mb-5">
        <Chip
          value="RUNS"
          className="w-12 bg-amber-500 rounded-none text-gray-800 h-4 flex text-xs justify-center"
        />
        <p className="ml-4 text-sm">src/pages</p>
        <p className=" font-bold text-blue-gray-50 text-sm">/experience</p>
      </div>
      <div className=" md:ml-7 ml-4 flex flex-col gap-5">
        <p className="text-2xl mb-2">Professional experience</p>
        {/*Mangoodev*/}
        <div className="flex flex-col md:flex-row md:gap-6 md:items-center">
          <p className=" font-bold">Product owner</p>
          <p>MangooDev SRL -</p>
          <p className="text-sm text-light-green-700">
            [January 2018 - April 2023]
          </p>
        </div>

        {/*Indelama SRL*/}
        <div className="flex flex-col md:flex-row md:gap-6 md:items-center">
          <p className=" font-bold">Architect</p>
          <p>Indelama SRL -</p>
          <p className="text-sm text-light-green-700">
            [April 2023 - March 2024]
          </p>
        </div>

        {/*CAO Architecture*/}
        <div className="flex flex-col md:flex-row md:gap-6 md:items-center">
          <p className=" font-bold">Architect</p>
          <p>CAO Architecture -</p>
          <p className="text-sm text-light-green-700">
            [March 2021 - April 2023]
          </p>
        </div>

        {/*Mobit Sillones SRL*/}
        <div className="flex flex-col md:flex-row md:gap-6 md:items-center">
          <p className=" font-bold">Commercial advisor</p>
          <p>Mobit Sillones SRL -</p>
          <p className="text-sm text-light-green-700">
            [December 2007 - December 2017]
          </p>
        </div>
      </div>
    </div>
  );
}
