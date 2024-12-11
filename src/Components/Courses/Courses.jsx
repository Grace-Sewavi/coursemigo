import React from "react";
import "./Courses.css";
import { explore_data } from "./Explore_data.js";
import {
  courses_data,
  trending_data,
  certificate_data,
  newCourse_data,
} from "../Home/Courses_data.js";
import testimonyA from "../../assets/test-imgA.png";
import testimonyB from "../../assets/test-imgB.png";

const Courses = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-16">
        <span className=" bg-sky-200">Explo</span>re Coursemigo
      </h1>
      <p className="info mt-2 font-sans text-center">
        Dive into a world of possibilities and broaden your horizons.
      </p>

      <div className="mt-4">
        <div className="flex flex-wrap py-10 px-10  gap-6">
          {explore_data.map((explore, index) => (
            <div key={index} className=" explore-bg flex rounded-3xl w-96 h-28">
              <img
                className="w-28 h-28 rounded-s-3xl"
                src={explore.E_img}
                alt={explore.E_name}
              />
              <div className="mt-5 font-sans justify-start ml-5 gap-44">
                <p className="font-sans font-bold text-lg">{explore.E_name}</p>
                <p className="font-sans">{explore.c_no}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      <div className=" px-6 md:p-0">
        <div className="mt-20 flex gap-10 justify-center lg:flex-row flex-col ">
          <div className=" bg-pink-100 flex flex-col-reverse md:flex-row gap-2 md:gap-5 h-auto pt-6 px-4 shadow-2xl md:w-[600px]">
            <div>
              <p className="font-sans text-md font-bold">Coursemigo Plus</p>
              <p className="font-sans font-bold text-lg pt-3">
                Complete access to 7,000 courses <br /> and certifications
              </p>
              <p className="font-sans text-md pt-3">
                Develop in-demand skills with courses from leading <br />
                organizations, saving money and progressing at your own <br />{" "}
                convenience.
              </p>
              <button className=" btn font-sans py-3 mt-10 mb-4 px-6 rounded-md text-sm bg-inherit">
                Learn more
              </button>
            </div>
            <div>
              <img
                className="w-36 h-36 rounded-full mt-7"
                src={testimonyA}
                alt=""
              />
            </div>
          </div>

          <div className=" bg-pink-100 flex flex-col-reverse md:flex-row gap-2 md:gap-5  h-auto pt-6 px-4 shadow-2xl md:w-[600px] ">
            <div>
              <p className="font-sans text-md font-bold">Coursemigo Plus</p>
              <p className="font-sans md:w-[250px] font-bold text-lg pt-3">
                Content creator Professional <br/> Certificate
              </p>
              <p className="font-sans text-md pt-8">
                Learn how to create content
              </p>
              <button className=" btn font-sans py-3 mt-16 mb-4 px-6 rounded-md text-sm bg-inherit">
                Enroll Today
              </button>
            </div>
            <div className=" md:ml-40">
              <img
                className="w-36 h-36 rounded-full mt-6 "
                src={testimonyB}
                alt=""
              />
            </div>
          </div>
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

      <p className="text-4xl flex flex-wrap font-sans justify-start mt-16 ml-14">
        Top Rated Certificate
      </p>

      <div className=" mb-40">
        <div className="flex flex-wrap justify-center py-2 px-10 gap-10 ">
          {newCourse_data.map((course, index) => (
            <div key={index} className="mt-10 rounded-md w-96 shadow-2xl">
              <img
                className="w-96 h-72 rounded-t-md rounded-b-none"
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
    </div>
  );
};

export default Courses;
