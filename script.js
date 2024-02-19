function relogio() {
    const agora = new Date();
    const tela = document.getElementById("canvas");
    const ctx = tela.getContext("2d");

    // Preparar a tela
    ctx.save(); // Salvar o estado padrão
    ctx.clearRect(0, 0, 500, 500); // Apagar toda a informação
    ctx.translate(250,250); // Colocar 0,0 no meio do retângulo-tela
    ctx.rotate(-Math.PI/2); // Rotacionar  -90º

    // Estilo Padrão
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#f4f4f4";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    // Desenhar relógio
    ctx.save();

    ctx.beginPath();
    ctx.lineWidth = 9;
    ctx.strokeStyle = "#000000";
    ctx.arc(0,0,142,0,Math.PI * 2, true);
    ctx.stroke();
    ctx.fill();

    // Números das horas do relógio (ticks)
    ctx.save();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000000";
    for (let i = 0; i < 12; i++){
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100,0);
        ctx.lineTo(120,0); //OBS: esse (0,0) é o centro agora por causa do "translate" na linha 9
        ctx.stroke(); //OBS: A primeira linha sai vertical por causa do "rotate" na linha 10
    }
    ctx.restore();

    // Números dos minutos do relógio (ticks)
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    for (let i = 0; i < 60; i++){
        
        // Este 'if' vai garantir que não seja colocada marcação de minuto sobre marcação de hora
        if (i % 5 !== 0) {
            ctx.beginPath();
            ctx.moveTo(115,0);
            ctx.lineTo(120,0); //OBS: esse (0,0) é o centro agora por causa do "translate" na linha 9
            ctx.stroke(); //OBS: A primeira linha sai vertical por causa do "rotate" na linha 10'
        } 

        // Queremos que a rotação ocorra em toda iteração, só não queremos todas as linhas
        ctx.rotate(Math.PI / 30); 
    }
    ctx.restore();

    ctx.restore();

    // Pegar o horário atual
    const hr = agora.getHours() % 12;
    const min = agora.getMinutes();
    const seg = agora.getSeconds();

    console.log(hr);

    // Desenhar ponteiro das horas
    ctx.save();

    ctx.rotate((Math.PI / 6) * hr + (Math.PI /360) * min + (Math.PI/21600) * seg);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(45, 0);
    ctx.stroke();

    ctx.restore();

    // Desenhar ponteiro dos minutos
    ctx.save();

    ctx.rotate((Math.PI / 30) * min + (Math.PI/1800) * seg);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(90, 0);
    ctx.stroke();


    ctx.restore();

     // Desenhar ponteiro dos segundos
     ctx.save();

     ctx.rotate((Math.PI/30) * seg);
     ctx.strokeStyle = "black";
     //ctx.fillStyle = "#FF7F50";
     ctx.fillStyle = "black";
     ctx.lineWidth = 6;
     ctx.beginPath();
     ctx.moveTo(0, 0);
     ctx.lineTo(100, 0);
     ctx.stroke();

     //Bolinha no centro do relógio
     ctx.beginPath();
     ctx.arc(0,0, 8, 0, Math.PI * 2, true);
     ctx.fill();
     ctx.restore();
 
     ctx.restore();

    ctx.restore(); // Restaurar ao estado padrão
} 

relogio();