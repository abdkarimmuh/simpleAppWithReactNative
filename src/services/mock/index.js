const create = () => {
    // const TIMEOUT = 3000
    const TIMEOUT = 0

    return {
        getData: () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ data: require('./getDataBarang.json') })
            }, TIMEOUT)
        }),
    }
}
  
export default {
    create
}