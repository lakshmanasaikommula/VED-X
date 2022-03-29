import {Component} from 'react'
import Item from '../Item'
import './index.css'

class Home extends Component {
  state = {
    searchInput: '',
    list: [],
  }

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const url = 'https://my-json-server.typicode.com/Ved-X/assignment/orders'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      orderId: eachItem.order_id,
      customer: eachItem.customer,
      country: eachItem.country,
      address: eachItem.address,
      date: eachItem.date,
      productDescription: eachItem.product_description,
      productTitle: eachItem.product_title,
      status: eachItem.status,
    }))
    console.log(updatedData)
    this.setState({list: updatedData})
  }

  renderNo = () => <h1>Not found</h1>

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    const {list} = this.state
    const updatedList = list.filter(eachOrder => eachOrder.orderId !== id)
    this.setState({list: updatedList})
  }

  render() {
    const {searchInput, list} = this.state
    const searchResults = list.filter(each =>
      each.customer.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="browser-history-bg-container">
        <div className="header-container">
          <div className="header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div>
              <h1 className="heading">All orders . . .</h1>
            </div>

            <div className="search-bar-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <div className="search-container">
                <input
                  type="search"
                  className="search-input"
                  placeholder="Search history"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
          </div>
        </div>

        <li className="history-event">
          <p className="orderId1">ORDERID</p>

          <p className="customer1">CUSTOMER</p>

          <p className="address1">ADDRESS</p>

          <p className="productTitle1">PRODUCT</p>

          <p className="date1">DATE</p>

          <p className="status1">STATUS</p>
        </li>
        {searchResults.length === 0 ? (
          this.renderNo()
        ) : (
          <ul className="history-container">
            {searchResults.map(eachHistory => (
              <Item
                key={eachHistory.id}
                historyDetails={eachHistory}
                onDeleteHistory={this.onDeleteHistory}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
