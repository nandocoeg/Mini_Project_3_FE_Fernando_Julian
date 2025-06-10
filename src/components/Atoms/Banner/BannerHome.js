import { ButtonStart } from "../Button";

export const BannerHome = () => {
  return (
    <div className="flex">
      <div className="relative flex h-screen w-full"> {/* Changed class to className */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/f511e96e-c4cd-49b1-9fbf-ca9d78e15b50/ID-en-20230529-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="w-full h-screen" // Changed class to className
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black from-20% to-transparent flex justify-center items-end pb-20"> {/* Changed class to className */}
          <div className="align-items m-20 text-center"> {/* Changed class to className */}
            <div className="flex justify-center m-8">
              <img
                className="w-48"
                src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg"
                alt="Disney+ Logo" // Added alt text
              />
            </div>
            <p className="m-8 font-semibold shadow-black text-2xl"> {/* Changed class to className */}
              Incididunt culpa exercitation sint laboris minim mollit qui
              aliquip elit ea cupidatat cupidatat.
            </p>
            <a href="/movie">
              <ButtonStart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
