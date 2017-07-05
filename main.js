(function() {
	var ui = new UI();
	var mapa = new Mapa();
	var resolvedor = new ResolvedorDeLabirinto();
	
	$(document).on("click", ".encontrar", function() {
		ui.desenharSolucao(resolvedor.resolver(mapa), mapa);
	});

	ui.desenharMapa(mapa);
}());