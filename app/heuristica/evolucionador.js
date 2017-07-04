function Evolucionador(mapa) {
	const TAMANHO_DA_POPULACAO = 100;
	const TAXA_CRUZAMENTO = 0.7;
	const TAXA_MUTACAO = 0.1;
    const TAXA_ELITISMO = 0.1;

	this.mapa = mapa;

	this.evoluir = function(populacao) {
        var filhos = retornarQuantidadeDaElite(populacao.cromossomos, TAXA_ELITISMO, TAMANHO_DA_POPULACAO);
        var numeroDeFilhos = filhos.length;

		while (numeroDeFilhos < TAMANHO_DA_POPULACAO) {
			var pai1 = populacao.retornarPorMetodoDaRoleta();
            var pai2 = populacao.retornarPorMetodoDaRoleta();

            var filho1, filho2;
            if (pai1 !== pai2) {
                genesFilho1 = pai1.cruzar(pai2);
                genesFilho2 = pai2.cruzar(pai1);
                
                filho1 = new Cromossomo();
                filho1.definirGenes(genesFilho1);
            	
                filho2 = new Cromossomo();
            	filho2.definirGenes(genesFilho2);

                filho1.mutar(TAXA_MUTACAO);
                filho2.mutar(TAXA_MUTACAO);

                filho1.calcularFitness(this.mapa);
                filho2.calcularFitness(this.mapa);
            } else {
                filho1 = pai1;
                filho2 = pai2;
            }
            
            filhos.push(filho1);
            filhos.push(filho2);
            numeroDeFilhos += 2;
		}

		var pop = new Populacao(filhos);
		pop.calcularFitnessMedio();

		return pop;
	}

    this.evoluir2 = function(populacao) {
        var filhos = [];
        var numeroDeFilhos = 0;

        while (numeroDeFilhos < TAMANHO_DA_POPULACAO) {
            var pai1 = populacao.retornarPorMetodoDaRoleta();
            var pai2 = populacao.retornarPorMetodoDaRoleta();
            
            var filho1, filho2;
            if (Math.random() > TAXA_CRUZAMENTO || pai1 === pai2)
            {
                filho1 = pai1;
                filho2 = pai2;
            } else {
                genesFilho1 = pai1.cruzar(pai2);
                genesFilho2 = pai2.cruzar(pai1);
                
                filho1 = new Cromossomo();
                filho1.definirGenes(genesFilho1);
                
                filho2 = new Cromossomo();
                filho2.definirGenes(genesFilho2);

                filho1.mutar(TAXA_MUTACAO);
                filho2.mutar(TAXA_MUTACAO);

                filho1.calcularFitness(this.mapa);
                filho2.calcularFitness(this.mapa);
            }
            
            filhos.push(filho1);
            filhos.push(filho2);
            numeroDeFilhos += 2;
        }

        var pop = new Populacao(filhos);
        pop.calcularFitnessMedio();

        return pop;
    }

    var retornarQuantidadeDaElite = function(cromossomos, taxa, tamanhoDaPopulacao) {
        var quantidadeDaElite = taxa * tamanhoDaPopulacao;
        
        return cromossomos.map(function(x) { 
            return x; 
        }).sort(function(a, b) {
            return b.fitness - a.fitness
        }).slice(0, quantidadeDaElite); 
    }
}