import React,{useState} from "react";
import User from './User';
import Pagination from './Pagination';

const UsersList = ({ users }) => {
  
  const [currentPage, setCurrentPage] = useState(1)
  
  const itemsPerPage = 3;

  const goNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const goPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  let lastPage = Math.ceil(users.length / itemsPerPage);// 
 
  let startPg = (currentPage - 1) * itemsPerPage; //firs veiw notes
  let endPg = startPg + itemsPerPage; // last veiw notes

  const viewNotes = () => {
    const newUsersList = users.slice(startPg, endPg);
    return newUsersList;
  };

  
  return (
    <div>
      <Pagination
        goNext={goNext}
        goPrev={goPrev}
        currentPage={currentPage}
        lastPage={lastPage}
      />
      <ul className="users">
        {viewNotes().map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};
export default UsersList;


