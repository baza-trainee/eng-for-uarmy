import { useState } from "react";
import { useFormik } from "formik";
import { AdminTitle } from "@/app/components/commonComponents/AdminTitle/AdminTitle";
import AdminWrapper from "@/app/components/commonComponents/AdminWrapper/AdminWrapper";
import defaultImg from "@/public/defaultImg.svg"
import styles from "./MediaEditForm.module.scss";

const MediaEditForm = ({ media }) => {
    const [file, setFile] = useState(null);
    //  const handleFileChange = e => {
    //     const file = e.target.files[0];
    //     setFile(file)
    // };
    console.log(media);
    return <AdminWrapper>
        <AdminTitle title={'Медіа'} />
        <form>
            <p className={styles.titles} style={{ fontSize: "24px" }}>Логотип ЗМІ</p>
            <div style={{position: 'relative'}}>
                <div className={styles.imgBox}>
                    {file ? ( <img src={URL.createObjectURL(file)} alt="Uploaded" className={styles.img}/>) : (
                    <img src={media.logoURL ? media.logoURL : defaultImg} className={styles.img}/>)}
                </div>
                {/* <AddPhotoBtn>
                    <Plus />
                    <input type='file' accept="image/*" onChange={(e)=> handleFileChange(e)}/>
                </AddPhotoBtn> */}
            </div>

            <p className={styles.titles}>Опис</p>
            <div className={styles.textareasWrapper}>
                <textarea className={styles.textarea} placeholder="Введіть текст">
                </textarea>
                <textarea className={styles.textarea} placeholder="Введіть текст">
                </textarea>
            </div>
            <input type="text" className={styles.inputUrl} placeholder="Введіть посилання"/>
            <div className={styles.btnBox}>
                <button type="button" className={styles.publishBtn}>Опублікувати</button>
                <button type="button" className={styles.cancelBtn}>Скасувати</button>
            </div>
        </form>
    </AdminWrapper>
}

export default MediaEditForm;