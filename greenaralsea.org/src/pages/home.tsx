import { useEffect, useState } from "react";
import CountUp from "react-countup";
import "react-loading-skeleton/dist/skeleton.css";
import { List, Pagination } from "antd";
import Skeleton from "react-loading-skeleton";
import { extractYouTubeEmbedId } from "../functions/functions";
import { TransformingTragedy1, TransformingTragedy2, facts } from "../db/db";
import { YouTubeEmbed, NewsCard, ListItem, Partner } from "../components";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { fetchDonaters } from "../redux/reducers/donaters";
import { AppDispatch } from "../redux/store";
import { useAppSelector } from "../hooks/hooks";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { setModal } from "../redux/reducers/paysys";

const Home = () => {
  const [sortType, setSortType] = useState("recent");
  const [page, setPage] = useState(1);
  const donaters = useAppSelector((state) => state.DonaterSlice.donaters);
  const totalPage = useAppSelector((state) => state.DonaterSlice.totalPage);
  const DonaterLoading = useAppSelector(
    (state) => state.DonaterSlice.isLoading
  );
  const totalTrees = useAppSelector((state) => state.microServices.totalTrees);
  const YoutubeVideos = useAppSelector(
    (state) => state.microServices.YoutubeVideo
  );
  const YouTubeVideoLoading = useAppSelector(
    (state) => state.microServices.VideosisLoading
  );
  const partners = useAppSelector((state) => state.microServices.Partners);
  const greenChampions = useAppSelector(
    (state) => state.microServices.greenChampions
  );
  const news = useAppSelector((state) => state.microServices.news);
  const articlesLoading = useAppSelector(
    (state) => state.microServices.isArticlesLoading
  );

  // Methods

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDonaters({ page: page, sort: sortType }));
  }, [dispatch, page, sortType]);

  const [medium, setMedium] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      setMedium(true);
    } else {
      setMedium(false);
    }
  });

  const { t } = useTranslation();
  const handleDonation = () => {
    dispatch(setModal({modalType: 'donation', isOpen: true}));
}

  return (
    <>
      {/* Main section */}
      <section className="-z-100 bg-[url('/assets/bg1.jpg')] mb-72 h-[300px] sm:h-[660px] bg-no-repeat bg-cover bg-center md:mb-24 sm:mb-24">
        <section className="container mx-auto sm:px-0">
          <div className="lg:px-0">
            <div className="md:mt-4 lg:px-0 z-1000 top-40  absolute md:top-60 lg:right-80 md:right-16 bottom-0 text-center h-[350px] md:h-[450px] md:w-[700px] pt-4 sm:py-8 font font-sans bg-white shadow-md rounded-lg shadow dark:border-gray-700">
              <div className="card-content">
                <div className="md:mt-4">
                <p className="sm:mt-8 px-4 leading-[20px] sm:px-24 leading-8 font-serif select-none text-sm sm:text-[16px]">
                  {t("aralTragedy.description")}
                </p>
                  <h1 className="font-bold text-lg sm:text-[32px] md:my-4 select-none">
                    {t("aralTragedy.totalTrees")}
                  </h1>
                  <h1 className="font-bold text-lg sm:text-[32px] select-none">
                    <CountUp
                      delay={0.5}
                      end={totalTrees}
                      start={0}
                      separator=""
                    />
                  </h1>
                  <h1 className="font-bold text-xl sm:text-[28px] mt-4 md:mb-4 select-none">
                    {t("aralTragedy.callToAction")}
                  </h1>
                </div>
                <div className="flex flex-col items-center justify-center sm:flex-row md:block items-center lg:order-2 mt-4 sm:mt-8">
                  <div className="donate-btns lg:block">
                  <button 
                  onClick={handleDonation}
                  className="relative bg-[#00c881] inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm md:text-[14px] w-full sm:w-auto px-2 sm:px-4 md:px-8 py-2 sm:py-3 overflow-hidden font-bold group mb-2 sm:mb-0 sm:mr-4"
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-1 absolute left-0 top-0 bg-[#0e2b5c] opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-64 h-64 -mt-2 transition-all duration-500 ease-in-out rotate-45 -translate-x-80 -translate-y-32 bg-[#0e2b5c] opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-center sm:text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white uppercase">
                    {t("home.contributeUZS")}
                  </span>
                  <span className="absolute inset-0"></span>
                </button>
                <a
                  href="https://www.every.org/undp/f/greenaralsea#/donate/card"
                  className="relative border inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm md:text-[14px] w-full sm:w-auto px-2 sm:px-4 md:px-8 py-2 sm:py-3 overflow-hidden text-black hover:text-white group hover:bg-gray-50"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-center sm:justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      className="w-5 h-5 hidden sm:block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative uppercase font-bold" id="quick">
                    {t("home.contributeUSD")}
                  </span>
                </a>
                  </div>
                </div>
              </div>
              <div className="md:mt-16 mt-4 px-4 sm:px-24 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
                <button className="text-xs sm:text-[13px] font-bold sm:border-r-2 pr-4">
                  GREEN ARAL SEA
                </button>
                <button className="text-xs sm:text-[13px] font-bold">
                  <i className="fa-regular fa-paper-plane mr-2"></i>
                  See Our Work in ARAL SEA
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Our mission */}
      <section data-aos="fade-up" className="our-mission">
        <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
          <div className="md:max-w-[350px] lg:max-w-[650px]">
            <img
              src="assets/dryingAral.gif"
              alt="Aral dry"
              className="w-full lg:max-h-[490px]"
            />
          </div>
          <div className="flex flex-col max-w-full md:w-[640px] p-4 md:p-6">
            <p className="roboto-bold text-xs sm:text-sm opacity-[0.8]">
              {t("ourMission.title")}
            </p>
            <h1 className="mb-2 mt-4 sm:mt-6 text-2xl sm:text-4xl md:text-[25px] lg:text-[30px] lg:leading-[40px] px-2 md:px-4 text-center font-bold tracking-tight md:mb-4 md:leading-[30px]">
              {t("ourMission.heading")}
            </h1>
            <p className="font-medium dark:text-gray-600 text-sm sm:text-base md:text-[14px] lg:text-2xl robot-regular text-justify">
              {t("ourMission.content")}
            </p>
            <div className="flex flex-col sm:flex-row md:flex-col items-center lg:order-2 mt-4 md:mt-8">
              <div className="donate-btns sm:flex md:flex items-center justify-center w-full">
                <button 
                  onClick={handleDonation}
                  className="relative bg-[#00c881] inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm md:text-[14px] w-full sm:w-auto px-2 sm:px-4 md:px-8 py-2 sm:py-3 overflow-hidden font-bold group mb-2 sm:mb-0 sm:mr-4"
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-1 absolute left-0 top-0 bg-[#0e2b5c] opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-64 h-64 -mt-2 transition-all duration-500 ease-in-out rotate-45 -translate-x-80 -translate-y-32 bg-[#0e2b5c] opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-center sm:text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white uppercase">
                    {t("home.contributeUZS")}
                  </span>
                  <span className="absolute inset-0"></span>
                </button>
                <a
                  href="https://www.every.org/undp/f/greenaralsea#/donate/card"
                  className="relative border inline-flex items-center justify-center sm:justify-start text-xs sm:text-sm md:text-[14px] w-full sm:w-auto px-2 sm:px-4 md:px-8 py-2 sm:py-3 overflow-hidden text-black hover:text-white group hover:bg-gray-50"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-center sm:justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      className="w-5 h-5 hidden sm:block"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative uppercase font-bold" id="quick">
                    {t("home.contributeUSD")}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Facts and Contributions*/}
      <section
        data-aos="fade-up"
        className="container mx-auto text-center mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0"
      >
        {/* Facts */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-[38px] text-left roboto-bold lg:px-12 text-center lg:text-left">
            {t("quickFacts.title")}
          </h1>
          <div className="text-left text-sm md:text-[14px] roboto-regular md:mt-0 max-w-xl mx-auto lg:m-0 p-4 md:p-8">
            <List
              size="large"
              className="bordered roboto-regular text-left lg:text-xl md:text-[12px]"
              dataSource={facts}
              renderItem={(_, index) => (
                <List.Item>{t(`quickFacts.fact${index + 1}`)}</List.Item>
              )}
            />
          </div>
        </div>
        {/* Contributions */}
        <div className="contributions md:w-[420px] lg:w-[630px]">
          <h1 className="text-4xl md:text-[38px] roboto-bold">
            {t("conrtibutions")}
          </h1>
          <div className="border shadow max-w-2xl rounded-xl mt-12 mx-auto p-4 md:p-8">
            <div className="flex flex-wrap items-center justify-center mt-4 gap-4 mb-4">
              <button
                onClick={() => setSortType("recent")}
                className={`${
                  sortType == "recent" ? "text-green-500" : ""
                } list-none text-lg md:text-[20px] uppercase roboto-regular border-r-2 pr-4 md:pr-8`}
              >
                {t("mostRecent")}
              </button>
              <button
                onClick={() => setSortType("amount")}
                className={`${
                  sortType == "amount" ? "text-green-500" : ""
                } list-none text-lg md:text-[20px] uppercase roboto-regular`}
              >
                {t("mostAmount")}
              </button>
            </div>
            <ul className="max-h-[500px] md:max-h-[1130px] overflow-y-scroll no-scrollbar">
              {donaters.map((donater, indx) =>
                DonaterLoading ? (
                  <Skeleton width={300} height={100} key={uuidv4()} />
                ) : (
                  <ListItem
                    name={donater.display_name}
                    trees={+donater.amount}
                    date={donater.created}
                    comment={donater.message}
                    key={indx}
                  />
                )
              )}
            </ul>
            <Pagination
              defaultCurrent={page}
              total={totalPage}
              onChange={(page) => setPage(page)}
            />
          </div>
        </div>
      </section>
      {/* Vidoes from youtube */}
      <section className="py-12">
        <div className="bg-[#00381E] h-auto md:h-[385px]">
          <h1 className="text-center text-4xl md:text-[38px] roboto-bold text-white py-8 md:pt-16 px-4">
            {t("whynow")}
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 px-4 md:px-20 max-w-[1700px] gap-4 mt-4 md:-mt-60 mx-auto"
        >
          {YoutubeVideos.map((video, index) =>
            YouTubeVideoLoading ? (
              <Skeleton key={uuidv4()} height={300} />
            ) : (
              <YouTubeEmbed
                key={index}
                embedId={extractYouTubeEmbedId(video.link)}
                fade={""}
              />
            )
          )}
        </div>
        <div id="tragedy" className="pb-8 hidden md:block"></div>
      </section>
      {/*Aral Sea tragedy*/}
      <section className="container mx-auto px-4 lg:px-0">
        <h1 className="text-3xl lg:text-[35px] roboto-bold mb-8 lg:mb-12 text-center lg:text-left">
          {t("aralSeaTragedy")}
        </h1>
        <div
          data-aos="fade-up"
          className="content grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 px-4 lg:px-0"
        >
          <img
            className="lg:col-span-2 w-full h-auto"
            src="assets/tragedy.jpg"
            alt="Tragedy Picture"
          />
          <div className="description lg:cols-1">
            <h1 className="roboto-bold text-2xl lg:text-[25px] mb-4 text-center md:text-left">
              {t("tragedyTitle")}
            </h1>
            {[...Array(5)].map((_, i) => (
              <p key={i} className="text-justify lg:max-w-[500px] mt-4 text-lg lg:text-xl roboto-regular opacity-[.9]">
                {t(`tragedy${i + 1}`)}
              </p>
            ))}
          </div>
        </div>
      </section>
      {/* News */}
      <section data-aos="fade-up" className="news mt-16 pb-24 border-b mb-12">
        <div className="container mx-auto px-8" data-aos="fade-up">
          <h1 className="text-[35px] roboto-bold mb-8 md:mb-4">{t("news")}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {news
              .slice(0, medium ? 4 : 3)
              .map((article, indx) =>
                articlesLoading ? (
                  <Skeleton key={uuidv4()} height={300} />
                ) : (
                  <NewsCard article={article} key={indx} />
                )
              )}
          </div>
        </div>
        <div id="transforming"></div>
      </section>
      {/* Transforming tragedy */}
      <section data-aos="fade-up" className="container mx-auto pb-16">
        <h1 className="roboto-bold text-[28px] sm:text-[32px] lg:text-[35px] mx-auto text-center max-w-[550px]">
          {t("transformingTragedy.title")}
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 mt-12 px-4">
          <List
            size="large"
            className="text-left text-[14px] md:text-[16px] roboto-regular md:mt-12 max-w-[700px] mx-auto p-4 sm:p-6 lg:p-8 motion-safe:hover:scale-110 duration-150"
            bordered
            dataSource={TransformingTragedy1}
            renderItem={(_,index) => (
              <List.Item>
                {
                  <div
                    key={uuidv4()}
                    className="flex font-regular items-center text-[16px] sm:text-[18px]"
                  >
                    <svg
                      className="w-6 h-6 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    {t(`transformingTragedy.transform${index+1}`)}
                  </div>
                }
              </List.Item>
            )}
          />
          <List
            size="large"
            className="text-left text-[14px] md:text-[16px] roboto-regular mt-4 md:mt-12 max-w-[700px] mx-auto p-4 sm:p-6 lg:p-8 motion-safe:hover:scale-110 duration-150"
            bordered
            dataSource={TransformingTragedy2}
            renderItem={(_,index) => (
              <List.Item>
                {
                  <div className="flex font-regular items-center text-[16px] sm:text-[18px]">
                    <svg
                      className="w-6 h-6 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    {t(`transformingTragedy.transform${index+4}`)}
                  </div>
                }
              </List.Item>
            )}
          />
        </ul>
        <div id="join"></div>
      </section>
      {/* Join us */}
      <section className="bg-[url('/assets/contribute.jpg1')] bg-no-repeat bg-cover bg-center md:h-[950px] sm:h-auto">
        <section
          className="container mx-auto py-12 text-center flex flex-col items-center px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <h1 className="roboto-bold stroke-slate-900 text-[40px] text-[32px] md:text-[36px] lg:text-[40px] text-white text-center">
            {t("contribution.title")}
          </h1>
          {
            Array.from({ length: 3 }).map((_, i) => (
              <p key={i} className="text-white roboto-bold text-[22px] md:text-[24px] lg:text-[25px] text-center max-w-[850px] mt-12">
                {t(`contribution.contrubute${i + 1}`)}
              </p>
            ))
          }
          <div className="flex flex-col sm:flex-row justify-center items-center mt-12">
            <a
              href="https://www.every.org/undp/f/greenaralsea#/donate/card"
              className="text-white px-8 sm:px-12 py-4 sm:py-6 roboto-bold text-lg sm:text-xl border rounded-[30px] mb-4 sm:mb-0 sm:mr-4"
            >
              {t("home.contributeUSD")}
            </a>
            <button onClick={handleDonation} className="text-white px-8 sm:px-12 py-4 sm:py-6 roboto-bold text-lg sm:text-xl border rounded-[30px]">
              {t("home.contributeUZS")}
            </button>
          </div>
        </section>
      </section>
      {/* Our partners */}
      <section>
        <p className="roboto-bold text-[25px] mt-12 text-center mb-12">{t("partners")}</p>
        <Marquee className="mt-20">
          {partners.map((partner, indx) => (
            <Partner
              name={partner.name}
              imageUrl={partner.logo}
              key={indx}
              link={partner.link}
            />
          ))}
        </Marquee>
      </section>
      {/* Our green champions */}
      <section className="mt-20">
        <h1 className="roboto-bold text-[25px]  text-center mb-12">
          {t("champions")}
        </h1>
        <div className="partners flex flex-col md:flex-row lg:flex-row items-center justify-center">
          {greenChampions.map((partner, indx) => (
            <Partner
              name={partner.name}
              imageUrl={partner.logo}
              key={indx}
              link={partner.link}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
