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
// console.log(instancia)

//Examples

// example1
// Hace que todos los tipos objectos en su prototype se le integre el metodo log para ser utilizado
Object.prototype.log = function () {
    console.log(this);
}

// Esto es igual al hacer un new MiClase pero abreviado y menos legible como la clase
const x = { a: 1 }
x.log()

// example 2

String.prototype.trim = undefined
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        try {
            return this.replace(/^\s+|\s+$/g, '')
        } catch (error) {
            throw new Error('Cannot delete blank spaces in string')
        }
    }
}

const text = "    lalala    ".trim()
text.log()