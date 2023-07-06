import React, { Component } from 'react';

class ContainerLeft extends Component {
    constructor(props){
        super(props);
        this.state = {
            collLeft: [
                {
                    id: 1,
                    subtitle: 'Chapter 1',
                    title: 'The rise of trend Design',
                    text: 'Well-written book is concerned with creating typography and is essential for professionals who regularly'
                },
                {
                    id: 2,
                    subtitle: 'Chapter 2',
                    title: 'Data Science Process',
                    text: 'Well-written book is concerned with creating typography and is essential for professionals who regularly'
                },
                {
                    id: 3,
                    subtitle: 'Chapter 3',
                    title: 'The rise of trend Design',
                    text: 'Well-written book is concerned with creating typography and is essential for professionals who regularly '
                }
            ]
        }
    }
    render() {
        return (
            <div className="chapter-list border-right-0">
                 {
                    this.state.collLeft.map(data => (
                        <div className="chapter-item" key={data.id}>
                            <h4><span>{data.subtitle} </span> {data.title}</h4>
                            <p>{data.text} </p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ContainerLeft;
