import React,{Component} from 'react';
import Pokecard from './Pokecard/Pokecard';
import './Pokecards.css';




export default class Pokecards extends Component {

  state = {
    data : [],
    showgens : false,
    gentoshow:[],
    searchItem:'',
    
  }
 
  componentWillMount(){
    const csvFilePath = require('../../assets/poke.csv');
    const Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: (result)=>this.updateData(result)
    })
  }

  updateData = (result) => {
    this.setState({data:result.data})
  }
  
  showgen = (num) => {
      this.setState({showgens:true})
      this.setState({searchItem:''})
      let tempar = []
      if(num===1){
        tempar = []
        for(let i=0;i<151;i++){
        tempar.push(this.state.data[i])
        }
        this.setState({gentoshow:tempar})}
      else if(num===2){
        tempar = []
        for(let i=151;i<250;i++){
        tempar.push(this.state.data[i])        
        }this.setState({gentoshow:tempar})}
      else if(num===3){
        tempar = []
        for(let i=251;i<385;i++){
        tempar.push(this.state.data[i])
        }this.setState({gentoshow:tempar})}
      else if(num===4){
        tempar = []
        for(let i=386;i<492;i++){
        tempar.push(this.state.data[i])
        }this.setState({gentoshow:tempar})}
      else if(num===5){
        tempar = []
        for(let i=493;i<648;i++){
        tempar.push(this.state.data[i])
        }this.setState({gentoshow:tempar})}
      else if(num===6){
        tempar = []
        for(let i=649;i<720;i++){
        tempar.push(this.state.data[i])
        }this.setState({gentoshow:tempar})}
      else if(num===7){
        tempar = []
        for(let i=721;i<808;i++){
        tempar.push(this.state.data[i])
        }this.setState({gentoshow:tempar})}
      else this.setState({showgens:false})
  }

  searchInputhandler=(searchInput)=>{
    this.setState({searchItem:searchInput})
  }


   
  render(){

  let searchedItems=''
  let pokemons = []
  if(this.state.showgens){
    searchedItems = this.state.gentoshow.filter(
      (item) => {
        return item.Name.toLowerCase().indexOf(this.state.searchItem.toLowerCase()) !== -1
        || item.Abilities.toLowerCase().indexOf(this.state.searchItem.toLowerCase()) !== -1
        || item.ID.indexOf(this.state.searchItem) !== -1;
      }
    );

    pokemons = (searchedItems.map((item)=>{
      return <Pokecard
          imgSrc = {item.ImgSrc}
          name = {item.Name}
          id = {item.ID}
          key = {item.ID}
          abilities =  {item.Abilities}  
          />}))
  }
  else {
    searchedItems = this.state.data.filter(
      (item) => {
        return item.Name.toLowerCase().indexOf(this.state.searchItem.toLowerCase()) !== -1
        || item.Abilities.toLowerCase().indexOf(this.state.searchItem.toLowerCase()) !== -1
        || item.ID.indexOf(this.state.searchItem) !== -1 }
    );

    pokemons = (searchedItems.map((item)=>{
      return <Pokecard
          imgSrc = {item.ImgSrc}
          name = {item.Name}
          id = {item.ID}
          key = {item.ID}
          abilities =  {item.Abilities}  
          />}))
  }


    
  return (
    <div className="pokecardsdiv">
      <input className="searchbar"
        value={this.state.searchItem} 
        onChange={(event)=>this.searchInputhandler(event.target.value)}
        type="text" placeholder="Search by Name,ID,Type..."/>
      <h3 className="heading">Pokemon Generations</h3>
      <div className="generations">
        <li className="gens" onClick={()=>this.showgen(1)}><button>I</button></li>
        <li className="gens" onClick={()=>this.showgen(2)}><button>II</button></li>
        <li className="gens" onClick={()=>this.showgen(3)}><button>III</button></li>
        <li className="gens" onClick={()=>this.showgen(4)}><button>IV</button></li>
        <li className="gens" onClick={()=>this.showgen(5)}><button>V</button></li>
        <li className="gens" onClick={()=>this.showgen(6)}><button>VI</button></li>
        <li className="gens" onClick={()=>this.showgen(7)}><button>VII</button></li>
        <li className="gens" onClick={()=>this.showgen(8)}><button>All</button></li>
      </div>
      
      <div className="pokecards">
             {pokemons}        
      </div>
          
    </div>
  );
}
}

