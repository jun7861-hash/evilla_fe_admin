import React, { useState } from "react";

import * as styled from "./style";
import profile from "../../assets/images/profile.jpg";

const TopNav: React.FC = () => {
  const [isProfileDropdown, setIsProfileDropdown] = useState<Boolean>(false);

  return (
    <>
      <styled.Header>
        <styled.Nav>
          <styled.NavList>
            <styled.NavItem>
              <styled.NavLink>
                <i className="far fa-bell"></i>
              </styled.NavLink>
            </styled.NavItem>
            <styled.NavItem>
              <styled.NavLink>
                <i className="far fa-comment-dots"></i>
              </styled.NavLink>
            </styled.NavItem>
            <styled.NavItem>
              <styled.ProfileContainer
                onClick={() => setIsProfileDropdown(!isProfileDropdown)}
              >
                <styled.ProfileInfo>
                  <styled.Name>Junjun Sigaw</styled.Name>
                  <styled.Role>Admin</styled.Role>
                </styled.ProfileInfo>
                <styled.ProfileImage>
                  <styled.Image alt="" src={profile} />
                </styled.ProfileImage>
                {isProfileDropdown && (
                  <styled.ProfileDropdown>
                    <styled.ProfileList>
                      <styled.ProfileItem>
                        <styled.ProfileLink>
                          <i className="far fa-user"></i> Profile
                        </styled.ProfileLink>
                      </styled.ProfileItem>
                      <styled.ProfileItem>
                        <styled.ProfileLink>
                          <i className="fas fa-sign-out-alt"></i> Logout
                        </styled.ProfileLink>
                      </styled.ProfileItem>
                    </styled.ProfileList>
                  </styled.ProfileDropdown>
                )}
              </styled.ProfileContainer>
            </styled.NavItem>
          </styled.NavList>
        </styled.Nav>
      </styled.Header>
    </>
  );
};

export default TopNav;
