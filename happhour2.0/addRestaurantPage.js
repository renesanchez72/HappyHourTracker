$(function () {
    $('#addRestaurantButton').bind('click', function (event) {
        console.log("adding restaurant");
        event.preventDefault();
        var name = $('#restaurantName').val();
        var address = $('#address').val();
        var restaurantImage = $('#restaurantImage').val();
        var deal = $('#deal').val();
        var dayschosen = [];
        var checkboxes = $('input[name="days"]');
        var flag = true;
        checkboxes.filter(":checked").map(function () {
            dayschosen.push(this.value);
            console.log(dayschosen);

        }).get()
        var dayschosenString = dayschosen.join(' ');
        /********validate all our form fields***********/
        /* restaurantName field validation  */
        if (name == "") {
            $('#restaurantName').css('border-color', 'red');
            alert('The restaurant name is empty');
            flag = false;
        }
        if (deal == "") {
            $('#deal').css('border-color', 'red');
            alert('deal is empty');
            flag = false;
        }

        if (address == "") {
            $('#address').css('border-color', 'red');
            flag = false;
            alert('address is empty');
        }

        if (dayschosen == "") {
            alert('No days chosen');
            flag = false;
        }

        if (flag == true) {
            $.ajax({
                type: 'POST',
                url: 'addRestaurant.php',
                dataType: 'json',
                data: 'restaurantName=' + name + '&address=' + address + '&deal=' + deal + '&dayschosen=' + dayschosenString + '&restaurantImage=' + restaurantImage,
                success: function (response) {
                    console.log(response);
                    if (response.restaurantAdded) {
                        alert(response.text);
                    } else {
                        alert(response.text);
                    }
                }
            });
        }
    });
});