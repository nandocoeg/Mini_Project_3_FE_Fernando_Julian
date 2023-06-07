import "./style.css";
import React from "react";
import { BsCameraReels } from "react-icons/bs";
import Header from "../../components/Atoms/Header";
import Footer from "../../components/Atoms/Footer";
import { BannerHome } from "../../components/Atoms/Banner/BannerHome";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container bg-black text-white">
        <BannerHome />
        <div className="container">
          <div className="flex flex-wrap text-center justify-center gap-10">
            <div className="w-96 h-auto">
              <div class="flex justify-center">
                <BsCameraReels class="text-4xl m-2" />
              </div>
              <div className="font-semibold m-2">Subscribe To Your Needs</div>
              <p className="font-normal text-sm text-gray-400 m-2">
                Eu aliqua nostrud dolor voluptate reprehenderit incididunt
                fugiat nisi excepteur cillum.
              </p>
            </div>
            <div className="w-96 h-auto">
              <div class="flex justify-center">
                <BsCameraReels class="text-4xl m-2" />
              </div>
              <div className="font-semibold m-2">Subscribe To Your Needs</div>
              <p className="font-normal text-sm text-gray-400 m-2">
                Eu aliqua nostrud dolor voluptate reprehenderit incididunt
                fugiat nisi excepteur cillum.
              </p>
            </div>
            <div className="w-96 h-auto">
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
