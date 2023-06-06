import React from "react";

export const Button = () => {
  return (
    <div>
      <div class="align-items m-20 text-center">
        <div className="flex justify-center m-8">
          <img
            className="w-48"
            src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg"
          />
        </div>
        <p class="m-8 font-semibold shadow-black text-2xl">
          Incididunt culpa exercitation sint laboris minim mollit qui aliquip
          elit ea cupidatat cupidatat.
        </p>
        <a href="/movie">
          <button
            type="button"
            class="bg bg-gradient-to-tr from-blue-500 to-blue-900 h-10 w-80 rounded-md"
          >
            <span class="text-white font-semibold">Get Started</span>
          </button>
        </a>
      </div>
    </div>
  );
};
