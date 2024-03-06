import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { TableRow, TableRowEnd } from './tableRow';
import tableItems from './tableData';

function RightPortion() {
    return (
        <div className="right-col col-12 col-md-9 col-xl-9 p-0" role="main">
            <div className='right-portion'>
                <div className="top-div first d-flex align-items-center justify-content-between">
                    <h5>Products <i className="fa fa-hand-paper-o" aria-hidden="true"></i></h5>
                    <div className="input-group one mb-3">
                        <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" placeholder="Search for..." className="search-input" />
                    </div>
                    <div className=''>
                        <a><i className="fa-solid fa-folder-open"></i></a>
                        <a><i className="fa-solid fa-gear"></i></a>
                    </div>
                </div>
                <div className="input-group two mb-3">
                    <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
                    <input type="text" placeholder="Search for..." className="search-input" />
                </div>
                <div className="nav-container d-flex align-items-center justify-content-between">
                    <ul className="d-flex align-items-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="fa-solid fa-code-branch"></i>All branch</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Desk</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tags</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-bars"></i>Sort</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-filter"></i>Filter</a>
                        </li>
                    </ul>
                    <ul className="d-flex align-items-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><i className="fa-solid fa-cube"></i>Meeting</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-solid fa-cube"></i>Import/Export</a>
                        </li>
                    </ul>
                </div>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Discriptions</th>
                                <th>Members  Members</th>
                                <th>Categories</th>
                                <th>Tags</th>
                                <th>Next meeting</th>
                                <th>+</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableItems.map(tableItem => (
                                <TableRow
                                    key={tableItem.id}
                                    brandName={tableItem.brandName}
                                    brandLogo={tableItem.brandLogo}
                                    discription={tableItem.discription}
                                    member1={tableItem.member1}
                                    member2={tableItem.member2}
                                    member3={tableItem.member3}
                                    category={tableItem.category}
                                    tags={tableItem.tags}
                                    nextMeeting={tableItem.nextMeeting}
                                    add={tableItem.add}
                                />
                            ))}
                            <TableRowEnd />
                        </tbody>
                    </table>
                </div>
                <div className='d-flex bottom-right'>
                    <div className='bottom-text'>
                        <button className='btn btn-light'><i className="fa-solid fa-calendar-check"></i>Selected</button>
                        <button className='btn btn-light'><i className="fa-solid fa-box-archive"></i>Archive</button>
                        <button className='btn btn-light'><i className="fa-solid fa-trash"></i>delete</button>
                        <button className='btn btn-light'>More</button>
                        <button className='btn btn-light'>x</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightPortion;
