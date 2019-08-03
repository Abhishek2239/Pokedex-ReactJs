import React, { Component } from 'react';
import Pokecard from './Pokecard/Pokecard';
import './Pokecards.css';


export default class Pokecards extends Component {

  state = {
    data: [],
  }

  componentWillMount() {
    const csvFilePath = require('../../assets/poke.csv');
    const Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: (result) => this.setState({ data: result.data })
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   Object.entries(this.props).forEach(([key, val]) =>
  //     prevProps[key] !== val && console.log(`Prop '${key}' changed`)
  //   );
  //   Object.entries(this.state).forEach(([key, val]) =>
  //     prevState[key] !== val && console.log(`State '${key}' changed`)
  //   );
  // }

  shouldComponentUpdate(nextState, nextProps) {
    return this.state !== nextState || this.props !== nextProps
  }

  render() {
    
    let searchedItems = ''
    let searchedType = ''
    let pokemons = []
    let pokeDisplay = []
    let tempArray = this.state.data

    //slicing per generations
    if (this.props.gen === 1) {
      tempArray = tempArray.slice(0, 151)
    }
    else if (this.props.gen === 2) {
      tempArray = tempArray.slice(151, 251)
    }
    else if (this.props.gen === 3) {
      tempArray = tempArray.slice(251, 386)
    }
    else if (this.props.gen === 4) {
      tempArray = tempArray.slice(386, 493)
    }
    else if (this.props.gen === 5) {
      tempArray = tempArray.slice(493, 649)
    }
    else if (this.props.gen === 6) {
      tempArray = tempArray.slice(649, 721)
    }
    else if (this.props.gen === 7) {
      tempArray = tempArray.slice(721, 809)
    }


    if (this.props.showGen) {     

      pokemons = tempArray.map((item) => {
        return <Pokecard
          imgSrc={item.ImgSrc}
          name={item.Name}
          id={item.ID}
          key={item.ID}
          abilities={item.Abilities}
        />
      })
  }

    else if (this.props.showType) {

      searchedType = this.state.data.filter(
        (item) => {
          return item.Abilities.toLowerCase().indexOf(this.props.type.toLowerCase()) !== -1;
        }
      );
      pokemons = searchedType.map((item) => {
        return <Pokecard
          imgSrc={item.ImgSrc}
          name={item.Name}
          id={item.ID}
          key={item.ID}
          abilities={item.Abilities}
        />
      })
    }
    else if(this.props.searchItem!==''){
      searchedItems = this.state.data.filter(
        (item) => {
          return item.Name.toLowerCase().indexOf(this.props.searchItem.toLowerCase()) !== -1
            || item.Abilities.toLowerCase().indexOf(this.props.searchItem.toLowerCase()) !== -1
            || item.ID.indexOf(this.state.searchItem) !== -1
        }
      );
      pokemons = (searchedItems.map((item) => {
        return <Pokecard
          imgSrc={item.ImgSrc}
          name={item.Name}
          id={item.ID}
          key={item.ID}
          abilities={item.Abilities}
        />
      }))
    }
    else {
      pokemons = (this.state.data.map((item) => {
        return <Pokecard
          imgSrc={item.ImgSrc}
          name={item.Name}
          id={item.ID}
          key={item.ID}
          abilities={item.Abilities}
        />
      }))
    }

    //page wise showing result page1=1:50

    for (let ind = this.props.start; ind < this.props.end; ind++) {
      pokeDisplay.push(pokemons[ind])
    }

    this.props.setNoOfPosts(this.props.showGen ? tempArray.length
      : this.props.showType ? searchedType.length
        : this.props.searchItem !== '' ? searchedItems.length : 809)

    return (
      <>
        <div className="pokecardsdiv">

          {this.props.children}

          <div className="pokecards">
            {pokeDisplay}
          </div>

        </div>
      </>

    );
  }
}

