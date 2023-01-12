import React from "react";
import { useSelector } from "react-redux";
import home_image from "../assets/images/home.png"

function Home() {
    const state = useSelector((state) => state.myState);
    return (
        <section id="home" className={"home-container " + state.theme}>
            <div className="home">
                <h1>Innovative tech solutions for businesses and individuals</h1>

             
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                


                <button>Explore Now</button>

                <img src={home_image} alt="" />
            </div>
        </section>
    );
}

export default Home;
