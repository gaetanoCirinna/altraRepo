import uuid1 from 'uuid/v1';
import img from './img1.jpg';

let data = [{
    id: uuid1(),
    image: 'https://www.tvovermind.com/wp-content/uploads/2018/12/Dio-750x422.jpg',
    name: "Dio Brando"
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