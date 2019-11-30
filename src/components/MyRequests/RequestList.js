import React from 'react';
import { Card } from '@material-ui/core';
import RequestListItem from './RequestListItem';

export default function RequestList(props) {

  const requests = props.requests.map((request, i) => {
    let readableStartDate = new Date(request.start_date)
    let readableEndDate = new Date(request.end_date)
    return (
      <RequestListItem
        key={i}
        listingid={request.listing.id}
        title={request.listing.title}
        description={request.listing.description}
        urls={request.listing_urls}
        price={request.listing.price_per_day / 100}
        owner={request.listing_owner.first_name}
        user={props.user}
        start_date={readableStartDate.toDateString()}
        end_date={readableEndDate.toDateString()}
      />
    );
  })
  return (
    <table className="request-list">
      <tr>
        <th>Action</th>
        <th>Status</th>
        <th>Title</th>
        <th>Cost</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Owner</th>
      </tr>
      {requests}
    </table>
  );
}