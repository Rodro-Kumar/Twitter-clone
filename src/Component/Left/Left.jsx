import React from "react";
import "../Left/Left.css";
import { FaXTwitter } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { RiFileListLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import userlogo from "../../assets/user.png";
import Flex from "../Common/Flex";
import { FiSettings } from "react-icons/fi";
import Button from "../Common/Button";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlinePoll } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import postimg from "../../assets/1.jpeg";
import { FaRegComment } from "react-icons/fa";
import postimg2 from "../../assets/2.jpeg";
import { FiShare } from "react-icons/fi";
import taufik from "../../assets/taufik.jpg";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { RiBarChartGroupedFill } from "react-icons/ri";
import amir from "../../assets/amir.jpg";
import efa from "../../assets/efa.jpg";
import post3 from "../../assets/3.jpeg";
import piplu from "../../assets/piplu.jpg";
import habib from "../../assets/habib.jpg";
import rashed from "../../assets/rashed.jpg";

const Left = () => {
  return (
    <>
      <div className="main">
        <div className="container p-0 h-f">
          <Flex className={"justify-center"}>
            {/* ========================== */}
            <div className="left w-28">
              <div className="wraper flex flex-col gap-y-3 pr-5  text-center sticky top-0">
                <div className="all-icon ">
                  <a href="#">
                    <FaXTwitter className="text-white h-14 w-14 rounded-full  py-2 px-2 hover:bg-[#1d1c1cd7]" />
                  </a>
                  <a href="#" className="home  ">
                    <GoHome className=" homeIcon text-white h-12 w-12 rounded-full  py-2 px-2 hover:bg-[#1d1c1cd7] " />
                  </a>
                  <a href="#">
                    <IoSearch className="text-white h-12 w-12 rounded-full  py-2 px-2 hover:bg-[#1d1c1cd7]" />
                  </a>
                  <a href="#" className="bellIcon ">
                    <IoNotificationsOutline className=" text-white h-12 w-12 rounded-full  py-2 px-2 hover:bg-[#1d1c1cd7]" />
                  </a>
                  <a href="#">
                    <HiOutlineMail className="text-white h-12 w-12 rounded-full  py-2 px-2 hover:bg-[#1d1c1cd7]" />{" "}
                  </a>
                  <a href="#">
                    <RiFileListLine className="text-white h-12 w-12 rounded-full  py-2 px-2 hover:bg-[#1d1c1cd7]" />{" "}
                  </a>
                  <a href="#">
                    <FaRegBookmark className="text-white h-12 w-12 rounded-full  py-2  hover:bg-[#1d1c1cd7]" />{" "}
                  </a>
                  <a href="#">
                    <HiOutlineUsers className="text-white h-12 w-12 rounded-full  py-2 px-2 hover:bg-[#1d1c1cd7]" />{" "}
                  </a>
                  <a href="#">
                    <FaXTwitter className="text-white h-12 w-12 rounded-full  py-2 px-2 hover:bg-[#1d1c1cd7]" />{" "}
                  </a>
                  <a href="#">
                    <HiOutlineUser className="text-white h-12 w-12 rounded-full  py-2 px-2 hover:bg-[#1d1c1cd7]" />{" "}
                  </a>
                  <a href="#">
                    <CgMoreO className="text-white h-12 w-12 rounded-full  py-2 px-2 hover:bg-[#1d1c1cd7]" />{" "}
                  </a>
                  <a href="#" className="mt-2">
                    <MdOutlineSwitchAccessShortcutAdd
                      className="text-white h-16 w-16 rounded-full  bg-skyblue py-2 px-2 hover:bg-[#1d9cf0cc] transition-all"
                      title="Post"
                    />
                  </a>
                </div>

                <div className="user-img pt-32">
                  <a href="#">
                    <img
                      src={userlogo}
                      alt={userlogo}
                      title="User"
                      className=" w-16 h-16 rounded-full bg-cover bg-no-repeat bg-center  hover:bg-[#1d1c1cd7] transition-all py-2 px-2"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* ======================== */}
            <div className="middle border-l-2  border-r-2 border-solid border-[#272727]">
              <div className="middle-content w-[600px]">
                <div className=" bg-[#00000081] backdrop-blur sticky top-0 py-3 header flex items-center justify-around border-b-2 border-solid border-[#272727]">
                  <div className="foryou">
                    <a
                      href="#"
                      className="text-white font-worksans text-lg font-bold "
                    >
                      For you
                    </a>
                  </div>

                  <a
                    href="#"
                    className="text-white font-worksans text-lg font-bold"
                  >
                    Following
                  </a>
                  <a href="#" className="text-white">
                    <FiSettings />
                  </a>
                </div>
                <div className="post pb-3 border-b-2 border-[#272727]">
                  <div className="top flex items-center pl-3 gap-x-4 py-4">
                    <img
                      src={userlogo}
                      alt={userlogo}
                      className="w-11 h-11 rounded-full"
                    />
                    <input
                      type="text"
                      placeholder="What is happening?!"
                      className="text-white w-full pt-2 bg-transparent border-none outline-none placeholder:text-[#464444] placeholder:font-worksans placeholder:text-2xl"
                    />
                  </div>
                  <div className="bottom pl-16 pr-4 flex items-center justify-between">
                    <div className="left flex items-center gap-x-5">
                      <div className="gallery">
                        <RiGalleryLine className="text-skyblue text-xl cursor-pointer" />
                      </div>
                      <div className="gif">
                        <MdOutlineGifBox className="text-skyblue text-xl cursor-pointer" />
                      </div>
                      <div className="poll">
                        <MdOutlinePoll className="text-skyblue text-xl cursor-pointer" />
                      </div>
                      <div className="smile">
                        <FaRegSmile className="text-skyblue text-xl cursor-pointer" />
                      </div>
                      <div className="schedule">
                        <GrSchedulePlay className="text-skyblue text-xl cursor-pointer" />
                      </div>
                      <div className="location">
                        <IoLocationOutline className="text-skyblue text-xl cursor-pointer" />
                      </div>
                    </div>
                    <div className="right">
                      <Button
                        className={
                          "text-white bg-skyblue py-4 px-6 leading-none rounded-3xl text-xl font-bold font-worksans hover:bg-sky-600"
                        }
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="all_post  pt-4">
                  <div className="post border-b-2 border-[#272727] px-3 pb-3 pt-3">
                    <div className="top-part flex justify-between">
                      <div className="name  flex items-start gap-x-3">
                        <picture>
                          <img
                            src={taufik}
                            alt={taufik}
                            className="h-13 w-44 rounded-full"
                          />
                        </picture>
                        <div className="name-description">
                          <div className="all-name flex items-center">
                            <h3 className="inline-block text-xl font-worksans font-bold text-white hover:underline cursor-pointer">
                              Taufik Islam
                            </h3>
                            <div className="handle flex items-center relative">
                              <RiVerifiedBadgeFill className="text-skyblue ml-1" />
                              <p className="text-[#797777] font-worksans cursor-pointer pl-1 pr-1">
                                @taufik258741
                              </p>
                              <p className="text-[#918e8e] pb-5 absolute top-[-16px] right-[36px] text-3xl">
                                .
                              </p>
                              <p className="text-[#918e8e] font-worksans ml-2">
                                55m
                              </p>
                            </div>
                          </div>

                          <div className="post-details">
                            <p className="text-[#ffffffd0] font-worksans">
                              We're targeting no earlier than Thursday, Feb. 22,
                              for the launch of NASA's{" "}
                              <span className="text-skyblue">@SpaceX</span>{" "}
                              Crew-8 mission to the{" "}
                              <span className="text-skyblue">
                                @Space_Station
                              </span>{" "}
                              . Get the details on our #Crew8 blog:{" "}
                              <a
                                href="#"
                                className=" text-skyblue hover:underline"
                              >
                                https://go.nasa.gov/3Oruudt
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                        <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                      </div>
                    </div>
                    <div className="post-img ">
                      <picture>
                        <img
                          src={postimg}
                          alt={postimg}
                          className="w-[510px] h-full ml-auto object-cover bg-top rounded-xl
                          "
                        />
                      </picture>
                    </div>
                    <div className="reaction flex items-center gap-x-[48px] pt-5 ">
                      <div className="part-1 flex items-center gap-x-[72px] ml-auto">
                        <div className="comment flex items-center  cursor-pointer hover:">
                          <FaRegComment className="text-[#63676c] py-2 px-2 rounded-full text-[33px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="repost flex items-center  cursor-pointer">
                          <BiRepost className="text-[#7e7d7d] py-1 px-1 rounded-full text-[33px] repost_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="love flex items-center  cursor-pointer">
                          <FaRegHeart className="text-[#7e7d7d] py-1  rounded-full text-[25px] love_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="comment flex items-center  cursor-pointer">
                          <RiBarChartGroupedFill className="text-[#7e7d7d] py-1 px-2 rounded-full text-[34px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                      </div>

                      <div className="part-2 flex items-center ">
                        <div className="bokkmark">
                          <FaRegBookmark className="text-[#7e7d7d]  cursor-pointer py-2  rounded-full text-[33px] post_icon" />
                        </div>
                        <div className="share">
                          <FiShare className="text-[#7e7d7d]  cursor-pointer py-2 px-2 rounded-full text-[34px] post_icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post border-b-2 border-[#272727] px-3 pb-3 pt-3">
                    <div className="top-part flex justify-between">
                      <div className="name  flex items-start gap-x-3">
                        <picture>
                          <img
                            src={amir}
                            alt={amir}
                            className="h-13 w-44 rounded-full"
                          />
                        </picture>
                        <div className="name-description">
                          <div className="all-name flex items-center">
                            <h3 className="inline-block text-xl font-worksans font-bold text-white hover:underline cursor-pointer">
                              Amir Hamza Khan
                            </h3>
                            <div className="handle flex items-center relative">
                              <RiVerifiedBadgeFill className="text-skyblue ml-1" />
                              <p className="text-[#797777] font-worksans cursor-pointer pl-1 pr-1">
                                @amir2584
                              </p>
                              <p className="text-[#918e8e] pb-5 absolute top-[-16px] right-[36px] text-3xl">
                                .
                              </p>
                              <p className="text-[#918e8e] font-worksans ml-2">
                                20m
                              </p>
                            </div>
                          </div>

                          <div className="post-details">
                            <p className="text-[#ffffffd0] font-worksans">
                              We're targeting no earlier than Thursday, Feb. 22,
                              for the launch of NASA's{" "}
                              <span className="text-skyblue">@SpaceX</span>{" "}
                              Crew-8 mission to the{" "}
                              <span className="text-skyblue">
                                @Space_Station
                              </span>{" "}
                              . Get the details on our #Crew8 blog:{" "}
                              <a
                                href="#"
                                className=" text-skyblue hover:underline"
                              >
                                https://go.nasa.gov/3Oruudt
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                        <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                      </div>
                    </div>
                    <div className="post-img ">
                      <picture>
                        <img
                          src={postimg2}
                          alt={postimg2}
                          className="w-[510px] h-full ml-auto object-cover bg-top rounded-xl
                          "
                        />
                      </picture>
                    </div>
                    <div className="reaction flex items-center gap-x-[48px] pt-5 ">
                      <div className="part-1 flex items-center gap-x-[72px] ml-auto">
                        <div className="comment flex items-center  cursor-pointer hover:">
                          <FaRegComment className="text-[#63676c] py-2 px-2 rounded-full text-[33px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="repost flex items-center  cursor-pointer">
                          <BiRepost className="text-[#7e7d7d] py-1 px-1 rounded-full text-[33px] repost_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="love flex items-center  cursor-pointer">
                          <FaRegHeart className="text-[#7e7d7d] py-1  rounded-full text-[25px] love_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="comment flex items-center  cursor-pointer">
                          <RiBarChartGroupedFill className="text-[#7e7d7d] py-1 px-2 rounded-full text-[34px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                      </div>

                      <div className="part-2 flex items-center ">
                        <div className="bokkmark">
                          <FaRegBookmark className="text-[#7e7d7d]  cursor-pointer py-2  rounded-full text-[33px] post_icon" />
                        </div>
                        <div className="share">
                          <FiShare className="text-[#7e7d7d]  cursor-pointer py-2 px-2 rounded-full text-[34px] post_icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post border-b-2 border-[#272727] px-3 pb-3 pt-3">
                    <div className="top-part flex justify-between">
                      <div className="name  flex items-start gap-x-3">
                        <picture>
                          <img
                            src={efa}
                            alt={efa}
                            className="h-13 w-44 rounded-full"
                          />
                        </picture>
                        <div className="name-description">
                          <div className="all-name flex items-center">
                            <h3 className="inline-block text-xl font-worksans font-bold text-white hover:underline cursor-pointer">
                              Israt Efa
                            </h3>
                            <div className="handle flex items-center relative">
                              <RiVerifiedBadgeFill className="text-skyblue ml-1" />
                              <p className="text-[#797777] font-worksans cursor-pointer pl-1 pr-1">
                                @efa2548
                              </p>
                              <p className="text-[#918e8e] pb-5 absolute top-[-16px] right-[36px] text-3xl">
                                .
                              </p>
                              <p className="text-[#918e8e] font-worksans ml-2">
                                now
                              </p>
                            </div>
                          </div>

                          <div className="post-details">
                            <p className="text-[#ffffffd0] font-worksans">
                              This is the Lonely Castle, a 2,000 year old tomb
                              in Hegra, an ancient city in Saudi Arabia. It's a
                              perfect example of "rock-cut architecture" — when
                              you carve a whole building out of stone. And there
                              are plenty more places like it, all around the
                              world...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                        <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                      </div>
                    </div>
                    <div className="post-img ">
                      <picture>
                        <img
                          src={post3}
                          alt={post3}
                          className="w-[510px] h-full ml-auto object-cover bg-top rounded-xl
                          "
                        />
                      </picture>
                    </div>
                    <div className="reaction flex items-center gap-x-[48px] pt-5 ">
                      <div className="part-1 flex items-center gap-x-[72px] ml-auto">
                        <div className="comment flex items-center  cursor-pointer hover:">
                          <FaRegComment className="text-[#63676c] py-2 px-2 rounded-full text-[33px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="repost flex items-center  cursor-pointer">
                          <BiRepost className="text-[#7e7d7d] py-1 px-1 rounded-full text-[33px] repost_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="love flex items-center  cursor-pointer">
                          <FaRegHeart className="text-[#7e7d7d] py-1  rounded-full text-[25px] love_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="comment flex items-center  cursor-pointer">
                          <RiBarChartGroupedFill className="text-[#7e7d7d] py-1 px-2 rounded-full text-[34px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                      </div>

                      <div className="part-2 flex items-center ">
                        <div className="bokkmark">
                          <FaRegBookmark className="text-[#7e7d7d]  cursor-pointer py-2  rounded-full text-[33px] post_icon" />
                        </div>
                        <div className="share">
                          <FiShare className="text-[#7e7d7d]  cursor-pointer py-2 px-2 rounded-full text-[34px] post_icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post border-b-2 border-[#272727] px-3 pb-3 pt-3">
                    <div className="top-part flex justify-between">
                      <div className="name  flex items-start gap-x-3">
                        <picture>
                          <img
                            src={piplu}
                            alt={piplu}
                            className="h-13 w-44 rounded-full"
                          />
                        </picture>
                        <div className="name-description">
                          <div className="all-name flex items-center">
                            <h3 className="inline-block text-xl font-worksans font-bold text-white hover:underline cursor-pointer">
                              JC Piplu
                            </h3>
                            <div className="handle flex items-center relative">
                              <RiVerifiedBadgeFill className="text-skyblue ml-1" />
                              <p className="text-[#797777] font-worksans cursor-pointer pl-1 pr-1">
                                @jcpiplu54845
                              </p>
                              <p className="text-[#918e8e] pb-5 absolute top-[-16px] right-[36px] text-3xl">
                                .
                              </p>
                              <p className="text-[#918e8e] font-worksans ml-2">
                                46m
                              </p>
                            </div>
                          </div>

                          <div className="post-details">
                            <p className="text-[#ffffffd0] font-worksans">
                              We're targeting no earlier than Thursday, Feb. 22,
                              for the launch of NASA's{" "}
                              <span className="text-skyblue">@SpaceX</span>{" "}
                              Crew-8 mission to the{" "}
                              <span className="text-skyblue">
                                @Space_Station
                              </span>{" "}
                              . Get the details on our #Crew8 blog:{" "}
                              <a
                                href="#"
                                className=" text-skyblue hover:underline"
                              >
                                https://go.nasa.gov/3Oruudt
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                        <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                      </div>
                    </div>
                    <div className="post-img ">
                      <picture>
                        <img
                          src={postimg}
                          alt={postimg}
                          className="w-[510px] h-full ml-auto object-cover bg-top rounded-xl
                          "
                        />
                      </picture>
                    </div>
                    <div className="reaction flex items-center gap-x-[48px] pt-5 ">
                      <div className="part-1 flex items-center gap-x-[72px] ml-auto">
                        <div className="comment flex items-center  cursor-pointer hover:">
                          <FaRegComment className="text-[#63676c] py-2 px-2 rounded-full text-[33px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="repost flex items-center  cursor-pointer">
                          <BiRepost className="text-[#7e7d7d] py-1 px-1 rounded-full text-[33px] repost_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="love flex items-center  cursor-pointer">
                          <FaRegHeart className="text-[#7e7d7d] py-1  rounded-full text-[25px] love_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="comment flex items-center  cursor-pointer">
                          <RiBarChartGroupedFill className="text-[#7e7d7d] py-1 px-2 rounded-full text-[34px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                      </div>

                      <div className="part-2 flex items-center ">
                        <div className="bokkmark">
                          <FaRegBookmark className="text-[#7e7d7d]  cursor-pointer py-2  rounded-full text-[33px] post_icon" />
                        </div>
                        <div className="share">
                          <FiShare className="text-[#7e7d7d]  cursor-pointer py-2 px-2 rounded-full text-[34px] post_icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post border-b-2 border-[#272727] px-3 pb-3 pt-3">
                    <div className="top-part flex justify-between">
                      <div className="name  flex items-start gap-x-3">
                        <picture>
                          <img
                            src={habib}
                            alt={habib}
                            className="h-13 w-44 rounded-full"
                          />
                        </picture>
                        <div className="name-description">
                          <div className="all-name flex items-center">
                            <h3 className="inline-block text-xl font-worksans font-bold text-white hover:underline cursor-pointer">
                              Habibur Rahman
                            </h3>
                            <div className="handle flex items-center relative">
                              <RiVerifiedBadgeFill className="text-skyblue ml-1" />
                              <p className="text-[#797777] font-worksans cursor-pointer pl-1 pr-1">
                                @habib545
                              </p>
                              <p className="text-[#918e8e] pb-5 absolute top-[-16px] right-[38px] text-3xl">
                                .
                              </p>
                              <p className="text-[#918e8e] font-worksans ml-2">
                                hour
                              </p>
                            </div>
                          </div>

                          <div className="post-details">
                            <p className="text-[#ffffffd0] font-worksans">
                              We're targeting no earlier than Thursday, Feb. 22,
                              for the launch of NASA's{" "}
                              <span className="text-skyblue">@SpaceX</span>{" "}
                              Crew-8 mission to the{" "}
                              <span className="text-skyblue">
                                @Space_Station
                              </span>{" "}
                              . Get the details on our #Crew8 blog:{" "}
                              <a
                                href="#"
                                className=" text-skyblue hover:underline"
                              >
                                https://go.nasa.gov/3Oruudt
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                        <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                      </div>
                    </div>
                    <div className="post-img ">
                      <picture>
                        <img
                          src={postimg2}
                          alt={postimg2}
                          className="w-[510px] h-full ml-auto object-cover bg-top rounded-xl
                          "
                        />
                      </picture>
                    </div>
                    <div className="reaction flex items-center gap-x-[48px] pt-5 ">
                      <div className="part-1 flex items-center gap-x-[72px] ml-auto">
                        <div className="comment flex items-center  cursor-pointer hover:">
                          <FaRegComment className="text-[#63676c] py-2 px-2 rounded-full text-[33px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="repost flex items-center  cursor-pointer">
                          <BiRepost className="text-[#7e7d7d] py-1 px-1 rounded-full text-[33px] repost_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="love flex items-center  cursor-pointer">
                          <FaRegHeart className="text-[#7e7d7d] py-1  rounded-full text-[25px] love_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="comment flex items-center  cursor-pointer">
                          <RiBarChartGroupedFill className="text-[#7e7d7d] py-1 px-2 rounded-full text-[34px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                      </div>

                      <div className="part-2 flex items-center ">
                        <div className="bokkmark">
                          <FaRegBookmark className="text-[#7e7d7d]  cursor-pointer py-2  rounded-full text-[33px] post_icon" />
                        </div>
                        <div className="share">
                          <FiShare className="text-[#7e7d7d]  cursor-pointer py-2 px-2 rounded-full text-[34px] post_icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post border-b-2 border-[#272727] px-3 pb-3 pt-3">
                    <div className="top-part flex justify-between">
                      <div className="name  flex items-start gap-x-3">
                        <picture>
                          <img
                            src={rashed}
                            alt={rashed}
                            className="h-13 w-44 rounded-full"
                          />
                        </picture>
                        <div className="name-description">
                          <div className="all-name flex items-center">
                            <h3 className="inline-block text-xl font-worksans font-bold text-white hover:underline cursor-pointer">
                              Md Rashed Hossain
                            </h3>
                            <div className="handle flex items-center relative">
                              <RiVerifiedBadgeFill className="text-skyblue ml-1" />
                              <p className="text-[#797777] font-worksans cursor-pointer pl-1 pr-1">
                                @rashed4845
                              </p>
                              <p className="text-[#918e8e] pb-5 absolute top-[-16px] right-[38px] text-3xl">
                                .
                              </p>
                              <p className="text-[#918e8e] font-worksans ml-2">
                                25m
                              </p>
                            </div>
                          </div>

                          <div className="post-details">
                            <p className="text-[#ffffffd0] font-worksans">
                              This is the Lonely Castle, a 2,000 year old tomb
                              in Hegra, an ancient city in Saudi Arabia. It's a
                              perfect example of "rock-cut architecture" — when
                              you carve a whole building out of stone. And there
                              are plenty more places like it, all around the
                              world...
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                        <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                      </div>
                    </div>
                    <div className="post-img ">
                      <picture>
                        <img
                          src={postimg}
                          alt={postimg}
                          className="w-[512px] h-full ml-auto object-cover bg-top rounded-xl
                          "
                        />
                      </picture>
                    </div>
                    <div className="reaction flex items-center gap-x-[48px] pt-5 ">
                      <div className="part-1 flex items-center gap-x-[72px] ml-auto">
                        <div className="comment flex items-center  cursor-pointer hover:">
                          <FaRegComment className="text-[#63676c] py-2 px-2 rounded-full text-[33px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="repost flex items-center  cursor-pointer">
                          <BiRepost className="text-[#7e7d7d] py-1 px-1 rounded-full text-[33px] repost_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="love flex items-center  cursor-pointer">
                          <FaRegHeart className="text-[#7e7d7d] py-1  rounded-full text-[25px] love_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                        <div className="comment flex items-center  cursor-pointer">
                          <RiBarChartGroupedFill className="text-[#7e7d7d] py-1 px-2 rounded-full text-[34px] post_icon" />
                          <p className="text-[#7e7d7d] text-base">84</p>
                        </div>
                      </div>

                      <div className="part-2 flex items-center ">
                        <div className="bokkmark">
                          <FaRegBookmark className="text-[#7e7d7d]  cursor-pointer py-2  rounded-full text-[33px] post_icon" />
                        </div>
                        <div className="share">
                          <FiShare className="text-[#7e7d7d]  cursor-pointer py-2 px-2 rounded-full text-[34px] post_icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================== */}
            <div className="right  pl-9">
              <div className="top">
                <div className="input fixed bg-black pt-2">
                  <div className="input-content relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="relative bg-[#3d3c3c] text-white w-full rounded-3xl py-3 pl-16 pr-28"
                    />
                    <span>
                      <IoIosSearch className="absolute top-[10px] left-0 text-[#9b9999] text-3xl ml-3" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="subscribe bg-[#16181c] text-white px-5 py-5 rounded-xl mt-20">
                <h3 className="font-worksans font-bold text-xl pb-2">
                  Subscribe to Premium
                </h3>
                <p className="font-normal font-worksans text-[15px] max-w-[311px] pb-3">
                  Subscribe to unlock new features and if eligible, receive a
                  share of ads revenue.
                </p>
                <Button
                  className={
                    "bg-skyblue text-white font-worksans font-bold text-[15px] py-[6px] px-5 rounded-3xl hover:bg-sky-600"
                  }
                >
                  Subscribe
                </Button>
              </div>

              <div className="trend bg-[#16181c] w-full text-white mt-6 rounded-xl  pt-5">
                <h3 className="text-xl font-extrabold font-worksans mb-3 px-5">
                  Trends for you
                </h3>
                <div className="trend py-2 hover:bg-[#f7f7f707] cursor-pointer px-5">
                  <div className="text-[#52565b] flex justify-between items-center pb-1">
                    <p className="text-[13px] font-normal font-worksans">
                      Trending in Bangladesh
                    </p>
                    <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                      <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                    </div>
                  </div>
                  <h4 className="text-[15px] font-bold font-worksans pb-1">
                    Tiktok
                  </h4>
                  <p className="text-[13px] font-worksans font-normal text-[#52565b]">
                    26.8K pots
                  </p>
                </div>
                <div className="trend py-2 hover:bg-[#f7f7f707] cursor-pointer px-5">
                  <div className="text-[#52565b] flex justify-between items-center pb-1">
                    <p className="text-[13px] font-normal font-worksans">
                      Trending in Bangladesh
                    </p>
                    <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                      <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                    </div>
                  </div>
                  <h4 className="text-[15px] font-bold font-worksans pb-1">
                    Tiktok
                  </h4>
                  <p className="text-[13px] font-worksans font-normal text-[#52565b]">
                    26.8K pots
                  </p>
                </div>

                <div className="trend py-2 hover:bg-[#f7f7f707] cursor-pointer px-5">
                  <div className="text-[#52565b] flex justify-between items-center pb-1">
                    <p className="text-[13px] font-normal font-worksans">
                      Trending in Bangladesh
                    </p>
                    <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                      <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                    </div>
                  </div>
                  <h4 className="text-[15px] font-bold font-worksans pb-1">
                    Tiktok
                  </h4>
                  <p className="text-[13px] font-worksans font-normal text-[#52565b]">
                    26.8K pots
                  </p>
                </div>

                <div className="trend py-2 hover:bg-[#f7f7f707] cursor-pointer px-5">
                  <div className="text-[#52565b] flex justify-between items-center pb-1">
                    <p className="text-[13px] font-normal font-worksans">
                      Trending in Bangladesh
                    </p>
                    <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                      <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                    </div>
                  </div>
                  <h4 className="text-[15px] font-bold font-worksans pb-1">
                    Tiktok
                  </h4>
                  <p className="text-[13px] font-worksans font-normal text-[#52565b]">
                    26.8K pots
                  </p>
                </div>

                <div className="trend py-2 hover:bg-[#f7f7f707] cursor-pointer px-5">
                  <div className="text-[#52565b] flex justify-between items-center pb-1">
                    <p className="text-[13px] font-normal font-worksans">
                      Trending in Bangladesh
                    </p>
                    <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                      <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                    </div>
                  </div>
                  <h4 className="text-[15px] font-bold font-worksans pb-1">
                    Tiktok
                  </h4>
                  <p className="text-[13px] font-worksans font-normal text-[#52565b]">
                    26.8K pots
                  </p>
                </div>

                <div className="trend py-2 hover:bg-[#f7f7f707] cursor-pointer px-5">
                  <div className="text-[#52565b] flex justify-between items-center pb-1">
                    <p className="text-[13px] font-normal font-worksans">
                      Trending in Bangladesh
                    </p>
                    <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                      <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                    </div>
                  </div>
                  <h4 className="text-[15px] font-bold font-worksans pb-1">
                    Tiktok
                  </h4>
                  <p className="text-[13px] font-worksans font-normal text-[#52565b]">
                    26.8K pots
                  </p>
                </div>
                <div className="trend py-2 hover:bg-[#f7f7f707] cursor-pointer px-5">
                  <div className="text-[#52565b] flex justify-between items-center pb-1">
                    <p className="text-[13px] font-normal font-worksans">
                      Trending in Bangladesh
                    </p>
                    <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                      <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                    </div>
                  </div>
                  <h4 className="text-[15px] font-bold font-worksans pb-1">
                    Tiktok
                  </h4>
                  <p className="text-[13px] font-worksans font-normal text-[#52565b]">
                    26.8K pots
                  </p>
                </div>
                <div className="trend py-2 hover:bg-[#f7f7f707] cursor-pointer px-5">
                  <div className="text-[#52565b] flex justify-between items-center pb-1">
                    <p className="text-[13px] font-normal font-worksans">
                      Trending in Bangladesh
                    </p>
                    <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                      <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                    </div>
                  </div>
                  <h4 className="text-[15px] font-bold font-worksans pb-1">
                    Tiktok
                  </h4>
                  <p className="text-[13px] font-worksans font-normal text-[#52565b]">
                    26.8K pots
                  </p>
                </div>
                <div className="trend py-2 hover:bg-[#f7f7f707] cursor-pointer px-5">
                  <div className="text-[#52565b] flex justify-between items-center pb-1">
                    <p className="text-[13px] font-normal font-worksans">
                      Trending in Bangladesh
                    </p>
                    <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                      <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                    </div>
                  </div>
                  <h4 className="text-[15px] font-bold font-worksans pb-1">
                    Tiktok
                  </h4>
                  <p className="text-[13px] font-worksans font-normal text-[#52565b]">
                    26.8K pots
                  </p>
                </div>
                <div className="trend py-2 hover:bg-[#f7f7f707] cursor-pointer px-5">
                  <div className="text-[#52565b] flex justify-between items-center pb-1">
                    <p className="text-[13px] font-normal font-worksans">
                      Trending in Bangladesh
                    </p>
                    <div className="threedot h-6 w-9 rounded-full  text-center flex justify-center hover:bg-[#3a3939b4] cursor-pointer transition-all mt-1">
                      <BsThreeDots className="text-[#a8a4a4]  inline-block leading-none  text-2xl hover:text-skyblue" />
                    </div>
                  </div>
                  <h4 className="text-[15px] font-bold font-worksans pb-1">
                    Tiktok
                  </h4>
                  <p className="text-[13px] font-worksans font-normal text-[#52565b]">
                    26.8K pots
                  </p>
                </div>
                <a
                  href="#"
                  className="text-[#1c8cd7] font-worksans text-[14px] font-normal py-5 px-5 hover:bg-[#f7f7f707] w-full"
                >
                  Show more
                </a>
              </div>

              {/* ===================================== */}

              <div className="follow bg-[#16181c] w-full mt-5 pt-5 rounded-xl">
                <h3 className="text-xl font-extrabold font-worksans text-white px-5 pb-7">
                  Who to follow
                </h3>
                <div className="follow-content flex items-center justify-between py-3 cursor-pointer transition-all hover:bg-[#f7f7f707]">
                  <div className="left flex items-center pl-5">
                    <div className="logo">
                      <img
                        src={userlogo}
                        alt={userlogo}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="name pl-3">
                      <div className="title flex items-center">
                        <h3 className="text-white font-worksans text-[15px] font-bold">
                          Elon Musk
                        </h3>

                        <RiVerifiedBadgeFill className="text-skyblue ml-1" />
                      </div>
                      <p className="text-[15px] font-normal font-worksans text-[#ffffff49] leading-none">
                        @elonmusk
                      </p>
                    </div>
                  </div>
                  <div className="right pr-5">
                    <Button
                      className={
                        "text-[#000] bg-white rounded-2xl py-1 px-4 font-semibold font-worksans hover:bg-[#ffffffcb]"
                      }
                    >
                      Follow
                    </Button>
                  </div>
                </div>

                <div className="follow-content flex items-center justify-between py-3 cursor-pointer transition-all hover:bg-[#f7f7f707]">
                  <div className="left flex items-center pl-5">
                    <div className="logo">
                      <img
                        src={userlogo}
                        alt={userlogo}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="name pl-3">
                      <div className="title flex items-center">
                        <h3 className="text-white font-worksans text-[15px] font-bold">
                          Elon Musk
                        </h3>

                        <RiVerifiedBadgeFill className="text-skyblue ml-1" />
                      </div>
                      <p className="text-[15px] font-normal font-worksans text-[#ffffff49] leading-none">
                        @elonmusk
                      </p>
                    </div>
                  </div>
                  <div className="right pr-5">
                    <Button
                      className={
                        "text-[#000] bg-white rounded-2xl py-1 px-4 font-semibold font-worksans hover:bg-[#ffffffcb]"
                      }
                    >
                      Follow
                    </Button>
                  </div>
                </div>

                <div className="follow-content flex items-center justify-between py-3 cursor-pointer transition-all hover:bg-[#f7f7f707]">
                  <div className="left flex items-center pl-5">
                    <div className="logo">
                      <img
                        src={userlogo}
                        alt={userlogo}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                    <div className="name pl-3">
                      <div className="title flex items-center">
                        <h3 className="text-white font-worksans text-[15px] font-bold">
                          Elon Musk
                        </h3>

                        <RiVerifiedBadgeFill className="text-skyblue ml-1" />
                      </div>
                      <p className="text-[15px] font-normal font-worksans text-[#ffffff49] leading-none">
                        @elonmusk
                      </p>
                    </div>
                  </div>
                  <div className="right pr-5">
                    <Button
                      className={
                        "text-[#000] bg-white rounded-2xl py-1 px-4 font-semibold font-worksans hover:bg-[#ffffffcb]"
                      }
                    >
                      Follow
                    </Button>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-[#1c8cd7] font-worksans text-[14px] font-normal py-5 px-5 hover:bg-[#f7f7f707] w-full"
                >
                  Show more
                </a>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Left;
