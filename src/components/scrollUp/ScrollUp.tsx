import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "./ScrollUp.css";

export default function ScrollUp() {
  window.addEventListener("scroll", function () {
    const scrollUp: HTMLElement | null = document.querySelector(".scrollup");

    if (this.scrollY >= 560) scrollUp?.classList.add("show-scroll");
    else scrollUp?.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup text-3xl">
      {/*<i className='uil uil-arrow-up scrollup_icon'></i>*/}
      <BsFillArrowUpSquareFill className="dark:text-blue-gray-100 dark:hover:bg-black dark:hover:text-slate-600" />
    </a>
  );
}
