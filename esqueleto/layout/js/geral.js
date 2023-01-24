// Adiciona/Remove classes

	function hasClass(el, className){
		if (el.classList){ return el.classList.contains(className);
		}else{ return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}}
	
	function addClass(el, className){
	if (el.classList){ el.classList.add(className);
	}else if (!hasClass(el, className)){ el.className += " " + className;
	}}
	
	function removeClass(el, className){
		if (el.classList){ el.classList.remove(className);
		}else if (hasClass(el, className)){
			var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
			el.className=el.className.replace(reg, ' ');
		}
	}

// para manipulacao geral

	var painelBusca = document.getElementById('xAreaUser');
	var painelMenu = document.getElementById('xTopoMovel');

// Exibe/Oculta paineis do topo
	
	function exibeOculta(el){
		
		
		
		
		
		contraiTudo();
		
		if(el.id == 'xBtAbreMenu' || el.id == 'xBtFechaMenu'){ var painel = painelMenu;}
		if(el.id == 'xBtAbreBusca' || el.id == 'xBtFechaBusca'){ var painel = painelBusca;}
		
		if(el.id == 'xBtAbreMenu' && hasClass(painelBusca, 'xEfExibe')){
			removeClass(painelBusca, 'xEfExibe');
			addClass(painelBusca, 'xEfOculta');
		}
		if(el.id == 'xBtAbreBusca' && hasClass(painelMenu, 'xEfExibe')){
			removeClass(painelMenu, 'xEfExibe');
			addClass(painelMenu, 'xEfOculta');
		}
		
		if(hasClass(painel,'xEfOculta')){
			removeClass(painel, 'xEfOculta');
			addClass(painel, 'xEfExibe');
		}else{
			removeClass(painel, 'xEfExibe');
			addClass(painel, 'xEfOculta');
		}
		
		/*
		var teste = document.querySelector("#xSite.xLogado #xAreaTopo.x3Cols #xTopoMovel .xCabecalho");
		
		if(teste.style.display === 'block'){
			alert('cabeçalho visível');
		}else{
			alert('cabeçalho invisível');
		}*/
		
	}

// Expande/Contrai

	function contraiTudo(){
		var contrairSubs = document.querySelectorAll(".xMenu .xEfContrai");
		[].forEach.call(contrairSubs, function(els){
			removeClass(els, 'xEfContrai');
			addClass(els, 'xEfExtende');
		});
	}
	
	function contaSubmenus(el){
		var submenus = document.querySelectorAll(".xMenu .xEfContrai");
		var conta = 0;
		[].forEach.call(submenus, function(els){
			conta = conta + 1;
		});
		return conta;
	}
	
	function fechaPainelBusca(){
		if(hasClass(painelBusca, 'xEfExibe')){
			removeClass(painelBusca, 'xEfExibe');
			addClass(painelBusca, 'xEfOculta');
		}
	}		
	
	function fechaPainelMenu(){
		if(hasClass(painelMenu, 'xEfExibe')){
			removeClass(painelMenu, 'xEfExibe');
			addClass(painelMenu, 'xEfOculta');
		}
	}
	
	function expandeContrai(el){
		
		var qualPainel = el.parentNode.className;
		
		if(qualPainel == 'xMenuUser xMenu'){	// Menu do usuário
			
			// Fecha todos os submenus principais
			
				var contrairSubsMP = document.querySelectorAll("#xAreaMenu .xMenu .xEfContrai");
				[].forEach.call(contrairSubsMP, function(els){
					removeClass(els, 'xEfContrai');
					addClass(els, 'xEfExtende');
				});
			
			// Fecha os paineis que estiverem abertos
			
				fechaPainelBusca();
				fechaPainelMenu();
			
			// Então trata este submenu
			
				if(hasClass(el, 'xEfExtende')){
					removeClass(el, 'xEfExtende');
					addClass(el, 'xEfContrai');
				}else{
					removeClass(el, 'xEfContrai');
					addClass(el, 'xEfExtende');
				}
						
		}else{ // Menu principal
		
			if(hasClass(el, 'xEfExtende')){
				removeClass(el, 'xEfExtende');
				addClass(el, 'xEfContrai');
			}else{
				removeClass(el, 'xEfContrai');
				addClass(el, 'xEfExtende');
			}
		}
	}