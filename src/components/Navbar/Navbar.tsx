/* eslint-disable @typescript-eslint/no-explicit-any */
import downIcon from "../../assets/Down.svg";
import filterIcon from "../../assets/Tuning.svg";
import { useState } from "react";

interface NavbarProps {
  handleGroupValue: (value: string) => void;
  handleOrderValue: (value: string) => void;
  groupValue: string;
  orderValue: string;
}
const Navbar = ({
  handleGroupValue,
  handleOrderValue,
  groupValue,
  orderValue,
}: NavbarProps): JSX.Element => {
  const [toggleFilter, setToggleFilter] = useState(false);

  function handleDisplayToggle(e: any) {
    setToggleFilter(!toggleFilter);
    if (e.target.value !== undefined) {
      handleGroupValue(e.target.value);
    }
  }
  function handleOrderingValue(e: any) {
    setToggleFilter(!toggleFilter);
    if (e.target.value !== undefined) {
      handleOrderValue(e.target.value);
    }
  }

  return (
    <section className="nav">
      <div className="nav-container">
        <div>
          <div className="nav-disp-btn" onClick={handleDisplayToggle}>
            <div className="nav-disp-icon nav-disp-filter">
              <img src={filterIcon} alt="icon" />
            </div>
            <div className="nav-disp-heading">Display</div>
            <div className="nav-disp-icon nav-disp-drop">
              <img src={downIcon} alt="icon" />
            </div>
          </div>
          <div
            className={
              toggleFilter
                ? "nav-disp-dropdown nav-disp-dropdown-show"
                : "nav-disp-dropdown"
            }
          >
            <div className="nav-disp-filters">
              <div className="nav-dropdown-category">Grouping</div>
              <div className="nav-dropdown-selector">
                <select
                  value={groupValue}
                  onChange={handleDisplayToggle}
                  className="nav-selector"
                  name="grouping"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
            </div>
            <div className="nav-disp-filters">
              <div className="nav-dropdown-category">Ordering</div>
              <div className="nav-dropdown-selector">
                <select
                  value={orderValue}
                  onChange={handleOrderingValue}
                  className="nav-selector"
                  name="ordering"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
