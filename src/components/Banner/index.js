import React from "react";

function Banner() {
  return (
    <div className="container bg-black text-white">
      <div class="relative flex">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/f511e96e-c4cd-49b1-9fbf-ca9d78e15b50/ID-en-20230529-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          class="w-screen max-h-screen object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-tr from-black from-20% to-transparent flex justify-center items-end"></div>
      </div>
    </div>
  );
}

export default Banner;
