import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import './index.css'
import '../../css/main.css'

export class InputBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=f3e9f7d1677c7aa63c9ab526381eeceb")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="input-view">
                    <Row>
                        <Col xs={12} md={12}>
                            <label>Enter Card Number</label><input/>
                            <Button class="table-btn">submit</Button>
                        </Col>

                        <Col xs={12} md={4}>
                            <label>First Name</label><input/><br/>
                            <label>Last Name</label><input/><br/>
                            <label>Email</label><input/><br/>
                            <label>Mobile</label><input/><br/>
                            <label>Matial Status</label><input/><br/>
                            <label>Name in (A/C)</label><input/><br/>
                            <label>IFSC</label><input/><br/>
                        </Col>
                        <Col xs={12} md={4}>
                            <label>City</label><input/><br/>
                            <label>State</label><input/><br/>
                            <label>Pincode</label><input/><br/>
                            <label>Age</label><input/><br/>
                            <label>Profession</label><input/><br/>
                            <label>Account Number</label><input/><br/>
                            <label>Address</label><input/><br/>
                        </Col>
                        <Col xs={12} md={4}>
                            <label>Valid Form</label><input/><br/>
                            <label>Valid To</label><input/><br/>
                            <label>Balance</label><input/><br/>
                            <label>Status</label><input/><br/>
                            <Button className="mt-10">Deactive</Button>
                            <Button className="mt-10">Save</Button>
                        </Col>
                    </Row>
                </div>

            );
        }
    }
}






