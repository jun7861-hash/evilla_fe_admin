import React, { useState } from "react";

import UserPanel from "../../components/user-panel";
import { MENUITEMS } from "./menu";

import logo from "../../assets/images/endless-logo.png";

const Sidebar: React.FC = () => {
  const [mainmenu, setMainmenu] = useState(MENUITEMS);
  const [menuChild, setMenuChild] = useState<any>();

  const handleNavActive = (navItem: any, index: any) => {
    const newArray = [...mainmenu];

    if (!newArray[index].active) {
      newArray.map((item) => (item.active = false));
      newArray[index] = { ...navItem, active: true };
      setMainmenu(newArray);
    } else {
      newArray[index] = { ...navItem, active: false };
      setMainmenu(newArray);
    }
  };

  return (
    <div className="page-sidebar">
      <div className="main-header-left d-none d-lg-block">
        <div className="logo-wrapper compactLogo">
          <img className="blur-up lazyloaded" src={logo} alt="" />
        </div>
      </div>
      <div className="sidebar custom-scrollbar">
        <UserPanel />

        <ul className="sidebar-menu">
          {mainmenu.map((item: any, index: any) => (
            <li className={`${item.active ? "active" : ""}`} key={index}>
              {item.type === "sub" ? (
                <a
                  className="sidebar-header"
                  href={`#${item.title}`}
                  onClick={() => handleNavActive(item, index)}
                >
                  <item.icon />
                  {item.title}
                </a>
              ) : (
                ""
              )}
              {/* a tag must be change to Link tag */}
              {item.type === "link" ? (
                <a
                  className="sidebar-header"
                  href={`#${item.title}`}
                  onClick={() => handleNavActive(item, index)}
                >
                  <item.icon />
                  {item.title}
                </a>
              ) : (
                ""
              )}

              {item?.children && (
                <ul
                  className={`sidebar-submenu ${
                    item.active ? "menu-open" : ""
                  }`}
                  style={
                    item.active
                      ? { opacity: 1, transition: "opacity 500ms ease-in" }
                      : {}
                  }
                >
                  {item?.children?.map((itemChild: any, index: any) => (
                    <li
                      key={index}
                      className={itemChild.title === menuChild ? "active" : ""}
                    >
                      {/* a tag must be change to Link tag */}
                      {itemChild.type === "link" ? (
                        <a
                          href={`#${itemChild.title}`}
                          onClick={() => setMenuChild(itemChild.title)}
                        >
                          <i className="fa fa-circle"></i>
                          {itemChild.title}
                          <i className="fa fa-angle-right pull-right"></i>
                        </a>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
