



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
        text = 'perfetto, puoi accedere';
    } else {
        text = 'oh no! Non sei autorizzato';
    }
    alertEl.innerHTML = text;
});

// creazione random dadi
    const btn = document.querySelector('.btn-warning');  

    btn.addEventListener('click', function(){
        let dadiPlayer = Math.floor((Math.random() * 6) + 1);
        let dadiCpu = Math.floor((Math.random() * 6) + 1);
        if (dadiPlayer > dadiCpu){
            text = 'Giocatore 1 hai vinto';
        } else if (dadiPlayer < dadiCpu){
             text = 'Giocatore 1 hai perso';
        } else {
            text = 'Tu e Cpu siete pari';
        }

risultato.innerHTML = text;
box_player.innerHTML = dadiPlayer;
box_cpu.innerHTML = dadiCpu;

    console.log(dadiPlayer);
    console.log(dadiCpu);
    console.log(text);
    
})




