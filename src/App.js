import logo from './logo.svg';
import './App.css';
import Review from "./components/Review";
import InstitutionInfo from './components/InstitutionInfo';
import {Link, useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import PostReview from './components/PostReview';
import { useStateValue } from './StateProvider';

function App() {

  const [{review,institution,user}, dispatch] = useStateValue();

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="InstitutionPage">
            <Navbar></Navbar>
            <div className="institution">
              <div className="left-sidebar">
                <InstitutionInfo id={453} name="IIT Home" address="Plot No. 450, CA Road, Ramdaspeth-440001" courses={['KVPY','JEE','OLYMPIAD','NEET','HRPC','IAS']}/>
              </div>
              <div className="review-section">
                <PostReview user={user}></PostReview>
                {
                  review.map((ele)=>{
                    return <Review key={ele.id} user={ele.user} content={ele.review}></Review>
                  })
                }
                {/* <Review id="34" user="Aish Shrivastava" content="I am here"></Review>
                <Review id="35" user="Ram Zen" content="I am also in the same plan"></Review>
                <Review id="345" user="Utkarsh Sharma" content="This is an truly amazing earbud. It has very Good Quality Sound and Awesome   Features    that other earbuds dont have. 13mm speaker driver for the first time i ever seen in any tws earbuds, most of buds comes   with less than    10mm speaker driver, and because of this 13mm driver size gives more impres"></Review>
                <Review id={4566} user="Vicky Chauhan" content="Qzengo in the viston year"></Review>
                <Review id={4563} user="Saloni Nayak" content="Its better than ICAD as we are targeting toppers only"></Review>
                <Review id={45623} user="Aish Shrivastava" content="I am here"></Review>
                <Review id={4565245} user="Ram Zen" content="I am also in the same plan"></Review>
                <Review id={45624} user="Utkarsh Sharma" content="This is an truly amazing earbud. It has very Good Quality Sound and Awesome   Features    that other earbuds dont have. 13mm speaker driver for the first time i ever seen in any tws earbuds, most of buds comes   with less than    10mm speaker driver, and because of this 13mm driver size gives more impres"></Review>
                <Review id={353} user="Vicky Chauhan" content="Qzengo in the viston year"></Review>
                <Review id={3543} user="Saloni Nayak" content="Its better than ICAD as we are targeting toppers only"></Review> */}
              </div>
              <div className="right-sidebar">I am also here</div>
            </div>
          </div>
        }>
        </Route>
        <Route path="/institution">

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
