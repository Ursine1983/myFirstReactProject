import React from 'react';
import './App.css';
import Title from './components/Title';
import Counter from './components/Counter';
import GuessWrapper from './components/GuessWrapper';
import {getImage} from './api/imageApi';
import spinner from './spinner.gif';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: {
        total: 0,
        success: 0
      },
      image: spinner,
      fullImage: '',
      alt: ' ... loading',
      cardName: '',
      answer: '',
      wrong: false
    }

    this.handleAnswer = this.handleAnswer.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  componentDidMount() {
    this.resolveGetImage()
  }

  setAnswer(e) {
    let input = e.target.value

    this.setState({
      answer: input
    })
  }

  getNext(e) {
    this.setState({
      image: spinner,
      alt: ' ... loading',
      answer: '',
    })
    this.resolveGetImage()
    this.setState({
      wrong: false
    })    
  }

  handleAnswer(e) {
    if(this.state.answer === this.state.cardName) {
      this.setState({
        count: {
          total: this.state.count.total + 1,
          success: this.state.count.success + 1
        }
      })

      this.resolveGetImage()
    }
    else {
      this.setState({
        count: {
          total: this.state.count.total + 1,
          success: this.state.count.success
        },
        wrong: true
      })
    }
  }

  resolveGetImage() {
    getImage().then(card => {
      this.setState({
        image: card.image_uris.art_crop,
        fullImage: card.image_uris.normal,
        cardName: card.name,
        alt: ' to guess the card name of'
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Counter total={this.state.count.total} success={this.state.count.success} />
        <GuessWrapper
          url={this.state.image}
          alt={this.state.alt}
          answer={this.state.answer}
          setAnswer={this.setAnswer}
          handleAnswer={this.handleAnswer}
          fullImg={this.state.fullImage}
          wrong={this.state.wrong}
          next={this.getNext}
          />
      </div>
    );
  }
}

export default App;
