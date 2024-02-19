function relogio() {
    const agora = new Date();
    const tela = document.getElementById('canvas');
    const ctx = tela.getContext('2d');

    // Preparar a tela
    ctx.save(); // Salvar o estado padrão

    ctx.restore(); // Restaurar ao estado padrão
} 

relogio();