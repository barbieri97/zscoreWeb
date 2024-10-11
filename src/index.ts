import zscoreValues from "./modules/zscoreValues";
import classificarPontuacao from "./modules/classification";

// script.ts

// Função para calcular o Z-Score
function calculateZScore(rawScore: number, mean: number, stdDev: number, invert: boolean): number {
    const zScore = (rawScore - mean) / stdDev;
    return invert ? -zScore : zScore; // Retorna o Z-Score invertido se a checkbox estiver marcada
}

// Função para lidar com o envio do formulário
function handleFormSubmit(event: Event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Obtendo os valores dos inputs
    const rawScore = parseFloat((<HTMLInputElement>document.getElementById('raw-score')).value);
    const mean = parseFloat((<HTMLInputElement>document.getElementById('mean')).value);
    const stdDev = parseFloat((<HTMLInputElement>document.getElementById('std-dev')).value);
    const invertZScore = (<HTMLInputElement>document.getElementById('inverted')).checked;
    let percentil: number | string | undefined
    let weightedScore: number | string
    let scaledScore: number | string
    let tScore: number | string
    let classification: string

    // Calculando o Z-Score
    const zScore = parseFloat(calculateZScore(rawScore, mean, stdDev, invertZScore).toFixed(2));
    if (zScore > 3 || zScore < -3) {
        percentil = zScore > 0 ? 100:0
        weightedScore = zScore > 0 ? ">= 145":"<=55"
        scaledScore = zScore > 0 ? ">=19":"<=1"
        tScore = zScore > 0 ? ">=80":"<=20"
    } else {
        percentil = zscoreValues.find((e) => e.zscore === zScore)?.percentil
        weightedScore = Math.floor((zScore * 3) + 10)
        scaledScore = Math.floor((zScore * 15) + 100)
        tScore = Math.floor((zScore * 10) + 50)
    }
    classification = classificarPontuacao(zScore)

    // Exibindo os resultados
    document.getElementById('zscore-result')!.textContent = `${zScore.toFixed(2)}`;
    document.getElementById('percentile-result')!.textContent = `${percentil}%`
    document.getElementById('weighted-score')!.textContent = `${weightedScore}`
    document.getElementById('scaled-score')!.textContent = `${scaledScore}`
    document.getElementById('t-score')!.textContent = `${tScore}`
    document.getElementById('classification')!.textContent = `${classification}`
    
}

// Adicionando o listener ao formulário
document.getElementById('zscore-form')!.addEventListener('submit', handleFormSubmit);
