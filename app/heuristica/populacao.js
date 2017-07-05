function Populacao(cromossomos) {
	const TAMANHO_DA_POPULACAO = 200;

	this.cromossomos = cromossomos || [];
	this.fitnessMedio = 0;

	this.inicializar = function(mapa) {
		for (var i = 0; i < TAMANHO_DA_POPULACAO; i++) {
			var cromossomo = new Cromossomo();
			cromossomo.definirGenesAleatorios(30, 1, 4);
			cromossomo.calcularFitness(mapa);
			
			this.cromossomos.push(cromossomo);
		}
	}

	this.retornarFitnessTotal = function() {
		var total = 0;

		this.cromossomos.forEach(function(c, index) {
		  	total += c.fitness;
		});

		return total;
	}

	this.retornarPorMetodoDaRoleta = function() {
		var fitnessTotal = this.retornarFitnessTotal();
		var valorAleatorio = Math.random() * fitnessTotal;
		var len = this.cromossomos.length;
        
        var cromossomo;

        for (var i = 0; i < len; i++) {
        	var c = this.cromossomos[i];
        	valorAleatorio -= c.fitness;

        	if (valorAleatorio <= 0) {
        		return c;
        	}
        }
        
        return this.cromossomos[len-1];
	}

	this.retornarMelhorCromossomo = function(fn) {
		return this.cromossomos.sort(function(a, b) {
			return b.fitness - a.fitness
		})[0];
	}

	this.calcularFitnessMedio = function() {
		this.fitnessMedio = this.retornarFitnessTotal() / this.cromossomos.length;
	}
}