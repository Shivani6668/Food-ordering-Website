import React, { useState, useEffect } from "react";
import { SiGmail, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import { Github_API, Linkedin_Link,Github_Link,Email_Link } from "../utils/contants";

function Profile() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(Github_API);
      const json = await response.json();
      setUserInfo(json);
    };

    fetchData();
  }, []);

  // console.log(userInfo.bio);

  return (
    <>
      <div className="profile-class-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>

          <div className="profile-user-card">
            <a
              href={userInfo.avatar_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="profile-user-img" src={userInfo.avatar_url} />
            </a>

            <p className="profile-user-bio">{userInfo.bio}</p>

            <div className="social-media-container">
              <a
                href={Linkedin_Link}
                title="Follow me on Linkedin"
                className="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <SiLinkedin title="Follow me on Linkedin" />
                </i>
              </a>

              <a
                href={Github_Link}
                title="Follow me on Github"
                className="icon-button github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <SiGithub title="Follow me on Github" />
                </i>
              </a>
              <a
                href={Email_Link}
                title="Any Query! Mail me"
                className="icon-button email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <SiGmail title="Any Query! Mail me" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
