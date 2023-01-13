import "../../style/ContactPage/contact.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AiFillPhone, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";

import Input from "./Input";
import AboutImg from "../../assest/contact/aside.png"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const Contact = () => {
    const validate = Yup.object({
        firstName: Yup.string()
        .required('İsim Boş Bırakılamaz'),
        lastName: Yup.string()
        .required('Soyisim Boş Bırakılamaz'),
        company: Yup.string()
        .required('Şirket İsmi Boş Bırakılamaz'),
        email: Yup.string()
        .email('Email Geçersiz')
        .required('Email Adresi Boş Bırakılamaz'),
        phone: Yup.string()
        .matches(phoneRegExp,'Numara Geçersiz')
        .required('Telefon Numarası Boş Bırakılamaz')
        .min(11, "Telefon Numaranızın Başına '0' Koyduğunuzdan Emin Olun!")
        .max(11)

})

    return(
        <div className="contact">
            <div className="contact-container">
                    <div className="contact-header">
                        <h2>İletişim Şeçenekleri</h2>
                    </div>
                    <div className="form">
                    <div className="form-banner">
                        <img src={AboutImg} alt="contact"/>
                    </div>
                    <Formik
                    initialValues={{
                        FirstName: "",
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                        console.log(values)
                    }}>
                        {formik => (
                            <div className="form-container">
                                <Form className="form-content">
                                    <Input label="İsim" name="firstName" type="text"/>
                                    <Input label="Soyisim" name="lastName" type="text"/>
                                    <Input label="Şirket İsmi" name="company" type="text"/>
                                    <Input label="Telefon Numarası" name="phone" type="text"/>
                                    <Input label="E-mail" name="email" type="text"/>
                                    <button type="submit" className="btn">Gönder</button>
                                </Form>
                            </div>
                        )}
                    </Formik>
                    </div>
                    <div className="address-carousel">
                            <div className="box">
                                <div className="address-icon"><AiFillPhone className="ico"/></div>
                                <div className="adress-text">
                                    <h3>Telefon</h3>
                                    <p>+90 551 708 59 12</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="address-icon"><IoLogoWhatsapp className="ico"/></div>
                                <div className="adress-text">
                                    <h3>Whatsapp</h3>
                                    <p>+90 551 708 59 12</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="address-icon"><IoMdMail className="ico"/></div>
                                <div className="adress-text">
                                    <h3>Mail</h3>
                                    <p>arasaka@gmail.com</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="address-icon"><AiFillInstagram className="ico"/></div>
                                <div className="adress-text">
                                    <h3>Instagram</h3>
                                    <p>Arasaka Copuration</p>
                                </div>
                            </div>
                    </div>
                    <div className="map-container">
                    <iframe className="map" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=London%2C%20United%20Kingdom+(Arasaka%20)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        
                    </div>
            </div>
        </div>
    )
}

export default Contact;