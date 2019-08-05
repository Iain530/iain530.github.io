document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        // event.preventDefault();
        contactForm.querySelectorAll('input, textarea').forEach((node) => {
            node.disabled = true;
        });

        const request = new XMLHttpRequest();
        // const url = 'https://getsimpleform.com/messages?form_api_token=02236491c7a08c86562d3b2e9c58c86a';
        const url = 'https://app.99inbound.com/api/e/UGiAgPt7';
        const data = new FormData(contactForm);
        request.open('POST', url);

        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200)
                onFormSentSuccess();
            else if (request.readyState === 4)
                onFormSentError();
        };

        // request.send(data);
    });
});

const onFormSentSuccess = () => {
    const contactMeSection = document.getElementById('contact');
    contactMeSection.innerHTML = 'Thank you for getting in contact!'
};

const onFormSentError = () => {

};