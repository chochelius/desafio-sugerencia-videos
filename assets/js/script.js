console.log("Conectado!")

let miIife = (() => {
	let funcionPrivada = (url, id) => {
		id.setAttribute('src', url);
	};
	return {
		funcionPublica: (url, id) => funcionPrivada(url, id),
	};
})();


class Multimedia {
    constructor(url) {
        this.url = url;        
    };
    get getUrl() {
        return this.url
    };
    setInicio(segundos) {
        
    };
}

class Reproductor extends Multimedia {
	constructor(url, id) {
		super(url);
		this.id = id;
	}
	playMultimedia() {
		miIife.funcionPublica(this.getUrl, this.id);
	}
	setInicio(time) {
		this.id.setAttribute('src', `${this.getUrl}?start=${time}`);
	}
}

const vistaMusic = new Reproductor(
	'https://www.youtube.com/embed/aRLR8-oNPZM',
	musica
);
vistaMusic.playMultimedia();
vistaMusic.setInicio(336);

const vistaPeli = new Reproductor(
	'https://www.youtube.com/embed/c_3NMtxeyfk',
	peliculas
);
vistaPeli.playMultimedia();
vistaPeli.setInicio(30);

const vistaSerie = new Reproductor(
	'https://www.youtube.com/embed/tcrNsIaQkb4',
	series
);
vistaSerie.playMultimedia();
vistaSerie.setInicio(50);