import React, { Component } from 'react';
import { Selector } from './Selector';
import { AcademicFoundationDisplay } from './AcademicFoundationDisplay';
import { DistributiveRequirementDisplay } from './DistributiveRequirementDisplay';
import { AdditionalRequirementDisplay } from './AdditionalRequirementDisplay';

export default class RequirementsTables extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4},
                { id: 5}
            ],
            suppliers: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4},
                { id: 5}
            ],
            reqs: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4},
                { id: 5}
            ]
        }
        this.idCounter = 100;
    }

    saveData = (collection, item) => {
        if (item.id === "") {
            item.id = this.idCounter++;
            this.setState(state => state[collection] 
                = state[collection].concat(item));
        } else {
            this.setState(state => state[collection] 
                = state[collection].map(stored => 
                      stored.id === item.id ? item: stored))
        } 
    }

    deleteData = (collection, item) => {
        this.setState(state => state[collection] 
            = state[collection].filter(stored => stored.id !== item.id));
    }

    render() {
        return <div>
            <Selector>
           
                <AcademicFoundationDisplay 
                    name="Academic Foundation"
                    products={ this.state.products }
                    saveCallback={ p => this.saveData("products", p) }
                    deleteCallback={ p => this.deleteData("products", p) } />
                    
                <DistributiveRequirementDisplay
                    name="Distributive Requirement"
                    suppliers={ this.state.suppliers }
                    saveCallback={ s => this.saveData("suppliers", s) }
                    deleteCallback={ s => this.deleteData("suppliers", s) } /> 
                <AdditionalRequirementDisplay
                    name="Additional Requirement"
                    reqs={ this.state.reqs }
                    saveCallback={ x => this.saveData("reqs", x) }
                    deleteCallback={ x => this.deleteData("reqs", x) } />
            </Selector>
        </div>
    }
}