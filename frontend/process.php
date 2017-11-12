<?php
  echo "SSSSSSuuup Neil";
  echo "<br>";

  // Tipes Of Morty
  // $morty1 = hipster
  // $morty2 = geriatric
  // $morty3 = hobo
  // $morty4 = businessman
  // $morty5 = specs
  // $morty6 = hippie
  // $morty7 = mascot
  // $morty8 = guard
  // $morty9 = sausage
  // $morty10 = tired


  // Question 1
  switch ( $_POST['question1'] )
  {
      case 'jealous' :
          $morty7 =+ 1;
          break;
      case 'insecure' :
          $morty5 =+ 1;
          $morty10 =+ 10;
          break;
      case 'awkward' :
          $morty1 =+ 1;
          break;
      case 'nihilistic' :
          $morty3 =+ 1;
          $morty6 =+ 1;
          break;
      case 'gross' :
          $morty9 =+ 1;
          break;
      case 'evil' :
          $morty4 =+ 1;
          $morty8 =+ 1;
          break;
      default:
          break;
  }

  // Question 2
  switch ( $_POST['question2'] )
  {
      case 'pizza' :
          $morty7 =+ 1;
          $morty10 =+ 1;
          break;
      case 'breakfast-cereal' :
          $morty5 =+ 1;
          $morty8 =+ 1;
          break;
      case 'eggs' :
          $morty2 =+ 1;
          $morty4 =+ 1;
          break;
      case 'szechuan' :
          $morty1 =+ 1;
          $morty3 =+ 1;
          $morty6 =+ 1;
          break;
      case 'sausage' :
          $morty9 =+ 20;
          break;
      default:
          break;
  }

  // Question 3
  switch ( $_POST['question3'] )
  {
      case 'einstein' :
          $morty5 =+ 1;
          $morty4 =+ 1;
          break;
      case 'normalbrain' :
          $morty1 =+ 1;
          $morty3 =+ 1;
          $morty6 =+ 1;
          break;
      case 'slightlyoffmentally' :
          $morty2 =+ 1;
          $morty8 =+ 1;
          break;
      case 'moron' :
          $morty10 =+ 1;
          $morty9 =+ 1;
          $morty7 =+ 1;
          break;
      default:
          break;
  }

  // Question 4
  switch ( $_POST['question4'] )
  {
      case 'well' :
          $morty2 =+ 1;
          $morty3 =+ 1;
          $morty4 =+ 1;
          break;
      case 'cringe' :
          $morty1 =+ 1;
          $morty6 =+ 1;
          $morty7 =+ 1;
          $morty8 =+ 1;
          break;
      case 'curl' :
          $morty5 =+ 1;
          $morty9 =+ 1;
          $morty10 =+ 1;
          break;
      default:
          break;
  }

  // Question 5
  switch ( $_POST['question5'] )
  {
      case 'god' :
          $morty5 =+ 1;
          $morty10 =+ 1;
          break;
      case 'love' :
          $morty1 =+ 1;
          $morty6 =+ 1;
          break;
      case 'humanity' :
          $morty7 =+ 1;
          $morty9 =+ 1;
          break;
      case 'nothing' :
          $morty2 =+ 1;
          $morty3 =+ 1;
          $morty4 =+ 1;
          $morty8 =+ 1;
          break;
      default:
          break;
  }

  // Question 5
  switch ( $_POST['question6'] )
  {
      case 'gee' :
          $morty5 =+ 1;
          $morty7 =+ 1;
          $morty10 =+ 1;
          break;
      case 'awesome' :
          $morty1 =+ 1;
          $morty4 =+ 1;
          break;
      case 'snorf' :
          $morty6 =+ 1;
          $morty9 =+ 1;
          break;
      case 'bad' :
          $morty2 =+ 1;
          $morty3 =+ 1;
          $morty8 =+ 1;
          break;
      default:
          break;
  }

  // Question 7
  switch ( $_POST['question7'] )
  {
      case 'yes' :
          $morty1 =+ 1;
          $morty3 =+ 1;
          $morty4 =+ 1;
          break;
      case 'no' :
          $morty5 =+ 1;
          $morty7 =+ 1;
          $morty8 =+ 1;
          break;
      case 'tried' :
          $morty6 =+ 1;
          $morty2 =+ 1;
          $morty9 =+ 1;
          $morty10 =+ 1;
          break;
      default:
          break;
  }

  $maxim = max($morty1, $morty2, $morty3, $morty4, $morty5, $morty6, $morty7, $morty8, $morty9, $morty10);
  for ($i = 1; $i <= 10; $i++){
    if(${'morty'.$i} == $maxim) {
      $mortydefinitiu = $i;
    }
  }

  
?>
