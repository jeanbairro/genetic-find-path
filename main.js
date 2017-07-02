(function() {
	var ui = new UI();
	var mapa = new Mapa();
	var resolvedor = new ResolvedorDeLabirinto();
	
	ui.desenharMapa(mapa);
	ui.desenharSolucao(resolvedor.resolver(mapa));
}());