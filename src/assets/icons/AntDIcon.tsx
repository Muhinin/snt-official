import React, { FC } from "react";

interface IAntDIcon {
    witdh?: number,
    height?: number,
}

const AntDIcon: FC<IAntDIcon> = ({witdh = 32, height = 32}) => (
  <svg
    height={height}
    viewBox="0 0 256 256"
    width={witdh}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <linearGradient
      id="a"
      x1="62.102327%"
      x2="108.19718%"
      y1="0%"
      y2="37.863576%"
    >
      <stop offset="0" stop-color="#4285eb" />
      <stop offset="1" stop-color="#2ec7ff" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="69.644116%"
      x2="54.042898%"
      y1="0%"
      y2="108.456714%"
    >
      <stop offset="0" stop-color="#29cdff" />
      <stop offset=".378600687" stop-color="#148eff" />
      <stop offset="1" stop-color="#0a60ff" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="69.690817%"
      x2="16.722898%"
      y1="-12.974359%"
      y2="117.391248%"
    >
      <stop offset="0" stop-color="#fa816e" />
      <stop offset=".41472606" stop-color="#f74a5c" />
      <stop offset="1" stop-color="#f51d2c" />
    </linearGradient>
    <linearGradient
      id="d"
      x1="68.127987%"
      x2="30.440091%"
      y1="-35.690574%"
      y2="114.942679%"
    >
      <stop offset="0" stop-color="#fa8e7d" />
      <stop offset=".512635191" stop-color="#f74a5c" />
      <stop offset="1" stop-color="#f51d2c" />
    </linearGradient>
    <g fill="none">
      <path
        d="m116.850078 4.54548777-112.32114907 112.22878723c-6.03857191 6.033606-6.03857191 15.778899 0 21.812506l112.32114907 112.228787c6.038572 6.033607 15.791886 6.033607 21.830458 0l47.094654-47.055927c5.407982-5.403535 5.407982-14.164396 0-19.56793-5.407982-5.403536-14.176054-5.403536-19.584036 0l-35.702079 35.672721c-1.502991 1.501755-3.784086 1.501755-5.287077 0l-89.6964602-89.622703c-1.5029909-1.501755-1.5029909-3.780974 0-5.282729l89.6964602-89.6227024c1.502991-1.5017551 3.784086-1.5017551 5.287077 0l35.702079 35.6727214c5.407982 5.4035349 14.176054 5.4035349 19.584036 0 5.407982-5.403535 5.407982-14.1643962 0-19.5679311l-47.089463-47.05080777c-6.063366-5.90303668-15.820247-5.85524816-21.835649.15520764z"
        fill="url(#a)"
      />
      <path
        d="m116.850078 4.54548777-112.32114907 112.22878723c-6.03857191 6.033606-6.03857191 15.778899 0 21.812506l112.32114907 112.228787c6.038572 6.033607 15.791886 6.033607 21.830458 0l47.094654-47.055927c5.407982-5.403535 5.407982-14.164396 0-19.56793-5.407982-5.403536-14.176054-5.403536-19.584036 0l-35.702079 35.672721c-1.502991 1.501755-3.784086 1.501755-5.287077 0l-89.6964602-89.622703c-1.5029909-1.501755-1.5029909-3.780974 0-5.282729l89.6964602-89.6227024c3.742399-3.2262971 9.848527-9.7610839 18.815407-11.2894545 6.664025-1.1358578 13.949616 1.364145 21.856772 7.5000089-5.28643-5.2820901-14.349247-14.3342807-27.18845-27.15657187-6.063366-5.90303668-15.820247-5.85524816-21.835649.15520764z"
        fill="url(#b)"
      />
      <path
        d="m196.646643 173.754365c5.407982 5.403534 14.176053 5.403534 19.584034 0l34.739327-34.710761c6.038572-6.033606 6.038572-15.7789.000707-21.811803l-35.042164-34.889186c-5.420784-5.397121-14.191639-5.389338-19.602822.0173949-5.407982 5.403535-5.407982 14.1643961 0 19.5679311l23.667671 23.648209c1.502991 1.501755 1.502991 3.780974 0 5.282729l-23.346753 23.327554c-5.407983 5.403535-5.407983 14.164396 0 19.567932z"
        fill="url(#c)"
      />
      <ellipse
        cx="128.326913"
        cy="128.241672"
        fill="url(#d)"
        rx="30.32671"
        ry="30.301772"
      />
    </g>
  </svg>
);

export default AntDIcon;