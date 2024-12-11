import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    img: "https://img.freepik.com/free-photo/excited-young-man-celebrating-success-making-fist-pump-move-shouting-happy-winning-rejoicing-white-background_176420-54717.jpg?t=st=1716477062~exp=1716480662~hmac=ab46a0f0d7f844310cf6e5a6f419b2ba74fe86720b9985a537d2f88207283e25&w=996",
    name: "Free Man",
    school: "Ottawa",
    p: "Literally I didn't expect but the facilities and the neighbourhood are so great, not mentioning the nice staffs from the reception.",
  },
  {
    img: "https://img.freepik.com/free-photo/medium-shot-smiley-woman-posing_23-2149157721.jpg?t=st=1716493329~exp=1716496929~hmac=f280c90969af078dc17a9c0a05330becfe77c3cd6adecd05b57839693d516dfa&w=360",
    name: "Kimora",
    school: "Ottawa",
    p: "I appreciate the high-quality photos and virtual tours. It makes it easier to get a feel for the properties.",
  },
  {
    img: "https://img.freepik.com/free-photo/happy-man-denim-outfit-smiling-pink-background-cheerful-brunette-guy-white-tshirt-laughing-isolated-backdrop_197531-27695.jpg?t=st=1716493751~exp=1716497351~hmac=360603a7eba8dc149244c7ca549e315f4bb1b7a36f38404f1fddc47ff134a628&w=900",
    name: "Shubby",
    school: "Ottawa",
    p: "Fast loading times and seamless transitions between pages make for a pleasant user experience",
  },
  {
    img: "https://img.freepik.com/free-photo/successful-dark-skinned-female-student-happy-get-scholarship-clenches-fists-accomplishes-goal_273609-25984.jpg?t=st=1716493688~exp=1716497288~hmac=94f131f0281fe0b7c491908924fc57e6b82bb0f2e57258e757cc441213b30806&w=900",
    name: "Praises Neche",
    school: "Ottawa",
    p: "The interface is very user-friendly and intuitive! I love how easy it is to navigate through the property listings.",
  },
  {
    img: "https://img.freepik.com/free-photo/stylish-young-african-black-man-with-white-cup-coffee-posing-dark-studio-background_155003-21813.jpg?t=st=1716493620~exp=1716497220~hmac=300c7e313946fe9dcdc062540e5039acb9868c36cd0aeb63c0bb4166f888a4bd&w=360",
    name: "Veric",
    school: "Ottawa",
    p: "Recently went through a home renovation. Happy to share what I learned if anyone is interested.",
  },
  {
    img: "https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?t=st=1716493448~exp=1716497048~hmac=e947386ec50caae0074f287461acc53a32d6630895c60e39f3da417fba8d515d&w=900",
    name: "Juliet",
    school: "Ottawa",
    p: "I've had a great experience with uhomes. They are always prompt with maintenance requests and very professional.",
  },
];
export default function Card() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    return (
      <div>
        <section className="bg-slate-100 py-8">
          <div className="text-center">
            <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">
              See what students say
            </h1>
            <p className="px-3 pt-0 pb-3">
              Providing homes for millions of students all across the globe
            </p>
          </div>
  
          <div className="w-full h-fit p-8">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div
                  key={item.name}  // using item.name or another unique identifier
                  className="bg-white py-7 px-5 h-[400px] rounded-xl flex flex-col justify-center items-center border-b-8 border-[#FF5A5F]"
                >
                  <div className="rounded-full overflow-hidden h-[90px] w-[90px] border-[#FF5A5F] border">
                    <img
                      src={item.img}
                      alt={`${item.name}'s testimonial`} // adding alt text for accessibility
                      className="w-[100%] h-[100%] object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-6 pt-2">
                    <h1 className="text-xl font-bold">{item.name}</h1>
                    <p className="text-[17px] text-center">{item.p}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    );
  }
  