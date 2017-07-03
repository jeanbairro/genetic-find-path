function Populacao() {
	const TAMANHO_DA_POPULACAO = 100;
	const TAXA_CRUZAMENTO = 0.7;
	const TAXA_MUTACAO = 0.1;

	this.cromossomos = [];

	this.inicializar = function(mapa) {
		for (var i = 0; i < TAMANHO_DA_POPULACAO; i++) {
			var cromossomo = new Cromossomo();
			cromossomo.definirGenesAleatorios(20, 1, 4);
			cromossomo.calcularFitness(mapa);
			
			this.cromossomos.push(cromossomo);
		}
	}

	this.evoluir = function() {
		var filhos = [];
		var numeroDeFilhos = 0;

		while (numeroDeFilhos < TAMANHO_DA_POPULACAO) {
			var pai1 = this.retornarPorMetodoDaRoleta();
            var pai2 = this.retornarPorMetodoDaRoleta();
            
            var filho1, filho2;
            if (Math.random() > TAXA_CRUZAMENTO || pai1 == pai2)
            {
                filho1 = pai1;
                filho2 = pai2;
            } else {
                genesFilho1 = pai1.cruzar(pai2);
                genesFilho2 = pai2.cruzar(pai1);
                
                var filho1 = new Cromossomo();
                filho1.definirGenes(genesFilho1);
            	var filho2 = new Cromossomo();
            	filho2.definirGenes(genesFilho2);

                filho1.mutar(TAXA_MUTACAO);
                filho2.mutar(TAXA_MUTACAO);

                filho1.calcularFitness();
                filho2.calcularFitness();
            }
            
            filhos.push(filho1);
            filhos.push(filho2);
            numeroDeFilhos += 2;
		}

		return filhos;
	}

	this.retornarFitnessTotal = function() {
		return this.cromossomos.reduce((a, b) => a.fitness + b.fitness, 0);	
	}

	this.retornarPorMetodoDaRoleta = function() {
		var fitnessTotal = this.retornarFitnessTotal();
		var slice = Math.random() * fitnessTotal;
        var spin_total = 0;
        var cromossomo = this.cromossomos[0];

        for (var i = 0; i < this.cromossomos.length; i++) {
        	var c = this.cromossomos[i];
        	spin_total += c.fitness;
            
            if (spin_total > slice) {
                cromossomo = c;
                break;
            }
        }
        
        return cromossomo;
	}

	this.retornarMelhorCromossomo = function(fn) {
		return this.cromossomos.sort(function(a, b) {
			return b.fitness - a.fitness
		})[0];
	}
}