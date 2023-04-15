import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';

// const formateDate = (date, format) => {
//     const dateFormat = format ? format : "DD MMM Y";
//     const date1 = moment(new Date(date)).format(dateFormat);
//     return date1;
// };
// const toLowerCase1 = str => {
//     return (
//       str === "" || str === undefined ? "" : str.toLowerCase()
//     );
//   };

const CustomerId = (cell) => {
    return (
        <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link>
    );
};

const CustomerName = (cell) => {
    return cell.value ? cell.value : '';
};

const Date = (cell) => {
    return cell.value ? cell.value : '';
};

const Email = (cell) => {
    return cell.value ? cell.value : '';
};

const CustomerStatus = (cell) => {
    return (
        <Badge
          className={"badge badge-pill bg-pill font-size-12 bg-soft-" + 
          (cell.value === "Active" ? "success" : "danger" && cell.value === "Deactive" ? "danger" : "")}
        >
          {cell.value}
        </Badge>
    )
};

export {
    CustomerId,
    CustomerName,
    Date,
    Email,
    CustomerStatus,
};