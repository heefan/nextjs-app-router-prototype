import React from 'react';
import { FaCalendarAlt, FaDoorOpen, FaUsers } from 'react-icons/fa';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import '../App.css';

export default function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="bookings">
                                    <FaCalendarAlt></FaCalendarAlt>
                                    <span>Bookings</span>
                                </Link>

                                <Link to="bookables">
                                    <FaDoorOpen></FaDoorOpen>
                                    <span>Bookables</span>
                                </Link>

                                <Link to="users">
                                    <FaUsers>users</FaUsers>
                                    <span>Users</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* <Routes>
                    <Route path="/bookings" element={<BookingsPage />} />
                    <Route path="/bookables" element={<BookablePage />} />
                    <Route path="/users" element={<UsersPage />} />
                </Routes> */}
            </div>
        </Router >
    );
}