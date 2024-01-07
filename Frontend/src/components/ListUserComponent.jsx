import React, { Component } from 'react';
import UserService from '../services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ListUserComponent extends Component {
 constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchText: '',
    };
 }

 deleteUser(id) {
    const r = window.confirm('Apakah Anda Yakin Menghapus Data Ini?');
    if (r) {
      UserService.deleteUser(id).then((res) => {
        this.setState({
          users: this.state.users.filter((user) => user.id !== id),
        });
      });
    }
 }

 viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
 }

 editUser(id) {
    this.props.history.push(`/add-user/${id}`);
 }

 componentDidMount() {
    UserService.getUsers().then((res) => {
      if (res.data === null || res.data.length === 0) {
        this.props.history.push("/add-user/_add");
      } else {
        this.setState({ users: res.data });
      }
    });
 }

 addUser() {
    this.props.history.push("/add-user/_add");
 }

 searchTextChanged = (event) => {
    this.setState({ searchText: event.target.value });
 };

 render() {
    const filteredUsers = this.state.users.filter((user) => {
      return user.nama.toLowerCase().includes(this.state.searchText.toLowerCase());
    });

    return (
      <div>
        <h2 className="text-center pt-5" style={{ fontWeight: 'bold', fontSize: '50px' }}>Data Pasien</h2>
        <div className="row">
        <div className="Container">
        <div style={{textAlign: 'center'}}>
            <a href="/add-user/_add" class="btn btn-dark" style={{width: '300px'}}>Add Data</a>
        </div>
        </div>
        </div>
        <input 
          class="form-control me-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search"
          onChange={this.searchTextChanged}
          value={this.state.searchText}
        />
        <br />
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Usia</th>
                <th>Jenis Kelamin</th>
                <th>Alamat</th>
                <th>Deskripsi</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                 <td>
                    <div>{user.nama}</div>
                 </td>
                 <td>
                    <div>{user.usia}</div>
                 </td>
                 <td>
                    <div>{user.jenis_kelamin}</div>
                 </td>
                 <td>
                    <div>{user.alamat}</div>
                 </td>
                 <td>
                    <div>{user.deskripsi}</div>
                 </td>
                 <td>
                    <button
                      onClick={() => this.editUser(user.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={() => this.deleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <ToastContainer />
                    <button
                      style={{ marginLeft: "5px" }}
                      onClick={() => this.viewUser(user.id)}
                      className="btn btn-success"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListUserComponent;
