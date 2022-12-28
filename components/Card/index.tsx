import Link from 'next/link'
import styles from './Card.module.scss'

type CardInfo = {
    name: string
    email: string
    office: string
    phone: string

}

export default function Card(obj: CardInfo) {
    return (
        <div className={styles.container}>
            <div className={styles.photo}>
                <img className={styles.profile} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVgpriT9R8HaJr9ZCIVnS2Wa56emVVW2YM_rZAWt3A58czCsGRhooK_Yd7vTUY1vQbwo&usqp=CAU" />
                <img className={styles.qrcode} id="ItemPreview" src=""></img>
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}> Nome: {obj.name} </h3>
                <h3 className={styles.email}>Email: {obj.email} </h3>
                <h3 className={styles.office}>Cargo: {obj.office}</h3>
                <h3 className={styles.phone}>Telefone: {obj.phone} </h3>
            </div>
            <div className={styles.close}>
                <Link href={'/'}>x</Link>
            </div>
        </div>
    )
}