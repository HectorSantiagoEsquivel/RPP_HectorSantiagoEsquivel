class Heroe extends Persona {
    constructor(id, nombre, apellido, edad, alterego, ciudad,publicado) {
        super(id, nombre, apellido, edad);
        this.alterEgo = alterego;
        this.ciudad = ciudad;
        this.publicado = publicado;
    }
    
    toString() {
        return (
        super.toString() +
        `, alterego: ${this.alterEgo}, ciudad: ${this.ciudad}, publicado: ${this.publicado}`
        );
    }

    toJson() {
        const personaJson = super.toJson();
        const heroeJson = JSON.stringify({
        alterego: this.alterEgo,
        ciudad: this.ciudad,
        publicado: this.publicado
        });
        return Object.assign(JSON.parse(personaJson), JSON.parse(heroeJson));
    }
    
    update(data){
        super.update(data);
        this.alterEgo = data.alterego;
        this.ciudad = data.ciudad;
        this.publicado =  Number(data.publicado);
    }
}