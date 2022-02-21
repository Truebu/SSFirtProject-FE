var thatSignup;
const signupView = {
    init: function () {
        thatSignup = this;
        // Listener del evento submit de un formulario
        $('#signupForm').on('submit', thatSignup.sendRegisterForm);
    },
    sendRegisterForm: function (e) {
        //Evitar que la página se refresque
        e.preventDefault();
        const txtName = $('#txtName').val();
        const txtEmail = $('#txtEmail').val();
        const txtPassword = $('#txtPassword').val();
        const data = {
            'name': txtName,
            'email': txtEmail,
            'password': txtPassword
        };
        const path = '/signup';
        fetchPost(data, path);
    },
};
signupView.init();