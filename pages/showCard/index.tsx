import axios from 'axios'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'

type CardInfo = {
    nome: string
    email: string
    cargo: string
    telefone: string
}

export default function ShowCard() {

    const [card, setCard] = useState<CardInfo>({} as CardInfo)
    const [email, setEmail] = useState('');



    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const email = urlParams.get('email') || parseCookies().email;

        if (email) {
            setEmail(email)
        }
        else {
            window.location.href = '/'
        }
        axios.get(`http://localhost:5053/funcionarios/${email}/`,).then((response) => {
            setCard(response.data)
            console.log(response.data)
            document.getElementById("ItemPreview")!.src = "data:image/png;base64," + response.data.qrCode;
        })
    }, [email])

    return (

        <>

            <Card name={card.nome} email={card.email} office={card.cargo} phone={card.telefone} />
        </>

    )
}