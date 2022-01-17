import React from "react";

const FamilyMembers = ({ memberTree, setSelected }) => {
  function handleClick(e) {
    e.preventDefault();
    setSelected(e.currentTarget.getAttribute("type"));
  }

  return (
    <div>
      {memberTree.map((item) => {
        const { id, name, surname } = item;
        return (
          <div key={id}>
            <div className="Member" onClick={handleClick} type={id}>
              {name} {surname}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FamilyMembers;
