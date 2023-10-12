



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

    for (let email = 0; email <= account.length - 1; email++) {
        let currentMail = account[email];
        if (currentMail === email) {
            text = 'ok';
        } else {
           text  = 'no';
        }
        console.log(alertEl);
        alertEl.innerHTML = text;

    }


});
