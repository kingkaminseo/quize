import '../App.css';

function Home() {

  const handleClick = () => {
    window.location.href = './helper';
  };

  return (
    <>
        <h1 style={{fontSize: '9vw'}} className="main">
            상식<br />퀴즈쇼
        </h1>

        <button 
          type="button" 
          className='btn' 
          style={{fontSize: '3vw', maxWidth: '500px'}} 
          onClick={handleClick}
        >
          시작하기
        </button>
    </>
  );
}

export default Home;
