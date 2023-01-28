<script src="assets/js/bootstrap.bundle.min.js"></script>

<script>
		function mostraTextoDinamica() {
		var x = document.getElementById("texto-dinamica");
        var y = document.getElementById("btn-lermais");
		if (x.style.display === "none") {
			x.style.display = "block";
            y.style.display = "none";
		} else {
			x.style.display = "none";
		}
		}
</script>

<script>
	function passaNumFoto(nfoto) {
	document.getElementById("caminho-foto").innerHTML = '<img src="assets/imgs/gl-'+ nfoto +'.jpg" class="rounded img-fluid" alt="...">';
	}
</script>