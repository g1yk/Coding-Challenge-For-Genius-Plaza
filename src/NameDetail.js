import React, { Component } from 'react'
import axios from 'axios'

export default class nameDetail extends Component {

    state = {
        details: {},
        url: '',
    }

    componentDidMount() {
        this.getDetails();
    }

    getDetails = async () => {
        const apiUrl = `https://swapi.co/api`;
        let response = await axios.get(`${apiUrl}${this.props.match.url}`);
        this.setState({details: response.data, url: this.props.match.url});
        console.log(this.state.details)          
    };

    render() {
        if (this.state.url !== this.props.match.url) {
            this.getDetails();
        }
      
        const { height, name, mass, birth_year } = this.state.details;
        
        return (
            <div>

                <div className="col-7">
                    <h1></h1>

                    <table className="table">
                        <thead></thead>
                        <tbody>

                            <tr>
                                <td><b>Name</b> </td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>Height </td>
                                <td> {height} </td>
                            </tr>
                            <tr>
                                <td>Mass </td>
                                <td>{mass}</td>
                            </tr>
                            <tr>
                                <td>Birth year </td>
                                <td>{birth_year}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}