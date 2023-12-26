"use client"
import { useState } from "react";
import { useFormik } from "formik";
import { AdminTitle } from "@/app/components/commonComponents/AdminTitle/AdminTitle";
import AdminWrapper from "@/app/components/commonComponents/AdminWrapper/AdminWrapper";
import styles from "../MediaEditForm/MediaEditForm.module.scss";
import mediaSchema from "@/app/libs/mediaValidationSchema";
import { createMedia } from "@/app/api/adminAPI/mediasApi";

const  defaultImg = "https://res.cloudinary.com/dbyoqto0b/image/upload/v1703527979/defaultImg_nt4qio.png"


const MediaAddForm = () => {
    const [file, setFile] = useState(null);
    
    const initialValues = {logoImg: file, mediaURL: "", ukDesc: "", enDesc: ""}
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues,
      validationSchema: mediaSchema,    
        onSubmit: async (values) => {
            console.log(values, "Submit");
    
            const formData = new FormData();
            formData.append('logoImg', file);
            formData.append('mediaURL', JSON.stringify(values.mediaURL));
            formData.append('ukDesc', JSON.stringify(values.ukDesc));
            values.enDesc ? formData.append('enDesc', JSON.stringify(values.enDesc)) : null;
            await createMedia(formData); 
      },
      enableReinitialize: true,
    });


    const handleFileChange = e => {
         console.log("click");
        const file = e.target.files[0];
        setFile(file)
    };
    return <AdminWrapper>
        <AdminTitle title={'Медіа'} />
        <form onSubmit={handleSubmit}>
            <p className={styles.titles} style={{ fontSize: "24px" }}>Логотип ЗМІ</p>
            <div className={styles.fieldWrapper} >
                <div style={{position: 'relative', width: '262px'}}>
                    <div className={styles.imgBox}>
                        {file ? ( <img src={URL.createObjectURL(file)} alt="Uploaded" className={styles.img}/>) : (
                        <img src={values.logoImg ? values.logoImg : defaultImg} className={styles.img} alt="no"/>)}
                    </div>
                    <div className={styles.uploadBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={styles.uploadIcon}>
                            <path d="M35 25V31.6667C35 32.5507 34.6488 33.3986 34.0237 34.0237C33.3986 34.6488 32.5507 35 31.6667 35H8.33333C7.44928 35 6.60143 34.6488 5.97631 34.0237C5.35119 33.3986 5 32.5507 5 31.6667V25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.666 16.6641L19.9993 24.9974L28.3327 16.6641"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M20 25V5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {/* <input type='file' accept="image/*" name="logoImg" onChange={handleChange} className={styles.uploadInput} /> */}
                        <input type='file' accept="image/*" name="logoImg" onChange={(e) => handleFileChange(e)} className={styles.uploadInput} />
                    </div>
                </div>
                <span className={styles.errorMsg}>{errors.logoImg}</span>

            </div>
            <p className={styles.titles}>Опис</p>
            <div className={styles.textareasWrapper}>
                <div className={styles.fieldWrapper}>
                    <svg className={styles.inputType} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 4H11.581V12H16.7685V4H18.8345V13.0143L17.8089 14H10.5256L9.5 13.0143V4Z" fill="#231F20"/>
                        <path d="M22.2464 9.01429H27.4339V6H24.3125L22.2464 8.01429V9.01429ZM22.2464 14H20.1655V7.01429L23.272 4H29.5V14H27.4339V11.0143H22.2464V14Z" fill="#231F20"/>
                    </svg>
                    <textarea className={styles.textarea} name="ukDesc" value={values.ukDesc} onChange={handleChange} placeholder="Введіть текст">
                    </textarea> 
                    <span className={styles.sizeCounter}>{values.ukDesc.length}/200</span>
                    <span className={styles.errorMsgTextarea}>{errors.ukDesc}</span>
                </div>
                <div className={styles.fieldWrapper}>
                    <svg className={styles.inputType} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M13.739 14H5V4H13.739V6H7.0597V8.01429H13.2241V10.0143H7.0597V12H13.739V14Z" fill="#231F20"/>
                        <path d="M24.2963 14H22.2514L17.1168 7.32857V14H15.0571V4H17.1168L22.2514 10.6571V4H24.2963V14Z" fill="#231F20"/>
                        <path d="M33.9849 14H26.7759L25.7608 13.0143V5.01429L26.7759 4H33.9849L35 5.01429V7H32.955V6H27.8205V12H32.955V10.2714H30.3657V8.27143H35V13.0143L33.9849 14Z" fill="#231F20"/>
                    </svg>
                    <textarea className={styles.textarea} name="enDesc" values={values.enDesc} onChange={handleChange} placeholder="Введіть текст">
                    </textarea>
                    <span className={styles.sizeCounter__right}>{values.enDesc.length}/200</span>
                    <span className={styles.errorMsgTextarea}>{errors.enDesc}</span>
                </div>
            </div>
            <p className={styles.titles} style={{ marginBottom: "6px" }}>Посилання на медіа</p>
            <div className={styles.fieldWrapper}>
                <input type="text" className={styles.inputUrl} name="mediaURL" values={values.mediaURL} onChange={handleChange} placeholder="Введіть посилання" />
                <span className={styles.errorMsg}>{errors.mediaURL}</span>
            </div>
            <div className={styles.btnBox}>
                <button type="submit" className={styles.publishBtn}>Опублікувати</button>
                <button type="button" className={styles.cancelBtn}>Скасувати</button>
            </div>
        </form>
    </AdminWrapper>
}

export default MediaAddForm;

