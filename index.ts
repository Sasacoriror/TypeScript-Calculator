document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = (button as HTMLButtonElement).value;

            if (value === 'C') {
                
                display.value = '';
            } else if (value === '=') {
                
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else {
                
                display.value += value;
            }
        });
    });
});

