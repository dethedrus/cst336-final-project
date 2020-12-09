$(document).ready(function () {
    var $UsernameInput = $("#username-input")
    var $PasswordInput = $("#password-input")
    var $SubmitBtn = $("#submit-btn")

    $("#login-form")
        .on("input change", function (event) {
            $SubmitBtn.attr(
                "disabled",
                !($UsernameInput.val().length && $PasswordInput.val().length)
            )
        })
        .on("submit", function (event) {
            event.preventDefault()

            var url = "/api/signup"
            var postData = {
                username: $UsernameInput.val(),
                password: $PasswordInput.val()
            }

            $.post(url, postData)
            .then(
                function(data, textStatus, jqXHR) {
                    if (jqXHR.status == 200) {
                        window.location.replace("/")
                    } else {
                        alert("We ran into a problem, please try again.")
                    }
                },
                function(jqXHR, textStatus, errorThrown) {
                    var msg = "We ran into a problem, please try again."
                    if (jqXHR.responseJSON && jqXHR.responseJSON.message) {
                        msg = jqXHR.responseJSON.message
                    }
                    alert(msg)
                }
            )
        })
})