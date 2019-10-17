import React, {Component} from 'react';
import './App.css';
import SinhVien from './component/SinhVien/SinhVien';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Ứng dụng React đầu tiên</h1>
        <p>Đến từ Châu Hữu Bằng</p>
        <SinhVien hoten='Châu Hữu Bằng' tuoi = '19'>
          Sở thích: Chơi Game, Xem phim, Nghe nhạc ...
        </SinhVien>
        <SinhVien hoten='Nguyễn Quốc Cường' tuoi = '19'>
          Sở thích: Xem JA* ...
        </SinhVien>
        <SinhVien hoten='Nguyễn Thị Kiều My' tuoi = '19'/>
      </div>
    );     
  }
}
export default App;

