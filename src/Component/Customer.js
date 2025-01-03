import React from "react";
// 계층 구조 적용
class Customer extends React.Component {
    render() {
        return ( 
            <div>
               <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
            
            </div>
        );
    }
}
 
 
// 사용자의 프로필 : 이미지, 이름, 아이디값 출력
class CustomerProfile extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"></img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );
    }


}

// 사용자의 정보 : 생일, 성별, 직업
class CustomerInfo extends React.Component {
    render() {
        return(
            <div>
               <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                 <p>{this.props.job}</p>
            </div>
        );
    }

}

export default Customer;
