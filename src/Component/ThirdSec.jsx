import React from 'react'
import Button from './Button'
import Container from './Container'

const ThirdSec = () => {
  return (
    <>
<Container>
        <div className='grid grid-cols-2 '>
        {/* left side */}
        <div>
            <Button name="Our Promise" className="bg-[#dcfbfd] rounded text-lg text-[#0CBBC7]"/>
        <h3 className=''>Tool built for people.</h3>
        <p>Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom. 
            <br/> <br/>
            Circle has 100+ integrations with tools you already use and love.</p>
        </div>

        {/* right side */}

    </div>
</Container>
    </>
  )
}

export default ThirdSec