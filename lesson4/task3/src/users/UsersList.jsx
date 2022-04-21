import React from "react";
import { connect } from "react-redux";
import User from './User';
import Pagination from './Pagination';
import * as navigator from '../page.actions';

const UsersList = ({ usersState, toNextPage, toPrevPage }) => {
 
  const users = usersState.usersList;
  const currentPage = usersState.currentPage;

  const itemsPerPage = 3;
const totalItems = users.length;

  let startPg = (currentPage - 1) * itemsPerPage; //firs veiw notes
  let endPg = startPg + itemsPerPage; // last veiw notes

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
        totalItems={totalItems}
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
    usersState: state,
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
