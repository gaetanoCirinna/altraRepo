import uuid1 from 'uuid/v1';
import img from './img1.jpg';

let data = [{
    id: uuid1(),
    image: 'https://static.techprincess.it/wp-content/uploads/sites/5/2019/10/jojo-lucca-comics-and-games-2019-araki-star-comics-week-day-780x405.jpg',
    name: "Una a caso"
}]

// const signIn = (username, password) => new Promise(resolve => {
//     setTimeout(() => {
//         resolve(data)
//     }, 200)
// });



const list = () => new Promise(resolve => {
    setTimeout(() => {
        resolve(data)
    }, 200)
});

const add = (waifu) =>  new Promise(resolve => {
    setTimeout(() => {
        const newWaifu = {
            id: uuid1(),
            ...waifu
        }
        console.log(newWaifu)
        data.push(newWaifu)
        resolve(newWaifu)
    }, 200)
});

const remove = (id) => new Promise(resolve => {
    setTimeout(() => {
        data = data.filter(waifu => waifu.id !== id)
        resolve()
    }, 200)
});

export default {
    list,
    add,
    remove
}