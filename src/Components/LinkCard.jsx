import React from "react";
import Button from '@material-ui/core/Button'
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import './LinkList.css'


const LinkCard = ({ link,refreshLinks }) => {


  const archiveLink = async () => {
    link.archived = true;
    try {
      await fetch("/api/updateLink", {
        method: "PUT",
        body: JSON.stringify(link),
      });
      refreshLinks();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLink = async () => {

    const id=link._id

    try {
      await fetch("/api/deleteLink", {
        method: "DELETE",
        body: JSON.stringify({ id }),
      });
      refreshLinks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div  className="link-card">
      <h2 className="link-name">{link.name}</h2>
      <p className="link-id">{link._id}</p>
      <a className="link-url" href={link.url}>
        {link.url}
      </a>
      <p className="link-desc">{link.description}</p>
      <Button
        onClick={deleteLink}
        className="btn"
        variant="contained"
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button
        onClick={archiveLink}
        className="btn"
        variant="contained"
        color="primary"
        startIcon={<ArchiveIcon />}
      >
        Archived
      </Button>
    </div>
  );
};

export default LinkCard;
