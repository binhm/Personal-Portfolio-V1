import React from 'react'
import "./TimeLine.scss"

const TimeLine = ({ animate, children, className, lineColor }) => {
    const color = '#df79a0';

    return (
    <div className="timeline--wrapper">
      <div
        className={`${className} timeline`}
        // className={classNames(className, 'timeline', {
        //   'timeline--animate': animate,
        // })}
        style={{ color: `${color}` }}
      >
        {children}
      </div>
    </div>
  );
}
    


// Timeline.defaultProps = {
//     animate: true,
//     className: '',
//     lineColor: '#000',
//   };

export default TimeLine;