import React from "react";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

export default function LockIcon() {
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar style={{ backgroundColor: "#f5427e" }}>
        <LockOutlinedIcon style={{ color: "white" }} />
      </Avatar>
    </div>
  );
}
