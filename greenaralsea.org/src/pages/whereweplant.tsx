import { useTranslation } from "react-i18next";

const Whereweplant = () => {
  const {t} = useTranslation("");
  return (
    <div>
      <div className="lg:mt-20 mt-20 relative">
        <h1 className="absolute text-[30px] lg:text-[65px] inset-0 flex justify-center items-center text-white font-bold">
          {t("whereweplant")}
        </h1>
        <img
          src="assets/article2.jpg"
          alt="Where we plant"
          className="w-full max-h-[650px]"
        />
      </div>
      <div className="location container mx-auto">
        <h1 className="robot-regular text-[18px] px-4 font-medium text-justify my-4 mb-6">
         {t("plantTitle")}
        </h1>
        <div className="aspect-w-16 h-[400px] aspect-h-9 max-w-full mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d197524.92202099622!2d59.00176557415418!3d44.5279354180587!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1712908400464!5m2!1sen!2sus"
            frameBorder="0"
            style={{ width: "100%", height: "100%" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Whereweplant;
