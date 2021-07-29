// objects literals
// un objeto literal donde podemos obtener propiedades y tambien funciones para cambiar los valores de estas propiedades
const module = {
    prop: 'my prop',
    config: {
        languaje: 'en',
        cache: true
    },
    setConfig: conf => {
        module.config = conf
    },
    isCacheEnabled: () => {
        console.log(module.config.cache ? 'yes' : 'no')
    }
}