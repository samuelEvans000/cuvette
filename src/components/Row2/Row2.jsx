/* eslint-disable react/prop-types */
import QuizScoring from "../charts/Question";
import Syllabus from "../charts/Syllabus";
import "./Row2.css";

function Row2({correctAnswer}) {

  const maxValue = 15;
  const correctValue = correctAnswer;
  const wrongValue = maxValue-correctValue;
  
  const data = {
      labels: "",
    datasets: [
      {
        
        
        data: [correctValue, wrongValue],
        cutout:"70%",
     
      
        backgroundColor: ["#438AF6", "#438AF61A"],
        
      },
    ],  
  };
  const options = {
      
    responsive: true,
    legend:{
      display: false,
    },
  }

  return (
    <>
      <div className="syllabus">
        <Syllabus />
      </div>
      <div className="question">
        <div className="heading">
          <h4>Question Analysis</h4>
          <h4 className="question-score">0{correctAnswer}/15</h4>
        </div>
        <div>
          <p className="details">
            <strong>You scored 7 question correct out of 15.</strong> However it
            <br></br>still needs some improvements
          </p>
        </div>
        <div className="doughnut">
          <QuizScoring data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default Row2;
