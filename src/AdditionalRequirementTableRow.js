import React, { Component } from "react";

export class AdditionalRequirementTableRow extends Component {
    render() {
        let x = this.props.req;
        return <tr>
            <td>{ x.id }</td>
            <td>{ x.description }</td>
            <td>{ x.semester }</td>
            <td>{ x.prefix }</td>
            <td>{ x.number }</td>
            <td>{ x.grade }</td>
            <td>
                <button className="btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(x) }>
                        Edit
                </button>         
            </td>
        </tr>
    }
}