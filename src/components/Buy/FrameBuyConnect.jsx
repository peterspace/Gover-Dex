// import { useState, useEffect, useRef } from 'react';

//======================================={OLD BLOCK ENDS}===============================================
//======================================={OLD BLOCK ENDS}===============================================
//======================================={OLD BLOCK ENDS}===============================================
// OnRamper


const FrameBuyConnect = () => {

//   const onRamperAPI_Key =
// 'pk_test_miOd0G5h_VAfO1tKbq6m1PrKyQQK1gNHU2R41GpwAj00';

// console.log(onRamperAPI_Key)

const color = {
original: '266677',
primary: '130D1A',
container:'191225',
secondary: 'DCA4FD',
primaryText: 'FFFFFF',
secondaryText: '9D9DA3',
infoText: 'B27CFF',
};


console.log(color)
  return (
    <div className="flex flex-col justify-center items-center gap-2 mb-8">
      <div className="border border-secondaryFillLight bg-primaryFill shadow-lg mb-8">
        {/* Title:Select a Token */}
        <div>
          <iframe
            // src="https://buy.onramper.com/?themeName=dark&containerColor=141416&primaryColor=46de8c&secondaryColor=3f3f43&cardColor=272727&primaryTextColor=ffffff&secondaryTextColor=ffffff&borderRadius=0.5&wgBorderRadius=1"
            src={`https://buy.onramper.com/?themeName=dark&containerColor=${color.container}&primaryColor=46de8c&secondaryColor=${color.primaryFill}&cardColor=${color.primary}&primaryTextColor=ffffff&secondaryTextColor=ffffff&borderRadius=0.5&wgBorderRadius=1`}
            title="Onramper Widget"
            height="630px"
            width="420px"
            allow="accelerometer; autoplay; camera; gyroscope; payment"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameBuyConnect;
