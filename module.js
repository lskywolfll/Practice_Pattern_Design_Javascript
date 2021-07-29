// objects literals
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