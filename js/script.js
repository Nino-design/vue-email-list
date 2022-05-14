/*Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.*/

const app = new Vue(
    {
        el: '#root',
        data: {
            emailArray: [],
            itemsNumber: 10
        },
        created() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail', {
                params: {
                    items: this.itemsNumber
                }
            })
            .then((resp) => {
                const arrayList = resp.data.response;
                this.emailArray = arrayList;
            });
        }
    }
) 