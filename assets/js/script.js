console.log("Conectado!")
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
    };
    get getId() {
        return this.id
    };
    
    setInicio(segundos) {
        return segundos
    };
    playMultimedia() {

    }

}

//aún me falta montón pero está tomando forma