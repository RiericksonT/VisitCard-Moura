import Link from 'next/link'
import { setCookie } from 'nookies';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.scss'


export default function Home() {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setCookie(null, 'email', data.email, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    } catch (err) {
      console.log(err);
    } finally {
      window.location.href = '/showCard';
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Visit Card - Moura</h1>
          <p>Crie agora o seu cartão de visitas ou pesquise pelo cartão de vista dos seus colegas</p>
        </div>
        <div className={styles.buttonArea}>
          <Link href={'/register'} className={styles.buttonCreate}>Criar seu cartão</Link>
          <div className={styles.separator}>
            Ou pesquise um cartão já criado
          </div>
          <input className={styles.inputEmail} type="email" placeholder='Digite o email' {...register("email")} required />
          <button className={styles.buttonSearch} onClick={handleSubmit(onSubmit)}>🔍</button>
        </div>
      </div>
    </>
  )
}
