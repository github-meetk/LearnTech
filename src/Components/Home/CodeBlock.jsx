import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const CodeBlock = ({head, para, btn1, btn2, code, rev}) => {
    var r = rev ? "codeblock" : "codeblockreverse";
  return (
    <div className={`${r}`}>
        <div className='cbleft'>
            <div className='cbhead'>
                {head}
            </div>
            <div className='cbpara'> 
                {para}
            </div>
            <div className='cbbuttons'>
                <button className='yellowbutton'>
                    {btn1}
                </button>
                <button className='blackbutton'>
                    {btn2}
                </button>
            </div>
        </div>
        <div className='cbright'>
            <div className='cbno'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>
            <div className='typingblock'>
                <TypeAnimation
                    sequence={[code, 5000, ""]}
                    repeat={Infinity}
                    cursor={true}
                    omitDeletionAnimation={true}

                    style={{
                        whiteSpace: "pre-line",
                        display: "block",
                    }
                    }
                />
            </div>
        </div>
    </div>
  )
}

export default CodeBlock
