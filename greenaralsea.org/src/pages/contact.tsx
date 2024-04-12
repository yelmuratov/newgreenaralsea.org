import { useTranslation } from "react-i18next"

const Contact = () => {
  const {t} = useTranslation();
  return (
    <section className="mb-32 md:mb-[350px] pt-24 lg:mb-32">
  <div className="flex justify-center">
    <div className="text-center md:max-w-xl lg:max-w-3xl">
      <h2 className="mb-12 px-6 text-3xl font-bold">{t("contact.title")}</h2>
      <p className="mb-12 px-6 text-2xl font-bold">{t("contact.heading")}</p>
    </div>
  </div>
  <div className="flex flex-wrap items-center justify-center mt-10">
    <div className="w-full lg:w-7/12 px-3 lg:px-6">
      <div className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
          <div className="flex items-start border p-8 rounded-xl">
            <div className="shrink-0">
              <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"></path>
                </svg>
              </div>
            </div>
            <div className="ml-6 grow">
              <p className="mb-2 font-bold">{t("contact.technicalsupport")}</p>
              <p className="text-neutral-500"><a href="mailto:acclab.uz@undp.org">acclab.uz@undp.org</a></p>
              <p className="text-neutral-500">+998 78 120 34 50</p>
            </div>
          </div>
        </div>
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
          <div className="flex items-start border p-8 rounded-xl">
            <div className="shrink-0">
              <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                <i className="fa-solid fa-print text-[25px]"></i>
              </div>
            </div>
            <div className="ml-6 grow">
            <p className="mb-2 font-bold">{t("contact.technicalsupport")}</p>
              <p className="text-neutral-500"><a href="mailto:acclab.uz@undp.org">acclab.uz@undp.org</a></p>
              <p className="text-neutral-500">+998 78 120 34 85</p>
            </div>
          </div>
        </div>
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
          <div className="flex items-start border p-6 rounded-xl">
            <div className="shrink-0">
              <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                <i className="fa-solid fa-location-dot text-[20px]"></i>
              </div>
            </div>
            <div className="ml-6 grow">
              <p className="font-bold md:mb-0 lg:mb-6">{t("contact.location")}</p>
              <p className="text-neutral-500"><a href="https://www.google.com/maps/place/UNDP+Representative+office/@41.3065088,69.2740177,15z/data=!4m5!3m4!1s0x0:0x79ae9a7c003373bf!8m2!3d41.3065088!4d69.2740177?shorturl=1" target="_blank">United Nations Development Programme, Tashkent, Uzbekistan</a></p>
            </div>
          </div>
        </div>
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
          <div className="flex items-start border p-8 rounded-xl">
            <div className="shrink-0">
              <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"></path></svg>
              </div>
            </div>
            <div className="ml-6 grow">
              <p className="mb-2 font-bold">{t("contact.bugreport")}</p>
              <p className="text-neutral-500"><a href="mailto:bugreport@undp.org">bugreport@undp.org</a></p>
              <p className="text-neutral-500">+998 78 120 34 85</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact