import React from 'react'
import { useTranslation } from "react-i18next";
import ContactSocial from "./ContactSocial"
import SectionHeader from '../../ui/SectionHeader';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="p-5 px-6 w-full lg:w-[65%] min-h-screen md:min-h-0 classe-livre md:px-10 flex relative overflow-hidden">
        <div className='p-6 w-full flex md:flex-row flex-col md:justify-start justify-center items-center md:gap-6 gap-5'>

          <div className='w-full md:w-[28%] flex md:justify-center'>
            <img src="https://avatars.githubusercontent.com/u/115652855?v=4" alt="Perfil" className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-xl"/>
          </div>

          <div className="w-full md:w-[60%]">
            <SectionHeader
            label={t("Contact.Social.title")}
            title={t("Contact.Social.title")}
            description={t("Contact.Social.description")}/>
            <ContactSocial />
          </div>

        </div>
    </section>
  );
}

export default Contact;