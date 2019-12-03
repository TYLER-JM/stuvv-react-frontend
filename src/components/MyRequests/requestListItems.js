export default function getRequestListItems(requests) {

  function createData(title, status, owner, startDate, endDate, cost, pickup, dropoff, requestId, rowIndex) {
    return { title, status, owner, startDate, endDate, cost, pickup, dropoff, requestId, rowIndex };
  }
  let requestObjects = [];
  let indexOfRow = 0

  requests.forEach(request => {
    const readableStartDate = new Date(request.start_date)
    const readableEndDate = new Date(request.end_date)
    const oneDay = 24 * 60 * 60 * 1000;
    const totalCost = Math.round((readableEndDate - readableStartDate) / oneDay) * Math.round(request.listing.price_per_day / 100)

    const daysToPickUp = Math.floor((readableStartDate.getTime() - (new Date()).getTime()) / (1000 * 3600 * 24))
    // const daysToReturn = Math.floor((readableEndDate.getTime() - readableStartDate.getTime()) / (1000 * 3600 * 24))
    const daysToReturn = Math.floor((readableEndDate.getTime() - (new Date()).getTime()) / (1000 * 3600 * 24))

    requestObjects.push(createData(
      request.listing.title,
      request.approved,
      request.listing_owner.first_name,
      readableStartDate.toDateString(),
      readableEndDate.toDateString(),
      `$${totalCost}`,
      `${daysToPickUp} days`,
      `${daysToReturn} days`,
      request.id,
      indexOfRow
    )
    )
    indexOfRow++;
  })
  return requestObjects;
}