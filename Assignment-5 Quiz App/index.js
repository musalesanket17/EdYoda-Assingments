$(function () {
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function (res) {
      console.log(res);
      let quizData = res;
      let quizWrap = "";
      for (let i = 0; i < res.length; i++) {
        quizWrap += `<div class="Question-wrapper"> <h2 class="quiz-question"> Q${
          i + 1 + ". " + res[i].question
        }<h2>`;
        quizWrap += `<div class="options-wrapper">`;
        for (let j = 0; j < res[i].options.length; j++) {
          quizWrap += `<div class="option">
                      <label class="labels"><input type="radio" name="${res[i].id}"  value="${res[i].options[j]}">${res[i].options[j]}</label>
                  </div>`;
        }
        quizWrap += `</div></div>`;
      }
      let submitwrapper = $(
        `<input type="submit" id='form-submit'> <button type="reset" class="resetBtn" id="resetBtn">Submit</button>`
      );
  
      $("#quizApp div").html(quizWrap);
      $("#quizApp").append(submitwrapper);
      let scoreWrap = $(".score-div");
      let scorelabel = $("<div>");
      scorelabel.text("Score :");
      scorelabel.addClass("scorelabel");
  
      let score = $("<p>");
      score.text("O/5");
      score.addClass("marks");
  
      scoreWrap.append(scorelabel, score);
      $("#form-submit").click(function (e) {
        e.preventDefault();
        let finalScore = 0;
        let getAnswer = $("#quizApp div input[type=radio]:checked");
        console.log(getAnswer);
        if (quizData) {
          for (let i = 0; i < getAnswer.length; i++) {
            let options = quizData[getAnswer[i].name - 1]["options"];
            console.log(options);
            if (
              quizData[getAnswer[i].name - 1]["answer"] ==
              options.indexOf(getAnswer[i].value) + 1
            ) {
              finalScore++;
            }
          }
          score.text(`${finalScore + "/" + quizData.length}`);
          $("#resetBtn").click();
        }
      });
    });
  });
  