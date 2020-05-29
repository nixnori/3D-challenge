import React, { Component } from 'react';
import './Main.scss';
import Card from '../../components/Card/Card';

class Main extends Component {
    
    render() {
        return (
            <div className="main">
                <h1 className="main__header">Hello, Ms. Sharon</h1>
                <h4 className="main__business-name">Mamma Mia Restaurant</h4>
                <div className="main__overview">
                    <h1 className="overview__header">Overview</h1>
                    <h3 className="overview__title">Owner</h3>
                    <Card />
                </div>
            </div>
        )
    }
}

export default Main;