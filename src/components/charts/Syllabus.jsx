import ProgressBar from "@ramonak/react-progress-bar";


function Syllabus() {
  return (
    <div>
      <>
      <div className="z-50 items-center w-max mt-52 p-10 gap-10">
          <h4>Syllabus Wise Analysis</h4>
          <div className="w-96"  >
            <p>HTML Tools, Forms, History</p>
            <ProgressBar
              completed={80}
              bgColor="#438AF6"
              width="55%"
              labelColor="#438AF6"
              labelAlignment="outside"
              baseBgColor="#e8f1ff"
              height="10px"
              
              margin="0px 90px 0px 0px"
              animateOnRender={true}
            />
          </div>
          <div className="w-96">
            <p>Tags & References in HTML</p>
            <ProgressBar
              completed={60}
              bgColor="#FF9142"
              labelColor="#FF9142"
              labelAlignment="outside"
              baseBgColor="#f5e6db"
              width="55%"
              height="10px"
              margin="0px 90px 0px 0px"
              animateOnRender={true}
            />
          </div>
          <div className="w-96">
            <p>Tables & CSS Basics</p>
            <ProgressBar
              completed={24}
              bgColor="#FB5E5E"
              labelAlignment="outside"
              labelColor="#FB5E5E"
              width="55%"
              baseBgColor="#fae5e5"
              height="10px"
              margin="0px 90px 0px 0px"
              animateOnRender={true}
            />
          </div>
          <div className="w-96">
            <p>Tables & CSS Basics</p>
            <ProgressBar
              completed={92}
              bgColor="#2EC971"
              labelAlignment="outside"
              labelColor="#2EC971"
              width="55%"
              baseBgColor="#d4fae5"
              height="10px"
              margin="0px 90px 0px 0px"
              animateOnRender={true}
            />
          </div>
        </div>
      </>
    </div>
  )
}

export default Syllabus
