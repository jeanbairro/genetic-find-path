function Cromossomo() {
	
	this.genes = [];
	this.fitness = 0;

	this.definirGenes = function(numeroDeGenes, valorMaximo, valorMinimo) {
		for (var i = 0; i < numeroDeGenes; i++) {
			this.genes.push(Math.floor(Math.random() * valorMinimo) + valorMaximo);  
		}
	}

	this.calcularFitness = function(mapa) {
		var posicaoX = mapa.posicaoInicial.X;
        var posicaoY = mapa.posicaoInicial.Y;
        
        var len = this.genes.length;
        for (var i = 0; i < len; i++)
        {
        	var gene = this.genes[i];

            if (gene === mapa.direcao.DIREITA && posicaoX < mapa.tamanho.LARGURA-1 && mapa.labirinto[posicaoY][posicaoX+1] === 0) {
                ++posicaoX;
            }
            else if (gene === mapa.direcao.CIMA && posicaoY > 0 && mapa.labirinto[posicaoY-1][posicaoX] === 0) {
                --posicaoY;
            }
            else if (gene === mapa.direcao.ESQUERDA && posicaoX > 0 && (mapa.labirinto[posicaoY][posicaoX-1] === 0 || mapa.labirinto[posicaoY][posicaoX-1] == 8)) {
                --posicaoX;
            }
            else if (gene === mapa.direcao.BAIXO && posicaoY < mapa.tamanho.ALTURA-1 && mapa.labirinto[posicaoY+1][posicaoX] === 0) {
                ++posicaoY;
            }
            else {
            	break;
            }
        }
        
        var diferencaX = Math.abs(posicaoX - mapa.posicaoFinal.X);
        var diferencaY = Math.abs(posicaoY - mapa.posicaoFinal.Y);
        
        this.fitness = 1 / (diferencaX + diferencaY + 1);

        console.log(`1 / ${diferencaX} + ${diferencaY} + 1 = ${this.fitness}`);
	}
}