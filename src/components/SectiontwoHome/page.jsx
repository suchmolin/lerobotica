"use client";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import CountUp from "react-countup";

const SectiontwoHome = () => {
  return (
    <Slide
      direction="up"
      triggerOnce
      className="relative mt-5 w-full flex justify-center"
    >
      <img
        className="absolute top-0 left-0"
        src="/img/robot1.png"
        width={100}
        height={100}
        alt="robot1"
      />
      <div className="w-9/12 min-h-[300px] flex flex-col md:flex-row justify-between">
        <div className="flex w-full md:w-4/12 flex-col items-center px-10 sm:px-20 py-4 md:px-6 lg:px-16 text-center">
          <div className="rounded-full ring-2 ring-[#ffd500] p-3">
            <svg
              width="50"
              height="50"
              viewBox="0 0 81 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.1523 0C39.6016 0 39.1523 0.44922 39.1523 1V8.2383C39.1523 8.78908 39.6016 9.2383 40.1523 9.2383C40.7031 9.2383 41.1523 8.78908 41.1523 8.2383V1C41.1523 0.4375 40.7031 0 40.1523 0Z"
                fill="#005EB8"
              />
              <path
                d="M24.7931 12.4178L21.4337 6.17951C21.172 5.69123 20.5626 5.50763 20.0821 5.76935C19.5938 6.03107 19.4102 6.64044 19.6719 7.12095L23.0313 13.3593C23.2931 13.8475 23.9024 14.0311 24.3829 13.7694C24.8712 13.5077 25.0509 12.8983 24.7931 12.4178Z"
                fill="#005EB8"
              />
              <path
                d="M13.3712 25.2968L6.76177 21.207C6.29302 20.9179 5.67197 21.0585 5.38287 21.5273C5.09381 21.996 5.23443 22.6171 5.70318 22.9062L11.4649 26.4765C11.9336 26.7655 12.5547 26.6249 12.8438 26.1562L13.3712 25.2968Z"
                fill="#005EB8"
              />
              <path
                d="M7.6211 43.1097H1C0.44922 43.1097 0 43.559 0 44.1097C0 44.6605 0.44922 45.1097 1 45.1097H7.6211C8.17188 45.1097 8.6211 44.6605 8.6211 44.1097C8.6211 43.5472 8.17188 43.1097 7.6211 43.1097Z"
                fill="#005EB8"
              />
              <path
                d="M8.5042 66.6878C8.79326 67.1565 9.41436 67.2972 9.8831 67.0081L15.6448 63.4378C16.1135 63.1487 16.2542 62.5276 15.9651 62.0589C15.676 61.5902 15.0549 61.4495 14.5862 61.7386L8.82451 65.3089C8.35185 65.5979 8.21123 66.219 8.5042 66.6878Z"
                fill="#005EB8"
              />
              <path
                d="M64.6639 63.4378L70.4256 67.0081C70.8943 67.2972 71.5154 67.1565 71.8045 66.6878C72.0935 66.219 71.9529 65.598 71.4842 65.3089L65.7224 61.7386C65.2537 61.4495 64.6326 61.5901 64.3435 62.0589C64.0506 62.5276 64.1912 63.1409 64.6639 63.4378Z"
                fill="#005EB8"
              />
              <path
                d="M71.6831 44.1097C71.6831 44.6605 72.1323 45.1097 72.6831 45.1097H79.3042C79.855 45.1097 80.3042 44.6605 80.3042 44.1097C80.3042 43.559 79.855 43.1097 79.3042 43.1097H72.6831C72.1323 43.1097 71.6831 43.5472 71.6831 44.1097Z"
                fill="#005EB8"
              />
              <path
                d="M74.9219 21.5278C74.6328 21.059 74.0117 20.9184 73.543 21.2075L67.7813 24.7778C67.3126 25.0668 67.1719 25.6879 67.461 26.1567C67.7501 26.6254 68.3712 26.766 68.8399 26.477L74.6016 22.9067C75.0625 22.6176 75.211 22.0004 74.9219 21.5278Z"
                fill="#005EB8"
              />
              <path
                d="M60.2223 5.76984C59.734 5.50812 59.1325 5.69172 58.8629 6.18L55.5035 12.4183C55.2418 12.9066 55.4254 13.5081 55.9136 13.7699C56.4019 14.0317 57.0034 13.848 57.2652 13.3597L60.6246 7.12144C60.8903 6.64097 60.7106 6.02764 60.2223 5.76984Z"
                fill="#005EB8"
              />
              <path
                d="M66.0822 40.4298C66.0822 26.1288 54.4532 14.4998 40.1522 14.4998C25.8512 14.4998 14.2222 26.1288 14.2222 40.4298C14.2222 49.4181 19.062 55.6678 23.2808 60.1098C26.3394 63.3403 28.2417 66.5512 29.1011 69.9106C28.7925 70.2817 27.8706 71.5122 27.9917 73.1294C28.0698 74.1411 28.5307 75.0591 29.3706 75.8794C28.851 77.5396 29.269 79.0982 30.5425 80.231C30.0815 82.0318 30.6636 83.6021 32.2417 84.7115L32.4721 84.8326C33.2924 85.1333 34.2104 85.3833 35.2104 85.5708L35.1987 85.6294C35.1987 85.6294 35.23 85.6294 35.2378 85.6411C35.437 86.5904 36.0972 88.9223 40.2573 88.9223C43.1987 88.9223 44.9487 87.7621 45.4761 85.4614C46.4058 85.2622 47.2652 85.0005 48.0347 84.6919L48.2339 84.5825C49.6831 83.5513 50.2027 82.0317 49.7144 80.313C51.066 79.2232 51.4761 77.6646 50.8746 75.9536C51.7848 75.0825 52.2652 74.1255 52.3043 73.063C52.3551 71.6528 51.5934 70.563 51.1559 70.0513C51.9957 66.6294 53.9059 63.3716 57.0153 60.0904C61.2419 55.6685 66.0822 49.4178 66.0822 40.4298ZM40.1642 76.8208C43.965 76.8208 47.215 76.6098 48.9337 76.4692C49.5118 77.8989 48.7735 78.5786 48.3438 78.8676C46.7735 79.0395 43.7344 79.3168 40.1524 79.3168C36.6329 79.3168 33.6212 79.0473 32.0313 78.8754C31.2306 78.2465 30.9727 77.434 31.293 76.4535C32.9805 76.598 36.2931 76.8208 40.1642 76.8208ZM40.2618 86.9378C38.3829 86.9378 37.6915 86.3987 37.4024 85.848C38.1837 85.8987 39.1212 85.9378 40.1524 85.9378C41.3438 85.9378 42.4024 85.887 43.254 85.8284C42.9025 86.3909 42.1407 86.9378 40.2618 86.9378ZM47.1915 82.8987C46.3829 83.219 45.4532 83.469 44.4298 83.6604L43.7501 83.7815C42.8908 83.8518 41.6212 83.9416 40.1485 83.9416C38.629 83.9416 37.3087 83.8518 36.4493 83.7697L36.2384 83.7385C35.1368 83.5666 34.1486 83.3283 33.2892 83.0197C32.5392 82.4494 32.2697 81.7892 32.4376 80.9299C34.1681 81.1018 36.9259 81.3089 40.1485 81.3089C43.3477 81.3089 46.0899 81.0979 47.8204 80.9299C48.1017 81.9807 47.672 82.5393 47.1915 82.8987ZM49.6134 74.4104C48.4142 74.5197 44.6837 74.8322 40.1642 74.8322C35.6642 74.8322 31.9533 74.5315 30.7228 74.4104C30.2814 73.9611 30.0314 73.4885 29.9924 73.012C29.922 72.1526 30.4806 71.4026 30.6213 71.2308L30.7228 71.1526C31.8244 71.2815 34.9416 71.594 40.1642 71.594C45.3361 71.594 48.5236 71.3558 49.5158 71.2737L49.5939 71.3128C49.7932 71.5237 50.3752 72.223 50.3322 73.0237C50.301 73.4807 50.0509 73.9494 49.6134 74.4104ZM37.3904 49.2774C39.1404 49.3984 40.9295 49.418 42.6287 49.336H42.7381C41.4764 57.1563 41.2264 66.598 41.1873 69.574H40.1482H39.199C39.113 66.6404 38.7303 57.1604 37.3904 49.2774ZM49.3004 69.2694C48.5387 69.3279 46.4488 69.4881 43.191 69.5506C43.2496 66.5115 43.5192 56.8516 44.8004 49.1796C48.109 48.8515 52.7613 47.9296 53.9293 45.4687C54.941 43.3476 54.9801 41.3984 54.0504 39.9804C53.1403 38.6093 51.402 37.9101 49.1715 38.0116C46.6403 38.121 44.8317 40.203 43.8004 44.1913C43.5387 45.1796 43.3121 46.2304 43.1012 47.3124C42.9215 47.3241 42.7301 47.3319 42.5426 47.3437C40.6324 47.4335 38.7614 47.3944 37.0231 47.2538C36.8239 46.2343 36.5934 45.2421 36.3512 44.3124C35.57 41.3124 34.3903 38.4608 31.0817 37.953C28.9801 37.6327 27.2301 38.2538 26.2926 39.6639C25.2535 41.2147 25.3707 43.4725 26.6207 45.5623C27.7613 47.4725 31.2691 48.6014 35.3316 49.0935C36.691 56.8123 37.0933 66.5155 37.2027 69.5545C33.8824 69.4764 31.8043 69.2655 30.9839 69.1756C30.0152 65.574 27.9644 62.1561 24.7456 58.7536C20.7847 54.5817 16.2339 48.7336 16.2339 40.4446C16.2339 27.2456 26.9719 16.5146 40.1639 16.5146C53.3549 16.5146 64.0939 27.2526 64.0939 40.4446C64.0939 48.7258 59.5431 54.5736 55.5822 58.7536C52.3244 62.1677 50.273 65.6284 49.3004 69.2694ZM45.1832 47.1284C45.3551 46.2768 45.5426 45.4565 45.7418 44.687C46.5309 41.6479 47.7223 40.0659 49.2613 40.0073C49.3707 40.0073 49.4801 39.9955 49.5816 39.9955C50.9332 39.9955 51.9214 40.3744 52.3824 41.0853C52.9137 41.8861 52.8121 43.1634 52.1324 44.6048C51.6832 45.5462 49.3433 46.6402 45.1832 47.1284ZM34.9332 47.019C31.5543 46.5385 29.0035 45.6401 28.3316 44.5307C27.4918 43.1205 27.3433 41.6791 27.941 40.7807C28.3394 40.1908 29.0621 39.8705 30.0113 39.8705C30.2496 39.8705 30.5113 39.89 30.7808 39.9291C32.5699 40.1986 33.562 41.5307 34.4097 44.808C34.5933 45.5072 34.7731 46.2495 34.9332 47.019Z"
                fill="#005EB8"
              />
            </svg>
          </div>
          <p className="py-3 text-lg font-bold">¡Aprende jugando!</p>
          <p className="text-sm">
            Aprende las bases de la codificación y la programación temprana a
            través de secuencias, bucles y condicionales que le darán movimiento
            a tus creaciones en la estación del Tren.
          </p>
        </div>
        <div className="flex w-full md:w-4/12 flex-col items-center px-10 sm:px-20 py-4 md:px-6 lg:px-16 text-center">
          <div className="rounded-full ring-2 ring-[#ffd500] p-3 text-[#309a44]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 562 568"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M280.606 568C278.72 568 276.868 567.502 275.237 566.557L5.33333 410.093C3.71116 409.152 2.36465 407.801 1.42864 406.176C0.492628 404.551 -3.25323e-05 402.709 1.61124e-09 400.834V187.156C9.48019e-06 185.282 0.492459 183.44 1.42805 181.816C2.36364 180.191 3.70954 178.841 5.33102 177.9C6.9525 176.959 8.79265 176.461 10.6673 176.455C12.5419 176.449 14.3852 176.936 16.0127 177.866L285.913 332.09C287.551 333.026 288.912 334.379 289.859 336.01C290.806 337.642 291.304 339.495 291.304 341.381V557.294C291.304 560.132 290.176 562.854 288.17 564.861C286.163 566.868 283.441 567.995 280.602 567.995L280.606 568ZM21.4015 394.663L269.902 538.72V347.589L21.4015 205.596V394.663Z"
                fill="#309A44"
              />
              <path
                d="M280.606 568C277.767 568 275.045 566.872 273.039 564.866C271.032 562.859 269.904 560.137 269.904 557.298V341.379C269.904 339.493 270.402 337.64 271.349 336.009C272.296 334.377 273.657 333.025 275.295 332.089L545.197 177.866C546.824 176.936 548.668 176.449 550.542 176.455C552.417 176.461 554.257 176.959 555.879 177.9C557.5 178.841 558.846 180.191 559.782 181.816C560.717 183.44 561.21 185.282 561.21 187.156V400.829C561.21 402.704 560.717 404.547 559.781 406.172C558.845 407.797 557.499 409.147 555.876 410.088L285.972 566.552C284.342 567.499 282.491 567.998 280.606 568ZM291.307 347.594V538.72L539.807 394.663V205.596L291.307 347.594Z"
                fill="#309A44"
              />
              <path
                d="M10.7111 197.859C8.33481 197.861 6.02559 197.072 4.14737 195.616C2.26914 194.161 0.928708 192.121 0.337349 189.82C-0.254009 187.518 -0.0626682 185.086 0.881211 182.905C1.82509 180.724 3.46783 178.92 5.55052 177.775L69.3952 142.722C71.8831 141.355 74.8121 141.033 77.5376 141.826C80.2632 142.619 82.5621 144.462 83.9287 146.95C85.2952 149.438 85.6175 152.367 84.8245 155.093C84.0316 157.818 82.1883 160.117 79.7004 161.484L15.8557 196.537C14.2798 197.405 12.51 197.86 10.7111 197.859Z"
                fill="#309A44"
              />
              <path
                d="M177.338 106.381C174.962 106.383 172.653 105.594 170.774 104.138C168.896 102.682 167.556 100.643 166.964 98.3416C166.373 96.0401 166.564 93.6073 167.508 91.4266C168.452 89.2458 170.095 87.4412 172.178 86.2971L214.191 63.2294C216.679 61.8628 219.608 61.5406 222.334 62.3335C223.683 62.7262 224.942 63.3808 226.039 64.26C227.135 65.1392 228.048 66.2257 228.725 67.4576C229.401 68.6896 229.829 70.0427 229.982 71.4398C230.136 72.8369 230.013 74.2506 229.62 75.6001C229.228 76.9497 228.573 78.2087 227.694 79.3053C226.815 80.4018 225.728 81.3145 224.496 81.9911L182.483 105.059C180.907 105.927 179.137 106.381 177.338 106.381Z"
                fill="#309A44"
              />
              <path
                d="M385.008 106.984C383.211 106.983 381.443 106.529 379.868 105.661L336.783 82.0069C334.295 80.6403 332.452 78.3414 331.659 75.6159C330.866 72.8903 331.188 69.9614 332.555 67.4734C333.921 64.9854 336.22 63.1422 338.946 62.3493C341.671 61.5563 344.6 61.8786 347.088 63.2451L390.18 86.8995C392.262 88.0435 393.905 89.848 394.849 92.0286C395.793 94.2092 395.984 96.6418 395.393 98.9432C394.802 101.245 393.462 103.284 391.584 104.74C389.706 106.195 387.397 106.985 385.021 106.984H385.008Z"
                fill="#309A44"
              />
              <path
                d="M550.497 197.859C548.699 197.859 546.931 197.404 545.356 196.537L483.762 162.72C481.274 161.354 479.431 159.055 478.638 156.329C477.845 153.604 478.167 150.675 479.534 148.187C480.901 145.699 483.199 143.856 485.925 143.063C488.651 142.27 491.58 142.592 494.067 143.959L555.661 177.775C557.743 178.92 559.386 180.724 560.33 182.905C561.274 185.086 561.465 187.518 560.874 189.82C560.283 192.121 558.942 194.161 557.064 195.616C555.186 197.072 552.876 197.861 550.5 197.859H550.497Z"
                fill="#309A44"
              />
              <path
                d="M280.602 96.4549C257.772 96.4549 236.163 89.3047 222.806 77.3285C213.509 68.9939 208.593 58.9377 208.593 48.2282C208.593 21.1842 240.223 -9.15527e-05 280.602 -9.15527e-05C320.981 -9.15527e-05 352.613 21.1842 352.613 48.2282C352.613 48.7244 352.596 49.2032 352.579 49.6963L352.569 49.9278C352.074 59.9856 347.179 69.4585 338.422 77.3253C325.051 89.3047 303.445 96.4549 280.602 96.4549ZM280.602 21.4014C250.779 21.4014 229.996 35.5386 229.996 48.2266C229.996 53.8501 233.856 58.4906 237.094 61.3855C246.492 69.8104 263.163 75.0455 280.602 75.0455C298.318 75.0455 314.589 69.9389 324.128 61.3871C327.201 58.6269 330.928 54.21 331.19 48.8624C331.199 48.6262 331.21 48.4232 331.21 48.2139C331.21 35.5385 310.426 21.4014 280.602 21.4014Z"
                fill="#309A44"
              />
              <path
                d="M280.602 138.722C240.224 138.722 208.593 117.538 208.593 90.4937L208.61 89.5266C208.61 86.6883 209.738 83.9664 211.745 81.9594C213.752 79.9525 216.474 78.825 219.312 78.825C222.15 78.825 224.872 79.9525 226.879 81.9594C228.886 83.9664 230.014 86.6883 230.014 89.5266C230.014 89.9768 230.004 90.332 229.996 90.5809V90.4937C229.996 103.177 250.779 117.319 280.602 117.319C310.426 117.319 331.211 103.182 331.211 90.4937V90.0783C331.201 89.888 331.196 89.7168 331.196 89.525C331.161 86.6868 332.254 83.9507 334.236 81.9186C336.218 79.8865 338.926 78.725 341.764 78.6895C344.602 78.6539 347.338 79.7473 349.37 81.7292C351.402 83.711 352.564 86.4188 352.599 89.257C352.615 89.6677 352.618 90.0878 352.618 90.4921C352.614 117.538 320.981 138.722 280.602 138.722Z"
                fill="#309A44"
              />
              <path
                d="M219.294 101.195C216.456 101.195 213.734 100.068 211.727 98.0608C209.72 96.0539 208.593 93.3319 208.593 90.4936L208.61 89.5265C208.688 83.0041 208.595 48.6038 208.593 48.2566C208.589 46.8509 208.861 45.4582 209.395 44.1578C209.929 42.8575 210.714 41.675 211.705 40.678C212.696 39.681 213.873 38.889 215.17 38.3472C216.468 37.8054 217.859 37.5244 219.264 37.5202H219.294C222.128 37.5202 224.845 38.6435 226.851 40.644C228.857 42.6444 229.988 45.3586 229.996 48.1916C229.996 49.6185 230.093 83.0993 230.012 89.6486C230.012 89.9657 230.012 90.3256 229.996 90.5745V90.4873C229.997 91.8932 229.721 93.2855 229.183 94.5846C228.646 95.8837 227.858 97.0641 226.864 98.0585C225.87 99.0529 224.69 99.8418 223.391 100.38C222.092 100.918 220.7 101.195 219.294 101.195Z"
                fill="#309A44"
              />
              <path
                d="M341.879 101.225C339.037 101.219 336.315 100.085 334.308 98.0728C332.302 96.0609 331.176 93.335 331.177 90.4936L331.193 89.5265V89.3347C331.261 82.9186 331.18 50.7917 331.177 49.4282V48.2265C331.177 45.3883 332.305 42.6663 334.312 40.6594C336.319 38.6524 339.041 37.525 341.879 37.525C344.717 37.525 347.439 38.6524 349.446 40.6594C351.453 42.6663 352.58 45.3883 352.58 48.2265V49.3997C352.58 50.7425 352.664 83.0105 352.596 89.5599C352.596 89.9641 352.596 90.3113 352.582 90.5523C352.581 91.9563 352.304 93.3465 351.766 94.6432C351.227 95.9399 350.438 97.1176 349.444 98.109C348.45 99.1004 347.27 99.886 345.972 100.421C344.674 100.955 343.283 101.229 341.879 101.225Z"
                fill="#309A44"
              />
              <path
                d="M280.602 244.54C257.772 244.54 236.166 237.39 222.806 225.416C213.509 217.079 208.593 207.025 208.593 196.314C208.593 169.27 240.223 148.085 280.602 148.085C320.981 148.085 352.613 169.27 352.613 196.314C352.613 196.81 352.596 197.289 352.579 197.782L352.569 198.013C352.074 208.071 347.179 217.544 338.422 225.411C325.051 237.392 303.443 244.54 280.602 244.54ZM280.602 169.487C250.779 169.487 229.996 183.624 229.996 196.312C229.996 201.936 233.856 206.576 237.094 209.471C246.492 217.896 263.164 223.131 280.602 223.131C298.04 223.131 314.73 217.899 324.128 209.471C327.201 206.712 330.928 202.296 331.19 196.954C331.199 196.718 331.21 196.515 331.21 196.306C331.21 183.624 310.426 169.487 280.602 169.487Z"
                fill="#309A44"
              />
              <path
                d="M280.602 286.808C240.224 286.808 208.593 265.623 208.593 238.579L208.61 237.612C208.61 234.774 209.738 232.052 211.745 230.045C213.752 228.038 216.474 226.911 219.312 226.911C222.15 226.911 224.872 228.038 226.879 230.045C228.886 232.052 230.014 234.774 230.014 237.612C230.014 238.061 230.004 238.416 229.996 238.665V238.579C229.996 251.263 250.779 265.404 280.602 265.404C310.426 265.404 331.211 251.267 331.211 238.579V238.164C331.201 237.974 331.196 237.802 331.196 237.611C331.161 234.772 332.254 232.036 334.236 230.004C336.218 227.972 338.926 226.811 341.764 226.775C344.602 226.74 347.338 227.833 349.37 229.815C351.402 231.797 352.564 234.504 352.599 237.343C352.615 237.753 352.618 238.173 352.618 238.578C352.614 265.623 320.981 286.808 280.602 286.808Z"
                fill="#309A44"
              />
              <path
                d="M219.294 249.282C216.456 249.282 213.734 248.155 211.727 246.148C209.72 244.141 208.593 241.419 208.593 238.581L208.61 237.614C208.688 231.091 208.595 196.691 208.593 196.344C208.585 193.506 209.705 190.781 211.706 188.768C213.708 186.756 216.426 185.621 219.264 185.612H219.294C222.127 185.612 224.845 186.736 226.851 188.736C228.857 190.736 229.988 193.451 229.996 196.284C229.996 197.71 230.093 231.191 230.012 237.741C230.012 238.058 230.012 238.416 229.996 238.665V238.579C229.996 239.985 229.72 241.377 229.182 242.675C228.644 243.974 227.856 245.154 226.862 246.147C225.868 247.141 224.689 247.93 223.39 248.468C222.092 249.006 220.7 249.282 219.294 249.282Z"
                fill="#309A44"
              />
              <path
                d="M341.879 249.311C339.037 249.304 336.315 248.171 334.308 246.159C332.302 244.147 331.176 241.421 331.177 238.579L331.193 237.612V237.42C331.261 231.004 331.18 198.877 331.177 197.514V196.312C331.177 193.474 332.305 190.752 334.312 188.745C336.319 186.738 339.041 185.611 341.879 185.611C344.717 185.611 347.439 186.738 349.446 188.745C351.453 190.752 352.58 193.474 352.58 196.312V197.485C352.58 198.828 352.664 231.096 352.596 237.646C352.596 238.048 352.596 238.395 352.582 238.636C352.581 240.041 352.304 241.431 351.766 242.728C351.227 244.024 350.439 245.202 349.444 246.194C348.45 247.185 347.27 247.971 345.972 248.506C344.674 249.041 343.283 249.314 341.879 249.311Z"
                fill="#309A44"
              />
              <path
                d="M427.579 171.508C404.749 171.508 383.138 164.358 369.781 152.382C360.484 144.049 355.569 133.991 355.569 123.282C355.569 96.2376 387.2 75.0533 427.579 75.0533C467.958 75.0533 499.588 96.2376 499.588 123.282C499.588 123.805 499.571 124.307 499.552 124.831C499.049 135.042 494.161 144.517 485.397 152.379C472.035 164.353 450.421 171.508 427.579 171.508ZM427.579 96.4548C397.755 96.4548 376.972 110.592 376.972 123.28C376.972 128.905 380.831 133.544 384.067 136.439C393.467 144.864 410.137 150.099 427.579 150.099C445.294 150.099 461.565 144.992 471.105 136.44C474.177 133.68 477.903 129.265 478.166 123.916C478.166 123.743 478.185 123.51 478.185 123.27C478.185 110.592 457.4 96.4548 427.579 96.4548Z"
                fill="#309A44"
              />
              <path
                d="M427.579 213.776C387.2 213.776 355.569 192.591 355.569 165.547L355.585 164.58C355.585 161.742 356.713 159.02 358.719 157.013C360.726 155.006 363.448 153.879 366.287 153.879C369.125 153.879 371.847 155.006 373.854 157.013C375.861 159.02 376.988 161.742 376.988 164.58C376.988 165.018 376.988 165.373 376.972 165.606C376.972 178.235 397.755 192.372 427.579 192.372C457.402 192.372 478.185 178.235 478.185 165.547C478.185 165.398 478.185 165.244 478.185 165.094C478.185 164.943 478.172 164.72 478.172 164.58C478.14 161.742 479.237 159.007 481.221 156.977C483.205 154.948 485.914 153.789 488.753 153.757C491.591 153.725 494.326 154.822 496.355 156.806C498.385 158.79 499.543 161.499 499.576 164.338C499.59 164.74 499.593 165.152 499.593 165.549C499.588 192.591 467.956 213.776 427.579 213.776Z"
                fill="#309A44"
              />
              <path
                d="M366.269 176.279C363.428 176.272 360.705 175.138 358.699 173.126C356.692 171.114 355.566 168.389 355.568 165.547L355.583 164.58C355.661 158.058 355.569 123.657 355.568 123.31C355.564 121.905 355.836 120.512 356.371 119.213C356.905 117.913 357.69 116.731 358.681 115.734C359.672 114.738 360.849 113.946 362.146 113.405C363.443 112.863 364.834 112.582 366.239 112.579H366.269C369.102 112.579 371.82 113.702 373.826 115.702C375.832 117.703 376.963 120.417 376.971 123.25C376.971 124.677 377.066 158.158 376.985 164.707C376.985 165.024 376.985 165.363 376.972 165.604C376.972 167.008 376.695 168.399 376.156 169.696C375.618 170.993 374.829 172.17 373.835 173.162C372.841 174.154 371.661 174.939 370.363 175.474C369.064 176.009 367.673 176.282 366.269 176.279Z"
                fill="#309A44"
              />
              <path
                d="M488.855 176.279C486.014 176.272 483.291 175.138 481.285 173.126C479.278 171.114 478.152 168.389 478.153 165.547L478.169 164.58V164.388C478.237 157.972 478.157 125.845 478.153 124.482V123.28C478.153 120.442 479.281 117.72 481.288 115.713C483.295 113.706 486.017 112.579 488.855 112.579C491.693 112.579 494.415 113.706 496.422 115.713C498.429 117.72 499.557 120.442 499.557 123.28V124.453C499.557 125.796 499.641 158.064 499.572 164.613C499.572 165.018 499.572 165.365 499.558 165.606C499.558 167.01 499.28 168.4 498.742 169.697C498.204 170.993 497.415 172.171 496.42 173.163C495.426 174.154 494.246 174.94 492.948 175.474C491.65 176.009 490.259 176.282 488.855 176.279Z"
                fill="#309A44"
              />
              <path
                d="M135.807 171.508C112.977 171.508 91.3658 164.358 78.0086 152.382C68.7118 144.049 63.797 133.991 63.797 123.282C63.797 96.2376 95.4276 75.0533 135.807 75.0533C176.185 75.0533 207.816 96.2376 207.816 123.282C207.816 123.805 207.799 124.307 207.78 124.831C207.277 135.042 202.389 144.517 193.625 152.379C180.263 164.353 158.649 171.508 135.807 171.508ZM135.807 96.4548C105.983 96.4548 85.2001 110.592 85.2001 123.28C85.2001 128.905 89.059 133.544 92.2948 136.439C101.695 144.864 118.365 150.099 135.807 150.099C153.522 150.099 169.793 144.992 179.332 136.44C182.405 133.68 186.131 129.265 186.394 123.916C186.394 123.743 186.413 123.51 186.413 123.27C186.413 110.592 165.628 96.4548 135.807 96.4548Z"
                fill="#309A44"
              />
              <path
                d="M135.807 213.776C95.4276 213.776 63.797 192.591 63.797 165.547L63.8128 164.58C63.8128 161.742 64.9403 159.02 66.9473 157.013C68.9542 155.006 71.6762 153.879 74.5144 153.879C77.3526 153.879 80.0746 155.006 82.0815 157.013C84.0884 159.02 85.2159 161.742 85.2159 164.58C85.2159 165.018 85.2159 165.373 85.2001 165.606C85.2001 178.235 105.983 192.372 135.807 192.372C165.63 192.372 186.413 178.235 186.413 165.547C186.413 165.398 186.413 165.244 186.413 165.094C186.413 164.943 186.4 164.72 186.4 164.58C186.368 161.742 187.465 159.007 189.449 156.977C191.433 154.948 194.142 153.789 196.98 153.757C199.819 153.725 202.553 154.822 204.583 156.806C206.613 158.79 207.771 161.499 207.803 164.338C207.818 164.74 207.821 165.152 207.821 165.549C207.816 192.591 176.181 213.776 135.807 213.776Z"
                fill="#309A44"
              />
              <path
                d="M74.4986 176.279C71.6572 176.272 68.9346 175.138 66.9282 173.126C64.9219 171.114 63.7958 168.389 63.797 165.547L63.8129 164.58C63.8906 158.058 63.7986 123.657 63.797 123.31C63.7931 121.905 64.066 120.512 64.6001 119.213C65.1342 117.913 65.9192 116.731 66.9101 115.734C67.9011 114.738 69.0786 113.946 70.3754 113.405C71.6723 112.863 73.0631 112.582 74.4685 112.578H74.4986C77.3316 112.578 80.049 113.702 82.0551 115.702C84.0611 117.703 85.1921 120.417 85.2001 123.25C85.2001 124.677 85.2953 158.158 85.2144 164.707C85.2144 165.024 85.2144 165.363 85.2017 165.604C85.2015 167.008 84.9243 168.399 84.386 169.696C83.8477 170.992 83.0589 172.17 82.0646 173.162C81.0704 174.154 79.8904 174.939 78.5921 175.474C77.2938 176.009 75.9027 176.282 74.4986 176.279Z"
                fill="#309A44"
              />
              <path
                d="M197.083 176.279C194.241 176.272 191.519 175.138 189.512 173.126C187.506 171.114 186.38 168.389 186.381 165.547L186.397 164.58V164.388C186.465 157.972 186.384 125.845 186.381 124.482V123.28C186.381 120.442 187.509 117.72 189.516 115.713C191.523 113.706 194.245 112.578 197.083 112.578C199.921 112.578 202.643 113.706 204.65 115.713C206.657 117.72 207.784 120.442 207.784 123.28V124.453C207.784 125.796 207.868 158.064 207.8 164.613C207.8 165.018 207.8 165.365 207.786 165.606C207.786 167.01 207.508 168.4 206.97 169.697C206.431 170.993 205.642 172.171 204.648 173.163C203.654 174.154 202.474 174.939 201.176 175.474C199.878 176.009 198.487 176.282 197.083 176.279Z"
                fill="#309A44"
              />
            </svg>
          </div>
          <p className="py-3 text-lg font-bold">
            Expresa ideas, explora soluciones
          </p>
          <p className="text-sm">
            Resuelve problemas y conoce emociones, utilizando elementos
            digitales. Mejora las habilidades lingüísticas y matemáticas a
            través del aprendizaje lúdico y práctico
          </p>
        </div>
        <div className="flex w-full md:w-4/12 flex-col items-center px-10 sm:px-20 py-4 md:px-6 lg:px-16 text-center">
          <div className="rounded-full ring-2 ring-[#ffd500] p-3">
            <svg
              width="50"
              height="50"
              viewBox="0 0 91 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M89.7401 0.439305C89.5663 0.26588 89.3527 0.137645 89.118 0.065807C88.8832 -0.0060314 88.6345 -0.0192884 88.3934 0.0271942L71.5223 3.30794C66.2648 4.32835 61.4331 6.89913 57.6493 10.6893L40.8915 27.4471L38.7108 25.2659C38.5034 25.0583 38.2396 24.9161 37.9521 24.857C37.6646 24.7979 37.3661 24.8244 37.0936 24.9334L15.6366 33.5042C15.4538 33.5772 15.2872 33.6856 15.1464 33.8231L10.8339 38.0247C10.6537 38.2005 10.5206 38.4188 10.4469 38.6595C10.3732 38.9001 10.3612 39.1555 10.4121 39.402C10.4629 39.6486 10.575 39.8783 10.738 40.0702C10.9009 40.262 11.1096 40.4098 11.3446 40.4998L24.8495 45.6707L28.1163 48.9375L18.1376 53.0531C17.9094 53.1473 17.7081 53.2964 17.5514 53.487C17.3946 53.6777 17.2874 53.9041 17.2391 54.1461C17.1908 54.3882 17.2029 54.6384 17.2745 54.8746C17.346 55.1109 17.4748 55.3258 17.6493 55.5003L34.6796 72.5306C34.9608 72.8119 35.3423 72.97 35.7401 72.9701C35.8388 72.9699 35.9372 72.9603 36.0341 72.9413C36.2761 72.8927 36.5025 72.7852 36.6931 72.6284C36.8837 72.4715 37.0327 72.27 37.1269 72.0418L41.242 62.0637L44.3622 65.184L49.5321 78.6878C49.6221 78.923 49.7698 79.1318 49.9616 79.2948C50.1534 79.4579 50.3832 79.5701 50.6298 79.6209C50.7294 79.6413 50.8308 79.6516 50.9325 79.6517C51.1328 79.6517 51.331 79.6116 51.5154 79.5337C51.6999 79.4559 51.867 79.342 52.0068 79.1986L56.2089 74.8856C56.3465 74.7449 56.4547 74.5782 56.5273 74.3953L65.0985 52.9388C65.2074 52.6663 65.234 52.3679 65.175 52.0804C65.116 51.793 64.974 51.5292 64.7665 51.3216L62.7328 49.2882L79.4921 32.5291C83.2801 28.74 85.8502 23.9058 86.8729 18.6463L90.1522 1.78646C90.1989 1.54533 90.1858 1.29643 90.1139 1.06156C90.0421 0.826695 89.9137 0.613035 89.7401 0.439305ZM17.0262 36.1795L37.2889 28.0863L38.7704 29.5681L25.5949 42.7438L14.6073 38.5369L17.0262 36.1795ZM36.8984 54.7789C36.8636 54.793 36.8297 54.8081 36.7967 54.8241L33.8797 56.2616L35.3231 53.3573C35.3376 53.329 35.3502 53.2998 35.3624 53.27L38.3778 47.2196L47.4266 42.7259L42.9599 51.7992L36.8984 54.7789ZM35.2108 68.8192L21.3602 54.9691L30.4071 51.2381L32.1571 52.988L29.2176 58.9022C29.0777 59.183 29.0295 59.5006 29.0798 59.8103C29.1301 60.12 29.2763 60.4061 29.4979 60.6282C29.599 60.7267 29.7136 60.8103 29.8382 60.8764C29.8651 60.8913 29.891 60.9059 29.9186 60.919C30.039 60.9776 30.1668 61.0197 30.2986 61.0441C30.3194 61.0478 30.3402 61.0474 30.3613 61.0502C30.4272 61.0611 30.4937 61.0676 30.5604 61.0696C30.6072 61.0696 30.6534 61.0582 30.7001 61.0538C30.7413 61.05 30.7813 61.0473 30.8222 61.04C30.9612 61.0177 31.0963 60.9757 31.2235 60.9153L37.1594 57.9904L38.9413 59.7728L35.2108 68.8192ZM61.9462 52.7439L53.8524 73.0057L51.495 75.4251L47.3695 64.6511L60.6115 51.4094L61.9462 52.7439ZM77.369 30.4095L45.5985 62.18L40.0096 56.5927L44.7421 54.2659C45.039 54.1196 45.2793 53.8793 45.4256 53.5823L52.076 40.0726C52.2146 39.7912 52.2614 39.4734 52.21 39.164C52.1585 38.8546 52.0113 38.5691 51.7892 38.3477C51.567 38.1263 51.281 37.9801 50.9714 37.9297C50.6619 37.8793 50.3443 37.9272 50.0633 38.0667L36.5926 44.7567C36.2998 44.9016 36.0624 45.1384 35.9169 45.431L33.5653 50.1493L27.9999 44.5809L59.7704 12.8104C60.6923 11.8928 61.6874 11.0518 62.746 10.2958L79.8815 27.4312C79.1257 28.4901 78.2855 29.4861 77.369 30.4095ZM83.9276 18.0721C83.4673 20.4309 82.6542 22.7069 81.5159 24.8235L65.3531 8.66073C67.4674 7.52432 69.7407 6.71257 72.0965 6.25273L86.7821 3.39678L83.9276 18.0721Z"
                fill="#DA291C"
              />
              <path
                d="M63.9169 18.3456C62.0851 18.3453 60.3099 18.9802 58.8937 20.1421C57.4776 21.304 56.5081 22.9209 56.1505 24.7175C55.7929 26.514 56.0693 28.3789 56.9326 29.9945C57.7959 31.6101 59.1927 32.8764 60.885 33.5776C62.5773 34.2787 64.4603 34.3714 66.2133 33.8399C67.9662 33.3083 69.4806 32.1853 70.4984 30.6624C71.5162 29.1394 71.9745 27.3106 71.7951 25.4876C71.6157 23.6647 70.8097 21.9603 69.5145 20.6649C68.7812 19.9275 67.9088 19.3428 66.948 18.9447C65.9871 18.5465 64.9569 18.3429 63.9169 18.3456ZM67.3934 29.7401C66.7057 30.4279 65.8295 30.8963 64.8756 31.0861C63.9217 31.2758 62.9329 31.1785 62.0344 30.8063C61.1358 30.4341 60.3678 29.8038 59.8274 28.9951C59.287 28.1864 58.9986 27.2357 58.9986 26.2631C58.9986 25.2905 59.287 24.3397 59.8274 23.531C60.3678 22.7224 61.1358 22.0921 62.0344 21.7199C62.9329 21.3477 63.9217 21.2504 64.8756 21.4401C65.8295 21.6299 66.7057 22.0983 67.3934 22.786C67.8538 23.2405 68.2193 23.7819 68.4688 24.3788C68.7183 24.9757 68.8468 25.6162 68.8468 26.2631C68.8468 26.91 68.7183 27.5505 68.4688 28.1474C68.2193 28.7443 67.8538 29.2857 67.3934 29.7401Z"
                fill="#DA291C"
              />
              <path
                d="M17.9832 74.6883L23.0936 69.5785C23.2329 69.4392 23.3433 69.2738 23.4187 69.0919C23.4941 68.9099 23.5329 68.7149 23.5329 68.5179C23.5329 68.321 23.4941 68.1259 23.4187 67.9439C23.3433 67.762 23.2329 67.5966 23.0936 67.4574C22.9543 67.3181 22.789 67.2076 22.607 67.1322C22.425 67.0569 22.23 67.0181 22.0331 67.0181C21.8361 67.0181 21.6411 67.0569 21.4591 67.1322C21.2771 67.2076 21.1118 67.3181 20.9725 67.4574L15.8621 72.5672C15.7229 72.7065 15.6124 72.8718 15.537 73.0538C15.4616 73.2358 15.4229 73.4308 15.4229 73.6278C15.4229 73.8247 15.4616 74.0198 15.537 74.2017C15.6124 74.3837 15.7229 74.5491 15.8621 74.6883C16.0014 74.8276 16.1668 74.9381 16.3487 75.0134C16.5307 75.0888 16.7257 75.1276 16.9227 75.1276C17.1197 75.1276 17.3147 75.0888 17.4967 75.0134C17.6786 74.9381 17.844 74.8276 17.9832 74.6883Z"
                fill="#DA291C"
              />
              <path
                d="M12.0594 76.3701L10.6004 77.8286C10.3212 78.1106 10.1651 78.4916 10.1663 78.8884C10.1674 79.2851 10.3256 79.6653 10.6064 79.9457C10.8871 80.226 11.2675 80.3838 11.6643 80.3843C12.061 80.3849 12.4418 80.2283 12.7234 79.9488L14.1804 78.4922C14.459 78.2104 14.6147 77.8297 14.6136 77.4335C14.6125 77.0372 14.4546 76.6574 14.1745 76.3772C13.8943 76.0969 13.5147 75.9388 13.1184 75.9375C12.7221 75.9362 12.3414 76.0917 12.0594 76.3701Z"
                fill="#DA291C"
              />
              <path
                d="M7.70199 80.7272L5.40414 83.0251C5.12286 83.3064 4.96484 83.6878 4.96484 84.0856C4.96484 84.4834 5.12286 84.8649 5.40413 85.1462C5.68541 85.4275 6.0669 85.5855 6.46468 85.5855C6.86246 85.5855 7.24395 85.4275 7.52523 85.1462L9.82308 82.8493C9.96242 82.71 10.073 82.5447 10.1484 82.3627C10.2238 82.1807 10.2627 81.9856 10.2627 81.7886C10.2628 81.5916 10.224 81.3965 10.1487 81.2145C10.0733 81.0325 9.96284 80.8671 9.82357 80.7277C9.6843 80.5884 9.51894 80.4778 9.33695 80.4024C9.15496 80.327 8.95989 80.2881 8.76288 80.2881C8.56587 80.288 8.37079 80.3268 8.18876 80.4021C8.00673 80.4775 7.84133 80.588 7.70199 80.7272Z"
                fill="#DA291C"
              />
              <path
                d="M6.55261 74.7103C6.69186 74.8496 6.85719 74.9601 7.03916 75.0355C7.22114 75.1109 7.41618 75.1497 7.61316 75.1497C7.81013 75.1497 8.00518 75.1109 8.18715 75.0355C8.36913 74.9601 8.53446 74.8496 8.67371 74.7103L18.6542 64.7298C18.9355 64.4485 19.0935 64.067 19.0935 63.6693C19.0935 63.2715 18.9354 62.89 18.6542 62.6087C18.3729 62.3274 17.9914 62.1694 17.5936 62.1694C17.1958 62.1694 16.8144 62.3275 16.5331 62.6087L6.55261 72.5892C6.41329 72.7284 6.30277 72.8938 6.22737 73.0758C6.15197 73.2577 6.11316 73.4528 6.11316 73.6497C6.11316 73.8467 6.15197 74.0418 6.22737 74.2237C6.30277 74.4057 6.41329 74.571 6.55261 74.7103Z"
                fill="#DA291C"
              />
              <path
                d="M6.74105 66.1396L13.7596 59.1206C13.8989 58.9813 14.0094 58.816 14.0847 58.634C14.1601 58.452 14.1989 58.257 14.1989 58.06C14.1989 57.8631 14.1601 57.668 14.0847 57.4861C14.0094 57.3041 13.8989 57.1387 13.7596 56.9995C13.6203 56.8602 13.455 56.7497 13.273 56.6744C13.0911 56.599 12.896 56.5602 12.6991 56.5602C12.5021 56.5602 12.3071 56.599 12.1251 56.6744C11.9431 56.7497 11.7778 56.8602 11.6385 56.9995L4.61996 64.0185C4.48024 64.1576 4.36934 64.323 4.2936 64.5051C4.21787 64.6872 4.17878 64.8824 4.17859 65.0796C4.1784 65.2768 4.2171 65.4722 4.29248 65.6544C4.36786 65.8366 4.47843 66.0022 4.61788 66.1416C4.75733 66.2811 4.92291 66.3917 5.10514 66.4671C5.28738 66.5424 5.48269 66.5811 5.6799 66.5809C5.87711 66.5807 6.07234 66.5417 6.25443 66.4659C6.43651 66.3902 6.60188 66.2793 6.74105 66.1396Z"
                fill="#DA291C"
              />
              <path
                d="M1.63949 66.9989L0.439291 68.1991C0.158017 68.4804 -9.37678e-07 68.8618 0 69.2596C9.37686e-07 69.6574 0.15802 70.0389 0.439296 70.3202C0.720571 70.6014 1.10206 70.7595 1.49984 70.7595C1.89763 70.7595 2.27912 70.6014 2.56039 70.3202L3.76058 69.12C3.9003 68.9808 4.0112 68.8154 4.08694 68.6333C4.16268 68.4513 4.20176 68.256 4.20195 68.0588C4.20215 67.8616 4.16344 67.6663 4.08807 67.4841C4.01269 67.3018 3.90211 67.1362 3.76266 66.9968C3.62321 66.8573 3.45763 66.7468 3.2754 66.6714C3.09316 66.596 2.89785 66.5573 2.70064 66.5575C2.50344 66.5577 2.3082 66.5968 2.12611 66.6725C1.94403 66.7482 1.77867 66.8592 1.63949 66.9989Z"
                fill="#DA291C"
              />
              <path
                d="M27.7733 71.8856C27.634 71.7463 27.4687 71.6358 27.2867 71.5604C27.1048 71.485 26.9097 71.4462 26.7127 71.4462C26.5158 71.4462 26.3207 71.485 26.1387 71.5604C25.9568 71.6358 25.7914 71.7463 25.6522 71.8856L16.4959 81.0424C16.3567 81.1816 16.2462 81.347 16.1708 81.5289C16.0954 81.7109 16.0566 81.9059 16.0566 82.1029C16.0566 82.2999 16.0954 82.4949 16.1708 82.6769C16.2462 82.8588 16.3567 83.0242 16.4959 83.1635C16.6352 83.3027 16.8005 83.4132 16.9825 83.4886C17.1645 83.564 17.3595 83.6028 17.5565 83.6028C17.7534 83.6028 17.9485 83.564 18.1305 83.4886C18.3124 83.4132 18.4778 83.3027 18.617 83.1635L27.7733 74.0067C27.9126 73.8675 28.0231 73.7021 28.0985 73.5202C28.1739 73.3382 28.2127 73.1431 28.2127 72.9462C28.2127 72.7492 28.1739 72.5541 28.0985 72.3722C28.0231 72.1902 27.9126 72.0249 27.7733 71.8856Z"
                fill="#DA291C"
              />
              <path
                d="M31.1424 76.4893L28.7909 78.8413C28.6511 78.9804 28.5402 79.1458 28.4645 79.3279C28.3888 79.51 28.3497 79.7052 28.3495 79.9024C28.3493 80.0996 28.388 80.2949 28.4634 80.4772C28.5388 80.6594 28.6493 80.825 28.7888 80.9644C28.9282 81.1039 29.0938 81.2145 29.276 81.2898C29.4583 81.3652 29.6536 81.4039 29.8508 81.4037C30.048 81.4035 30.2432 81.3645 30.4253 81.2887C30.6074 81.213 30.7728 81.1021 30.9119 80.9624L33.2635 78.6103C33.4032 78.4711 33.5141 78.3058 33.5899 78.1237C33.6656 77.9416 33.7047 77.7464 33.7049 77.5492C33.7051 77.3519 33.6664 77.1566 33.591 76.9744C33.5156 76.7922 33.405 76.6266 33.2656 76.4871C33.1261 76.3477 32.9606 76.2371 32.7783 76.1617C32.5961 76.0864 32.4008 76.0477 32.2036 76.0479C32.0064 76.048 31.8111 76.0871 31.629 76.1629C31.447 76.2386 31.2816 76.3496 31.1424 76.4893Z"
                fill="#DA291C"
              />
              <path
                d="M25.9383 81.6932L23.4647 84.1673C23.3254 84.3066 23.2149 84.4719 23.1396 84.6539C23.0642 84.8359 23.0254 85.0309 23.0254 85.2279C23.0254 85.4248 23.0642 85.6199 23.1396 85.8018C23.2149 85.9838 23.3254 86.1491 23.4647 86.2884C23.604 86.4277 23.7693 86.5382 23.9513 86.6135C24.1332 86.6889 24.3283 86.7277 24.5252 86.7277C24.7222 86.7277 24.9172 86.6889 25.0992 86.6135C25.2812 86.5382 25.4465 86.4277 25.5858 86.2884L28.0594 83.8143C28.1987 83.675 28.3092 83.5097 28.3845 83.3277C28.4599 83.1457 28.4987 82.9507 28.4987 82.7538C28.4987 82.5568 28.4599 82.3618 28.3845 82.1798C28.3092 81.9978 28.1987 81.8325 28.0594 81.6932C27.9201 81.5539 27.7548 81.4435 27.5728 81.3681C27.3909 81.2927 27.1958 81.2539 26.9989 81.2539C26.8019 81.2539 26.6069 81.2927 26.4249 81.3681C26.2429 81.4434 26.0776 81.5539 25.9383 81.6932Z"
                fill="#DA291C"
              />
            </svg>
          </div>
          <p className="py-3 text-lg font-bold">
            42 años trabajando por la educación
          </p>
          <p className="text-sm">
            Sistema de aprendizaje LEGO Practico, intuitivo, inclusivo, lúdico y
            adaptable preparando al estudiante con habilidades y conocimientos
            STEAM
          </p>
        </div>
      </div>
      <div className="w-11/12 md:w-6/12 flex justify-between mt-10 sm:mt-0">
        <div className="text-center">
          <CountUp
            className="text-2xl md:text-5xl font-bold"
            suffix="+"
            end={40}
            duration={5}
          />
          <p className="text-xs px-2">Años de experiencia</p>
        </div>
        <div className="text-center">
          <CountUp
            className="text-2xl md:text-5xl font-bold"
            end={66}
            separator=","
            duration={5}
          />
          <p className="text-xs px-2">Paises alcanzados</p>
        </div>
        <div className="text-center">
          <CountUp
            className="text-2xl md:text-5xl font-bold"
            end={60}
            duration={5}
            suffix="+"
          />
          <p className="text-xs px-2">Millones de usuarios</p>
        </div>
        <div className="text-center">
          <CountUp
            className="text-2xl md:text-5xl font-bold"
            end={22}
            duration={5}
            suffix="+"
          />
          <p className="text-xs px-2">Soluciones creadas</p>
        </div>
      </div>
      <img
        className="absolute bottom-20 right-0"
        src="/img/robot2.png"
        width={100}
        height={100}
        alt="robot2"
      />
    </Slide>
  );
};

export default SectiontwoHome;
