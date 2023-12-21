import style from "./adminTitle.module.scss"
export const AdminTitle = ({ title }) => {
    return <h1 className={style.title}>{title}</h1>
}