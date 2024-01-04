import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import checked from "../../../../Assets/Images/checked.png"

export default function CreatePassword() {

  const [selectedValue, setSelectedValue] = useState(9);
  const [createPassword, setCreatePassword] = useState("");
  const [complexity, setComplexity] = useState("")
  const [isCopied, setIsCopied] = useState(true)

  const GenerateOption = () => {
    return Array.from({ length: 47 }, (_, index) => (
      <option key={index + 4} value={index + 4}>
        {index + 4}
      </option>
    ));
  }
  const handleChange = (event) => {
    setSelectedValue(parseInt(event.target.value, 10))
  }

  //  Create a Easy Password 
  const handleGenPasswordEasy = () => {
    const smallAbc = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseAbc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const FinalCharacters = smallAbc + upperCaseAbc + number;

    var length = selectedValue;
    let password = "";

    for (var i = 0, n = FinalCharacters.length; i < length; ++i) {
      password += FinalCharacters.charAt(Math.floor(Math.random() * n));
    }
    console.log("password", password);
    setCreatePassword(password)
    return password;
  }

  //  Create a Moderate  Password 
  const handleGenPasswordModerate = () => {
    const smallAbc = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseAbc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const specialCharacter = "!@#%&"
    const FinalCharacters = smallAbc + upperCaseAbc + number + specialCharacter;
    var length = selectedValue;
    let password = "";

    for (var i = 0, n = FinalCharacters.length; i < length; ++i) {
      password += FinalCharacters.charAt(Math.floor(Math.random() * n));
    }
    console.log("password", password);
    setCreatePassword(password)
    return password;
  }

  //  Create a Tough  Password 
  const handleGenPasswordTough = () => {
    const smallAbc = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseAbc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const specialCharacter = "@#$%&*()^/"
    const FinalCharacters = smallAbc + upperCaseAbc + number + specialCharacter;
    var length = selectedValue;
    let password = "";

    for (var i = 0, n = FinalCharacters.length; i < length; ++i) {
      password += FinalCharacters.charAt(Math.floor(Math.random() * n));
    }
    console.log("password", password);
    setCreatePassword(password)
    return password;
  }

  // select a value in complexity dropdown (Easy , Moderate , Tough) 
  const handleSelectedComplexity = (event) => {
    setComplexity(event.target.value)

  }

  // All Function call in Function 

  const handleGeneratePassword = () => {
    if (complexity === 0) {
      handleGenPasswordEasy()
    } else if (complexity === 1) {
      handleGenPasswordModerate()
    } else {
      handleGenPasswordTough()
    }
  }
  // input Copy Function
  const handleCopyRight = () => {
    const inputField = document.getElementById("passwordInput");
    inputField.select();
    document.execCommand('copy');
    setIsCopied(false)

    setTimeout(() => {
      setIsCopied(true)
      console.log(isCopied, "setTimeout condition");
    }, 2000)
    console.log(isCopied, " after setTimeout condition");

  }

  return (
    <>
      <div className="container">
        <div class="row">
          <h3 className='mt-5 pt-5'>Password Generator</h3>
          <Card body>
            <div class="mb-3 mt-4">
              <label class="form-label fw-semibold">Generate a Password</label>
              <input type="text" class="form-control" id="passwordInput" placeholder='J-9!' value={createPassword} />
            </div>
            <div className="row mt-4 mb-4">
              <div class="col-md-6">
                <label class="form-label fw-semibold">Complexity</label>
                <select class="form-select" aria-label="Default select example" value={complexity} onChange={handleSelectedComplexity} >
                  <option value="0">Easy</option>
                  <option value="1">Moderate</option>
                  <option value="2">Tough</option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label fw-semibold">Length</label>
                <select class="form-select" aria-label="Default select example" value={selectedValue} onChange={handleChange}>
                  {GenerateOption()}
                </select>
              </div>
              <div className='mt-5 text-end'>
                <button type="button" class="btn fw-semibold me-4 px-4" style={{ backgroundColor: "#FFE3E3", color: "#F15642" }} onClick={handleGeneratePassword}>Generate</button>
                <button type="button" style={{ width: "15%" }} class="btn btn-success px-4" onClick={handleCopyRight}>{isCopied ? "Copy to Clipboard" : <img src={checked} alt='checked logo not found'></img>}</button>
              </div>
            </div>
          </Card>
          <div class="accordion mt-5 pt-5 px-0" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  About Password Generator Tools
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong> A password generator is a tool that creates a password for you. It's a useful tool if you want to create a strong, unique password for a new account but don't want to come up with one yourself. </strong>

                  To use a password generator, you usually need to specify some parameters, such as the length of the password and whether you want it to include letters, numbers, and/or special characters. The generator will then create a password that meets your specifications.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Features of Password Generator Tool
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>Here are some key features and considerations regarding passord generator tools:</strong>
                  <ol className='mt-3'>
                    <li className='pb-3'><strong>Randomness:</strong> A good password generator should produce random and unpredictable passwords. This randomness makes it challenging for attackers to guess passwords.</li>
                    <li className='pb-3'><strong>Password Strength:</strong> Password generators create strong passwords that typically include a mix of uppercase and lowercase letters, numbers, and special characters. This combination improves the complexity and strength of the password.
                    </li>
                    <li className='pb-3'><strong>Customization:</strong> Many password generators allow users to customize the length and composition of the generated passwords. Users may choose to include or exclude specific characters or set a preferred length based on the requirements of the systems or websites they are creating passwords for.
                    </li>
                    <li className='pb-3'><strong>Security:</strong> It's important to use a trustworthy and secure password generator tool to ensure that the generated passwords are not compromised
                    </li>
                    <li className='pb-3'><strong>Offline vs. Online Generators:</strong> Some password generators are available as offline applications, while others are web-based. Offline generators may be preferable for users concerned about the security of their data, as they don't rely on an internet connection. However, reputable online generators can also provide a high level of security.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed fw-semibold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Usage Tips:
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li className='pb-3'><strong>Do not reuse password:</strong>It's crucial to use unique passwords for different accounts to prevent a security breach on one platform from affecting others.</li>
                    <li className='pb-3'><strong>Regular update password: </strong>Regularly update passwords: Periodically changing passwords adds an extra layer of security..</li>
                    <li className='pb-3'><strong>Avoid easily guessable information:</strong>Avoid easily guessable information: Do not use easily guessable information, such as birthdays or common words, in your passwords.</li>
                  </ul>
                  <div>
                    It's important to use a strong, unique password for each of your online accounts to protect your personal information and prevent unauthorized access. A password generator can help you create strong passwords easily and quickly.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
