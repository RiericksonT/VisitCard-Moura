import styles from './Register.module.scss'
import { FieldValue, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

type RegisterData = {
    name: string;
    email: string;
    office: string;
    phone: string;
}

export default function Register() {

    const { register, handleSubmit, formState: {
        errors, isSubmitting
    } } = useForm<RegisterData>();



    const onSubmit: SubmitHandler<RegisterData> = async ({ name, email, office, phone }) => {
        let user = {
            name,
            email,
            office,
            phone,
            psw: '123'
        }
        if (user.name != '' && user.email != '' && user.office != '' && user.phone != '') {

            axios.post('http://10.26.12.43:5053/funcionarios/', user).then((response) => {
                if (response.data != null) {
                    alert('Cadastro realizado com sucesso!')
                    window.location.href = '/showCard/?email=' + response.data.email
                }
                else {
                    alert('Erro ao cadastrar!')
                }

            })
        }
        else {
            document.getElementById('error')!.style.display = 'block'
        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.register}>
                <h1 className={styles.title}>Crie seu cartão</h1>
                <p className={styles.subtitle}>Falta pouco para seu cartão estar pronto - Preencha os campos abaixo</p>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder='Nome' {...register("name")} required />
                    <input className={styles.input} type="email" placeholder='Email' {...register("email")} required />
                    <input className={styles.input} type="text" placeholder='Cargo' {...register("office")} required />
                    <input className={styles.input} type="tel" placeholder='Telefone' {...register("phone")} required />
                    <p id='error' className={styles.error}>
                        Preencha todos os campos!
                    </p>
                    <button className={styles.button} onClick={handleSubmit(onSubmit)}>Criar</button>
                </form>
            </div>
        </div >
    )
}