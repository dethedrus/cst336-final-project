$(document).ready(function () {
    var $UsernameForm = $("#username-form")
    var $UsernameInput = $("#username-input")
    var $SubmitBtn = $("#submit-btn")

    $UsernameForm
        .on("input change", function (event) {
            $SubmitBtn.attr("disabled", !($UsernameInput.val().length))
        })
        .submit(function (event) {
            event.preventDefault()

            var url = "/api/user/username"
            var postData = {
                username: $UsernameInput.val()
            }
            $.post(url, postData)
                .then(
                    function (data, textStatus, jqXHR) {
                        if (jqXHR.status == 200) {
                            location.reload()
                        }
                    },
                    function (jqXHR, textStatus, errorThrown) {
                        var msg = "We ran into a problem, please try again."
                        if (jqXHR.responseJSON && jqXHR.responseJSON.message) {
                            msg = jqXHR.responseJSON.message
                        }
                        alert(msg)
                    }
                )
        })
})