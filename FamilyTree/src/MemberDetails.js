import React from "react";

const MemberDetails = ({ memberTree, selected }) => {
  const member = memberTree.find((obj) => {
    return obj.id == selected;
  });

  return (
    <div>
      <div>
        <div className="">
          {member.name} {member.surname} <br />
          {member.whenBorn} {member.bornPlace}
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
