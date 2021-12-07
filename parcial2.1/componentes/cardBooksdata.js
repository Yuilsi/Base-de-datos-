import { getDatabase, ref, set, onValue, push } from 'firebase/database';

export class cardBooksdata {
    constructor(books) {
        this.books = books;
    }
    render = () => {
        let component = document.createElement('div');

        let nameComponent = document.createElement('div');
        let nameCont = document.createElement('p');
        nameCont.innerHTML =
            this.books.Name;

        let calificationComponent = document.createElement('div');
        let calificationCont = document.createElement('p');
        if(this.books.Votes===0){
            calificationCont.innerHTML = 0;
        }else{
            calificationCont.innerHTML = this.books.Rating/this.books.Votes;
        }
    

        let calificationBtnComponent = document.createElement('div');

        let checkBtn1 = document.createElement('input');
        checkBtn1.type = "checkbox";
        checkBtn1.value = 1;
        let label1 = document.createElement('label');
        label1.for = checkBtn1;
        label1.innerHTML = 1;

        let checkBtn2 = document.createElement('input');
        checkBtn2.type = "checkbox";
        checkBtn2.value = 2;
        let label2 = document.createElement('label');
        label2.for = checkBtn1;
        label2.innerHTML = 2;

        let checkBtn3 = document.createElement('input');
        checkBtn3.type = "checkbox";
        checkBtn3.value = 3;
        let label3 = document.createElement('label');
        label3.for = checkBtn1;
        label3.innerHTML = 3;

        let checkBtn4 = document.createElement('input');
        checkBtn4.type = "checkbox";
        checkBtn4.value = 4;
        let label4 = document.createElement('label');
        label4.for = checkBtn1;
        label4.innerHTML = 4;

        let checkBtn5 = document.createElement('input');
        checkBtn5.type = "checkbox";
        checkBtn5.value = 5;
        let label5 = document.createElement('label');
        label5.for = checkBtn1;
        label5.innerHTML = 5;


        let calificationBtnCont = document.createElement('button');
        calificationBtnCont.innerHTML = 'enviar';
        calificationBtnCont.addEventListener('click', (e, ev) => {
            const database = getDatabase();
            const databaseReference = ref(database, 'books/' + this.books.Name);
            
            let newRating = this.books.Rating;
            let newVotes = this.books.Votes;

            if(checkBtn1.checked){
                newRating +=1;
                newVotes += 1;
            }else if(checkBtn2.checked){
                newRating +=2; 
                newVotes += 1;
            }else if(checkBtn3.checked){
                newRating +=3;
                newVotes += 1; 
            }else if(checkBtn4.checked){
                newRating +=4; 
                newVotes += 1;
            } else if(checkBtn5.checked){
                newRating +=5;
                newVotes += 1; 
            }

            const books = {
                Name: this.books.Name,
                Rating: newRating,
                Votes: newVotes
            }

            set(databaseReference,books);
           
        });


        component.appendChild(nameComponent);
        nameComponent.appendChild(nameCont);

        component.appendChild(calificationComponent);
        calificationComponent.appendChild(calificationCont);

        component.appendChild(calificationBtnComponent);

        calificationBtnComponent.appendChild(checkBtn1);
        calificationBtnComponent.appendChild(label1);

        calificationBtnComponent.appendChild(checkBtn2);
        calificationBtnComponent.appendChild(label2);

        calificationBtnComponent.appendChild(checkBtn3);
        calificationBtnComponent.appendChild(label3);

        calificationBtnComponent.appendChild(checkBtn4);
        calificationBtnComponent.appendChild(label4);

        calificationBtnComponent.appendChild(checkBtn5);
        calificationBtnComponent.appendChild(label5);

        calificationBtnComponent.appendChild(calificationBtnCont);


        return component;

    }
}