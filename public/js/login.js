$(document).ready(function() {
    var $UsernameInput = $("#username-input")
    var $PasswordInput = $("#password-input")
    var $SubmitBtn = $("#submit-btn")

    $("#login-form")
        .on("input change", function(event) {
            $SubmitBtn.attr(
                "disabled",
                !($UsernameInput.val().length && $PasswordInput.val().length)
            )
        })
        .on("submit", function(event) {
            event.preventDefault()

            var url = "/login"
            // TODO:
        })
})