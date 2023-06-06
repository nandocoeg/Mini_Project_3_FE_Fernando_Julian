import "./style.css";
import React from "react";
import { BsCameraReels } from "react-icons/bs";
import Header from "../../components/Atoms/Header";
import Footer from "../../components/Atoms/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container bg-black text-white">
        <div class="relative flex">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/f511e96e-c4cd-49b1-9fbf-ca9d78e15b50/ID-en-20230529-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            class="w-screen max-h-screen object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-tr from-black from-20% to-transparent flex justify-center items-end">
            <div class="align-items m-20 text-center">
              <div className="flex justify-center m-8">
                <img
                  className="w-48"
                  src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg"
                />
              </div>
              <p class="m-8 font-semibold shadow-black text-2xl">
                Incididunt culpa exercitation sint laboris minim mollit qui
                aliquip elit ea cupidatat cupidatat.
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
        </div>
        <div className="container m-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div class="flex justify-center">
                <BsCameraReels class="text-4xl m-2" />
              </div>
              <div className="font-semibold m-2">Subscribe To Your Needs</div>
              <p className="font-normal text-sm text-gray-400 m-2">
                Eu aliqua nostrud dolor voluptate reprehenderit incididunt
                fugiat nisi excepteur cillum.
              </p>
            </div>
            <div>
              <div class="flex justify-center">
                <BsCameraReels class="text-4xl m-2" />
              </div>
              <div className="font-semibold m-2">Subscribe To Your Needs</div>
              <p className="font-normal text-sm text-gray-400 m-2">
                Eu aliqua nostrud dolor voluptate reprehenderit incididunt
                fugiat nisi excepteur cillum.
              </p>
            </div>
            <div>
              <div class="flex justify-center">
                <BsCameraReels class="text-4xl m-2" />
              </div>
              <div className="font-semibold m-2">Subscribe To Your Needs</div>
              <p className="font-normal text-sm text-gray-400 m-2">
                Eu aliqua nostrud dolor voluptate reprehenderit incididunt
                fugiat nisi excepteur cillum.
              </p>
            </div>
          </div>
        </div>
        <div className="container my-32">
          <div className="title text-center">
            <h1 className="text-4xl font-bold m-6">Stories you'd expect</h1>
            <p className="font-semibold m-6 text-gray-500">
              Disney+ Hotstar is the streaming home of Disney, Pixar, Marvel,
              Star Wars, and National Geographic.
            </p>
            <div id="banner2" className="max-w-screen-lg flex justify-center">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8581/1498581-h-d39077959e91"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="container my-32">
          <div className="title text-center">
            <h1 className="text-4xl font-bold m-6">Stories you'd expect</h1>
            <p className="font-semibold m-6 text-gray-500">
              Disney+ Hotstar is the streaming home of Disney, Pixar, Marvel,
              Star Wars, and National Geographic.
            </p>
            <div id="banner2" className="max-w-screen-lg flex justify-center">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8582/1498582-h-23a7d884d674"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
