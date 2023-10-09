import { useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Topbar.css";

const Topbar = () => {
  useEffect(() => {
    const hiddenSideBar = document.querySelector(".hidden-side-bar");
    const hiddenSideBarOverlay = document.querySelector(
      ".hidden-side-bar-container"
    );

    // open side bar
    const handleSideBar = () => {
      hiddenSideBar.classList.add("hidden-side-bar-active");
      hiddenSideBarOverlay.classList.add("hidden-side-bar-container-active");
    };

    // hide side bar
    const handleCloseSideBar = () => {
      hiddenSideBar.classList.remove("hidden-side-bar-active");
      hiddenSideBarOverlay.classList.remove("hidden-side-bar-container-active");
    };

    const sideBar = document.querySelector(".ham-bar-icon");
    sideBar.addEventListener("click", handleSideBar);

    const closeIcon = document.querySelector(".close-icon");
    closeIcon.addEventListener("click", handleCloseSideBar);
  }, []);

  return (
    <div className="top-bar">
      <div className="search-options">
        <div className="ham-bar-container">
          <RxHamburgerMenu
            className="ham-bar-icon"
            title="open menu"
          ></RxHamburgerMenu>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
