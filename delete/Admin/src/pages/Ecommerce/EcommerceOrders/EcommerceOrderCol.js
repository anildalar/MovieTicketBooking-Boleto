import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';

const OrderId = (cell) => {
    return (
        <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link>
    );
};

const BillingName = (cell) => {
    return cell.value ? cell.value : '';
};

const Date = (cell) => {
    return cell.value ? cell.value : '';
};

const Total = (cell) => {
    return cell.value ? cell.value : '';
};

const PaymentStatus = (cell) => {
    return (
        <Badge
          className={"badge badge-pill bg-pill font-size-12 bg-soft-" + 
          (cell.value === "Paid" ? "success" : "danger" && cell.value === "unpaid" ? "warning" : "danger")}
        >
          {cell.value}
        </Badge>
    )
};

export {
    OrderId,
    BillingName,
    Date,
    Total,
    PaymentStatus,
};