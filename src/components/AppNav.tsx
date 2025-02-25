
import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import './AppNav.css';
import React from "react";


type AppNavProps = {
    routes: { path: string, title: string }[]
};

const AppNav = ({ routes }: AppNavProps) => {
    const navigationElements = useMemo(() => {
        return routes.map((route) => {
            return (
                <li key={route.path}>
                    <div className="nav-item">
                        <NavLink to={route.path}>
                            {({ isActive }) => (
                                <span className={`item ${isActive ? 'active' : ''}`}>{route.title}</span>
                            )}
                        </NavLink>
                    </div>
                </li>
            );
        });
    }, [routes]);

    return (
        <div className="appnav">
            <div className="tree navigation">
                <ul>
                    {navigationElements}
                </ul>
            </div>
        </div>
    );
};

export default AppNav;
