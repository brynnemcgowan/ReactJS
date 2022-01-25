import React, { Component } from "react";
import { AdditionalRequirementTableRow } from "./AdditionalRequirementTableRow";

export class AdditionalRequirementTable extends Component {
    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="5" 
                                className="bg-primary text-white text-center h4 p-2">
                           Additional Requirement
                        </th>
                    </tr>
                    <tr>
                        <th>ID</th><th>Description</th><th>Semester</th><th>Prefix</th><th>Number</th><th>Grade</th><th>Editor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.reqs.map(x => 
                            <AdditionalRequirementTableRow req={ x } 
                                key={ x.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}