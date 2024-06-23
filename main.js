function atualizarHoras() {
    // Parte responsável por pegar as informações (dia, horas, min) do sistema
    let data = new Date();

    let hora = data.getHours();
    let horasFormatada = hora < 10 ? `0${hora}` : `${hora}`;

    let minutos = data.getMinutes();
    let minutosFormatado = minutos < 10 ? `0${minutos}` : `${minutos}`;

    let segundos = data.getSeconds();
    let segundosFormatado = segundos < 10 ? `0${segundos}` : `${segundos}`;

    let diaMês = data.getDate();

    let mês = data.getMonth() + 1;

    let ano = data.getFullYear();

    // Parte responsável por mudar o valor de getDay() para uma string do dia da semana
    let diaSem = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"] 
    let semanaFormatada = diaSem[data.getDay()]

    /* Essa próxima parte vai mudar o plano de fundo de acordo com a hora do dia
    Vai também mudar a mensagem que aparece abaixo da data
    Antes definindo a variável "corpo" para o body.*/

    let corpo = document.querySelector('body');
    let periodoDia = document.querySelector('.periodo')

    switch(true) {
        case (hora >= 18 || hora < 6): corpo.style.background = 'url(noite.png)';
        periodoDia.innerHTML = "Agora é noite. Boa noite!"
        break
        case (hora >= 6 && hora < 12): corpo.style.background = 'url(manha.jpg)';
        periodoDia.innerHTML = "Está de manhã. Bom dia!"
        
        break
        case (hora >= 12 && hora < 18): corpo.style.background = 'url(tarde.jpg)';
        periodoDia.innerHTML = "Agora é tarde. Boa tarde!"
        break;
    }

    //Essa parte vai definir a formatação do background
    corpo.style.backgroundRepeat = 'no-repeat';
    corpo.style.backgroundPosition = 'center';
    corpo.style.backgroundSize = 'cover';

    //Parte responsável por escrever as informações na tela
    document.querySelector('.horário').innerHTML = `Agora é exatamente ${horasFormatada}:${minutosFormatado}:${segundosFormatado}.`;

    document.querySelector('.dia').innerHTML = `${semanaFormatada} dia ${diaMês}/${mês}/${ano}.`;

}
//Parte responsável por executar a função de atualziar o horário a cada segundo
setInterval (atualizarHoras, 1000);



