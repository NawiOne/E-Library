import React from "react";
import "../index.css";
import Header from "../components/header";
import RightBar from "../components/rightBar";
// import TopSlider from '../components/topSlider';
import ListBook from "../components/listBook";
import ModalAdd from '../components/modalAdd';
import NavHide from "../components/nav-hide";
import Corousel from "../components/corousel";
// import Slideshow from "../components/slideTest";


class Home extends React.Component {
  render() {
    return (
      <>
        <div className='my-container'>
            <ModalAdd/>
          <RightBar />
          <Header />
          <NavHide/>
          <main className=''>
            <div className='row topslider'>
              {/*<TopSlider/>*/} 
              <Corousel/>
            </div>
            <div className='listbook'>
              <ListBook/>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default Home;
