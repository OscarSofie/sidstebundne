"use client";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const PageShift = ({ page, totalPages }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <FaArrowLeft
        disabled={page <= 1}
        onClick={() => {
          const url = new URL(window.location);
          url.searchParams.set("page", page - 1);
          window.location.href = url.toString();
        }}
        className="cursor-pointer"
      />

      <span className="text-lg font-semibold">
        Side {page} af {totalPages}
      </span>
     
      <FaArrowRight
        disabled={page >= totalPages}
        onClick={() => {
          const url = new URL(window.location);
          url.searchParams.set("page", page + 1);
          window.location.href = url.toString();
        }}
        className="cursor-pointer"
      />
    </div>
  );
};

export default PageShift;
