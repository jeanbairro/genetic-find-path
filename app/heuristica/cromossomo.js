function Cromossomo() {
	
	this.genes = [];
	this.fitness = 0;

	this.definirGenesAleatorios = function(numeroDeGenes, valorMaximo, valorMinimo) {
		for (var i = 0; i < numeroDeGenes; i++) {
			this.genes.push(Math.floor(Math.random() * valorMinimo) + valorMaximo);  
		}
	}

	this.definirGenes = function(genes) {
		this.genes = genes;
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

        var str = "";
        this.genes.forEach(function(g) {
        	str += (mapa.traduzir(g) + ", ");
        });

        console.log(str);
        console.log(`1 / (${diferencaX} + ${diferencaY} + 1) = ${this.fitness}`);
        console.log("\n");
	}

	this.cruzar = function(cromossomo) {
		var metade = this.genes.length / 2;
		var genesDoPai1 = this.genes.map(function(x) { return x }).splice(0, metade);
		var genesDoPai2 = cromossomo.genes.map(function(x) { return x }).splice(metade, metade);
		
		var genesDofilho = [];
		genesDofilho.push.apply(genesDofilho, genesDoPai1);
		genesDofilho.push.apply(genesDofilho, genesDoPai2);

		return genesDofilho;
	}

	this.mutar = function(taxaDeMutacao) {
        for (var i = 0; i < this.genes.length; i++) 
        {
            if (Math.random() < taxaDeMutacao)
            {
                this.genes[i] = Math.floor(Math.random() * 1) + 4;
            }
        }
    }
}