import React, { useState } from "react";
import Header from "components/Header";
import Tab from "components/Tab";
import ExternalInfo from "components/ExternalInfo";

const tabContent = [
  {
    title: "Chennai",
    content: `Chennai is the capital of the Indian state of Tamil Nadu.
              Located on the Coromandel Coast of the Bay of Bengal, it is one
              of the largest cultural, economic and educational centres of
              south India. According to the 2011 Indian census, it is the
              sixth-most populous city and fourth-most populous urban
              agglomeration in India. The city together with the adjoining
              regions constitutes the Chennai Metropolitan Area, which is the
              36th-largest urban area by population in the world.`,
  },
  {
    title: "Abu Dhabi",
    content: `Abu Dhabi is the capital and the second-most populous city of
              the United Arab Emirates (after Dubai). The city of Abu Dhabi is
              located on an island in the Persian Gulf, off the Central West
              Coast. Most of the city and the Emirate reside on the mainland
              connected to the rest of the country. As of 2020, Abu Dhabi's
              urban area had an estimated population of 1.48 million,[6] out
              of 2.9 million in the emirate of Abu Dhabi, as of 2016.`,
  },
  {
    title: "New York",
    content: `New York City (NYC), often called simply New York, is the most
              populous city in the United States. With an estimated 2019
              population of 8,336,817 distributed over about 302.6 square
              miles (784 km2), New York City is also the most densely
              populated major city in the United States.[11] Located at the
              southern tip of the U.S. state of New York, the city is the
              center of the New York metropolitan area, the largest
              metropolitan area in the world by urban landmass.`,
  },
];

const SimpleTabs = () => {
  return (
    <>
      <Header title="Building simple Tab component in react" />

      <ExternalInfo page="tabs" />

      <div className="row">
        <div className="col text-center">
          <h2>Tab Component</h2>
          <p>Building Tab component</p>
          <div className="row text-left">
            <Tab>
              {tabContent.map((tab, idx) => (
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                  {tab.content}
                </Tab.TabPane>
              ))}
            </Tab>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleTabs;
