$(document).ready(function() {
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.modal').modal({
        dismissible: false
    });


        let messageDetails;
    $('#customerSubmit').click((event) => {
        event.preventDefault();

        if ($('#customerName').val() !== '' && $('#customerNumber').val() !== '' && $('#customerEmail').val() !== '' && $('#customerMessage').val() !== '') {
            let name = $('#customerName').val().trim();
            let number = $('#customerNumber').val().trim();
            let email = $('#customerEmail').val().trim();
            let message = $('#customerMessage').val().trim();

            messageDetails = {
                name: name,
                number: number,
                email: email,
                message: message
            }

            sendMessage();
            $('#customerName').val('');
            $('#customerNumber').val('');
            $('#customerEmail').val('');
            $('#customerMessage').val('');
        } else {
            $('#rejectModal').modal('open');
        }
    });

    function sendMessage() {
        $.post('/contact', messageDetails, (data) => {
            console.log(`data: ${data}`)
            $('#confirmModal').modal('open');
            /*optional stuff to do after success */
        });
    }
});