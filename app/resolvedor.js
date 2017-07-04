function ResolvedorDeLabirinto() {
	var geracoes = [];

	this.resolver = function(mapa) {
		var populacao = new Populacao();
		populacao.inicializar(mapa); /* Gênesis */
		geracoes.push(populacao);

		var evolucionador = new Evolucionador(mapa);

		// for (var i = 0; i < 500; i++) {
		// 	geracoes.push(evolucionador.evoluir2(geracoes[i]));
		// }

		var i = 0;
		while (geracoes[i].retornarMelhorCromossomo().fitness < .3) {
			geracoes.push(evolucionador.evoluir2(geracoes[i]));
			i++;	
		}

		geracoes.forEach(function(item, index){
			console.log("Fitness médio: " + item.fitnessMedio);
			console.log("Fitness máximo: " + item.retornarMelhorCromossomo().fitness);
		});

		var best = geracoes[i].retornarMelhorCromossomo();
		var str = "";
		best.genes.forEach(function(g) {
        	str += (mapa.traduzir(g) + ", ");
        });
        console.log(str);
	}
}