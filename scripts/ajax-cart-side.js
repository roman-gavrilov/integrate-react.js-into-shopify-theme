import React from "react"
import ReactDom from "react-dom"

const Test = () => {
	return <div>test!</div>
}

const root = document.getElementById('cart__drawer_items');
ReactDom.render(<Test />, root);