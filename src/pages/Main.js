import React from "react";
import { useNavigate } from "react-router-dom";


function Main({userName, ChangeEvent, quizList, quiz, selected, quizCnt}) {
  let navigate = useNavigate();

  const type = quiz.map(item => item.type);
  const typeSelect = [...new Set(type)];
  console.log(typeSelect)

  const nameChk = () => {
    userName === ""
      ? (function () {
          alert("이름을 입력해주세요");
          document.querySelector("input").focus();
        })()
      : navigate("/quiz");
  };

  return (
    <>
      <div className="w-full flex items-center h-full">
        <div className="mx-auto basis-11/12 lg:basis-10/12">
          <div className="bg-white rounded-lg p-5 pb-0">
            <div className="text-center flex flex-wrap justify-between">
              <input
                defaultValue={userName}
                className="name border pl-4 py-2 rounded-md shadow-md outline-none basis-full sm:basis-8/12"
                type="text"
                onChange={ChangeEvent}
                placeholder="이름을 입력해주세요."
              ></input>
              <button
                onClick={() => {
                  nameChk();
                }}
                className="text-sm sm:text-base bg-blue-500 btn-primary hover:bg-blue-700 focus:ring-blue-400 sm:py-0 basis-full sm:basis-3/12 mt-5 sm:mt-0"
              >
                시작하기
              </button>
              <h3 className="my-5 basis-full text-center">
                {userName !== "" && (
                  <>
                    <span className="text-indigo-500 font-bold">
                      {userName}님{" "}
                    </span>
                    <span>
                      문제 유형은 기본값으로 설정 되어있으며, 총 {quiz.length} 문제 중
                      1 문제를 선택 하셨습니다.
                    </span>
                  </>
                )}
              </h3>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-5 mt-5 flex justify-between flex-wrap items-center">
            <div className="flex justify-around items-center xl:basis-4/12 basis-full ">
              <button className="btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12">
                랜덤 설정
              </button>
              <select
                className="random border rounded basis-6/12 text-center py-1.5"
                name=""
                id=""
                onChange={ChangeEvent}
              >
                <option value="0">기본</option>
                <option value="1">랜덤</option>
              </select>
            </div>
            <div className="flex justify-around items-center xl:basis-4/12 basis-full">
              <button className="btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12 my-5">
                갯수 설정
              </button>
              <select
                className="cnt border rounded basis-6/12 text-center py-1.5"
                name=""
                id=""
                onChange={ChangeEvent}
                defaultValue={selected}
              >
               {
                Array(quizCnt).fill().map((e,i) =>{
                  return <option value={i + 1} key={i} >{i + 1} 문제</option> 
                })
               }
              </select>
            </div>
            <div className="flex justify-around items-center xl:basis-4/12 basis-full">
              <button className="btn-primary text-sm sm:text-base bg-green-800 hover:bg-green-700 focus:ring-green-400 basis-5/12">
                문제 유형
              </button>
              <select
                className="type border rounded basis-6/12 text-center py-1.5"
                name=""
                id=""
                onChange={ChangeEvent}
              >
                <option value="전체">전체 ({quiz.length} 문제)</option>
                {
                  typeSelect.map(el => {
                    return <option value={el} key={el}>{el}({quiz.filter(e => el === e.type).length} 문제)</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
