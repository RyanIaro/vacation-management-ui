import React from "react";

export function Header() {
    return(
        <>
            <div className="title">
                <h1>Vacation Management</h1>
            </div>
            <div className="nav">
                <a href="#">Employees</a>
                <a href="#">Vacations</a>
                <input type="search" name="searchBar" placeholder="Search with employee name"/>
            </div>
        </>
    );
}