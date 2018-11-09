const faker = require('faker')

const indomie = (idx) => ({
    key: idx,
    nama_barang: faker.name.findName(),
    jumlah: faker.random.number()
})

let arr = []
for (let i = 1; i < 4; i++) {
    arr.push(indomie(i))
}
console.log(JSON.stringify(arr))