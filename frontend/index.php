  <!doctype html >
  <html>
      <head>
        <title>Gee that's aMAZEing Rick!</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>

      <body>
        <div id="header">
          <p>The <span style="color: #2F4F4F">Rick and Morty</span> <span style="font-weight:bold">MAZE</span> game!</p>
        </div>

        <div id="imatges">
          <div id="right"><img src="pictures/morty.png" alt="Morty indefenso retrasado" height="42" width="42"></div>
        </div>

        <div id="middle">
            <form action="process.php" method="post">
              <div class="question">
                  <p>Which of these words describes you the best?</p>
                  <select name="question1">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="jealous">Jealous</option>
                    <option value="insecure">Insecure</option>
                    <option value="awkward">Awkward</option>
                    <option value="nihilistic">Nihilistic</option>
                    <option value="gross">Gross</option>
                    <option value="evil">Evil</option>
                  </select>
              </div>

              <div class="question">
                  <p>Choose some food you want to eat:</p>
                  <select name="question2">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="pizza">Pizza</option>
                    <option value="breakfast-cereal">Breakfast cereal</option>
                    <option value="eggs">Eggs</option>
                    <option value="szechuan">Szechuan sauce</option>
                    <option value="sausage">A fatass sausage</option>
                  </select>
              </div>

              <div class="question">
                  <p>Choose a level of intelligence:</p>
                  <select name="question3">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="einstein">Einstein</option>
                    <option value="normalbrain">Normal Brain</option>
                    <option value="slightlyoffmentally">Slightly off mentally</option>
                    <option value="moron">Moron</option>
                  </select>
              </div>

              <div class="question">
                  <p>How do you respond under pressure?</p>
                  <select name="question4">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="well">I do pretty well</option>
                    <option value="cringe">Pressure makes me cringe</option>
                    <option value="curl">I curl up and die</option>
                  </select>
              </div>

              <div class="question">
                  <p>What do you believe in?</p>
                  <select name="question5">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="god">God</option>
                    <option value="love">Love</option>
                    <option value="humanity">Humanity</option>
                    <option value="nothing">Nothing</option>
                  </select>
              </div>

              <div class="question">
                  <p>What word do you use for "good"?</p>
                  <select name="question6">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="gee">Gee</option>
                    <option value="awesome">Awesome</option>
                    <option value="snorf">Snorf</option>
                    <option value="bad">Bad</option>
                  </select>
              </div>

              <div class="question">
                  <p>Were you popular in high school?</p>
                  <select name="question7">
                    <option disabled selected value> -- select an option -- </option>
                    <option value="yes">Yawesomees</option>
                    <option value="no">No</option>
                    <option value="tried">No, but i tried to be</option>
                  </select>
              </div>
              <input type="submit" value="Let's play!" name="submit">
            </form>
        </div>


      </body>
  </html>
