class MiClase {
    constructor() {
        this.propiedad = 1
        this.metodo = () => {
            // soy un metodo de instancia
        }
    }

    metodo_prototype() {
        // soy un metodo de prototype
    }
}

const instancia = new MiClase()
console.log(instancia)