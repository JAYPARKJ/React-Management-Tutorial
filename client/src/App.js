import React from "react";
import './App.css';
import Customer from './Component/Customer'; // 확장자 .js는 생략 가능
import { Table, TableBody, TableHead, TableRow, TableCell, Paper, CircularProgress } from "@mui/material";
import { styled } from '@mui/system';  // styled 임포트

const Styles = {
  root: {
    width: '100%',
    marginTop: '24px', // theme.spacing.unit을 사용하지 않고 하드코딩
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: '20px'
  }

};
 
 
const StyledPaper = styled(Paper)(Styles.root);  // Paper에 스타일을 적용한 컴포넌트
const StyledTable = styled(Table)(Styles.table);  // Table에 스타일을 적용한 컴포넌트
// 버전차이로 인한 styled 통한 변수 작성 01.08
const StyledCircularProgress = styled(CircularProgress)(Styles.progress); //CircularProgress에 스타일을 적용한 컴포넌트 
class App extends React.Component {

  state = {
    customers: "",
    completed:0
  }
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    // 일부로 프로그래스바 나오게 로딩지연 발생시키기
    // this.callApi()
    //   .then(res => this.setState({customers: res}))
    //   .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  
  progress = () => {
    const {completed} = this.state;
    this.setState({completed: completed >=100 ? 0 : completed + 1 });
  }
  render() {
    // const { classes } = this.props; 
    return (
      <StyledPaper>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers? this.state.customers.map(c => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            }) : 
            // progress 바 설정
            <TableRow>
              <TableCell colsapn="6" align="center">
                  <StyledCircularProgress variant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </StyledTable>
      </StyledPaper>
    );
  }
}

export default App;
