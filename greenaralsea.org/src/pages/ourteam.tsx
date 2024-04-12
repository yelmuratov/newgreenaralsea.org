import { useTranslation } from "react-i18next";
import TeamMember from "../components/teammember";
import { useAppSelector } from "../hooks/hooks";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OurTeam = () => {
  const { t } = useTranslation();
  const teamembers = useAppSelector((state) => state.microServices.teamembers);
  return (
    <section className="bg-white pt-12 container mx-auto">
      <div className="grid gap-8 mb-6 lg:mb-16 mx-auto">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            {t("ourTeam")}
          </h2>
        </div>
        <div className="grid gap-4 lg:px-24 px-4">
        {teamembers.map((member) => (
            <TeamMember
              key={uuidv4()}
              avatar={member.avatar}
              description={member.description}
              name={member.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
