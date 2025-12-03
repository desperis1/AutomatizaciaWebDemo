document.addEventListener('DOMContentLoaded', () => {
    const pumpInput = document.getElementById('pump-count');
    const sensorInput = document.getElementById('sensor-count');
    const serviceInput = document.getElementById('service-level');

    const pumpVal = document.getElementById('pump-val');
    const sensorVal = document.getElementById('sensor-val');
    const serviceVal = document.getElementById('service-val');

    const requestBtn = document.getElementById('request-btn');

    function updateValues() {
        pumpVal.textContent = pumpInput.value;
        sensorVal.textContent = sensorInput.value;
        serviceVal.textContent = serviceInput.value + (serviceInput.value == 1 ? ' Year' : ' Years');
    }

    [pumpInput, sensorInput, serviceInput].forEach(input => {
        input.addEventListener('input', updateValues);
    });

    requestBtn.addEventListener('click', () => {
        const subject = encodeURIComponent("Price Request: Automation Project");
        const body = encodeURIComponent(
            `Hello,\n\nI would like to request a quote for the following configuration:\n\n` +
            `- Industrial Pumps: ${pumpInput.value}\n` +
            `- Sensors: ${sensorInput.value}\n` +
            `- Service Plan: ${serviceInput.value} Year(s)\n\n` +
            `Please contact me with more details.\n\nBest regards,`
        );

        window.location.href = `mailto:sales@automation-demo.com?subject=${subject}&body=${body}`;
    });

    // Initialize values
    updateValues();

    // Scroll Reveal
    const revealElements = document.querySelectorAll('.service-card, .calculator-box, .section-title');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('reveal'); // Ensure class is present
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
});
