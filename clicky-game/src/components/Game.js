import React, { Component } from "react";
class Game extends Component {
    state = {
        score: 0,
        topScore: 0,
        imageArray: ["aang", "appa", "azula","boomy",  "fire-lord", "iroh", "jeong-jeong","katara", "momo", "roku", "sokka-master", "sokka", "sukki", "tai-lee", "toph" , "zuko"],
        clicked: [],
        message : "Click on an image to begin!"
    }

    shuffleImgs = () => {
        var newArray = this.state.imageArray;
        for (let i = newArray.length - 1; i > 0; i--) {
            const idx = Math.floor(Math.random() * i)
            const tempNum = newArray[i]
            newArray[i] = newArray[idx]
            newArray[idx] = tempNum
        }
        this.setState({ imageArray: newArray })
    };

    componentDidMount() {
        this.shuffleImgs();
    }

    handleClick = async (event) => {
        event.preventDefault();
        var name = await event.target.attributes.getNamedItem("data-name").textContent;
        var click = 0;
        for (var i = 0; i < this.state.clicked.length; i++) {
            if (this.state.clicked[i] === name) {
                console.log("NO")
                this.setState({score : 0, message : "Incorrect Guess", clicked : []})
            }
            else {
                click++;
            }
        }

        if (click === this.state.clicked.length) {
            this.state.clicked.push(name)
            this.setState({score: this.state.score+1, message : "You guessed correctly!"})
            if(this.state.score > this.state.topScore){
                this.setState({topScore : this.state.score})
            }
            this.shuffleImgs();
        }
    }

    render() {
        return (
            <div>
                <div className="bg-primary fixed-top navbar">
                    <p className="navbar-brand">Clicky Game</p>
                    <p className="navbar-brand">{this.state.message}</p>
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
                            <img alt={this.state.imageArray[0]} onClick={this.handleClick} data-name={this.state.imageArray[0]} src={require('../images/' + this.state.imageArray[0] + ".jpg")} style={{ border: "10px solid grey", width: "200px", height: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[1]} data-name={this.state.imageArray[1]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[1] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[2]} data-name={this.state.imageArray[2]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[2] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[3]} data-name={this.state.imageArray[3]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[3] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[4]} data-name={this.state.imageArray[4]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[4] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[5]} data-name={this.state.imageArray[5]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[5] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[6]} data-name={this.state.imageArray[6]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[6] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[7]} data-name={this.state.imageArray[7]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[7] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[8]} data-name={this.state.imageArray[8]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[8] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[9]} data-name={this.state.imageArray[9]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[9] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[10]} data-name={this.state.imageArray[10]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[10] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[11]} data-name={this.state.imageArray[11]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[11] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[12]} data-name={this.state.imageArray[12]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[12] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[13]} data-name={this.state.imageArray[13]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[13] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[14]} data-name={this.state.imageArray[14]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[14] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[15]} data-name={this.state.imageArray[15]} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[15] + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
