import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/mySlice";

export default function Header() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.myState);
    return (
        <header className={"header-container " + state.theme}>
            <div className="header">
                <div className="left">
                    <h2>StarkTech</h2>
                </div>

                <nav className="right">
                    <button tabIndex={0} className="header-link">
                        Business Effeciency
                    </button>
                    <button tabIndex={0} className="header-link">
                        Nexus Trade
                    </button>
                    <button tabIndex={0} className="header-link">
                        Online Store
                    </button>
                    <button tabIndex={0} className="header-link">
                        Who are we?
                    </button>
                </nav>
                <div
                    tabIndex={0}
                    className="toggle-container"
                    style={{ color: state.theme === "dark" ? "#63687e" : "#bcc1d4" }}
                >
                    <label className="switch">
                        <input
                            tabIndex={0}
                            type="checkbox"
                            onClick={() => {
                                dispatch(toggleTheme());
                            }}
                            onKeyDown={(e) => {
                                if (e.code === "Enter") {
                                    dispatch(toggleTheme());
                                }
                            }}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </header>
    );
}
