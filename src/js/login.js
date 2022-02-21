var thatLogin;
const loginView = {
    init: function () {
        thatLogin = this;
        // Listener del evento submit de un formulario
        $('#loginForm').on('submit', thatLogin.sendRegisterForm);
    },
    sendRegisterForm: function (e) {
        //Evitar que la página se refresque
        e.preventDefault();
        const txtEmail = $('#txtEmail').val();
        const txtPassword = $('#txtPassword').val();
        const data = {
            'email': txtEmail,
            'password': txtPassword
        };
        const path = '/login';
        fetchPost(data, path);
    },
};
loginView.init();