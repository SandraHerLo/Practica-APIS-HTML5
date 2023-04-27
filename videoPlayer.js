'use strict';

	function handleFileSelect(evt) {
		let file = evt.target.files[0];
		if (!file.type.match('video.*')) {
            alert("Por favor, introduzca un archivo en formato de video");
			return;
		}else{
            alert("Cargando video... ");
        }
		let reader = new FileReader();
		reader.onload = (function (File) {
			return function (e) {
				let videoDiv = document.getElementsByClassName('video-container');
				if (videoDiv[0] != null) {
					videoDiv[0].parentNode.removeChild(videoDiv[0]);
				}
				let div = document.createElement('div');
				div.id = "div-video";
				div.className = "video-container";
				div.innerHTML = '<video controls id="video" class="thumbnail" src="' + e.target.result + '" title="' + escape(File.name) + '"/>';
				document
					.getElementById('video-output')
					.insertBefore(div, null);
				let reproducirBoton = document.getElementById('reproducir');
				let pausarBoton = document.getElementById('pausar');
				let subirVolumenBoton = document.getElementById('subirVolumen');
				let bajarVolumenBoton = document.getElementById('bajarVolumen');
				reproducirBoton.addEventListener('click', () => {
					document.getElementById('video').play();
				});
				pausarBoton.addEventListener('click', () => {
					document.getElementById('video').pause();
				})
				subirVolumenBoton.addEventListener('click', () => {
					document.getElementById('video').volume += 0.1;
				})
				bajarVolumenBoton.addEventListener('click', () => {
					document.getElementById('video').volume -= 0.1;
				})
				document.getElementById('video').addEventListener('canplay', () => {
					document
						.getElementById('video-output')
					document
						.getElementById('video')
						.style.visibility = "visible";
                    reproducirBoton
						.style.visibility = "visible";
                    pausarBoton
						.style.visibility = "visible";
                    subirVolumenBoton
						.style.visibility = "visible";
                    bajarVolumenBoton
						.style.visibility = "visible";
				});
			}
		})(file);
		reader
			.readAsDataURL(file);
	}
	document
		.getElementById('file')
		.addEventListener('change', handleFileSelect, false);
