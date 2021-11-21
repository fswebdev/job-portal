import React from "react";
import "./bulma.min.css";
// import axios from "axios";
// import "./App.css";
/*<div className="box">
      <p className="subtitle"><img src={user.Image} width="100" height="50" alt="Candidate outlook feature"/></p>
      <p>{user.name}</p>
      <p>{user.Id}</p>*/
const Users = ({ user }) => {
  return (
<div>
Row xs={1} md={2} className="g-8">
  {Array.from({ length: 8 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={user.Image} width="100" height="160" alt="Candidate potrait" />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  );
};

class App extends React.Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };

  fetchUsers() {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false
})
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <section className="section">
        <div className="container">
          {!isLoading ? (
            users.map(user => {
              return <Users key={user.name} user={user} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    );
  }
}

export default App;    
