import React, { useState } from "react";
import Button from "./Button.js";
import './Calculator.css';

const Calculator = () => {
  const [text1, setText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [imageUrl] = useState("https://petite-maroon-jbam7x7wdn-s99tby6fe8.edgeone.dev/WhatsApp%20Image%202025-04-08%20at%2011.41.32_3ea36035.jpg");
  
  const ClickHandle = (e) => {
    const value = e.target.value;
    
    switch(value) {
      case "C":
        setText("");
        setShowImage(false);
        break;
      case "CE":
        setText("");
        break;
      case "=":
        try {
        
          const result = eval(text1);
          setText(result.toString());
        } catch (error) {
          setText("Error");
        }
        break;
      case "show me":
        // Toggle image visibility
        setShowImage(!showImage);
        break;
      case "square":
        // Calculate square of the current number
        try {
          const num = parseFloat(text1);
          if (!isNaN(num)) {
            const squareResult = num * num;
            setText(squareResult.toString());
          } else {
            setText("Invalid Input");
          }
        } catch (error) {
          setText("Error");
        }
        break;
      default:
        // For numbers and operators, append to current text
        setText(text1 + value);
    }
  };

  return (
    <div className="Calculator">
      <div className="screen-row">
        <input 
          type="text" 
          readOnly 
          value={text1} 
          placeholder="Enter calculation..."
        />
      </div>
      
      {/* Task 2: Image display when "show me" button is clicked */}
      {showImage && (
        <div className="image-container">
          <img 
            src={imageUrl} 
            alt="Your Picture" 
            className="user-image" 
          />
          <p className="image-caption">Your Picture Displayed!</p>
        </div>
      )}

      <div className="button-container">
        {/* Row 1: Parentheses and Clear buttons */}
        <div className="button-row">
          <Button label="(" ClickHandle={ClickHandle} />
          <Button label="CE" ClickHandle={ClickHandle} />
          <Button label=")" ClickHandle={ClickHandle} />
          <Button label="C" ClickHandle={ClickHandle} />
        </div>

        {/* Row 2: Numbers 1-3 and Addition */}
        <div className="button-row">
          <Button label="1" ClickHandle={ClickHandle} />
          <Button label="2" ClickHandle={ClickHandle} />
          <Button label="3" ClickHandle={ClickHandle} />
          <Button label="+" ClickHandle={ClickHandle} />
        </div>

        {/* Row 3: Numbers 4-6 and Subtraction */}
        <div className="button-row">
          <Button label="4" ClickHandle={ClickHandle} />
          <Button label="5" ClickHandle={ClickHandle} />
          <Button label="6" ClickHandle={ClickHandle} />
          <Button label="-" ClickHandle={ClickHandle} />
        </div>

        {/* Row 4: Numbers 7-9 and Multiplication */}
        <div className="button-row">
          <Button label="7" ClickHandle={ClickHandle} />
          <Button label="8" ClickHandle={ClickHandle} />
          <Button label="9" ClickHandle={ClickHandle} />
          <Button label="*" ClickHandle={ClickHandle} />
        </div>

        {/* Row 5: Decimal, Zero, Equals, and Division */}
        <div className="button-row">
          <Button label="." ClickHandle={ClickHandle} />
          <Button label="0" ClickHandle={ClickHandle} />
          <Button label="=" ClickHandle={ClickHandle} />
          <Button label="/" ClickHandle={ClickHandle} />
        </div>

      
        <div className="button-row special-buttons">
          {/* Task 2: "show me" button with red color */}
          <Button 
            label="show me" 
            ClickHandle={ClickHandle} 
            style={{
              backgroundColor: showImage ? "#ff4757" : "#ff6b6b",
              flex: "2",
              fontSize: "16px"
            }}
          />
          
          {/* Task 3: "square" button with green color */}
          <Button 
            label="square" 
            ClickHandle={ClickHandle} 
            style={{
              backgroundColor: "#4CAF50",
              flex: "2",
              fontSize: "16px"
            }}
          />
        </div>
      </div>
      
    </div>
  );
};

export default Calculator;