import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Helper() {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [type, setType] = useState("");
    const [categorytext, setCategoryText] = useState("")

    const navigate = useNavigate();

    function change() {
        setCategory(document.getElementById('category').value);
        setDifficulty(document.getElementById('difficulty').value);
        setType(document.getElementById('type').value);
        const selectElement = document.getElementById('category');
        setCategoryText(selectElement.options[selectElement.selectedIndex].text);
    }

    function startQ() {
        navigate('/start', {
            state: {category, difficulty, type, categorytext}
        });
    }


    function back() {
        window.location.href = '/'
    }

    return (
        <>
            <h1 style={{ color: 'white', fontSize: '2.5vw', textAlign: 'center', marginBottom: '2vw' }}>
                퀴즈 설정
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5vw' }}>
                {/* 카테고리 선택 */}
                <div style={{ width: '80%', maxWidth: '400px' }}>
                    <label htmlFor="category" style={{ color: 'white', fontSize: '1.5vw' }}>카테고리 선택</label>
                    <select 
                        id='category' 
                        style={{ 
                            width: '100%', 
                            padding: '0.5vw', 
                            fontSize: '1.2vw', 
                            borderRadius: '5px', 
                            border: 'none', 
                            marginTop: '0.5vw',
                            backgroundColor: '#333', 
                            color: 'white'
                        }} 
                        onChange={change}
                    >
                        <option value=""   className='bye'>모든 카테고리</option>
                        <option value="9"  className='bye'>일반 지식</option>
                        <option value="10" className='bye'>엔터테인먼트: 책</option>
                        <option value="11" className='bye'>엔터테인먼트: 영화</option>
                        <option value="12" className='bye'>엔터테인먼트: 음악</option>
                        <option value="13" className='bye'>엔터테인먼트: 뮤지컬 &amp; 극장</option>
                        <option value="14" className='bye'>엔터테인먼트: 텔레비전</option>
                        <option value="15" className='bye'>엔터테인먼트: 비디오 게임</option>
                        <option value="16" className='bye'>엔터테인먼트: 보드 게임</option>
                        <option value="17" className='bye'>과학과 자연</option>
                        <option value="18" className='bye'>과학: 컴퓨터</option>
                        <option value="19" className='bye'>과학: 수학</option>
                        <option value="20" className='bye'>신화학</option>
                        <option value="21" className='bye'>스포츠</option>
                        <option value="22" className='bye'>지리학</option>
                        <option value="23" className='bye'>역사</option>
                        <option value="24" className='bye'>정치</option>
                        <option value="25" className='bye'>미술</option>
                        <option value="26" className='bye'>유명인</option>
                        <option value="27" className='bye'>동물</option>
                        <option value="28" className='bye'>차량</option>
                        <option value="29" className='bye'>엔터테인먼트: 만화</option>
                        <option value="30" className='bye'>과학: 가젯</option>
                        <option value="31" className='bye'>엔터테인먼트: 일본 애니메이션 &amp; 만화</option>
                        <option value="32" className='bye'>엔터테인먼트: 만화 및 애니메이션</option>
                    </select>
                </div>

                {/* 난이도 선택 */}
                <div style={{ width: '80%', maxWidth: '400px' }}>
                    <label htmlFor="difficulty" style={{ color: 'white', fontSize: '1.5vw' }}>난이도 선택</label>
                    <select 
                        id='difficulty' 
                        style={{ 
                            width: '100%', 
                            padding: '0.5vw', 
                            fontSize: '1.2vw', 
                            borderRadius: '5px', 
                            border: 'none', 
                            marginTop: '0.5vw',
                            backgroundColor: '#333', 
                            color: 'white'
                        }} 
                        onChange={change}
                    >
                        <option value="">무작위</option>
                        <option value="easy">쉬움</option>
                        <option value="medium">보통</option>
                        <option value="hard">어려움</option>
                    </select>
                </div>

                {/* 유형 선택 */}
                <div style={{ width: '80%', maxWidth: '400px' }}>
                    <label htmlFor="type" style={{ color: 'white', fontSize: '1.5vw' }}>유형 선택</label>
                    <select 
                        id='type' 
                        style={{ 
                            width: '100%', 
                            padding: '0.5vw', 
                            fontSize: '1.2vw', 
                            borderRadius: '5px', 
                            border: 'none', 
                            marginTop: '0.5vw',
                            backgroundColor: '#333', 
                            color: 'white'
                        }} 
                        onChange={change}
                    >
                        <option value="">모든 유형</option>
                        <option value="multiple">다중 선택</option>
                        <option value="boolean">참 / 거짓</option>
                    </select>
                </div>

                {/* 버튼들 */}
                <div style={{ display: 'flex', gap: '1vw', marginTop: '2vw' }}>
                    <button 
                        type="button" 
                        style={{ 
                            padding: '0.8vw 1.5vw', 
                            fontSize: '1.5vw', 
                            borderRadius: '5px', 
                            border: 'none', 
                            backgroundColor: '#555', 
                            color: 'white', 
                            cursor: 'pointer'
                        }}
                        onClick={back}
                    >

                        뒤로가기
                    </button>
                    <button 
                        type="button" 
                        style={{ 
                            padding: '0.8vw 1.5vw', 
                            fontSize: '1.5vw', 
                            borderRadius: '5px', 
                            border: 'none', 
                            backgroundColor: '#007BFF', 
                            color: 'white', 

                            cursor: 'pointer'
                        }}
                        onClick={startQ}
                    >
                        퀴즈 시작하기
                    </button>
                </div>
            </div>
        </>
    );
}

export default Helper;
