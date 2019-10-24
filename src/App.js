import React, {Component} from 'react';
import './App.css';
// import SinhVien from './component/SinhVien/SinhVien';
import SanPham from './component/SanPham/SanPham';

class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <h1>Ứng dụng React đầu tiên</h1>
        <p>Đến từ Châu Hữu Bằng</p>
        <SinhVien hoten='Châu Hữu Bằng' tuoi = '19'>
          Sở thích: Chơi Game, Xem phim, Nghe nhạc ...
        </SinhVien>
        <SinhVien hoten='Nguyễn Quốc Cường' tuoi = '19'>
          Sở thích: Xem JA* ...
        </SinhVien>
        <SinhVien hoten='Nguyễn Thị Kiều My' tuoi = '19'/> */}
        <h2>HỮU BẰNG SHOP</h2>
        <p>Sản Phẩm 1</p>
        <SanPham MSP = '01' TSP ='Tivi Sony 42 in' GIA = '7.000.000 vnd' >Sắc nét đến từng chi tiết </SanPham>
        <p>Sản Phẩm 2</p>
        <SanPham MSP = '02' TSP ='Tủ lạnh Tosiba' GIA = '17.500.000 vnd'>Tủ lạnh k lạnh k lấy tiền</SanPham>
        <p>Sản Phẩm 3</p>
        <SanPham MSP = '03' TSP ='Máy lạnh ' GIA = '12.000.000 vnd'>Máy lạnh chất lượng vl lắm các đồng dâm ạ</SanPham>
        <p>Sản Phẩm 4</p>
        <SanPham MSP = '04' TSP ='Máy chiếu' GIA = '6.540.000 vnd'>Chiếu được lắm các bác ạ</SanPham>
        <p>Sản Phẩm 5</p>
        <SanPham MSP = '05' TSP ='Nồi cơm điện' GIA = '750.000 vnd'>Nấu cơm ngon lắm các mẹ ạ =))</SanPham>
      </div>
    );     
  }
}
export default App;

