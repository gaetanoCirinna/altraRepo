import React, { Component } from 'react';
import Waifu from './Waifu';
import Form from './Form';
import waifuRepository from './waifuRepository';
import speakApi from './speakApi'

class Tot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waifuList: [],
            currentWaifu: {
                name: "",
                image: ""
            }
        }
    }

    componentDidMount() {
        waifuRepository
            .list()
            .then(waifuList => { 
                this.setState({
                    waifuList
                })
            })
    }

    submit = (e) => {
        e.preventDefault();
        if (this.state.currentWaifu.name) {

            speakApi
                .speak(`Stai per inserire ${this.state.currentWaifu.name} Evviva le Waifu!`)
                .then(() => waifuRepository.add(this.state.currentWaifu))
                .then(() => {
                    return waifuRepository.list()
                })
                .then(waifuList => {
                    this.setState({
                        waifuList,
                        currentWaifu: {}
                    })
                })
        }

    }

    onDelete = (id) => {
        waifuRepository
            .remove(id)
            .then(() => {
                return waifuRepository.list()
            })
            .then(waifuList => {
                this.setState({
                    waifuList
                })
            })
    }

    onChangeWaifuName = (e) => {
        const {
            currentWaifu
        } = this.state;
        this.setState({
            currentWaifu: {
                ...currentWaifu,
                name: e.target.value
            }
        })
    }

    onChangeWaifuImage = (image) => {
        const {
            currentWaifu
        } = this.state;
        this.setState({
            currentWaifu: {
                ...currentWaifu,
                image
            }
        })
    }

    render() {

        const {
            waifuList,
            currentWaifu
        } = this.state;

        const cards = waifuList.map(waifu => {
            return <Waifu
                onDelete={this.onDelete}
                key={waifu.id}
                waifu={waifu} />
        })

        return (
            <div>

                {cards}
                <Form
                    submit={this.submit}
                    click={this.click}
                    value={currentWaifu.name}
                    changeImage={this.onChangeWaifuImage}
                    change={this.onChangeWaifuName}></Form>
            </div>
        );
    }
}

export default Tot;