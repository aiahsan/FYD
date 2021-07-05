import React from 'react'
import { Dropdown } from 'react-bootstrap'
export default () => {
    return <div>
        <ul className="asdfsadojfisf-sdff">
            <li > <a href="">Masternodes</a></li>
            <li > <a href="">Crypto</a></li>
            <li > <a href="">NFT</a></li>
            <li > <a href="">Stacking</a></li>
            <li > <a href="">Mining</a></li>
            <li > <a href="">FYD</a></li>
            <li >  <Dropdown >
                <Dropdown.Toggle className="sadai219adas30">
                  <img alt="" src="https://static.rfstat.com/renderforest/images/v2/icons/flag-en.svg"/>  En
  </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">En</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown></li>
        </ul>
    </div>
}