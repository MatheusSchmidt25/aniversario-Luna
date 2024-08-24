document.getElementById('confirmar-presenca').addEventListener('click', function() {
    document.getElementById('form-confirmacao').classList.remove('hidden'); 
});

document.getElementById('enviar-nome').addEventListener('click', function(event) {
    event.preventDefault(); 
    const nome = document.getElementById('nome').value;
    if (nome) {
        const numero = "5545998040782"; 
        const mensagem = `Olá! Meu nome é ${nome} e confirmo minha presença.`;
        const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
        window.open(linkWhatsApp, '_blank'); 
        alert(`${nome}, sua presença foi confirmada!`);
        document.getElementById('nome').value = ''; 
        document.getElementById('form-confirmacao').classList.add('hidden'); 
    } else {
        alert('Por favor, insira seu nome.');
    }
});

document.getElementById('localizacao').addEventListener('click', function() {
    document.getElementById('form-localizacao').classList.remove('hidden'); 
});

document.getElementById('abrir-localizacao').addEventListener('click', function() {
    const linkLocalizacao = "https://www.google.com/maps/dir//R.+Espa%C3%A7o+Verde,+693+-+Pioneiros+Catarinenses,+Cascavel+-+PR,+85805-654/@-24.9795808,-53.4811135,19.08z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94f3d419871347b9:0x1f0246b635e0dd76!2m2!1d-53.4806472!2d-24.9795021?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"; // Substitua pelo link da sua localização
    window.open(linkLocalizacao, '_blank'); // Abre o link em uma nova aba
});

document.getElementById('sugestao-presentes').addEventListener('click', function() {
    const linkLocalizacao = "https://www.kabum.com.br/produto/238671/console-playstation-5-sony-ssd-825gb-controle-sem-fio-dualsense-com-midia-fisica-branco-1214a?utm_id=21416437425&gad_source=1&gclid=CjwKCAjw5qC2BhB8EiwAvqa41p2zT_zS6Aslev5TaW5GzjazwZXPLlKKMH7N5TezXOgRi3zGhca8aRoCAKkQAvD_BwE"; 
    window.open(linkLocalizacao, '_blank'); // Abre o link em uma nova aba
});





particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: { value: 0.5, random: false, anim: { enable: false } },
        size: { value: 3, random: true, anim: { enable: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false } }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});


