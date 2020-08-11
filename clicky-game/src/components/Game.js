import React, { Component } from "react";
class Game extends Component {
    state = {
        score: 0,
        topScore: 0,
        imageArray: ["aang.jpg", "appa.jpg", "azula.jpg", "boomy.jpg", "fire-lord.jpg", "iroh.jpg", "jeong-jeong.jpg", "katara.jpg", "momo.jpg", "roku.jpg", "sokka-master.jpg", "sokka.jpg", "sukki.jpg", "tai-lee.jpg", "toph.jpg", "zuko.jpg"]
    };

    shuffleImgs() {
        var newArray = this.state.imageArray;
        for(let i = newArray.length-1; i > 0; i--){
            const idx = Math.floor(Math.random() * i)
            const tempNum = newArray[i]
            newArray[i] = newArray[idx]
            newArray[idx] = tempNum
        }
        this.setState({imageArray: newArray})
    }

    componentDidMount() {
        this.shuffleImgs();
    }

    handleClick = (event) =>{
        event.preventDefault();
        this.shuffleImgs();
    }

    render() {
        return (
            <div>
                <div className="bg-primary navbar">
                    <p className="navbar-brand">Clicky Game</p>
                    <p className="navbar-brand">Click an image to begin</p>
                    <p className="navbar-brand">Score: {this.state.score} | Top Score: {this.state.topScore}</p>
                </div>
                <div className="jumbotron text-center jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Clicky Game</h1>
                        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[0])} style={{ border: "10px solid grey", width : "200px", height: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[1])} style={{ border: "10px solid grey", height: "200px", width : "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[2])} style={{ border: "10px solid grey", height: "200px", width : "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[3])} style={{ border: "10px solid grey", height: "200px", width : "200px" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[4])} style={{ border: "10px solid grey", height: "200px" , width : "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[5])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[6])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[7])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[8])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[9])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[10])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[11])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[12])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[13])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[14])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                        <div className="col-md-3">
                            <img onClick = {this.handleClick} src={require('../images/' + this.state.imageArray[15])} style={{ border: "10px solid grey", height: "200px", width : "200px"  }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
