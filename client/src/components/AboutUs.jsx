import React from 'react';
import { Link } from 'react-router-dom';
import '../style/aboutus.css';

const AboutUs = () => (
  <div className="aboutContainer">
    <hr className="topBar" />
    <div className="aboutHeader">
      About 
    </div>
    <p className="sectionTitle">Our Concept and Mission</p>
    <div className="grid1">
      <div>
        <p>
          Consider the long and sordid history of electoral fraud around the world. No major population has been immune to the manipulation of collective decision-making processes. In severe cases, the possibility of electoral fraud has de-legitimized the winning party and undermined trust in governing bodies.
        </p>
        <br />
        <p>
           AMPS provides a secure, electronic way to establish a chain of custody - a chronological paper trail - that traces the data that each voter contributes to an election. And because  is built on the Ethereum network, election data is publicly accessible and verifiable by a network of peers. (Please note that  is in early production and currently operates on the public Rinkeby Testnet. The app will be refactored to operate on the official network in the future).
        </p>
      </div>
    </div>
    <p className="sectionTitle">Blockchain Basics</p>
    <div className="infographic">
      <div className="infographicHeader">
        <div className="gridItem">
          <p>
             AMPS uses blockchain technology to enable its secure, online voting system.
            <br />
            If you are new to blockchain, the following provides a quick introduction:
          </p>
        </div>
      </div>
      <div className="grid2">
        <div className="gridItem">
          <p className="blockchainIntro">
            In plain terms, think of the blockchain as complex database that any motivated party can access. Copies are stored around the world in a peer-to-peer network. Each element in this database is called a block, and each block is linked to another using cryptography. Information stored in this manner is highly secure and publicly verifiable.
          </p>
        </div>
        <div className="gridItem">
          <img src="https://c1.staticflickr.com/1/873/40533459024_31c88b0a90.jpg" alt="blockchain" />
        </div>
        <div className="gridItem">
          <img src="https://c1.staticflickr.com/1/876/40351783825_8e35dc8c08_m.jpg" alt="smart contract" />
        </div>
        <div className="gridItem">
          <p className="smartContract">
            A smart contract is a digital transaction protocol, or a set of rules and instructions that define and govern different kinds of transactions made on a blockchain network. Although not unique to Ethereum, verstaile smart contract technology is characteristic of the platform.
          </p>
          <br />
          <br />
          <p className="blockchainIntro">
            {/* <span className="votingProcessIntro"><strong>Below is a high-level summary of the  voting process:</strong></span> */}
          </p>
        </div>
      </div>
      
    </div>
    <p className="sectionTitle">Getting Started</p>
    <div className="grid1">
      <div>
        <p>
          <strong>1. </strong>Sign up your organization for a  account <Link to="/signup">here</Link>
          <br />
          <strong>2. </strong>Create a ballot by filling out the relevant fields and inviting voters to participate
          <br />
          <strong>3. </strong>Each voter will be automatically emailed a unique ID that will enable them to access your ballot and vote online
          <br />
          <strong>4. </strong>Voters can view a record of their vote on their confirmation page or via Etherscan
          <br />
          <strong>5. </strong>When the election ends, view the results of your ballot by navigating to your dashboard
        </p>
      </div>
    </div>
    
  </div>
);

export default AboutUs;
