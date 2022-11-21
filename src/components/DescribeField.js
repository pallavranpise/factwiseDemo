import React from 'react'


export default function DescribeField({children,title}) {
  const hovergrey = {display:'flex',flexDirection:'column'}
  return (
    <div style={hovergrey}  >
      <span className="describeFirst grayout">{title}</span> <span  style={{margin:'10px',lineHeight:'1.4rem'}}>{children}</span>
    </div>
  );
}
