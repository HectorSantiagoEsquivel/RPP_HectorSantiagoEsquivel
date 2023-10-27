class Villano extends Persona {
    constructor(id, nombre, apellido, edad, enemigo, robos,muertes) {
        super(id, nombre, apellido, edad);
        this.enemigo = enemigo;
        this.robos = robos;
        this.muertes = muertes;
    }
    
    toString() {
        return (
        super.toString() +
        `, enemigo: ${this.enemigo}, robos: ${this.robos}, asesinatos: ${this.muertes}`
        );
    }

    toJson() {
        const personaJson = super.toJson();
        const villanoJson = JSON.stringify({
        enemigo: this.enemigo,
        robos: this.robos,
        asesinatos: this.muertes
        });
        return Object.assign(JSON.parse(personaJson), JSON.parse(villanoJson));
    }
    
    update(data){
        super.update(data);
        this.enemigo = data.enemigo;
        this.robos = Number(data.robos);
        this.muertes = Number(data.muertes);
    }
}