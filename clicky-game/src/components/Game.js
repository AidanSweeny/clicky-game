import React, { Component } from "react";
class Game extends Component {
    state = {
        score: 0,
        topScore: 0,
        imageArray: [{ img: "aang", clicked: false }, { img: "appa", clicked: false }, { img: "azula", clicked: false }, { img: "boomy", clicked: false }, { img: "fire-lord", clicked: false }, { img: "iroh", clicked: false }, { img: "jeong-jeong", clicked: false }, { img: "katara", clicked: false }, { img: "momo", clicked: false }, { img: "roku", clicked: false }, { img: "sokka-master", clicked: false }, { img: "sokka", clicked: false }, { img: "sukki", clicked: false }, { img: "tai-lee", clicked: false }, { img: "toph", clicked: false }, { img: "zuko", clicked: false }],
        clicked: []
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
                this.setState({score : 0})
            }
            else {
                click++;
            }
        }

        if (click === this.state.clicked.length) {
            this.state.clicked.push(name)
            this.setState({score: this.state.score+1})
            if(this.state.score > this.state.topScore){
                this.setState({topScore : this.state.score})
            }
            this.shuffleImgs();
        }
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
                            <img alt={this.state.imageArray[0].img} onClick={this.handleClick} data-name={this.state.imageArray[0].img} src={require('../images/' + this.state.imageArray[0].img + ".jpg")} style={{ border: "10px solid grey", width: "200px", height: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[1].img} data-name={this.state.imageArray[1].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[1].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[2].img} data-name={this.state.imageArray[2].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[2].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[3].img} data-name={this.state.imageArray[3].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[3].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[4].img} data-name={this.state.imageArray[4].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[4].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[5].img} data-name={this.state.imageArray[5].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[5].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[6].img} data-name={this.state.imageArray[6].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[6].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[7].img} data-name={this.state.imageArray[7].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[7].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[8].img} data-name={this.state.imageArray[8].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[8].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[9].img} data-name={this.state.imageArray[9].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[9].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[10].img} data-name={this.state.imageArray[10].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[10].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[11].img} data-name={this.state.imageArray[11].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[11].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[12].img} data-name={this.state.imageArray[12].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[12].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[13].img} data-name={this.state.imageArray[13].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[13].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[14].img} data-name={this.state.imageArray[14].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[14].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                        <div className="col-md-3">
                            <img alt={this.state.imageArray[15].img} data-name={this.state.imageArray[15].img} onClick={this.handleClick} src={require('../images/' + this.state.imageArray[15].img + ".jpg")} style={{ border: "10px solid grey", height: "200px", width: "200px" }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
