import '../App.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Start() {
    const location = useLocation();
    const { category, difficulty, type } = location.state;

    async function quize() {
        const url = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&type=${type}`;
        try {
            const response = await fetch(url);  
            const data = await response.json();
            document.getElementById('question').innerHTML = `<div>${data.results[0].question}</div>`;
            console.log(data);
            document.getElementById('hide').innerText = `${data.results[0].correct_answer}`
            document.getElementById('d').innerText = `${data.results[0].correct_answer}`

        } catch (error) {
            console.error("Error fetching the quiz question:", error);
        }
    }

    useEffect(() => {
        quize(); // 페이지 로드 시 quize 함수 호출
    }, []); // 빈 배열을 사용하여 컴포넌트가 마운트될 때만 호출

    function ghkrdls() {
        const answer = document.getElementById('answer').value;
        console.log(document.getElementById('hide').innerText)    
        if(answer ==  document.getElementById('hide').innerText) {
            console.log('정답')
            document.getElementById('yogi').innerText = '정답입니다.';
        } else{
            document.getElementById('yogi').innerHTML = `틀렸습니다.<br/>정답은 ${document.getElementById('hide').innerText} 입니다.`;
        }
    }

    return (
        <>
            <div style={{ color: 'white', marginTop: '2vw' }}>
                <h1 id="question" style={{marginTop: '30vh'}}></h1>
                <div id="hide" style={{display: 'none'}}></div>
                <input type="text" style={{color: 'white',backgroundColor:'black',border: '1px solid white',padding:'10px', marginTop: '10vh', fontSize:'20px', borderRadius:'10px', marginRight: '10px'}} id="answer" placeholder="정답을 입력하세요."/>
                <button style={{color: 'white', backgroundColor: 'black', border: '1px solid white', fontSize: '17px', padding: '10px', borderRadius: '10px'}} onClick={ghkrdls}>정답 확인하기</button>
                <h2 id="yogi"></h2>
            </div>
            <button className="smae"><a href="../">처음으로</a></button>
            <button className="smae"><a href="/helper">이전</a></button>
            <button className="smae"><a href="#">다시 풀기</a></button>
        </>
  );

}
export default Start;
