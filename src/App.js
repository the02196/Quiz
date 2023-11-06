import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import NotPage from "./pages/NotPage";
import { useEffect, useState } from "react";
import QuizList from "./components/QuizList";

function App() {
  const [userName, setUserName] = useState("준");
  const [quizList, setQuizList] = useState(QuizList);
  const [selected, setSelected] = useState(3);
  const [quizCnt, setQuizCnt] = useState(QuizList.length);
  const [typeTxt, setTypetxt] = useState("전체");
  const quiz = [...QuizList];
  const ChangeEvent = (data) => {
    const classValue = data.target.className;
    const dataValue = data.target.value;

    switch (true) {
      //includes("값") => 해당 문자열이 있는지 체크하는 코드이다.
      case classValue.includes("name"):
        setUserName(dataValue);
        break;
      case classValue.includes("random"):
        (dataValue === "1" ? setQuizList([...QuizList].sort(()=>{
          return Math.random() - 0.5;
        }).slice(0, selected)) : setQuizList([...QuizList]).slice(0, selected))
        break;
      case classValue.includes("cnt"):
        setSelected(dataValue);
        break;
      case classValue.includes("type"):
        (dataValue === "전체" 
        ? setQuizList([...QuizList].slice(0, selected))
        : setQuizList([...QuizList].filter((e) => {
            return e.type === dataValue;
        }).slice(0, selected))
        )
        setTypetxt(dataValue)
        break;
        default:
        console.log("데이터가 없습니다.");
      }
  };

  
  useEffect(() => {
    setQuizList([...QuizList].slice(0, selected));
    setQuizCnt([...QuizList].filter((e)=>{
      return typeTxt === "전체" ? true : e.type === typeTxt;
    }).length)
  }, [typeTxt, selected]);

  console.log(quizList);
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              userName={userName}
              quizList={quizList}
              quiz={quiz}
              ChangeEvent={ChangeEvent}
              selected={selected}
              quizCnt={quizCnt}
            />
          }
        />
        <Route
          path="/quiz"
          element={<Detail quizList={quizList} userName={userName} />}
        />
        <Route path="/*" element={<NotPage />} />
      </Routes>
    </>
  );
}

export default App;
