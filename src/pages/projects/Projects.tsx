import { Chip } from "@material-tailwind/react";

export default function Projects() {
  return (
    <div>
      {/*RUNS ubicacion */}
      <div className="flex items-center ml-2 mb-5">
        <Chip
          value="RUNS"
          className="w-12 bg-amber-500 rounded-none text-gray-800 h-4 flex text-xs justify-center"
        />
        <p className="ml-4 text-sm">src/pages</p>
        <p className=" font-bold text-blue-gray-50 text-sm">/languages</p>
      </div>
      <div id="projects" className="mb-28">
        <div className=" md:ml-7 ml-4 flex flex-col gap-7">
          <p className="text-2xl mb-2">Languages</p>

          {/*español*/}
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
            <p className=" font-bold">Spanish</p>
            <p>Native</p>
          </div>

          {/*ingles*/}
          <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
            <p className=" font-bold">English</p>
            <p>Advanced (C1)</p>
          </div>
          <div className=" -mt-4">
            <p className="text-sm text-gray-300">
              - First Certificate in English - FCE (2008)
            </p>
            <p className="text-sm text-gray-300">
              - Certificate in Advance English - CAE (2016)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
