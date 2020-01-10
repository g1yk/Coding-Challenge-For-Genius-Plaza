import React, { Component } from 'react'
import axios from 'axios'

export default class nameDetail extends Component {

    state = {
        details: undefined,
    }

    // componentDidMount() {
    //     this.getDetails()
    // }

    componentWillReceiveProps() {

        this.getDetails()

    }


    // componentDidUpdate() {

    //     this.getDetails()

    //   }


    //   .then(response => {
    // const data = response.data;
    // console.log('data', data);

    // this.setState({
    //   details: data.results
    // })



    //   })
    //   .catch(error => {
    //     console.error('create student error', error.response)
    //     // alert(JSON.stringify(error.response.data))
    //   })

    getDetails = async e => {
        const urlDetail = this.props.match.url;
        const apiUrl = `https://swapi.co/api`;
        console.log('URL', this.state.location);
        console.log('calling get Names function');
        try {
            let request = await axios.get(`${apiUrl}${urlDetail}`);
            console.log('request', request.data);
            this.setState({ details: request.data.results });
        } catch (error) {
            console.log(error);
        }
    };

    // getDetails = async (e) => {
    //     const urlDetail = this.props.match.url
    //     const apiUrl = `https://swapi.co/api`
    //     console.log('URL', this.state.location)

    //     console.log('calling get Names function')
    //     let request = await axios.get(`${apiUrl}${urlDetail}`)

    //     const data = await request.json();

    //     console.log(data)

    //     // try {
    //     //     this.setState({details: request.data.results})
    //     //     console.log('details', this.state.details)
    //     //     console.log('props', this.props)
    //     //     } catch (error) {
    //     //     console.log(error)
    //     //     } 
    // }

    showDetails = () => {
        if (this.state.details) {
            console.log(this.state.details)
        }

    }

    render() {
        // console.log('resutls', this.props)
        // console.log('url', this.props.match.url)

        // console.log('state', this.state)

        const urlDetail = this.props.match.url
        const apiUrl = `https://swapi.co/api`

        console.log()


        return (
            <div>

                <div className="col-7">
                    <h1></h1>

                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Capital</td>

                            </tr>
                            <tr>
                                <td>Area</td>

                                <sup>2</sup>

                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    {this.showDetails()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
