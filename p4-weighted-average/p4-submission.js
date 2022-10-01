// define function calculateWeightedAverage here to calcuate weighted average
var Assignments = 10;
var Projects = 35;
var Quiz = 10;
var MidTermEvaluation = 15;
var FinalExams = 30;

var assignmentWeight = 10;
var projectWeight = 35;
var quizWeight = 10;
var midTermWight = 15;
var finalExamWeight = 30;

var assignmentPercentScore = 0;
var projectPercentScore = 0;
var quizPercentScore = 0;
var midTermPercentScore = 0;
var finalExamPercentScore = null;


function calculateWeightedAverage(assignmentScore,projectScore,quizScore,midTermScore,finalExamScore){
    assignmentPercentScore = (assignmentWeight/100) * assignmentScore;
    projectPercentScore = (projectWeight/100) * projectScore;
    quizPercentScore = (quizWeight/100) * quizScore;
    midTermPercentScore = (midTermWight/100) * midTermScore;
    finalExamPercentScore = (finalExamWeight/100) * finalExamScore;
     var overallPercentage = assignmentPercentScore + projectPercentScore + quizPercentScore + midTermPercentScore + finalExamPercentScore;
     
    return overallPercentage;
}


//calling functions
      let averageWeight = calculateWeightedAverage(97, 82, 60, 75, 80)
     console.log('Weights      % Value of Score');
     console.log('Assignments     ' + parseInt(assignmentPercentScore));
     console.log('Projects        ' + projectPercentScore);
     console.log('Quizzes         ' + quizPercentScore);
     console.log('Mid Term        ' + midTermPercentScore);
     console.log('Final Exam      ' + finalExamPercentScore);

console.log(`The weighted average score is : ${averageWeight}`);
