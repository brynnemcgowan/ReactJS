import React, { Component } from "react";
import { AcademicFoundationTableRow } from "./AcademicFoundationTableRow";

export class AcademicFoundationTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="5" 
                                className="bg-primary text-white text-center h4 p-2">
                            Academic Foundation
                        </th>
                    </tr>
                    <tr>
                        <th>ID</th><th>Description</th><th>Semester</th><th>Prefix</th><th>Number</th><th>Grade</th><th>Editor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.map(p => 
                            <AcademicFoundationTableRow product={ p } 
                                key={ p.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}