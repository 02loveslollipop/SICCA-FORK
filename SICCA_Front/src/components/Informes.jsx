import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Informes = () => {
    useEffect(() => {
        Swal.fire({
            title: 'Informes',
            text: 'Redirigiendo a los informes...',
            icon: 'info',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
        });
        setTimeout(() => {
            window.location.href = 'https://dashboard.02loveslollipop.uk/';
        }, 2500);
    }, []);
};

export default Informes;
