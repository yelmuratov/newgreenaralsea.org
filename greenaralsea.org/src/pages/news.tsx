import { useAppSelector } from "../hooks/hooks"
import { NewsCard } from "../components";
import Skeleton from "react-loading-skeleton";
import { useTranslation } from "react-i18next";

const News = () => {
  const selectedArticle = useAppSelector((state) => state.microServices.selectedArticle);
  const news = useAppSelector((state) => state.microServices.news);
  const articlesLoading = useAppSelector((state) => state.microServices.isArticlesLoading);

  const {t} = useTranslation();
  return (
    selectedArticle?
    <>
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative lg:mt-4 mt-16">
    <img src={selectedArticle.image} alt={selectedArticle.title} className=" lg:min-h-[600px] min-h-[500px] w-full relative"/>
    <div className="max-w-3xl mx-auto">
        <div
            className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal border  shadow">
            <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                <h1 className="text-gray-900 font-bold text-3xl mb-2">{selectedArticle.title}</h1>
                <p className="text-base leading-8 my-5 text-justify">
                    {selectedArticle.description}
                </p>
            </div>
        </div>
    </div>
    </div>
    <section data-aos="fade-up" className="news mt-16 pb-24 border-b mb-12">
    <div className="container mx-auto px-8" data-aos="fade-up">
      <h1 className="text-[35px] roboto-bold mb-8 md:mb-4">{t('news')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {news.map((article, indx) => (
          articlesLoading? <Skeleton key={indx} height={300}/>: <NewsCard article={article} key={indx} />
        ))}
      </div>
    </div>
    <div id="transforming"></div>
  </section>
    </>:
    <section data-aos="fade-up" className="news mt-24 pb-24 border-b mb-12">
    <div className="container mx-auto px-8" data-aos="fade-up">
      <h1 className="text-[35px] roboto-bold mb-8 md:mb-4">{t("news")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {news.map((article, indx) => (
          articlesLoading? <Skeleton key={indx} height={300}/>: <NewsCard article={article} key={indx} />
        ))}
      </div>
    </div>
    <div id="transforming"></div>
  </section>
  )
}

export default News