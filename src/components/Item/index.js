import './index.css'

const Item = props => {
  const {historyDetails} = props
  const {
    orderId,
    customer,
    country,
    address,
    productTitle,
    productDescription,
    date,
    status,
  } = historyDetails

  return (
    <li className="history-event1">
      <p className="orderId">#123{orderId}</p>

      <p className="customer">{customer}</p>

      <p className="country">
        {country}~{'\n'}
        {address}
      </p>

      <p className="productTitle">
        {productTitle}~{'\n'}
        {productDescription}
      </p>

      <p className="date">{date}</p>

      <div className="buttons-container">
        <button type="button" className="comment-button">
          {status}
        </button>
      </div>
    </li>
  )
}

export default Item
