import React, { Component } from "react";
import { withRouter, useLocation } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./AppRoutes";
import Navbar from "./shared/Navbar";
import Sidebar from "./shared/Sidebar";
import Footer from "./shared/Footer";
import Login from "./user-pages/Login";
import { IsAuthenticated } from "../components/Config";
import img1 from "../assets/images/question-circle.f23796ab.svg";
import img2 from "../assets/images/comment-dots.d8287354.svg";
import AutoLogout from "../components/AutoLogout";
import SessionTimeOut from "./user-pages/SessionTimeOut";

function App(props) {

    let navbarComponent = <Navbar />;
    let sidebarComponent = <Sidebar />;
    let loginComponent = <Login />;
    let footerComponent = <Footer />;
    let autologout = <AutoLogout />
    const location = useLocation();
    return (
      <>
        {IsAuthenticated() ? (
          <div className="container-scroller">
            {autologout}
            {navbarComponent}
            <div className="container-fluid page-body-wrapper">
              {sidebarComponent}
              <div className="main-panel">
                <div className="content-wrapper customview">
                  <div className="feedback-form-container fixed">
                    {/* <div className="">
                      <div className="feedback-form shadow rounded font-medium text-lg animate__slideInUp">
                        <div className="bg-gray-800 text-white px-6 py-2 flex justify-between items-center border-b">
                          <h3 className="text-left">Feedback</h3>
                          <div className="feedback-form-container__close"></div>
                        </div>
                        <div style={{ minHeight: "400px" }}>
                          <div>
                            <form className="el-form el-form--label-top px-6 py-12 h-full">
                              <div className="">
                                <div>
                                  <div className="el-form-item w-full mb-8">
                                    <div className="el-form-item__content">
                                      <div className="flex justify-start">
                                        <span className="text-lg font-medium text-gray-800 pb-4 inline-block">
                                          <span className="block">
                                            Rate your experience.
                                          </span>
                                        </span>
                                      </div>
                                      <div
                                        className="el-rate text-left"
                                        role="slider"
                                        aria-valuetext=""
                                        aria-valuemin="0"
                                        aria-valuemax="5"
                                        tabindex="0"
                                        aria-valuenow="0"
                                      >
                                        <span
                                          className="el-rate__item"
                                          style={{ cursor: "pointer" }}
                                        >
                                          <i
                                            className="el-icon-star-off el-rate__icon"
                                            style={{
                                              color: "rgb(198, 209, 222)",
                                            }}
                                          ></i>
                                        </span>
                                        <span
                                          className="el-rate__item"
                                          style={{ cursor: "pointer" }}
                                        >
                                          <i
                                            className="el-icon-star-off el-rate__icon"
                                            style={{
                                              color: "rgb(198, 209, 222)",
                                            }}
                                          ></i>
                                        </span>
                                        <span
                                          className="el-rate__item"
                                          style={{ cursor: "pointer" }}
                                        >
                                          <i
                                            className="el-icon-star-off el-rate__icon"
                                            style={{
                                              color: "rgb(198, 209, 222)",
                                            }}
                                          ></i>
                                        </span>
                                        <span
                                          className="el-rate__item"
                                          style={{ cursor: "pointer" }}
                                        >
                                          <i
                                            className="el-icon-star-off el-rate__icon"
                                            style={{
                                              color: "rgb(198, 209, 222)",
                                            }}
                                          ></i>
                                        </span>
                                        <span
                                          className="el-rate__item"
                                          style={{ cursor: "pointer" }}
                                        >
                                          <i
                                            className="el-icon-star-off el-rate__icon"
                                            style={{
                                              color: "rgb(198, 209, 222)",
                                            }}
                                          ></i>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="el-form-item w-full">
                                    <div className="el-form-item__content">
                                      <div className="flex justify-start">
                                        <span className="text-xl font-medium text-gray-800 pb-4 inline-block">
                                          Help improve FireDNS
                                        </span>
                                      </div>
                                      <div className="el-textarea w-full">
                                        <textarea
                                          className="el-textarea__inner"
                                          autofocus=""
                                          rows="8"
                                          autocomplete="off"
                                          placeholder="Tell us what you liked or what we can do better."
                                          style={{ minHeight: "32.3333px" }}
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="text-right px-6 py-2 pb-4">
                            <button
                              className="el-button el-button--primary is-plain"
                              type="button"
                            >
                              <span>Submit</span>
                            </button>
                            <button
                              className="el-button el-button--default"
                              type="button"
                            >
                              <span>Cancel</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="">
                      <div className="feedback-form shadow rounded font-medium text-lg animate__slideInUp">
                        <div className="bg-gray-800 text-white px-6 py-2 flex justify-between items-center border-b">
                          <h3 className="text-left">Need help?</h3>
                          <div className="feedback-form-container__close"></div>
                        </div>
                        <div style={{ minHeight: "400px" }}>
                          <div>
                            <form className="el-form el-form--label-top px-6 py-12 h-full">
                              <div>
                                <div className="el-form-item w-full">
                                  <div className="el-form-item__content">
                                    <div className="flex justify-start">
                                      <span className="text-xl font-medium text-gray-800 pb-4 inline-block">
                                        Briefly describe your issue.
                                      </span>
                                    </div>
                                    <div className="el-textarea w-full">
                                      <textarea
                                        className="el-textarea__inner"
                                        rows="8"
                                        autocomplete="off"
                                        placeholder="Enter details"
                                        style={{ minHeight: "32.3333px" }}
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="text-right px-6 py-2 pb-4">
                            <button
                              className="el-button el-button--primary is-plain"
                              type="button"
                            >
                              <span>Submit</span>
                            </button>
                            <button
                              className="el-button el-button--default"
                              type="button"
                            >
                              <span>Cancel</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="feedback-form-btns text-right">
                      <div className="flex justify-end">
                        <div className="bg-gray-700 text-white hover:bg-gray-900 focus:bg-gray-900">
                          <button
                            className="el-button el-button--default flex items-center expandable-btn request-help-btn"
                            type="button"
                            style={{ background: "none" }}
                          >
                            <span>
                              <img
                                src={img1}
                                alt=""
                                className="inline-block"
                                height="16"
                              />
                              <span className="expendable-btn__text ml-2">
                                {" "}
                                Request Help
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="give-feedback-btn bg-orange-500 text-white hover:bg-orange-400 focus:bg-orange-500">
                          <button
                            className="el-button el-button--default flex items-center expandable-btn request-help-btn"
                            type="button"
                            style={{ background: "none" }}
                          >
                            <span>
                              <img
                                src={img2}
                                alt=""
                                className="inline-block"
                                height="16"
                              />
                              <span className="expendable-btn__text ml-2">
                                {" "}
                                Give Feedback
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <AppRoutes />
                </div>
                {footerComponent}
              </div>
            </div>
          </div>
        ) : 
          (location.pathname == "/" ? <Login />: <SessionTimeOut />)
        }
      </>
    );
}

export default withRouter(App);
