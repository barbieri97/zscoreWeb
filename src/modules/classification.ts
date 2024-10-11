function classificarPontuacao(score: number): string {
    if (score > 2.19) {
        return "Muito Superior";
    } else if (score >= 1.37 && score <= 2.19) {
        return "Superior";
    } else if (score >= 0.69 && score <= 1.36) {
        return "Média Superior";
    } else if (score >= -0.66 && score <= 0.68) {
        return "Média";
    } else if (score >= -1.26 && score <= -0.67) {
        return "Média inferior";
    } else if (score > 1.82 && score <= -1.27) {
        return "Limitrofe";
    } else {
        return "Inferior";
    }
}

export default classificarPontuacao