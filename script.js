function startCountdown(minutes) {
    let timeRemaining = minutes * 60; // Converter minutos para segundos
    
    let interval = setInterval(function() {
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        
        // Formatar para exibir com dois dígitos
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        document.getElementById('tdescanso').innerText = minutes + ':' + seconds + ' minuto(s)';
        
        timeRemaining--;
        
        if (timeRemaining < 0) {
            clearInterval(interval);
            let qt = document.getElementById('qt').value;
            qt = qt > 1 ? qt - 1 : 0;
            document.getElementById('qt').value = qt;
            document.getElementById('qfaltam').innerText = 'Faltam ' + qt + ' série(s)';
            //Botão que recomeça a contagem
            if (qt > 0) {
                document.getElementById('novo').style.display = 'block';
            } else {
                document.getElementById('tdescanso').innerText = 'Treino Concluído!';
            }
        }
    }, 1000);
}

document.getElementById('acao').addEventListener('click', function() {
    let qt = document.getElementById('qt').value;
    let td = document.getElementById('td').value;
    
    document.getElementById('qfaltam').innerText = 'Faltam ' + qt + ' série(s)';
    startCountdown(td);
});

document.getElementById('novo').addEventListener('click', function() {
    let td = document.getElementById('td').value;
    document.getElementById('novo').style.display = 'none';
    startCountdown(td);
});