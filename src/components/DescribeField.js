import React from 'react'

export default function DescribeField({children,title}) {
  const hovergrey = {display:'flex',flexDirection:'column'}
  return (
    <div style={hovergrey} >
      <span style={{margin:'5px 10px',}} className="grayout">{title}</span> <span className='border' style={{margin:'10px',lineHeight:'1.4rem'}}>{children}</span>
    </div>
  );
}
