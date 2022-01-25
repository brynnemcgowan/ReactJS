import React, { Component } from "react";
import { DistributiveRequirementEditor } from "./DistributiveRequirementEditor";
import { DistributiveRequirementTable } from "./DistributiveRequirementTable";

export class DistributiveRequirementDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selected: null
        }
    }

    startEditing = (supplier) => {
        this.setState({ showEditor: true, selected: supplier })
    }

    createSupplier = () => {
        this.setState({ showEditor: true, selected: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selected: null })
    }

    saveSupplier= (supplier) => {
        this.props.saveCallback(supplier);
        this.setState({ showEditor: false, selected: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <DistributiveRequirementEditor
                key={ this.state.selected.id || -1 }
                supplier={ this.state.selected } 
                saveCallback={ this.saveSupplier }
                cancelCallback={ this.cancelEditing } />
        } else {
            return <div className="m-2">
                    <DistributiveRequirementTable suppliers={ this.props.suppliers }
                        editCallback={ this.startEditing }
                        deleteCallback={ this.props.deleteCallback }
                    />
                                        
            </div>        
        }
    }
}