/*Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.*/

const app = new Vue(
    {
        el: '#root',
        data: {
            emailArray: [],
        },
        created() {
            for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail', {
            })
            .then((resp) => {
                const arrayList = resp.data.response;
                this.emailArray.push(arrayList);
            })
           }
        },
    }
) 