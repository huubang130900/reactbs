import React, {Component} from 'react';
import './App.css';
import SinhVien from './component/SinhVien/SinhVien';
// import SanPham from './component/SanPham/SanPham';

class App extends Component{
  state = {
    sinhVien : [
      {hoten: 'Châu Hữu Bằng', tuoi: 19, sothich: 'chơi game'},
      {hoten: 'Nguyễn Thị Kiều My', tuoi: 19, sothich: 'K-POP'},
      {hoten: 'Lê Hoàng', tuoi: 19, sothich: 'chơi game'}
    ],
    lop : 'Lập trình ReactJS'
  }

  xuLyCapNhat = () => {
    this.setState(
      {
        sinhVien : [
          {hoten: 'Châu H.Bằng', tuoi: 19, sothich: 'chơi game'},
          {hoten: 'Nguyễn T.K.My', tuoi: 19, sothich: 'K-POP'},
          {hoten: 'Lê Hoàng', tuoi: 25, sothich: 'chơi game'}
        ],
      }
    );
  }

  render(){
    return(
      <div className="App">
        <h1>Ứng dụng React đầu tiên</h1>
        <p>Đến từ Châu Hữu Bằng - Lớp { this.state.lop}</p>
        <button onClick ={this.xuLyCapNhat}>
          Cập Nhật
        </button>
        <SinhVien hoten={this.state.sinhVien[0].hoten} 
        tuoi = {this.state.sinhVien[0].tuoi} >
          Sở thích: {this.state.sinhVien[0].sothich}
        </SinhVien>
        <SinhVien hoten={this.state.sinhVien[1].hoten} 
        tuoi = {this.state.sinhVien[1].tuoi}>
          Sở thích: {this.state.sinhVien[1].sothich}
        </SinhVien>
        <SinhVien hoten={this.state.sinhVien[2].hoten} tuoi = {this.state.sinhVien[2].tuoi}/>
        {/* <h2>HỮU BẰNG SHOP</h2>
        <p>Sản Phẩm 1</p>
        <SanPham MSP = '01' TSP ='Tivi Sony 42 in' GIA = '7.000.000 vnd' >Sắc nét đến từng chi tiết </SanPham>
        <p>Sản Phẩm 2</p>
        <SanPham MSP = '02' TSP ='Tủ lạnh Tosiba' GIA = '17.500.000 vnd'>Tủ lạnh k lạnh k lấy tiền</SanPham>
        <p>Sản Phẩm 3</p>
        <SanPham MSP = '03' TSP ='Máy lạnh ' GIA = '12.000.000 vnd'>Máy lạnh chất lượng vl lắm các đồng dâm ạ</SanPham>
        <p>Sản Phẩm 4</p>
        <SanPham MSP = '04' TSP ='Máy chiếu' GIA = '6.540.000 vnd'>Chiếu được lắm các bác ạ</SanPham>
        <p>Sản Phẩm 5</p>
        <SanPham MSP = '05' TSP ='Nồi cơm điện' GIA = '750.000 vnd'>Nấu cơm ngon lắm các mẹ ạ =))</SanPham> */}
      </div>
    );     
  }
}
export default App;

