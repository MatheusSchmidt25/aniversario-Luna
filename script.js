document.getElementById('confirmarPresenca').addEventListener('click', function() {
    document.getElementById('form-confirmacao').classList.remove('hidden'); 
});

document.getElementById('confirmarPresenca').addEventListener('click', function(event) {
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

function abrirPage(){
    window.location.href = 'page2.html';
}

function voltar(){
    window.location.href = 'index.html';
}

function abrirPageLocalizacao(){
    window.location.href = 'page3.html';
}

function abrirLocalizacao(){
    const linkLocalizacao = "https://www.google.com/maps/place/Ohana+Festas+e+Eventos/@-24.9574924,-53.4260786,21z/data=!4m20!1m13!4m12!1m4!2m2!1d-53.4845654!2d-24.988667!4e1!1m6!1m2!1s0x94f3d4f3b27a953b:0xf4f5c3fa95826246!2sOhana+Festas+e+Eventos!2m2!1d-53.4257306!2d-24.9574271!3m5!1s0x94f3d4f3b27a953b:0xf4f5c3fa95826246!8m2!3d-24.9574204!4d-53.4257439!16s%2Fg%2F11c2qjn7h5?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"; // Substitua pelo link da sua localização
    window.open(linkLocalizacao, '_blank'); // Abre o link em uma nova aba
}

document.getElementById('sugestao-presentes').addEventListener('click', function() {
    const linkLocalizacao = "https://www.kabum.com.br/produto/238671/console-playstation-5-sony-ssd-825gb-controle-sem-fio-dualsense-com-midia-fisica-branco-1214a?utm_id=21416437425&gad_source=1&gclid=CjwKCAjw5qC2BhB8EiwAvqa41p2zT_zS6Aslev5TaW5GzjazwZXPLlKKMH7N5TezXOgRi3zGhca8aRoCAKkQAvD_BwE"; 
    window.open(linkLocalizacao, '_blank'); // Abre o link em uma nova aba
});





