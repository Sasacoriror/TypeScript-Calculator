document.addEventListener('DOMContentLoaded', function () {
    var display = document.getElementById('display');
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var value = button.value;
            if (value === 'C') {
                display.value = '';
            }
            else if (value === '=') {
                try {
                    display.value = eval(display.value);
                }
                catch (e) {
                    display.value = 'Error';
                }
            }
            else {
                display.value += value;
            }
        });
    });
});
