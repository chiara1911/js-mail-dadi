



const account = [
    'chiaracesari89@gmail.com',
    'bean@bean.com',
    'pippo@pippo.com'
];

// console.log(account);



const alertEl = document.querySelector('.alert')

const button = document.querySelector('.btn-success');
button.addEventListener('click', function () {

    const email = document.getElementById('mail').value;
    let flag = false;

    for (let i = 0; i <= account.length - 1; i++) {
        let currentMail = account[i];
        if (email === currentMail) {
            flag = true;
        }
    }
    if (flag) {
        text = 'ciao';
    } else {
        text = 'via';
    }
    alertEl.innerHTML = text;
});

// creazione random dadi
const nome_giocatore = document.querySelector('nome_giocatore');
    const btn = document.querySelector('.btn-warning');
    let dadiPlayer= Math.floor((Math.random() * 6) + 1);
    let dadiCpu = Math.floor((Math.random() * 6) + 1);
    
btn.addEventListener('click', function () {
    if (dadiPlayer > dadiCpu){
    text = 'hai vinto';
    } else if (dadiPlayer < dadiCpu){
        text = 'hai perso';
    } else {
        text = 'siete pari';
    }
    console.log(dadiPlayer);
    console.log(dadiCpu);
    console.log(text);
    
})




