import React, { Component } from "react";

export class DistributiveRequirementTableRow extends Component {

    render() {
        let s = this.props.supplier;
        return <tr>
            <td>{ s.id }</td>
            <td>{ s.description }</td>
            <td>{ s.semester }</td>
            <td>{ s.prefix }</td>
            <td>{ s.number }</td>
            <td>{ s.grade }</td>
            <td>
                <button className="btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(s) }>
                        Edit
                </button>
                              
            </td>
        </tr>
    }
}