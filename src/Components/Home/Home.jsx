import React from "react";
import "./Home.css";
import { courses_data, trending_data, certificate_data } from "./Courses_data";
import { news_data } from "./News_data";
import image from "../../assets/testimonyA.png";
import testiB from "../../assets/TestimonialB.jpg";
import testiC from "../../assets/TestimonialC (2).jpg";

const Home = () => {
  return (
    <>
      <div className=" hero w-full h-full ">
        <div>
          <h1 className="text-6xl font-bold text-center pt-28 leading-snug">
            Begin Your <br />
            <span className=" bg-sky-200">Lear</span>ning Journey
          </h1>
        </div>
        <form className="mt-10 flex justify-center relative">
          <i className="bx bx-search absolute top-5 text-gray-400 left-96 md:block hidden"></i>
          <input
            className=" input h-12 px-10 font-sans items-start text-start text-sm rounded-md "
            placeholder="search for anything"
          />
        </form>

        <p className="font-sans mt-5 text-lg text-center">
          Embark on a learning journey without limits.
        </p>

        <div className="flex justify-center">
          <button className="w-40 h-11 rounded-md mt-8 font-bold font-sans bg-blue-400">
            Enroll Now
          </button>
        </div>
        <div className=" flex justify-center mt-16 ">
          <div className="hidden lg:ml-auto lg:mt-8 lg:mr-auto bg-white lg:flex  lg:flex-row  justify-center items-center lg:overflow-hidden lg:justify-center lg:align-text-bottom  lg:gap-12 rounded-3xl lg:w-9/12 border-solid border-gray-400 border-2">
            <div className=" my-5">
              <p className="text-4xl font-bold">
                70% <br />
              </p>

              <span className="font-sans">Reduction in training cost</span>
            </div>
            <div className="my-5 w-0.5 h-14 bg-gray-400 hidden lg:block"></div>

            <div className=" my-5">
              <p className="text-4xl font-bold">
                1500+ <br />
              </p>
              <span className="font-sans">Active Users</span>
            </div>
            <div className=" my-5 w-0.5 h-14 bg-gray-400 hidden lg:block"></div>

            <div className=" my-5">
              <p className="text-4xl font-bold">
                70% <br />
              </p>
              <span className="font-sans"> Reduction in training cost</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-44">
        <h1 className="text-5xl font-bold text-center">
          <span className=" bg-sky-200">Explo</span>re Coursemigo
        </h1>
        <p className="info mt-2 font-sans text-center">
          Dive into a world of possibilities and broaden your horizons.
        </p>

        <p className="text-4xl font-sans flex justify-start ml-14 my-10">
          Most Popular Courses
        </p>

        <div className="">
          <div className="flex flex-wrap justify-center py-2 px-10 gap-10">
            {courses_data.map((course, index) => (
              <div key={index} className="rounded-md w-96 shadow-2xl">
                <img
                  className="w-96 h-72 rounded-t-md"
                  src={course.c_img}
                  alt={course.c_name}
                />
                <div className="flex h-16 mt-3 font-sans justify-start ml-5 gap-44">
                  <p className="font-sans">88,661 students</p>
                  <p className="font-sans">1hr 13m</p>
                </div>

                <p className=" text-xl font-sans -mt-4 flex justify-start text-start ml-5 font-bold">
                  {course.c_name}
                </p>
                <p className="pt-5 font-sans ml-5 my-4">{course.ins_name}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-4xl flex  font-sans justify-start mt-16 ml-14">
          Trending Courses
        </p>

        <div className="">
          <div className="flex flex-wrap justify-center py-2 px-10 gap-10">
            {trending_data.map((course, index) => (
              <div
                key={index}
                className="mt-10 rounded-md font-sans w-96 shadow-2xl"
              >
                <img
                  className="w-96 h-72 rounded-t-md"
                  src={course.c_img}
                  alt={course.c_name}
                />
                <div className="flex h-16 justify-start mt-3 ml-5 font-sans gap-44">
                  <p className="font-sans">88,661 students</p>
                  <p className="font-sans">1hr 13m</p>
                </div>

                <p className="text-xl font-sans -mt-4 flex justify-start text-start ml-5 font-bold">
                  {course.c_name}
                </p>
                <p className="pt-5 font-sans ml-5 my-4">{course.ins_name}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-4xl flex flex-wrap font-sans justify-start mt-16 ml-14">
          Explore University Certificate
        </p>

        <div className="">
          <div className="flex flex-wrap justify-center py-2 px-10 gap-10 ">
            {certificate_data.map((course, index) => (
              <div key={index} className="mt-10 rounded-md w-96 shadow-2xl">
                <img
                  className="w-96 h-72 rounded-t-md"
                  src={course.c_img}
                  alt={course.c_name}
                />

                <p className="mt-7 text-xl font-sans flex justify-start text-start ml-5 font-bold">
                  {course.c_name}
                </p>
                <p className="pt-5 ml-5 font-sans my-7">{course.ins_name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-8 pt-20">
          <h1 className="text-5xl font-bold leading-tight text-center">
            From the Coursemigo <br />
            <span className=" bg-sky-200">Comm</span>unity
          </h1>
          <p className="mt-3 font-sans text-center">
            30+ million people have already joined Coursemigo
          </p>

          <div className="mt-24">
            <div className="">
              <div>
                <img
                  className="w-40 h-40 rounded-full ml-auto mr-auto"
                  src={image}
                  alt=""
                />
                <div className="">
                  <p className="text-blue-400 font-sans text-2xl text-center font-bold">
                    Chris
                  </p>
                  <p className=" pt-3 font-sans text-lg text-center">
                    United States
                  </p>
                  <div className="w-20 h-0.5 bg-red-400 ml-auto mr-auto mt-1 rounded-sm"></div>
                  <p className="mt-10 lg:text-lg text-md text-center font-sans">
                    "A fantastic learning experience! The courses are well-
                    <br />
                    structured and easy to follow, and the family sharing
                    features
                    <br />
                    is a game changer, I've been able to upskill at my own pace,
                    <br />
                    and its been a huge boost for both my personal and
                    <br />
                    professional growth."
                  </p>
                  <div className="w-20 h-0.5 bg-red-400 ml-auto mr-auto mt-1 rounded-sm"></div>
                </div>
              </div>

              <div className="hidden">
                <img
                  className="w-40 h-40 rounded-full ml-auto mr-auto"
                  src={testiB}
                  alt=""
                />
                <div className="">
                  <p className="text-blue-400 font-sans text-2xl text-center font-bold">
                    Chris
                  </p>
                  <p className=" pt-3 font-sans text-lg text-center">
                    United States
                  </p>
                  <div className="w-20 h-0.5 bg-red-400 ml-auto mr-auto mt-1 rounded-sm"></div>
                  <p className="mt-10 lg:text-lg text-md text-center font-sans">
                    "A fantastic learning experience! The courses are well-
                    <br />
                    structured and easy to follow, and the family sharing
                    features
                    <br />
                    is a game changer, I've been able to upskill at my own pace,
                    <br />
                    and its been a huge boost for both my personal and
                    <br />
                    professional growth."
                  </p>
                  <div className="w-20 h-0.5 bg-red-400 ml-auto mr-auto mt-1 rounded-sm"></div>
                </div>
              </div>

              <div className="hidden">
                <img
                  className="w-40 h-40 rounded-full ml-auto mr-auto"
                  src={testiC}
                  alt=""
                />
                <div className="">
                  <p className="text-blue-400 font-sans text-2xl text-center font-bold">
                    Chris
                  </p>
                  <p className=" pt-3 font-sans text-lg text-center">
                    United States
                  </p>
                  <div className="w-20 h-0.5 bg-red-400 ml-auto mr-auto mt-1 rounded-sm"></div>
                  <p className="mt-10 lg:text-lg text-md text-center font-sans">
                    "A fantastic learning experience! The courses are well-
                    <br />
                    structured and easy to follow, and the family sharing
                    features
                    <br />
                    is a game changer, I've been able to upskill at my own pace,
                    <br />
                    and its been a huge boost for both my personal and
                    <br />
                    professional growth."
                  </p>
                  <div className="w-20 h-0.5 bg-red-400 ml-auto mr-auto mt-1 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-div">
          <h1 className="text-5xl font-bold pt-10 leading-snug">
            Empower your team <br /> today
          </h1>
          <p className="pt-10 lg:pt-20 text-md lg:text-lg text-gray-300 font-sans">
            Equip your employee and citizens with the skills they need to thrive
            in their <br />
            careers and achieve their life goals. With the righttraining and
            resources, you can <br />
            foster growth, boost productivity, and unlock potentials across your
            team.
          </p>

          <button className="lg:mt-10 mt-6 py-3 px-8 bg-sky-400 font-sans font-bold rounded-md text-sm">
            Learn more
          </button>
        </div>

        <div className="my-8 pt-20">
          <h1 className="text-5xl font-bold text-center">
            News and <span className=" bg-sky-200">Upd</span>ates
          </h1>
          <p className="text-md lg:text-md font-sans text-center mt-5">
            Stay informed with the latest blog posts, and article related to
            online education. Explore <br />
            Coursemigo's offerings and updates to enhance your learning
            experience
          </p>

          <div className="h-4/5">
            <div className="flex flex-wrap justify-center gap-20 mt-16">
              {news_data.map((news, index) => (
                <div key={index} className="mt-3 rounded-xl w-80 shadow-md">
                  <img
                    className="w-80 h-60 shadow-2xl mix-blend-overlay rounded-t-3xl"
                    src={news.n_img}
                    alt={news.n_name}
                  />

                  <p className="mt-5 text-xl ml-5 font-bold font-sans text-start">
                    {news.n_name}
                  </p>
                  <p className="py-8 flex ml-5 font-sans text-md text-start">
                    {news.n_desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
