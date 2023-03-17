import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      <h3 className="mt-4">Quick Links</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
        <Link className="nav-link"  to="products">Available Products</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="team_mem">Team Members</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link"  to="review">Customers Review</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="services">Avaialble Services</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="allorders">All Orders</Link>
        </li>
      </ul>
    </>
  )
}
