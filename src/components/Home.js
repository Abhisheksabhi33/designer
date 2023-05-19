import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { StarFilled } from "@ant-design/icons";
import F1 from "./Fqa";

function Home() {
  return (
    <>
      <div className="container mx-auto">
        <section
          style={{ backgroundColor: "#143c2d" }}
          className="bg-green-900 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16"
        >
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Get Matched with Local Professionals
          </h1>
          <p className="mb-8 text-lg font-normal text-white md:text-xl">
            Answer a few questions and we’ll put you in touch with pros who can
            help
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-4">
            <div className="relative flex w-full gap-2 md:w-auto">
              <Input
                type="search"
                color="white"
                label="Zip Code"
                className="pr-20"
                containerProps={{
                  className: "min-w-[288px]",
                }}
              />
              <Button
                size="sm"
                color="white"
                className="absolute right-1 top-1 rounded"
              >
                Get Started
              </Button>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row container mx-auto">
        <div className="mx-auto w-auto md:w-1/2">
          <F1 />
        </div>

        <div className="mx-auto w-auto md:w-1/2 mt-4">
          <div className="space-y-8">
            <div className="mb-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full h-96 md:h-auto md:h-40 md:w-48"
                src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1684507600/qqq_qi296r.png"
                alt=""
              />

              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex items-center">
                  <img
                    className="w-6 h-6 mx-2 rounded-full"
                    src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1684507600/qqq_qi296r.png"
                    alt=""
                  />
                  <span>LK ARTS PHOTOGRAPHY</span>
                </div>
                <div className="flex items-center text-green-500">
                  <span className="mr-1">5.0</span>
                  <StarFilled className="my-1" />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <span className="ml-1">22 Reviews</span>
                </div>
                <p className="mb-2 tracking-tight text-gray-900 dark:text-white">
                  Lakshay has done a wonderful job with the photoshoot! This was
                  my first solo project and he was so supportive...
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <button
                  style={{ color: "#143c2d" }}
                  className="bg-transparent hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded md:w-32 md:text-sm flex items-center justify-center space-x-1"
                >
                  <span className="text-sm">Send Message</span>
                </button>
                <p className="text-xs">
                  B-801 Eastern Winds, Next to Shetty College, Opp Buntar
                  Bhavan, Kurla, (E),
                  <br />
                  <span>Bantar Bhavan</span>
                  <br />
                  <span>Mumbai</span>
                  <br />
                  <span>Maharashtra</span>
                  <br />
                  <span>400024</span>
                </p>
              </div>
            </div>
            <div className="mb-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full h-96 md:h-auto md:h-40 md:w-48"
                src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1684507600/qqq_qi296r.png"
                alt=""
              />

              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex items-center">
                  <img
                    className="w-6 h-6 mx-2 rounded-full"
                    src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1684507600/qqq_qi296r.png"
                    alt=""
                  />
                  <span>Limehouse Design Studio</span>
                </div>
                <div className="flex items-center text-green-500">
                  <span className="mr-1">5.0</span>
                  <StarFilled className="my-1" />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <span className="ml-1">22 Reviews</span>
                </div>
                <p className="mb-2 tracking-tight text-gray-900 dark:text-white">
                  Lakshay has done a wonderful job with the photoshoot! This was
                  my first solo project and he was so supportive...
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <button
                  style={{ color: "#143c2d" }}
                  className="bg-transparent hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded md:w-32 md:text-sm flex items-center justify-center space-x-1"
                >
                  <span className="text-sm">Send Message</span>
                </button>
                <p className="text-xs">
                  B-801 Eastern Winds, Next to Shetty College, Opp Buntar
                  Bhavan, Kurla, (E),
                  <br />
                  <span>Bantar Bhavan</span>
                  <br />
                  <span>Mumbai</span>
                  <br />
                  <span>Maharashtra</span>
                  <br />
                  <span>400024</span>
                </p>
              </div>
            </div>
            <div className="mb-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full h-96 md:h-auto md:h-40 md:w-48"
                src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1684507600/qqq_qi296r.png"
                alt=""
              />

              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex items-center">
                  <img
                    className="w-6 h-6 mx-2 rounded-full"
                    src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1684507600/qqq_qi296r.png"
                    alt=""
                  />
                  <span>LK ARTS PHOTOGRAPHY</span>
                </div>
                <div className="flex items-center text-green-500">
                  <span className="mr-1">5.0</span>
                  <StarFilled className="my-1" />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <span className="ml-1">22 Reviews</span>
                </div>
                <p className="mb-2 tracking-tight text-gray-900 dark:text-white">
                  Lakshay has done a wonderful job with the photoshoot! This was
                  my first solo project and he was so supportive...
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <button
                  style={{ color: "#143c2d" }}
                  className="bg-transparent hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded md:w-32 md:text-sm flex items-center justify-center space-x-1"
                >
                  <span className="text-sm">Send Message</span>
                </button>
                <p className="text-xs">
                  B-801 Eastern Winds, Next to Shetty College, Opp Buntar
                  Bhavan, Kurla, (E),
                  <br />
                  <span>Bantar Bhavan</span>
                  <br />
                  <span>Mumbai</span>
                  <br />
                  <span>Maharashtra</span>
                  <br />
                  <span>400024</span>
                </p>
              </div>
            </div>
            <div className="mb-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full h-96 md:h-auto md:h-40 md:w-48"
                src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1684507600/qqq_qi296r.png"
                alt=""
              />

              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex items-center">
                  <img
                    className="w-6 h-6 mx-2 rounded-full"
                    src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1684507600/qqq_qi296r.png"
                    alt=""
                  />
                  <span>LK ARTS PHOTOGRAPHY</span>
                </div>
                <div className="flex items-center text-green-500">
                  <span className="mr-1">5.0</span>
                  <StarFilled className="my-1" />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <span className="ml-1">22 Reviews</span>
                </div>
                <p className="mb-2 tracking-tight text-gray-900 dark:text-white">
                  Lakshay has done a wonderful job with the photoshoot! This was
                  my first solo project and he was so supportive...
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <button
                  style={{ color: "#143c2d" }}
                  className="bg-transparent hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded md:w-32 md:text-sm flex items-center justify-center space-x-1"
                >
                  <span className="text-sm">Send Message</span>
                </button>
                <p className="text-xs">
                  B-801 Eastern Winds, Next to Shetty College, Opp Buntar
                  Bhavan, Kurla, (E),
                  <br />
                  <span>Bantar Bhavan</span>
                  <br />
                  <span>Mumbai</span>
                  <br />
                  <span>Maharashtra</span>
                  <br />
                  <span>400024</span>
                </p>
              </div>
            </div>
            <div className="mb-5 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                className="object-cover w-full h-96 md:h-auto md:h-40 md:w-48"
                src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1684507600/qqq_qi296r.png"
                alt=""
              />

              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex items-center">
                  <img
                    className="w-6 h-6 mx-2 rounded-full"
                    src="https://res.cloudinary.com/dgsgi8g9f/image/upload/v1684507600/qqq_qi296r.png"
                    alt=""
                  />
                  <span>LK ARTS PHOTOGRAPHY</span>
                </div>
                <div className="flex items-center text-green-500">
                  <span className="mr-1">5.0</span>
                  <StarFilled className="my-1" />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <span className="ml-1">22 Reviews</span>
                </div>
                <p className="mb-2 tracking-tight text-gray-900 dark:text-white">
                  Lakshay has done a wonderful job with the photoshoot! This was
                  my first solo project and he was so supportive...
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <button
                  style={{ color: "#143c2d" }}
                  className="bg-transparent hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded md:w-32 md:text-sm flex items-center justify-center space-x-1"
                >
                  <span className="text-sm">Send Message</span>
                </button>
                <p className="text-xs">
                  B-801 Eastern Winds, Next to Shetty College, Opp Buntar
                  Bhavan, Kurla, (E),
                  <br />
                  <span>Bantar Bhavan</span>
                  <br />
                  <span>Mumbai</span>
                  <br />
                  <span>Maharashtra</span>
                  <br />
                  <span>400024</span>
                </p>
              </div>
            </div>

            {/* Repeat the above section for other professionals */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
