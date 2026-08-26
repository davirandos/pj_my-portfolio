import React from 'react'
import { useTranslation } from "react-i18next";
import ContactSocial from "./ContactSocial"
import SectionHeader from '../../ui/SectionHeader';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="p-6 w-full lg:w-[70%] classe-livre md:px-10 px-5 flex relative overflow-hidden">
        <div className='w-full flex md:flex-row flex-col md:justify-around justify-center items-center p-2 gap-5'>

          <div className='w-[95%] md:w-[60%]'>
            <img src="public\images\downloade.gif" className='rounded-xl lg:h-78 w-full h-64' alt="" />
          </div>

          <div className="w-full md:w-[70%] classe-livre flex-col p-4 ">
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