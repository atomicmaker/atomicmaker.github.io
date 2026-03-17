import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="btn-wrapper">
        <div className="line horizontal top" />
        <div className="line vertical right" />
        <div className="line horizontal bottom" />
        <div className="line vertical left" />
        <div className="dot top left" />
        <div className="dot top right" />
        <div className="dot bottom right" />
        <div className="dot bottom left" />
        <button className="btn">
          <span className="btn-text">start designing</span>
          <svg className="btn-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.6744 11.4075L15.7691 17.1233C15.7072 17.309 15.5586 17.4529 15.3709 17.5087L3.69348 20.9803C3.22819 21.1186 2.79978 20.676 2.95328 20.2155L6.74467 8.84131C6.79981 8.67588 6.92419 8.54263 7.08543 8.47624L12.472 6.25822C12.696 6.166 12.9535 6.21749 13.1248 6.38876L17.5294 10.7935C17.6901 10.9542 17.7463 11.1919 17.6744 11.4075Z" />
            <path d="M3.2959 20.6016L9.65986 14.2376" />
            <path d="M17.7917 11.0557L20.6202 8.22724C21.4012 7.44619 21.4012 6.17986 20.6202 5.39881L18.4989 3.27749C17.7178 2.49645 16.4515 2.49645 15.6704 3.27749L12.842 6.10592" />
            <path d="M11.7814 12.1163C11.1956 11.5305 10.2458 11.5305 9.66004 12.1163C9.07426 12.7021 9.07426 13.6519 9.66004 14.2376C10.2458 14.8234 11.1956 14.8234 11.7814 14.2376C12.3671 13.6519 12.3671 12.7021 11.7814 12.1163Z" />
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .btn-wrapper {
    --dot-size: 6px;
    --line-weight: 1px;
    --line-distance: 0.9rem 1.1rem;
    --animation-speed: 0.35s;
    --dot-color: #666;
    --line-color: #999;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: var(--line-distance);
    background-color: #0000;
    transition: background-color 0.3s ease-in-out;
    user-select: none;
  }

  .btn-wrapper:has(.btn:hover) {
    animation: backround-color-change calc(var(--animation-speed) * 4) ease-in-out
      forwards;
  }
  @keyframes backround-color-change {
    80% {
      background-color: #0000;
    }
    100% {
      background-color:rgba(122, 122, 122, 0.33);
    }
  }

  .btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1.25rem;
    background-color:rgb(255, 255, 255);
    background-image: linear-gradient(#0000, #0004);
    border: none;

    color: #0008;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;

    border-radius: 30% / 200%;
    cursor: pointer;

    box-shadow:
      0 0 0px 1px #0003,
      0px 1px 1px rgba(3, 7, 18, 0.02),
      0px 5px 4px rgba(3, 7, 18, 0.04),
      0px 12px 9px rgba(3, 7, 18, 0.06),
      0px 20px 15px rgba(3, 7, 18, 0.08),
      0px 32px 24px rgba(3, 7, 18, 0.1);

    transition:
      background-color 0.2s ease-in-out,
      transform 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out,
      border-radius 0.3s ease-in-out,
      border-color 0.2s ease-in-out;
  }

  .btn:hover {
    background-color: #fff;
    transform: scale(1.05);
    border-radius: 10% / 200%;
  }
  .btn:active {
    background-color: #e5ff00;
    transform: scale(0.98);
    border-radius: 20% / 200%;
  }

  .btn-svg {
    margin-left: 0.5rem;
    height: 24px;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #0007;
    fill: #fffa;
    transition: all 0.3s ease-in-out;
  }

  .btn:hover .btn-svg {
    stroke: #0008;
    fill: #e5ff00;
  }
  .btn:active .btn-svg {
    stroke: #0009;
    fill: #f1ff76;
  }

  /* Dots */
  .dot {
    position: absolute;
    width: var(--dot-size);
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--dot-color);
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }

  .btn-wrapper:has(.btn:hover) .dot.top.left {
    top: 50%;
    left: 20%;
    animation: move-top-left var(--animation-speed) ease-in-out forwards;
  }
  @keyframes move-top-left {
    90% {
      opacity: 0.6;
    }
    100% {
      top: calc(var(--dot-size) * -0.5);
      left: calc(var(--dot-size) * -0.5);
      opacity: 1;
    }
  }
  .btn-wrapper:has(.btn:hover) .dot.top.right {
    top: 50%;
    right: 20%;
    animation: move-top-right var(--animation-speed) ease-in-out forwards;
    animation-delay: calc(var(--animation-speed) * 0.6);
  }
  @keyframes move-top-right {
    80% {
      opacity: 0.6;
    }
    100% {
      top: calc(var(--dot-size) * -0.5);
      right: calc(var(--dot-size) * -0.5);
      opacity: 1;
    }
  }
  .btn-wrapper:has(.btn:hover) .dot.bottom.right {
    bottom: 50%;
    right: 20%;
    animation: move-bottom-right var(--animation-speed) ease-in-out forwards;
    animation-delay: calc(var(--animation-speed) * 1.2);
  }
  @keyframes move-bottom-right {
    80% {
      opacity: 0.6;
    }
    100% {
      bottom: calc(var(--dot-size) * -0.5);
      right: calc(var(--dot-size) * -0.5);
      opacity: 1;
    }
  }
  .btn-wrapper:has(.btn:hover) .dot.bottom.left {
    bottom: 50%;
    left: 20%;
    animation: move-bottom-left var(--animation-speed) ease-in-out forwards;
    animation-delay: calc(var(--animation-speed) * 1.8);
  }
  @keyframes move-bottom-left {
    80% {
      opacity: 0.6;
    }
    100% {
      bottom: calc(var(--dot-size) * -0.5);
      left: calc(var(--dot-size) * -0.5);
      opacity: 1;
    }
  }

  /* Lines */
  .line {
    position: absolute;
    transition: all 0.3s ease-in-out;
  }
  .line.horizontal {
    height: var(--line-weight);
    width: 100%;
    background-image: repeating-linear-gradient(
      90deg,
      #0000 0 calc(var(--line-weight) * 2),
      var(--line-color) calc(var(--line-weight) * 2) calc(var(--line-weight) * 4)
    );
  }
  .line.top {
    top: calc(var(--line-weight) * -0.5);
  }
  .line.bottom {
    bottom: calc(var(--line-weight) * -0.5);
  }
  .line.vertical {
    width: var(--line-weight);
    height: 100%;
    background-image: repeating-linear-gradient(
      0deg,
      #0000 0 calc(var(--line-weight) * 2),
      var(--line-color) calc(var(--line-weight) * 2) calc(var(--line-weight) * 4)
    );
  }
  .line.left {
    left: calc(var(--line-weight) * -0.5);
  }
  .line.right {
    right: calc(var(--line-weight) * -0.5);
  }

  .line.top {
    transform-origin: top left;
    transform: rotate(5deg) scaleX(0);
  }
  .btn-wrapper:has(.btn:hover) .line.top {
    animation: draw-top var(--animation-speed) ease-in-out forwards;
    animation-delay: calc(var(--animation-speed) * 0.8);
  }
  @keyframes draw-top {
    100% {
      transform: rotate(0deg) scaleX(1);
    }
  }
  .line.bottom {
    transform-origin: bottom right;
    transform: rotate(5deg) scaleX(0);
  }
  .btn-wrapper:has(.btn:hover) .line.bottom {
    animation: draw-bottom var(--animation-speed) ease-in-out forwards;
    animation-delay: calc(var(--animation-speed) * 2);
  }
  @keyframes draw-bottom {
    100% {
      transform: rotate(0deg) scaleX(1);
    }
  }

  .line.left {
    transform-origin: bottom left;
    transform: rotate(0deg) scaleY(0);
  }
  .btn-wrapper:has(.btn:hover) .line.left {
    animation: draw-left var(--animation-speed) ease-in-out forwards;
    animation-delay: calc(var(--animation-speed) * 2.4);
  }
  @keyframes draw-left {
    100% {
      transform: rotate(0deg) scaleY(1);
    }
  }

  .line.right {
    transform-origin: top right;
    transform: rotate(5deg) scaleY(0);
  }
  .btn-wrapper:has(.btn:hover) .line.right {
    animation: draw-right var(--animation-speed) ease-in-out forwards;
    animation-delay: calc(var(--animation-speed) * 1.4);
  }
  @keyframes draw-right {
    100% {
      transform: rotate(0deg) scaleY(1);
    }
  }`;

export default Button;
