import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './index.css'
import '../../css/main.css'
import {FormResults} from "./tabs/FormResults";
import {ContentTab} from "./ContentTab";

export class DriverBox extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            results: [],
            rideDetails:[],
            topupDetails:[],
            histories:[],
            transactions:[],
            services:[],
            changeRoutes:[],
            changeDevices:[],
            busid:''
        };
    }

    onhandleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        let val = this.state.busid;

        if(this.state.busid === ''){
            alert("please insert your busid");
            return;
        }

        fetch(`http://54.251.190.7:1995/driver/${val}`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const results = data;
                    this.setState({ results });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

        fetch(`http://54.251.190.7:1995/ridehistoryD/${val}`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const rideDetails = data;
                    this.setState({ rideDetails });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

        fetch(`http://54.251.190.7:1995/topuphistory/BusID/${val}`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const topupDetails = data;
                    this.setState({ topupDetails });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

        fetch(`http://54.251.190.7:1995/reportservice`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const services = data;
                    this.setState({ services });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

        fetch(`http://54.251.190.7:1995/reportchangeroute`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const changeRoutes = data;
                    this.setState({ changeRoutes });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

        fetch(`http://54.251.190.7:1995/reportchangedevice`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const changeDevices = data;
                    this.setState({ changeDevices });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            });

    }

    render() {

        return (
            <div className="input-view">

                <Row>

                    <Col xs={12} md={12}>
                        <label className="mb-30">Enter Bus ID</label>
                        <input type="text" name="busid" value = {this.state.busid} onChange={this.onhandleChange.bind(this)} required/>
                        <Button onClick={this.handleClick.bind(this)}>Insert</Button>
                    </Col>

                    <FormResults results={this.state.results}/>

                    <ContentTab
                        rideDetails={this.state.rideDetails}
                        topupDetails={this.state.topupDetails}
                        histories={this.state.histories}
                        transactions={this.state.transactions}
                        services={this.state.services}
                        changeRoutes={this.state.changeRoutes}
                        changeDevices={this.state.changeDevices}
                    />

                </Row>
            </div>

        );
    }

}






