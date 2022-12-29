import axios from 'axios'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import Card from '../../components/Card'

type CardInfo = {
    name: string
    email: string
    office: string
    phone: string
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
        axios.get(`http://10.26.12.43:5053/funcionarios/${email}/`,).then((response) => {
            setCard(response.data)
            document.getElementById("ItemPreview")!.src = "data:image/png;base64," + response.data.qrCode;
        })
    }, [email])

    return (

        <>

            <Card name={card.name} email={card.email} office={card.office} phone={card.phone} />
        </>

    )
}