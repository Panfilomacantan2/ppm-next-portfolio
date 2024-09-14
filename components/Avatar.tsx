import Image from "next/image";

const HeroAvatar = () => {
  return (
    <div className="h-40 w-40 rounded-full lg:h-72 lg:w-72">
      <svg viewBox="0 0 320 320">
        <defs>
          <circle id="circle-clip" cx="50%" cy="50%" r="25%" />
          <clipPath id="avatar-clip">
            <use href="#circle-clip" />
          </clipPath>
        </defs>

        <circle
          cx="50%"
          cy="50%"
          r="25%"
          className="rgba(255,255,255,.1)"
          fillOpacity="1"
        >
          <animate
            attributeName="r"
            values="25%;50%"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            values="1;0"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="50%"
          cy="50%"
          r="25%"
          fill="rgba(255,255,255,.1)"
          fillOpacity="1"
        >
          <animate
            attributeName="r"
            values="25%;50%"
            dur="4s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            values="1;0"
            dur="4s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="50%"
          cy="50%"
          r="25%"
          fill="rgba(255,255,255,.2)"
          fillOpacity="1"
        >
          <animate
            attributeName="r"
            values="25%;50%"
            dur="4s"
            begin="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            values="1;0"
            dur="4s"
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>

        <circle
          cx="50%"
          cy="50%"
          r="25%"
          fill="rgba(255,255,255,.1)"
          fillOpacity="1"
        >
          <animate
            attributeName="r"
            values="25%;50%"
            dur="4s"
            begin="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            values="1;0"
            dur="4s"
            begin="3s"
            repeatCount="indefinite"
          />
        </circle>

        <image
          height="50%"
          width="50%"
          x="25%"
          y="25%"
          href="/assets/profile.png"
          clipPath="url(#avatar-clip)"
          className="rounded-full object-cover"
        />
      </svg>
    </div>
  );
};

export default HeroAvatar;
