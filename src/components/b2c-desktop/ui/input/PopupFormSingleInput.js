import { Times } from 'assets/icons';
import PropTypes, { object } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
// import Cancel from '../../../../assets/icon/cancel.svg';

const PopupFormSingleInput = props => {
  const {
    setSelected,
    setPopup,
    placeHolder,
    setIsActive,
    setToggleClass,
    countryData,
    listIcon,
    HandleIcon
  } = props;

  const [searchItem, setSearchItem] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    const results = countryData.filter(
      data =>
        data['country']?.toLowerCase().includes(searchItem.toLowerCase()) ||
        data['airport']?.toLowerCase().includes(searchItem.toLowerCase()) ||
        data['location']?.toLowerCase().includes(searchItem.toLowerCase()) ||
        data['countryShortCode']
          ?.toLowerCase()
          .includes(searchItem.toLowerCase())
    );
    setSearchResults(results);
  }, [searchItem]);

  return (
    <div className="flightSearch rounded overflow-auto scrollbar h-100">
      <div className="d-flex justify-content-between px-lg-3 px-2 py-3 inputBox">
        <div className="d-flex  w-90 ">
          <div className="me-3 text-1100">
            <HandleIcon height="1.6rem" width="1.6rem" />
          </div>
          {/* <div className="xh-14-semi-bold">
            <input
              type="text"
              value={searchItem}
              onChange={handleChange}
              placeholder={`${placeHolder}`}
              className="border-0 textBox bg-transparent px-2 text-black"
            />
          </div> */}

          <Form.Control
            value={searchItem}
            onChange={handleChange}
            placeholder={`${placeHolder}`}
            className="bg-transparent px-2 text-black fs--1 border-0"
            type="text"
            ref={inputElement => {
              // constructs a new function on each render
              if (inputElement) {
                inputElement.focus();
              }
            }}
          />
        </div>
        <button
          onClick={() => {
            setToggleClass('closed');
            setPopup(false);
          }}
          className="border rounded bg-100 text-black bg-hover shadow-sm d-flex align-items-center"
        >
          <Times />
        </button>
      </div>
      <div>
        {searchResults?.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelected(item);
              setToggleClass('closed');
              setPopup(false);
              setIsActive(true);
            }}
            className="d-flex bg-hover justify-content-between cursor-pointer px-lg-4 px-3 pt-3 pb-1 text-black fw-semi-bold"
          >
            <div className="d-flex align-items-center">
              {listIcon ? (
                <div className="location_icon me-3">
                  <img src={listIcon} alt="location" height="24" />
                </div>
              ) : null}
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

PopupFormSingleInput.propTypes = {
  searchData: PropTypes.arrayOf(object),
  countryData: PropTypes.arrayOf(object),
  setSelected: PropTypes.func,
  setPopup: PropTypes.func,
  placeHolder: PropTypes.string,
  setIsActive: PropTypes.func,
  setToggleClass: PropTypes.func,
  listIcon: PropTypes.any,
  HandleIcon: PropTypes.any
};

export default PopupFormSingleInput;
