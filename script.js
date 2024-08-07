document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const dayInput = document.getElementById('day');
    const outputDiv = document.getElementById('output');

    submitButton.addEventListener('click', () => {
        const day = dayInput.value.trim().toLowerCase();
        let message = '';

        switch(day) {
            case 'senin':
                message = 'B. Bali<br>MTK<br>P. Pancasila';
                break;
            case 'selasa':
                message = 'B. Inggris<br>B. Indo<br>MTK';
                break;
            case 'rabu':
                message = 'P5';
                break;
            case 'kamis':
                message = 'PJOK<br>B. Indo';
                break;
            case 'jumat':
                message = 'Nyurat Aksara BALI<br>IPAS<br>Seni Budaya (Seni Rupa)';
                break;
            case 'sabtu':
                message = 'Agama Hindu';
                break;
            default:
                message = 'Maaf, mohon pilih hari yang tepat.';
        }

        outputDiv.innerHTML = message; // Gunakan innerHTML untuk merender HTML
    });
});
