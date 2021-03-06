import React, { Component } from "react";
import { AcademicFoundationTable } from "./AcademicFoundationTable"
import { AcademicFoundationEditor } from "./AcademicFoundationEditor";

export class AcademicFoundationDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedProduct: null
        }
    }

    startEditing = (product) => {
        this.setState({ showEditor: true, selectedProduct: product })
    }

    createProduct = () => {
        this.setState({ showEditor: true, selectedProduct: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedProduct: null })
    }

    saveProduct = (product) => {
        this.props.saveCallback(product);
        this.setState({ showEditor: false, selectedProduct: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <AcademicFoundationEditor 
                key={ this.state.selectedProduct.id || -1 }
                product={ this.state.selectedProduct } 
                saveCallback={ this.saveProduct }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                <AcademicFoundationTable products={ this.props.products }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback } />            
                                     
            </div>
        }
    }
}