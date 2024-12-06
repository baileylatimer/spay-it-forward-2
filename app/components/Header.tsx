export default function Header() {
  return (
    <header className="flex justify-center items-center py-4 md:py-8">
      <svg className="w-[100px] md:w-[126px]" viewBox="0 0 126 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.35791 29.3703L0.833263 22.8585L1.23446 22.766C1.94428 24.8954 3.57994 28.7531 7.03644 28.784C9.01158 28.784 10.1843 27.6112 10.2152 26.1299C10.2152 24.6177 9.22761 23.7227 6.75869 22.8585L4.90699 22.1179C2.43807 21.192 0.956709 19.8032 0.987571 17.4578C1.04929 14.9271 3.42564 13.0446 6.45007 13.0754C9.3202 13.1063 10.5855 14.9271 11.2028 12.8903L11.6348 12.8594L12.036 18.9083L11.604 18.97C10.9867 16.8405 9.07331 13.5692 6.38835 13.5383C4.6601 13.5075 3.57994 14.6802 3.57994 16.069C3.57994 17.4578 4.62924 18.4145 6.82041 19.186L8.64124 19.9267C11.4496 20.976 12.8076 22.3339 12.7458 24.5251C12.6841 27.6112 9.93743 29.3086 7.19075 29.2778C3.98114 29.216 2.59237 27.4261 1.82083 29.3395L1.35791 29.3703ZM13.2336 35.1723V34.7711C14.4681 34.7711 15.3939 34.1847 15.3939 32.0553V16.7171C15.3939 15.2049 14.7767 14.7111 13.357 14.6802V14.279C14.9927 14.1556 16.8444 13.8161 18.4492 13.0754L18.727 13.2297V16.4393C19.2207 15.0506 20.9799 13.1063 23.6957 13.1063C27.3373 13.1063 29.9914 16.5936 29.9914 21.0686C29.9914 25.6669 26.8127 29.3086 22.7698 29.3086C20.9181 29.3086 19.6219 28.5062 18.727 27.4878V32.0553C18.727 34.1847 19.8071 34.7711 21.3193 34.7711V35.1723H13.2336ZM18.727 22.766C18.727 26.0681 20.1466 28.7222 22.5229 28.7222C24.8375 28.7222 26.5041 26.1299 26.5041 22.2105C26.5041 17.396 24.4363 14.8345 21.9674 14.8345C20.3318 14.8345 19.2207 15.9764 18.727 17.4269V22.766ZM43.7403 29.2469C41.9503 29.2469 41.0244 27.9816 40.7776 26.0373L40.685 25.3583C40.3146 27.3026 38.4629 29.3086 35.6237 29.3086C33.0004 29.3086 31.1796 27.6112 31.1796 25.3275C31.1796 23.2597 32.661 21.7784 35.4076 21.5315L40.0986 21.1612L39.8826 19.5872C39.5122 16.7788 38.2469 14.9271 35.9014 14.9271C34.0806 14.9271 32.7227 16.069 32.0437 17.7047L31.6425 17.6121C32.2289 15.4209 34.4509 13.0446 37.5988 13.0446C40.7158 13.0446 42.691 15.0814 43.1539 18.754L44.0489 25.5744C44.2341 26.9014 44.7587 27.3026 45.2833 27.3026C45.7154 27.3026 46.024 26.9323 46.1166 26.4076L46.4869 26.4385C46.4252 27.7655 45.4685 29.2469 43.7403 29.2469ZM34.2966 24.6485C34.2966 26.1299 35.3768 27.4878 37.2593 27.4878C39.2345 27.4878 40.4381 26.0681 40.5924 24.6485L40.1603 21.6241L37.1359 21.871C35.2533 22.0561 34.2966 23.1672 34.2966 24.6485ZM53.1668 35.4192C50.0189 35.4192 48.0438 33.6292 47.8277 31.7158C47.6426 30.6048 48.3215 29.8024 49.2165 29.7098C50.1732 29.6172 50.9139 30.2653 51.0373 31.1603C51.1608 31.901 50.7904 32.4256 50.9139 33.228C51.0991 34.3391 52.0866 34.9563 53.2594 34.9254C55.7592 34.8946 57.2405 32.6725 57.2405 27.6421V25.2349C56.685 26.9323 55.2037 28.9074 52.6421 28.9074C49.772 28.9074 47.6117 26.5928 47.6117 22.7351V16.7171C47.6117 15.2049 46.9945 14.7111 45.5748 14.6802V14.279C47.2105 14.1556 49.0622 13.8161 50.667 13.0754L50.9448 13.2297V22.3956C50.9448 25.1114 51.9632 26.994 54.1544 26.994C56.1604 26.994 57.0862 25.2349 57.2405 23.7535V16.7171C57.2405 15.2049 56.6233 14.7111 55.2037 14.6802V14.279C56.8702 14.1556 58.7219 13.8161 60.2958 13.0754L60.5736 13.2297V27.2718C60.5736 32.796 56.8702 35.4192 53.1668 35.4192ZM72.301 10.6991C71.0048 10.6991 70.1407 9.77323 70.1407 8.44618C70.1407 7.21172 71.0048 6.31674 72.301 6.31674C73.628 6.31674 74.4921 7.21172 74.4921 8.44618C74.4921 9.77323 73.628 10.6991 72.301 10.6991ZM68.7519 29V28.5988C69.9864 28.5988 70.9122 28.0124 70.9122 25.883V16.7171C70.9122 15.2049 70.295 14.7111 68.8753 14.6802V14.279C70.511 14.1556 72.3627 13.8161 73.9675 13.0754L74.2453 13.2297V25.883C74.2453 28.0124 75.1402 28.5988 76.4056 28.5988V29H68.7519ZM82.527 29.3086C79.5026 29.3086 78.0829 27.0557 78.0829 24.1547V14.5876H76.1387V14.1556C78.6076 13.9087 80.521 12.3347 81.0148 9.52634H81.4469V13.3532H86.0452L85.5206 14.5876H81.4469V23.8153C81.4469 25.883 82.3727 27.3643 83.9158 27.3643C85.2428 27.3643 86.0144 26.2842 86.2613 25.1423L86.6316 25.204C86.3538 27.4261 84.749 29.3086 82.527 29.3086Z" fill="black"/>
        <path d="M6.7411 63.2711C9.33347 63.1168 10.9691 60.4319 11.7715 56.4816L14.4874 43.0876H12.327L12.4196 42.6556C13.8393 42.5013 14.6725 42.0075 15.4441 40.2484C16.802 37.2239 19.5487 34.5698 22.7583 34.539C24.3013 34.5081 25.5975 35.0945 25.937 36.2364C26.3382 37.1314 25.937 38.335 24.7951 38.551C23.6841 38.767 22.604 38.0572 22.7583 36.5141C22.82 35.6809 23.0669 35.0945 22.2336 35.0945C20.6905 35.0945 18.9932 37.5943 18.2525 41.1742L18.0982 41.8532H22.0484L21.2769 43.0876H17.8513L15.3515 55.4323C14.2405 60.9565 10.5679 63.518 6.71024 63.6723L6.7411 63.2711ZM25.07 57.7778C21.2432 57.7778 18.7742 54.1669 19.8852 49.1982C21.0271 44.2912 25.1009 41.5137 28.7117 41.5137C32.415 41.5137 34.9457 45.0011 33.8038 49.9698C32.6928 54.9385 28.6499 57.7778 25.07 57.7778ZM23.3109 49.7846C22.3542 54.6916 23.3109 57.3457 25.4095 57.284C27.3229 57.2222 29.3289 54.383 30.3473 49.476C31.304 44.6307 30.5016 41.9458 28.403 42.0075C26.3662 42.0692 24.2676 45.0319 23.3109 49.7846ZM37.0457 45.8652C37.4469 44.0443 36.984 43.4888 35.6261 43.458V43.0568C37.4469 42.9333 39.0517 42.7173 40.9652 41.5137L41.2429 41.7297L40.6565 44.5073L39.1135 51.7906C40.8726 45.8652 42.6317 41.9458 45.008 41.5754C46.1808 41.3903 47.1683 42.1309 47.3226 43.1494C47.4461 44.1061 46.9523 45.2788 45.7487 45.4948C44.8228 45.6492 44.1439 45.0011 43.9279 44.4455C43.7427 44.0135 43.4649 43.7049 42.9094 44.0752C42.0144 44.5999 39.9159 49.1982 37.879 57.5H34.5151L37.0457 45.8652ZM50.2473 57.8086C47.8092 57.8086 46.8216 55.9569 47.6857 51.6363L48.8585 45.8343C49.198 44.0135 48.7042 43.7049 47.408 43.6123V43.2419C49.2288 43.0568 50.8645 42.5939 52.5619 41.5446L52.8088 41.7297L51.0497 50.9882C50.3707 54.6607 50.9571 55.8026 52.0989 55.8026C54.1667 55.8026 57.4071 50.7722 58.8885 42.6864L59.0428 41.8532H62.1598L60.6167 50.6179C60.0612 53.704 60.9254 55.8026 63.024 55.8026C65.2768 55.8026 68.0853 52.7473 68.8877 49.0131C69.5975 45.6492 68.579 44.0135 66.357 44.785C65.1225 45.1862 64.0424 44.4455 64.0732 43.2728C64.0424 42.2852 64.7213 41.5137 65.9558 41.5446C68.2087 41.5754 70.4925 43.8283 69.474 48.581C68.3939 53.7657 64.4744 57.8086 61.0179 57.8086C58.2404 57.8086 56.6047 55.71 57.3454 51.5437L57.8701 48.581C55.9875 54.2595 52.9939 57.8086 50.2473 57.8086ZM74.1455 57.8086C71.2445 57.8086 70.1334 54.4447 70.9358 50.6487C72.0469 45.464 76.028 41.6063 80.1943 41.6063C81.5522 41.6063 82.5089 42.1001 83.3422 42.8407L85.6877 41.2668L85.9963 41.5137L83.7434 51.8832C83.2188 54.3521 82.725 55.8026 83.4348 55.8335C84.0829 55.9261 85.2865 54.4138 86.1506 51.0499L86.4592 51.1425C85.2248 56.2964 83.0336 57.9629 81.3053 57.6543C79.5771 57.3148 79.7314 55.3706 80.4412 52.4078L80.9041 50.587C79.3611 54.2595 76.7378 57.8086 74.1455 57.8086ZM74.6084 48.8588C73.127 53.5806 74.0529 55.9569 75.6885 55.9569C77.6945 55.9569 80.7498 51.4203 81.6757 46.7602C82.2003 43.9209 81.6757 42.1309 80.1635 42.1309C78.4969 42.1309 76.028 44.3838 74.6084 48.8588ZM89.426 45.8652C89.8272 44.0443 89.3643 43.4888 88.0064 43.458V43.0568C89.8272 42.9333 91.432 42.7173 93.3455 41.5137L93.6232 41.7297L93.0368 44.5073L91.4938 51.7906C93.2529 45.8652 95.012 41.9458 97.3883 41.5754C98.5611 41.3903 99.5486 42.1309 99.7029 43.1494C99.8264 44.1061 99.3326 45.2788 98.129 45.4948C97.2032 45.6492 96.5242 45.0011 96.3082 44.4455C96.123 44.0135 95.8452 43.7049 95.2897 44.0752C94.3948 44.5999 92.2962 49.1982 90.2593 57.5H86.8954L89.426 45.8652ZM101.21 57.8086C98.3086 57.8086 97.1976 54.4447 98 50.6487C99.111 45.464 103.092 41.6063 107.258 41.6063C108.308 41.6063 109.172 42.0075 109.727 42.5013L110.468 38.7053C110.838 36.8845 110.376 36.329 109.048 36.2981V35.8969C110.838 35.7734 112.443 35.5266 114.357 34.3229L114.634 34.539L114.048 37.3165L110.962 51.8832C110.437 54.3213 109.974 55.7718 110.684 55.8335C111.332 55.9261 112.505 54.4138 113.4 51.0191L113.678 51.1117C112.474 56.2964 110.283 57.9629 108.555 57.6234C106.826 57.3148 106.919 55.3706 107.567 52.377L107.999 50.5253C106.487 54.2287 103.833 57.8086 101.21 57.8086ZM101.611 48.8588C100.129 53.5806 101.086 55.9569 102.753 55.9569C104.728 55.9569 107.629 51.7906 108.616 46.8528C109.172 43.9518 108.709 42.1309 107.197 42.1309C105.499 42.1309 103.061 44.3838 101.611 48.8588Z" fill="black"/>
      </svg>
    </header>
  );
}
