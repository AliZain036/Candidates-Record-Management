import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function Candidate({ candidate }) {

  const linkStyle = {
    color: 'black'
  }

  return (
    <div className="candidate">
      <List className="candidates_list">
        <ListItem className="list_item">
          <Link style={linkStyle} to={`/candidates/${candidate._id}`}>
            <ListItemText primary={candidate.name}></ListItemText>
          </Link>
        </ListItem>
      </List>
    </div>
  );
}

export default Candidate;
