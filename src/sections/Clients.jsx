import { useTranslation } from "react-i18next";
import { clientReviews } from "../constants";

const Clients = () => {
  const { t } = useTranslation("clients");

  return (
    <section className="c-space my-20" id="clients">
      <h2 className="head-text">{t("title")}</h2>

      <div className="client-container">
        {clientReviews.map(({ id, img }) => {
          const name = t(`items.${id}.name`);

          return (
          <div key={id} className="client-review">
            <div>
              <p className="text-white font-light">{t(`items.${id}.review`)}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="w-12 h-12 rounded-full"
                  />

                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {t(`items.${id}.position`)}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt=""
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
