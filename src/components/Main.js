import React, { Component } from "react";
import cardJson from "../cards.json";
import Card from "./Card";

class Main extends Component {

    state = {
        //set as an array to bel fileld with cardJson below in mount
        cards: []
    };

    // invoked immediately after a component is mounted (inserted into the tree).
    //Initialization that requires DOM nodes should go here. If you need to load
    //data from a remote endpoint, this is a good place to instantiate the network
    //request.
    componentDidMount() {
        this.setState({ cards: cardJson})
    }

    //componentDidUpdate(prevProps, prevState, snapshot)
    componentDidUpdate(prevProps, prevState) {
        if (prevState.cards !== this.state.cards) {
            //sets this.state.cards to variable to be update later
            const cards = this.state.cards;
            //shuffles current set up by calling this.state.cards not cards
            this.shuffleArray(this.state.cards)
            
            //Sends new card layout after shuffleArray has completed
            this.setState ({ cards });s
        }
    }

    //called from Card.js
    cardClicked = id => {
        const cards = this.state.cards.map(card => {
            //find the id in the json object that is the same as the one that
            //that the user clicked.

            //if it hasn't been clicked, do the following
            if (card.id === id && !card.clicked) {
                card.clicked = true;
                // calls incrementScore() on App.js to uupdate state of score
                // on App.js
                this.props.incrementScore();
            }
            //if it has been clicked, do the following
            else if ((card.id === id && card.clicked) || this.props.score === 11) {
                this.resetGame();
            }
            //return card so that we can reset the state if the game continues.
            return card;
        });
        //updates state of json boolean for the card that was clicked
        this.setState ({
            cards
        });
    };

    resetGame = () => {

        //... is spread notation. this creates a new json object so we can
        // update it with the following functions.
        //state is the state above and .cards is the obj within state.

        const cards = [...this.state.cards];


        cards.forEach(card => {
            card.clicked = false;
        })

        //sets the new state applied to the cards in the for each
        this.setState({ cards }, () => {
            //calls resetScore() on App.js to update the states on
            //app.js
            this.props.resetScore();
        });
    };

    //
    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    };

    //render() cards and set up container in html
    render() {
        return (
            <div className="container">
                <div className="container mb-5 mt-5">
                    <h5>Click on an image to earn points, but don't click on any more than once!</h5>
                </div>
                <div className='row'>
                    {this.state.cards.map(img => {
                        return (
                            <Card
                                //key required for each individual instance for
                                //properties seperation between cards in object
                                key={img.id}
                                image={img}
                                cardClicked={this.cardClicked}
                            />
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Main;