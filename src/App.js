import React from "react";
import './App.css';
import Customer from './Component/Customer'; // 확장자 .js는 생략 가능

const customers =  [
  {
  'id' : 1,
  'image' : 'https://picsum.photos/350/400',
  'name' : '홍길동',
  'birthday' : '950503',
  'gender' : '남자',
  'job' : '대학생'

},
{
  'id' : 2,
  'image' : 'https://picsum.photos/380/490',
  'name' : '지원숭',
  'birthday' : '960808',
  'gender' : '남자',
  'job' : '프로그래머'

},
{
  'id' : 3,
  'image' : 'https://picsum.photos/360/470',
  'name' : '김메로',
  'birthday' : '970809',
  'gender' : '남자',
  'job' : '디제이'

}
] 
 
 
class App extends React.Component {
  render() {
    return (
      <div>
        {
          customers.map( c => {
            return (
              <Customer 
                // key 값 설정해줘야함
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
