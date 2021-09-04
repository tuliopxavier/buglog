let pontuacao = [10, 20, 10, 15, 5, 30, 20];
const tamanho_do_time = 2;
const k = 3;

function selecaoPrimeiros(pontuacao, tamanho_do_time, k) {
    let pontuacaoPrimeiros = pontuacao.slice(0, k);
    let pontuacaoMaior = pontuacaoPrimeiros[0];
    for (let i = 0; i < pontuacaoPrimeiros.length; i++) {
        if (pontuacaoMaior < pontuacaoPrimeiros[i]) {
            pontuacaoMaior = pontuacaoPrimeiros[i];
        }
    };
}

function selecaoUltimos(pontuacao, tamanho_do_time, k) {
    console.log(pontuacao.slice(pontuacao.length-k, pontuacao.length));
}

selecaoPrimeiros(pontuacao, tamanho_do_time, k);
selecaoUltimos(pontuacao, tamanho_do_time, k);