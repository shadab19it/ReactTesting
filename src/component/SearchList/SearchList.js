import React from "react";
import "./SearchList.scss";

const data = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: false, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const SearchBox = ({ SearchQuery, onStockCheck }) => {
  return (
    <div className='search-box'>
      <input type='text' onChange={SearchQuery} className='search-input' placeholder='Search..' />
      <div className='fitler-opt'>
        <input type='checkbox' onChange={onStockCheck} /> <span>Only show products in stock</span>
      </div>
    </div>
  );
};

const SearchResult = ({ data }) => {
  return (
    <div className='search-result'>
      <ul>
        <li className='list-item list-header'>
          <div className='title'>Name</div>
          <div className='title'>Price</div>
        </li>
        <li className='list-header'>Sporting Goods</li>
        {data.map((d, i) => {
          if (d.category == "Sporting Goods") {
            return (
              <li key={i} className='list-item'>
                <div>{d.name}</div>
                <div>{d.price}</div>
              </li>
            );
          }
        })}
        <li className='list-header'>Electronics</li>
        {data.map((d, i) => {
          if (d.category == "Electronics") {
            return (
              <li key={i} className='list-item'>
                <div>{d.name}</div>
                <div>{d.price}</div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

const SearchList = () => {
  const [state, setState] = React.useState({
    data: data,
    query: "",
    filterData: [],
  });
  const SearchQuery = (q) => {
    let value = q.target.value;
    setState({ ...state, query: value });
    let newData = data.filter((d, i) => {
      return d.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });

    setState({ ...state, data: newData });
  };

  const onStockCheck = (e) => {
    if (e.target.checked === true) {
      let newData = data.filter((d, i) => {
        return d.stocked === e.target.checked;
      });
      setState({ ...state, data: newData });
    } else {
      setState({ ...state, data: data });
    }
  };

  return (
    <div className='search-wrapper'>
      <div className='search-list-box'>
        <div className='search-header'>
          <SearchBox SearchQuery={SearchQuery} onStockCheck={onStockCheck} />
        </div>
        <div className='search-result'>
          <SearchResult data={state.data} />
        </div>
      </div>
    </div>
  );
};

export default SearchList;
