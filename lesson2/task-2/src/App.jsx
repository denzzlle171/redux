import React from "react";
import Header from './Header';
import { UserDataContext } from './context';

class App extends React.Component {

  state = {
    userData:{
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
      }
    };

  render() {
    return (
      <div className="page">
        <UserDataContext.Provider value={this.state.userData}>
          <Header />
        </UserDataContext.Provider>
      </div>
    );
  }
}
export default App;