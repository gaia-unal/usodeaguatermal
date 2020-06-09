jQuery(document).ready( function() {
	jQuery('#mapa_colombia').svg();
	var mapa = jQuery('#mapa_colombia').svg('get');
    mapa.load("images/mapa.svg", {
		addTo: true,
		onLoad: eventos
	});
});

function eventos(svg, error) {
	jQuery( '.icono', svg.root() ).on('click', function( event, nodo ) {
		event.stopPropagation();

		//Detectar posición mouse
		var posX = jQuery(this).position().left;
		var posY = jQuery(this).position().top;

		if(jQuery(this).hasClass('seleccionado')) {
			jQuery(this).toggleClass('seleccionado');
			jQuery('#mapa_colombia .texto').removeClass('visible');
		} else {
			var termales = jQuery(this).attr('id');
			jQuery('.icono', svg.root()).removeClass('seleccionado');
			jQuery(this).toggleClass('seleccionado');
			jQuery('#mapa_colombia .texto').removeClass('visible');

			//Posicionar cuadro
			var cuadro = jQuery('#mapa_colombia .texto[data-termales='+ termales +']');
			var ancho = jQuery(cuadro).width() + 30;
			var alto = jQuery(cuadro).height();
			var dist = 20;
			var ancho_icono = 15; //jQuery(this).width();
			var flecha = 20;
			if(jQuery(cuadro).hasClass('derecha')) posX = posX - dist - ancho;
			else posX = posX + dist + ancho_icono;
			if(jQuery(cuadro).hasClass('abajo')) posY = posY - alto + 20;
			else posY = posY - dist;
			jQuery(cuadro).css('top', posY + 'px').css('left', posX + 'px').addClass('visible');
		}
	});

	jQuery('.mapa_svg').on( 'click', function() {
			jQuery('.icono', svg.root()).removeClass('seleccionado');
			jQuery('#mapa_colombia .texto').removeClass('visible');
	});

	jQuery('#mapa_colombia .texto').on( 'click', function(event, nodo) {
		event.stopPropagation();
	} );

	jQuery('#mapa_colombia .texto .cerrar').on( 'click', function(event, nodo) {
		jQuery('.icono', svg.root()).removeClass('seleccionado');
		jQuery('#mapa_colombia .texto').removeClass('visible');
	} );
}
