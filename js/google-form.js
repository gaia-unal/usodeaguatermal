// This script requires jQuery and jquery-form plugin
$('#bootstrapForm').submit(function (event) {
    event.preventDefault()
    var extraData = {}
    $('#bootstrapForm').ajaxSubmit({
        data: extraData,
        error: function () {
            // Google Docs won't allow reading the response because of CORS, so this is handled as a failure.
            alert('Datos enviados. Gracias por su contribución.')
        }
    })
})