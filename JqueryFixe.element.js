/*

* @author Leonardo Rodrigues da Silva
* @email leo07vasp@gmail.com
caso o elemento possua margin top vai o plugin vai dar uma diferenca de pos
z-index
*/


//var jQuery = jQuery.noConflict();

//jQuery(document).ready(function(){
	jQuery.fn.fixe = function(settings){
		var $this = this;
		var $offset = $this.offset();
		var $topo = $offset.top;
		//console.log($topo);
		
	var conf = {
				debug: false,
				posicaoParada : $topo,
				zIndex: false,
				hide: false

			};
	if (settings){jQuery.extend(conf, settings);}
	
		if(conf.hide == true){
		$this.hide();
		}
	
		if(conf.zIndex == true){
		$this.css('z-index','999');
		}
		
		jQuery(window).scroll(function(){
		if(conf.debug == true){
		console.log(jQuery(this).scrollTop());
		}
		
	if(jQuery(this).scrollTop() > conf.posicaoParada){
		if(conf.hide == true){
		$this.fadeIn();
		$this.css({'position':'fixed', 'top':'0px'});
		}else{
		$this.css({'position':'fixed', 'top':'0px'});
		}
		
		
	}
	
	if(jQuery(this).scrollTop() < conf.posicaoParada){
		if(conf.hide == true){
		$this.fadeOut();
		$this.css({'position':'relative', 'top':'0px'});
		}else{
		$this.css({'position':'relative', 'top':'0px'});
		}
		
		
	}
});
};
//});