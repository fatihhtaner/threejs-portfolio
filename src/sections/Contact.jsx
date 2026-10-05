import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import { useTranslation } from "react-i18next";
import { personalInfo } from "../constants";
import { trackEvent } from "../lib/analytics";

const Contact = () => {
  const { t } = useTranslation("contact");

  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: personalInfo.name,
          from_email: form.email,
          to_email: personalInfo.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          trackEvent("contact_submit");
          showAlert({
            show: true,
            text: t("alerts.success"),
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setForm({ name: "", email: "", message: "" });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: t("alerts.error"),
            type: "danger",
          });

          setTimeout(hideAlert, 3000);
        }
      );
  };

  return (
    <section className="my-20 overflow-x-hidden w-full max-w-full" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col py-10 w-full max-w-full overflow-x-hidden px-3 sm:px-10">
        <img
          src="/assets/terminal.png"
          alt=""
          className="absolute inset-0 w-full min-h-screen object-cover"
         
        />

        <div className="contact-container w-full">
          <h2 className="head-text">{t("title")}</h2>
          <p className="text-base sm:text-lg text-white-600 mt-3">{t("description")}</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7 w-full"
           
          >
            <label className="space-y-3 w-full block">
              <span className="field-label">{t("labels.name")}</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={t("placeholders.name")}
               
              />
            </label>

            <label className="space-y-3 w-full block">
              <span className="field-label">{t("labels.email")}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={t("placeholders.email")}
               
              />
            </label>

            <label className="space-y-3 w-full block">
              <span className="field-label">{t("labels.message")}</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder={t("placeholders.message")}
               
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? t("buttons.sending") : t("buttons.send")}
              <img
                src="/assets/arrow-up.png"
                alt=""
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
