// objects literals
// un objeto literal donde podemos obtener propiedades y tambien funciones para cambiar los valores de estas propiedades
const modulo = {
    prop: 'my prop',
    config: {
        languaje: 'en',
        cache: true
    },
    setConfig: conf => {
        modulo.config = conf
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache ? 'yes' : 'no')
    }
}

// patron module revelator
//ifi
// Api publica y Api privada
const resultado = (() => {
    //private props
    const x = {}

    // props public
    return {
        a: () => console.log(x),
        b: (key, val) => x[key] = val
    }
})()

// resultado.a()
// resultado.b('queso', 'cabra')
// resultado.a()
// console.log(resultado.x)

//example

const Users = (async () => {
    const recurso = 'https://jsonplaceholder.typicode.com/users'

    return {
        listar: () => {
            return await fetch(recurso).then(x => x.json())
        },
        crear: async (data) => {
            return await fetch(recurso, { method: 'POST', body: JSON.stringify(data) }).then(x => x.json())
        }
    }
})()