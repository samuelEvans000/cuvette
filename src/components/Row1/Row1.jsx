/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";

import "./Row1.css";
import html from "../../assets/html.jpg";
import htmlcopy from "../../assets/htmlcopy.jpg";
import rank from "../../assets/rank.jpg";
import percentile from "../../assets/percentile.jpg";
import answers from "../../assets/answers.jpg";
import arrow from "../../assets/arrow.svg";
import graph from "../../assets/graph.png";
import Row2 from "../Row2/Row2";
import AreaChart from "../charts/Graph";

function Row1() {
  const [newRank, setNewRank] = useState("12,890");
  const [newPercentile, setNewPercentile] = useState("37");
  const [newCorrectAnswers, setNewCorrectAnswers] = useState("7");

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setNewRank(newRank);
    setNewPercentile(newPercentile);
    setNewCorrectAnswers(newCorrectAnswers);
    // Close the pop-up
    closePopUp();
  };

  return (
    <>
      <div className="page-content">
        <h4 className="page">Skill Test</h4>
        <div className="main-page">
          <div className="row1">
            <div className="html">
              <div className="img-content">
                <img src={html}></img>
                <div>
                  <h4 className="title">Hypertext Markup Language</h4>
                  <p className="para">
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                  </p>
                </div>
              </div>
              <div>
                <button className="update" onClick={openPopUp}>
                  Update
                </button>
              </div>
            </div>

            {isPopUpOpen && (
              <div className="pop-up">
                <div className="popup">
                  <div className="top">
                    <h2 className="pop-title">Update Scores</h2>
                    <img src={htmlcopy}></img>
                  </div>

                  <form className="form" onSubmit={handleFormSubmit}>
                    <div className="main-data">
                      <div className="data">
                        <p className="sequence">1</p>
                        <p>
                          Update your <strong>rank</strong>
                        </p>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="placeholder"
                          placeholder="New Rank"
                          value={newRank}
                          onChange={(e) => setNewRank(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="main-data">
                      <div className="data">
                        <p className="sequence2">2</p>
                        <p>
                          Update your <strong>percentile</strong>{" "}
                        </p>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="placeholder"
                          placeholder="New Percentile"
                          value={newPercentile}
                          onChange={(e) => setNewPercentile(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="main-data">
                      <div className="data">
                        <p className="sequence2">3</p>
                        <p>
                          Update your <strong>current score (out of 15)</strong>
                        </p>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="placeholder"
                          placeholder="New Score"
                          value={newCorrectAnswers}
                          onChange={(e) => setNewCorrectAnswers(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="end-buttons">
                      <button className="cancel" onClick={closePopUp}>
                        Cancel
                      </button>
                      <button className="save">
                        Save
                        <img className="arrow" src={arrow}></img>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            <div className="statistics">
              <div>
                <h4 className="quick">Quick Statistics</h4>
              </div>
              <div className="columns">
                <div className="scores">
                  <img src={rank}></img>
                  <div>
                    <h2>{newRank}</h2>
                    <p className="sub">YOUR RANK</p>
                  </div>
                </div>
                
                <div className="scores">
                  <img className="border-1" src={percentile}></img>
                  <div className="border-2">
                    <h2>{newPercentile}%</h2>
                    <p className="sub">PERCENTILE</p>
                  </div>
                </div>
                <div className="scores">
                  <img src={answers}></img>
                  <div>
                    <h2>0{newCorrectAnswers}/15</h2>
                    <p className="sub">CORRECT ANSWERS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="graph">
              <h4 className="comparision-graph">Comparison Graph</h4>
              <div className="summary">
                <p>
                  {" "}
                  <strong>You scored {newPercentile}% percentile</strong> which is lower than
                  the
                  <br></br> average percentile 72% of all the engineers who took
                  this assessment
                </p>
                <img src={graph}></img>
              </div>
              <AreaChart score={newPercentile} avg={72}/>
            </div>
          </div>

          <div>
            <Row2 correctAnswer = {newCorrectAnswers}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Row1;
