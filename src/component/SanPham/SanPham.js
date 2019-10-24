import React from 'react';

class SanPham extends  React.Component{
    render(){
    return (
        <div>
            <p>Mã Sản Phẩm: {this.props.MSP}, Tên Sản Phẩm: {this.props.TSP}, Giá: {this.props.GIA}</p>
            <p>{this.props.children}</p>
        </div>
    );
    }
}

export default SanPham;
