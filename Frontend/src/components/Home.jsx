import { Link } from "react-router-dom";

const Home = () => {
 return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-dark">
              Welcome!
            </h1>
            <p className="text-lg font-sm mb-8 leading-relaxed">
             Halo perkenalkan nama saya Arianti Apriani Sagita 2204756
             ini merupakan project tugas besar mata kuliah pemrograman internet yang 
             diampu oleh Bapak Erlangga, S.Kom.,M.T.
            </p>
            <div class="row" style={{display: 'flex', justifyContent: 'center'}}>
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Add Data</h5>
                    <p class="card-text">Ini merupakan fungsi untuk menginput pasien ke dalam database</p>
                    <a href="/add-user/_add" class="btn btn-primary">Add Data</a>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">List Data Pasien</h5>
                    <p class="card-text">Ini merupakan fungsi untuk menampilkan list data pasien</p>
                    <a href="/users" class="btn btn-primary">List Data Pasien</a>
                </div>
                </div>
            </div>
            </div>
          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
    </section>
 );
};

export default Home;