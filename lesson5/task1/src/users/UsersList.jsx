import React from "react";
import { connect } from "react-redux";
import User from './User';
import Pagination from './Pagination';
import * as navigator from '../page.actions';
import { usersListSelector, currentPageSelector } from '../users.selectors';

const UsersList = ({ users, currentPage, toNextPage, toPrevPage }) => {
 
  const itemsPerPage = 3;
  
  let startPg = (currentPage - 1) * itemsPerPage; 
  let endPg = startPg + itemsPerPage; 

  const viewNotes = () => {
    const newUsersList = users.slice(startPg, endPg);
    return newUsersList;
  };

  return (
    <div>
      <Pagination
        goNext={toNextPage}
        goPrev={toPrevPage}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={users.length}
      />
      <ul className="users">
        {viewNotes().map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};


const mapState = (state) => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
}

const mapDispatch = dispatch => {
  return {
    toNextPage:()=>dispatch(navigator.nextPage()),
     toPrevPage:()=>dispatch(navigator.prevPage())
  };
}

const connector = connect(mapState, mapDispatch);
export default connector(UsersList);
