document.getElementById('individual-button').addEventListener('click', function() {
    document.getElementById('individual').style.display = "flex";
    document.getElementById('enterprise').style.display = "none";
    this.classList.add('active');
    document.getElementById('enterprise-button').classList.remove('active');
});

document.getElementById('enterprise-button').addEventListener('click', function() {
    document.getElementById('enterprise').style.display = "flex";
    document.getElementById('individual').style.display = "none";
    this.classList.add('active');
    document.getElementById('individual-button').classList.remove('active');
});

let lastScrollTop = 0;
let navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.screenY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100%";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

window.addEventListener('scroll', function() {
    document.querySelectorAll('.slide-in').forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop <= screenHeight) {
            section.style.animation = '1s ease-out 0s 1 slideInFromRight';
        } else {
            section.style.animation = 'none';
        }
    });
});

window.addEventListener('scroll', function() {
    document.querySelectorAll('.fade-in').forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop <= screenHeight) {
            section.style.animation = '1s fadeIn ease-in 1';
            section.style.visibility = 'visible';
        } else {
            section.style.animation = 'none';
            section.style.visibility = 'hidden';
        }
    });
});

const submitButton = document.querySelector("form button.form-button")
const emailInput = document.querySelector("input#email")

submitButton.addEventListener("click", submitForm)

const submit = []

function submitForm(event) {
    event.preventDefault()

    const name = document.querySelector("input#name").value
    const email = emailInput.value

    if (validateEmail(email)) {
        const formData = {
            name,
            email
        }

        submit.push(formData)

        displaySubmit()
        resetarForm()

    } else {
        showError("Por favor, insira um endereço de e-mail válido. Ele deve conter @ e um '.'")
    }
    
}

function validateEmail(email) {
    const teste = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return teste.test(email)
}

function displaySubmit() {
    console.log(submit)
}

function resetarForm() {
    document.querySelector("input#name").value = ""
    emailInput.value = ""
}

function showError(message) {

    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    const errorElement = document.createElement("p");
    errorElement.className = "error-message";
    errorElement.textContent = message;

    emailInput.parentNode.insertBefore(errorElement, emailInput);

    setTimeout(() => {
        errorElement.remove();
    }, 3000);
}

document.querySelector('.form-button').addEventListener('click', function(event) {
    event.preventDefault();

    const existingError = document.querySelector('.error-message');
    if (!existingError) {
        const thankyouMessage = document.getElementById('thankyou-message');
        thankyouMessage.style.display = 'block';
        thankyouMessage.style.animation = '1s slideIn forwards';

        setTimeout(function() {
            thankyouMessage.style.animation = '1s slideOut forwards';
        }, 4000);

        setTimeout(function() {
            thankyouMessage.style.display = 'none';
        }, 5000);
    }

});

document.querySelector('.forms').addEventListener('submit', function(event) {
    event.preventDefault();

    
});