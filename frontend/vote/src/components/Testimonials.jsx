import React from "react";
import {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";
import { ConnectContext } from "../context/ConnectContext";


export default function Testimonials() {
  const { currentAccount, vote, booth } = useContext(ConnectContext);
  const [election, setelection] = useState({})

  const voteCandidate = async() => {
    // // const result = await vote(candidate.candidateId, election.electionId);
    // console.log(result);
  }
  const fetchElection = async() => {

    const result = await booth();
    setelection(result);
  }
  console.log(election)

  return (
    <Section id="testimonials">
      <div className="title">
        <h2>ELECTION BOOTH</h2>
      </div>
      <div>
        <button onClick={fetchElection}>VIEW ALL ELECTIONS</button>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          {election.electionId}
          <p> {election.details}</p>
          <div className="info">
            {election.candidates?.map((candidate, index) => {
               return( <div key={index}>
                  <img src={avatarImage} alt="avatar" />
                  <p> {candidate.candidateId}</p>
                  <p>{candidate.name}</p>
                  <span>{candidate.vote}</span>
                  <button onClick={voteCandidate}>vote</button>
                </div>)
})
                          }
           
          </div>
        </div>
        
      
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
