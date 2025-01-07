import React from "react";
import {TableRow, TableCell} from "@mui/material";
 

// 계층 구조 적용
class Customer extends React.Component {
    render() {
        return ( 
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt ="profile"/></TableCell>
                    <TableCell>{this.props.name}</TableCell>
                    <TableCell>{this.props.birthday}</TableCell>
                    <TableCell>{this.props.gender}</TableCell>
                    <TableCell>{this.props.job}</TableCell>
                </TableRow>
        );
    }
} 
export default Customer;
