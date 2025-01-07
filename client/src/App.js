import React from "react";
import './App.css';
import Customer from './Component/Customer'; // 확장자 .js는 생략 가능
import { Table, TableBody, TableHead, TableRow, TableCell, Paper } from "@mui/material";
import { styled } from '@mui/system';  // styled 임포트

const Styles = {
  root: {
    width: '100%',
    marginTop: '24px', // theme.spacing.unit을 사용하지 않고 하드코딩
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
};

const customers = [
  {
    id: 1,
    image: 'https://picsum.photos/350/400',
    name: '홍길동',
    birthday: '950503',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 2,
    image: 'https://picsum.photos/380/490',
    name: '지원숭',
    birthday: '960808',
    gender: '남자',
    job: '프로그래머'
  },
  {
    id: 3,
    image: 'https://picsum.photos/360/470',
    name: '김메로',
    birthday: '970809',
    gender: '남자',
    job: '디제이'
  }
];

const StyledPaper = styled(Paper)(Styles.root);  // Paper에 스타일을 적용한 컴포넌트
const StyledTable = styled(Table)(Styles.table);  // Table에 스타일을 적용한 컴포넌트

class App extends React.Component {
  render() {
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
            {customers.map(c => {
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
            })}
          </TableBody>
        </StyledTable>
      </StyledPaper>
    );
  }
}

export default App;
