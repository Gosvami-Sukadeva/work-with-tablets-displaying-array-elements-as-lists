const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
      sex: "male",
    },
  ],
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>
      Wiek użytkownika: <strong>{user.age}</strong>
    </p>
    <p>Płeć użytkownika: {user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  state = {};
  render() {
    let users = this.props.data.users;
    users = users.filter((user) => user.sex === "female"); //jeśli false to tablica się nie pojawi i za pomocą metody map utworzy nową
    const Items = users.map((user) => <Item key={user.id} user={user} />); //key ma być stworzony gdzie jest map a nie na górze gdzie jest li
    return <ul>{Items}</ul>;
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
