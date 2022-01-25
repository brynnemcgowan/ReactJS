import React, { Component } from "react";
import { AdditionalRequirementTable } from "./AdditionalRequirementTable"
import { AdditionalRequirementEditor } from "./AdditionalRequirementEditor";

export class AdditionalRequirementDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedProduct: null
        }
    }

    startEditing = (req) => {
        this.setState({ showEditor: true, selectedProduct: req })
    }

    createProduct = () => {
        this.setState({ showEditor: true, selectedProduct: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedProduct: null })
    }

    saveProduct = (req) => {
        this.props.saveCallback(req);
        this.setState({ showEditor: false, selectedProduct: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <AdditionalRequirementEditor 
                key={ this.state.selectedProduct.id || -1 }
                req={ this.state.selectedProduct } 
                saveCallback={ this.saveProduct }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <AdditionalRequirementTable reqs={ this.props.reqs }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback } />            
                                     
            </div>
        }
    }
}