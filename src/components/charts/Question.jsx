/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import question from '../../assets/question.png';




const centerIconContainerStyle = {
    position: "relative",
    width: "200px", 
    height: "200px", 
  };

const centerIconStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };


const QuizScoring = ({data,options}) => {
  return (
    <div style={centerIconContainerStyle}>
      <Doughnut data={data} options={options}  />
        <img src= {question} style={centerIconStyle}></img>
      </div>
  );
};
export default QuizScoring;