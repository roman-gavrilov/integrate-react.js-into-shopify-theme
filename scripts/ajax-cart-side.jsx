import React from "react"
import ReactDom from "react-dom"

const Test = () => {
	return <div>This is tutorial to integrate react.js into shopify theme with webpack!!!</div>
}

const root = document.getElementById('cart__drawer_items');
ReactDom.render(<Test />, root);