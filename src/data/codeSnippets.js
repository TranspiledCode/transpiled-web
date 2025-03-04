const codeSnippets = [
  // Golang Example: Function to reverse a string
  `package main
  
    import (
      "fmt"
    )
  
    func reverse(s string) string {
      runes := []rune(s)
      for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
      }
      return string(runes)
    }
  
    func main() {
      fmt.Println(reverse("hello"))
    }`,

  // JavaScript Example: ES6 Arrow Function and Promises
  `const fetchData = async (url) => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData("https://api.example.com/data");`,

  // React Example: Functional Component with State Hook
  `import React, { useState } from 'react';
  
    const Counter = () => {
      const [count, setCount] = useState(0);
      
      return (
        <div>
          <p>Current Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };
  
    export default Counter;`,

  // CSS Example: Button with hover effect
  `.button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .button:hover {
      background-color: #0056b3;
    }`,
];

export default codeSnippets;
