import React, { Component } from 'react';
import prostar from'../components/prostars.json';
import './Stardom.css';
class Stardom extends Component {
    constructor(){
        super();
        this.state = {
            prostars: [prostar[0],prostar[1],prostar[2],prostar[3],prostar[4]]
        };
    }
    addRandomProstar=()=>{
        let others = prostar.slice(5,prostar.length);
        const value = Math.ceil(Math.random() * others.length)+1;
        this.setState( {
             prostars:this.state.prostars.concat(others[value])
            });
    }
    dataProstars = () => {
        const data = this.state.prostars;
        const mapRow = data.map(prostar => (
            <tr key={prostar.id} id={prostar.id}>
                <td><img className="image" src={prostar.pictureUrl } alt={prostar.pictureUrl} /></td>
                <td>{prostar.name}</td>
                <td>{prostar.popularity}</td>
                <td><button className="deleteBtn" onClick={this.deleteProstar.bind(this,prostar.id)}>Delete</button></td>
            </tr>  
        ));
        return mapRow;
    }
    
    sortByName=()=> {
        var newProstarArray=this.state.prostars.sort((prostar1,prostar2)=>{
        var p1 = prostar1.name.toLocaleLowerCase()
        var p2 = prostar2.name.toLocaleLowerCase()
        if (p1<p2) {
          return -1;
        }
        if (p1>p2) {
          return 1;
        }
        return 0;
        
    });
    this.setState({prostars:newProstarArray});
    }
    sortByPopularity=()=>{
        var newProstarArray=this.state.prostars.sort((object1,object2)=>{
        var p1=object1.popularity;
        var p2=object2.popularity;
        if (p1 < p2) {
            return 1;
          }
          if (p1 > p2) {
            return -1;
          }
          return 0;
    });
    this.setState({prostars:newProstarArray});
    }
    deleteProstar = (currentProstar) => {
            const ProstarArray = this.state.prostars
            const newProstarArray=[];
            for(var i=0;i<ProstarArray.length;i++){
                if(ProstarArray[i].id!==currentProstar){
                    newProstarArray.push(ProstarArray[i]);
                }
            }
            this.setState({ prostars: newProstarArray });
        }
    render() {
        return (
            <React.Fragment>
                <div className="title">
                    <h1>ProStars</h1>
                </div>
                <div className="maindata">
                    <div className="buttons">
                        <button className="addStar" onClick={this.addRandomProstar}>Get Random Contact</button>
                        <button className="sortByName" onClick={this.sortByName}>Sort By Name</button>
                        <button className="sortByPopularity" onClick={this.sortByPopularity}>Sort By Popularity</button>
                    </div>
                <div >
                <center>
                    <table className="table">
                        <thead className="tablehead">
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>{this.dataProstars()}</tbody>
                    </table>
                </center>
                </div>

            </div>
        </React.Fragment>
    );
    }
}

export default Stardom;