import React from "react";
import styled from "styled-components";
import "./SideEffects.css";

function SideEffects() {
  return (
    <SideHead>
      <svg
        class="sad"
        width="44px"
        height="44px"
        viewBox="0 0 44 44"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="sad"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          transform="translate(0, 0)"
        >
          <circle id="body" fill="#E23D18" cx="22" cy="22" r="22"></circle>
          <g id="face" transform="translate(13.000000, 20.000000)">
            <g class="face">
              <path
                d="M7,4 C7,5.1045695 7.8954305,6 9,6 C10.1045695,6 11,5.1045695 11,4"
                class="mouth"
                stroke="#2C0E0F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                transform="translate(9.000000, 5.000000) rotate(-180.000000) translate(-9.000000, -5.000000) "
              ></path>
              <ellipse
                class="right-eye"
                fill="#2C0E0F"
                cx="16.0941176"
                cy="1.75609756"
                rx="1.90588235"
                ry="1.75609756"
              ></ellipse>
              <ellipse
                class="left-eye"
                fill="#2C0E0F"
                cx="1.90588235"
                cy="1.75609756"
                rx="1.90588235"
                ry="1.75609756"
              ></ellipse>
            </g>
          </g>
        </g>
      </svg>

      <svg
        class="neutral"
        width="44px"
        height="44px"
        viewBox="0 0 44 44"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <circle id="body" fill="#F9AC1B" cx="22" cy="22" r="22"></circle>
          <g class="face">
            <g transform="translate(13.000000, 20.000000)" fill="#2C0E0F">
              <g class="mouth">
                <g transform="translate(9, 5)">
                  <rect x="-2" y="0" width="4" height="2" rx="2"></rect>
                </g>
              </g>
              <ellipse
                class="right-eye"
                cx="16.0941176"
                cy="1.75"
                rx="1.90588235"
                ry="1.75"
              ></ellipse>
              <ellipse
                class="left-eye"
                cx="1.90588235"
                cy="1.75"
                rx="1.90588235"
                ry="1.75"
              ></ellipse>
            </g>
          </g>
        </g>
      </svg>

      <svg
        class="fine"
        width="44px"
        height="44px"
        viewBox="0 0 44 44"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="fine-emotion"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="fine">
            <circle id="body" fill="#1988E3" cx="22" cy="22" r="22"></circle>
            <g class="matrix" transform="translate(22.000000, 32.000000)">
              <g class="face-container">
                <g class="face" transform="translate(-9, -12)">
                  <g class="face-upAndDown">
                    <g class="eyes">
                      <ellipse
                        class="right-eye"
                        fill="#2C0E0F"
                        cx="16.0941176"
                        cy="1.75609756"
                        rx="1.90588235"
                        ry="1.75609756"
                      ></ellipse>
                      <ellipse
                        class="left-eye"
                        fill="#2C0E0F"
                        cx="1.90588235"
                        cy="1.75609756"
                        rx="1.90588235"
                        ry="1.75609756"
                      ></ellipse>
                    </g>
                    <path
                      d="M6.18823529,4.90499997 C6.18823529,5.95249999 7.48721095,7 9.08957864,7 C10.6919463,7 11.990922,5.95249999 11.990922,4.90499997"
                      id="mouth"
                      stroke="#2C0E0F"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <svg
        class="happy"
        width="44px"
        height="44px"
        viewBox="0 0 44 44"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Happy"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          transform="translate(0, 0)"
        >
          <circle id="Body" fill="#248C37" cx="22" cy="22" r="22"></circle>
          <g class="scaleFace">
            <g class="face">
              <ellipse
                id="Eye-right"
                fill="#2C0E0F"
                cx="29.0875"
                cy="21.75"
                rx="1.89926471"
                ry="1.75"
              ></ellipse>
              <ellipse
                id="Eye-left"
                fill="#2C0E0F"
                cx="14.8992647"
                cy="21.75"
                rx="1.89926471"
                ry="1.75"
              ></ellipse>
              <path
                d="M21.8941176,27.8819633 C24.8588235,27.8819632 25.4941176,25.5404999 25.4941176,24.5648901 C25.4941176,23.5892803 24.4352941,23.9795242 22.1058824,23.9795242 C19.7764706,23.9795242 18.2941176,23.5892803 18.2941176,24.5648901 C18.2941176,25.5404999 18.9294118,27.8819633 21.8941176,27.8819633 Z"
                id="Mouth"
                fill="#2C0E0F"
              ></path>
              <ellipse
                id="Tung"
                fill="#E23D18"
                cx="21.8941176"
                cy="26.4390244"
                rx="1.69411765"
                ry="0.780487805"
              ></ellipse>
            </g>
          </g>
        </g>
      </svg>
    </SideHead>
  );
}

export default SideEffects;

const SideHead = styled.header`
  font-size: 50px;
  font-weight: bold;
  text-align: left;
  display: flex;
`;

// const SideSvg = styled.svg`
//   margin: 10px;
//   width: 10em;
//   height: 10em;
// `;
